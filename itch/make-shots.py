"""Bildschirmfotos für itch.io mit headless Chrome über die lokale Vorschau (Port 8771):  python itch/make-shots.py"""
import subprocess, time
from pathlib import Path
ROOT = Path(__file__).resolve().parent.parent
CHROME = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
SHOTS = [("1-start", "", 1300, 1000), ("2-kontrolleur", "?start&n=1", 1300, 1000), ("3-licht", "?start&n=2&k=3", 1300, 1000),
         ("4-gericht", "?start&n=4&k=1", 1300, 1100), ("5-protokollbuch", "?start&n=12&w=0", 1300, 1200)]
for name, q, w, h in SHOTS:
    out = ROOT / "itch" / f"screenshot-{name}.png"
    if out.exists():
        out.unlink()
    p = subprocess.Popen([CHROME, "--headless=new", "--disable-gpu", "--hide-scrollbars", f"--window-size={w},{h}", f"--screenshot={out}",
                          "--virtual-time-budget=12000", "http://localhost:8771/itch/shot.html" + q], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    for _ in range(60):
        if p.poll() is not None or (out.exists() and out.stat().st_size > 0):
            break
        time.sleep(1)
    time.sleep(1.5)
    subprocess.run(["taskkill", "/PID", str(p.pid), "/T", "/F"], capture_output=True)
    print(out.name, out.stat().st_size // 1024 if out.exists() else "FEHLT", "KB")
