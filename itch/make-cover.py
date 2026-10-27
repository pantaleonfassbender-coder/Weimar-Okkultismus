"""itch/cover-630x500.png: Willy Schneider 1919 (Schrenck-Notzing, Phenomena of Materialisation 1920; gemeinfrei) neben dem Titel."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont, ImageFilter
ROOT = Path(__file__).resolve().parent.parent
W, H = 630, 500
im = Image.new("RGB", (W, H), (21, 17, 15))
glow = Image.new("RGB", (W, H), (0, 0, 0))
gd = ImageDraw.Draw(glow)
gd.ellipse((330, -260, 900, 240), fill=(120, 36, 26))
im = Image.blend(im, glow.filter(ImageFilter.GaussianBlur(90)), 0.55)
ph = Image.open(ROOT / "img" / "willy-1919-gesicht.jpg").convert("L").crop((14, 6, 850, 1530))
ph = ph.resize((int(ph.width * 470 / ph.height), 470), Image.LANCZOS)
ph = Image.merge("RGB", [ph.point(lambda v: min(255, int(v * 1.02))), ph, ph.point(lambda v: int(v * .9))])
d = ImageDraw.Draw(im)
d.rectangle((13, 13, 17 + ph.width, 17 + ph.height), fill=(239, 230, 211))
im.paste(ph, (15, 15))
serif = lambda s, i=False: ImageFont.truetype("C:/Windows/Fonts/" + ("georgiai.ttf" if i else "georgia.ttf"), s)
x = 15 + ph.width + 26
d.ellipse((x, 74, x + 12, 86), fill=(224, 82, 63))
d.text((x + 22, 70), "EIN SPIEL", font=serif(15), fill=(232, 160, 144))
d.text((x, 104), "Aber es", font=serif(46), fill=(243, 232, 214))
d.text((x, 156), "geschah", font=serif(46), fill=(243, 232, 214))
y = 232
for line in ["Ein Protokollant bei", "den Séancen der", "Weimarer Republik,", "1922–1933"]:
    d.text((x, y), line, font=serif(19, True), fill=(203, 188, 168)); y += 27
d.text((x, 420), "Frei · im Browser", font=serif(15), fill=(191, 178, 162))
d.text((x, 442), "Lesebuch 5 USD", font=serif(15), fill=(191, 178, 162))
im.save(ROOT / "itch" / "cover-630x500.png")
print("cover-630x500.png")
