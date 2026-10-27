"""Baut itch/aber-es-geschah-itch.zip (Browser-Spiel für itch.io) aus den Spieldateien:  python itch/build-itch.py"""
import re, zipfile
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "itch" / "aber-es-geschah-itch.zip"
SKIP_DIRS = {".git", "itch", ".claude"}
SKIP = {"_headers", "netlify.toml", ".gitignore", "README.md"}
with zipfile.ZipFile(OUT, "w", zipfile.ZIP_DEFLATED) as z:
    for f in sorted(ROOT.rglob("*")):
        rel = f.relative_to(ROOT)
        if f.is_file() and rel.parts[0] not in SKIP_DIRS and f.name not in SKIP:
            if f.suffix == ".html":  # auf itch selbst kein Link zurück auf itch
                t = re.sub(r'<span class="itchlink">.*?</span>', "", f.read_text(encoding="utf-8"), flags=re.S)
                z.writestr(rel.as_posix(), t)
            else:
                z.write(f, rel.as_posix())
print(OUT.name, OUT.stat().st_size // 1024, "KB")
