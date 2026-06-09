# SESSION NOTES TEMPLATE — GENERATOR SCRIPT

> ⚠️ **RETIRED (Taylor, 06/06/2026).** Ashfall no longer generates `.docx` session notes. The canonical session-notes artifact is the markdown note at `01-Sessions/Session ## — Title.md` (written during Convo 2). This document is kept only for the historical record (sessions S01–S05 used `ashfall_v1.js`). Do not run the generator for new sessions.

The file `ashfall_v1.js` was the canonical template generator for Ashfall Britannia session notes — a re-themed clone of SITL's `sitl_v8.js`, using a gothic palette (ash, oxblood, ember, antique-gold, bone). It is a Node.js script using the `docx` npm library. When generating session notes as a `.docx` file (historical only), this script defines all styling — do not invent or approximate styles from memory.

**File location:** `Workflows/scripts/ashfall_v1.js`

**To use this script as the styling foundation (historical reference):**
1. Read `ashfall_v1.js` at the start of any (legacy) session-notes generation task — there is no condensed Ashfall skill, so read the full script.
2. Copy all constants, helper functions, and cell builders exactly as written — `C` (color palette), `F` (font/size constants), `sectionHeader()`, `subHeader()`, `creamBlock()`, `goldBodyPara()`, `thCell()`, `tdCell()`, `mlCell()`, `mvCell()`, `mkTable()`, `mkMetaTable()`, `sectionDivider()`, `body()`, `bullet()`, `sp()`
3. Build the session content using those exact functions — do not hardcode any colors, font names, or sizes inline
4. After generating the `.docx` with `Packer.toBuffer()`, always run the `fix_tbl_borders` post-processing step to strip invalid `w:left`/`w:right` from `<w:tblBorders>` blocks, then repack with `pack.py --original`
5. Validate with `validate.py` before delivering

**The fix_tbl_borders function (required post-processing):**
```python
import re

def fix_tbl_borders(xml):
    def replacer(m):
        block = m.group(0)
        block = re.sub(r'\s*<w:left[^/]*/>\s*', '\n          ', block)
        block = re.sub(r'\s*<w:right[^/]*/>\s*', '\n          ', block)
        return block
    return re.sub(r'<w:tblBorders>.*?</w:tblBorders>', replacer, xml, flags=re.DOTALL)
```

**Key design rules encoded in the script (do not override):**
- Section headers: blank spacer row between the filled text paragraph and the colored rule line — the rule lives on the spacer, not on the fill paragraph. Same applies to subheaders and cream blocks.
- POV journal body and quote body paragraphs: no fill, antique-gold left border 2.25pt (`size: 18`), per the Ashfall gothic palette — these sit *below* the cream block's rule line
- Quote "Repeat this block" paragraph: light fill + gold left border
- All table borders are white (`#FFFFFF`) — no visible grid lines
- No header or footer on any page
