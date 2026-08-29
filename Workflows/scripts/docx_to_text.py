"""
docx_to_text.py — extract the text of a Word .docx into a plain-text file.

Why this exists
---------------
`.docx` session notes were RETIRED on 06/06/2026, but `Session 12 — Only the Relics Can End
Their Rule.docx` was generated before that and never got a markdown twin. The public site
(`ashfall-britannia/session.html`) reads markdown out of `01-Sessions/`, so Session 12 cannot
render on the site at all. The approved fix is to CONVERT that .docx — not to regenerate the
note from a transcript, which would create a second, divergent account of one session.

This script does the mechanical half: .docx -> text. A human still turns that text into the
markdown session note.

Usage
-----
    python Workflows/scripts/docx_to_text.py <input.docx> <output.txt>

Example
-------
    python Workflows/scripts/docx_to_text.py \
        "01-Sessions/Session 12 — Only the Relics Can End Their Rule.docx" \
        "_pipeline/s12_docx.txt"

Notes
-----
- Paragraph ends become newlines; table cells become ` | ` so tables stay readable.
- Formatting (bold, headings, styles) is NOT preserved — this is a text dump, not a converter.
- Stdlib only: no python-docx dependency.
"""

import html
import re
import sys
import zipfile
from pathlib import Path

DOC_XML = "word/document.xml"


def docx_to_text(src: Path) -> str:
    """Return the visible text of a .docx as a string.

    Raises FileNotFoundError, zipfile.BadZipFile, or KeyError with a clear message
    rather than failing silently — a half-extracted session note is worse than none.
    """
    if not src.is_file():
        raise FileNotFoundError(f"No such file: {src}")

    try:
        archive = zipfile.ZipFile(src)
    except zipfile.BadZipFile as exc:
        raise zipfile.BadZipFile(
            f"{src} is not a valid .docx (a .docx is a zip archive). "
            f"If this is a .doc, re-save it as .docx first."
        ) from exc

    with archive:
        if DOC_XML not in archive.namelist():
            raise KeyError(
                f"{src} has no {DOC_XML} — it is a zip, but not a Word document."
            )
        xml = archive.read(DOC_XML).decode("utf-8")

    # Turn structure into whitespace BEFORE stripping tags, or everything runs together.
    xml = xml.replace("</w:p>", "\n")      # paragraph end
    xml = xml.replace("</w:tc>", " | ")    # table cell end
    xml = xml.replace("</w:tr>", "\n")     # table row end

    text = html.unescape(re.sub(r"<[^>]+>", "", xml))
    text = re.sub(r"[ \t]+\n", "\n", text)      # trailing whitespace
    text = re.sub(r"\n{3,}", "\n\n", text)      # collapse blank-line runs
    return text.strip() + "\n"


def main(argv: list[str]) -> int:
    if len(argv) != 3:
        print(__doc__.strip())
        print("\nERROR: expected exactly 2 arguments (input.docx, output.txt).")
        return 2

    src, dst = Path(argv[1]), Path(argv[2])
    try:
        text = docx_to_text(src)
    except (FileNotFoundError, zipfile.BadZipFile, KeyError) as exc:
        print(f"ERROR: {exc}")
        return 1

    if not text.strip():
        print(f"ERROR: {src} extracted to an empty document — nothing written.")
        return 1

    dst.parent.mkdir(parents=True, exist_ok=True)
    dst.write_text(text, encoding="utf-8")
    print(f"OK: {src.name} -> {dst}  ({len(text):,} chars, {text.count(chr(10)):,} lines)")
    return 0


# ---------------------------------------------------------------------------
# Verification block. Run:  python Workflows/scripts/docx_to_text.py --selftest
# Builds a real .docx-shaped zip in a temp dir and checks the edge cases.
# ---------------------------------------------------------------------------
def _selftest() -> int:
    import tempfile

    failures = []

    def check(label, cond):
        print(f"  {'PASS' if cond else 'FAIL'}  {label}")
        if not cond:
            failures.append(label)

    with tempfile.TemporaryDirectory() as tmp:
        tmp = Path(tmp)

        # 1. happy path: paragraphs, a table, and an XML entity
        good = tmp / "good.docx"
        body = (
            "<w:document><w:body>"
            "<w:p><w:r><w:t>Hello &amp; welcome</w:t></w:r></w:p>"
            "<w:p><w:r><w:t>Second line</w:t></w:r></w:p>"
            "<w:tbl><w:tr><w:tc><w:p><w:r><w:t>A</w:t></w:r></w:p></w:tc>"
            "<w:tc><w:p><w:r><w:t>B</w:t></w:r></w:p></w:tc></w:tr></w:tbl>"
            "</w:body></w:document>"
        )
        with zipfile.ZipFile(good, "w") as z:
            z.writestr(DOC_XML, body)
        out = docx_to_text(good)
        check("paragraphs separated", "Hello & welcome" in out and "Second line" in out)
        check("entities unescaped", "&amp;" not in out)
        check("table cells piped", "A | B" in out.replace("\n", " ").replace("  ", " "))
        check("no residual tags", "<w:" not in out)

        # 2. missing file
        try:
            docx_to_text(tmp / "nope.docx")
            check("missing file raises", False)
        except FileNotFoundError:
            check("missing file raises", True)

        # 3. not a zip
        bad = tmp / "bad.docx"
        bad.write_text("this is plain text, not a zip", encoding="utf-8")
        try:
            docx_to_text(bad)
            check("non-zip raises", False)
        except zipfile.BadZipFile:
            check("non-zip raises", True)

        # 4. zip without word/document.xml
        wrong = tmp / "wrong.docx"
        with zipfile.ZipFile(wrong, "w") as z:
            z.writestr("hello.txt", "nope")
        try:
            docx_to_text(wrong)
            check("zip w/o document.xml raises", False)
        except KeyError:
            check("zip w/o document.xml raises", True)

        # 5. end-to-end main() writes a file
        dst = tmp / "nested" / "out.txt"
        rc = main(["docx_to_text.py", str(good), str(dst)])
        check("main() returns 0", rc == 0)
        check("output file written", dst.is_file() and dst.read_text(encoding="utf-8").strip() != "")

        # 6. wrong arg count
        check("bad arg count returns 2", main(["docx_to_text.py"]) == 2)

    print(f"\n{'ALL PASS' if not failures else 'FAILURES: ' + ', '.join(failures)}")
    return 0 if not failures else 1


if __name__ == "__main__":
    if len(sys.argv) == 2 and sys.argv[1] == "--selftest":
        sys.exit(_selftest())
    sys.exit(main(sys.argv))
