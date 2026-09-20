from pathlib import Path

try:
    from PIL import Image, ImageDraw, ImageFont
except ImportError:
    raise SystemExit('Pillow is required. Run: python -m pip install pillow')

root = Path(__file__).resolve().parent
asset_dir = root / 'src' / 'assets' / 'students'
asset_dir.mkdir(parents=True, exist_ok=True)

students = [
    ('shivam', 'Shivam', '#2563eb'),
    ('rahul', 'Rahul', '#0f766e'),
    ('shubham', 'Shubham', '#7c3aed'),
    ('ankit', 'Ankit', '#dc2626'),
]

for name, label, color in students:
    image = Image.new('RGB', (600, 450), color)
    draw = ImageDraw.Draw(image)
    draw.rounded_rectangle((30, 30, 570, 420), radius=26, fill=(255, 255, 255, 60))
    draw.ellipse((160, 100, 440, 390), fill=(255, 255, 255, 120))
    draw.rectangle((210, 220, 390, 360), fill=(255, 255, 255, 120))

    try:
        font = ImageFont.truetype('arial.ttf', 30)
    except Exception:
        font = ImageFont.load_default()

    bbox = draw.textbbox((0, 0), label, font=font)
    text_width = bbox[2] - bbox[0]
    x = (600 - text_width) / 2
    draw.text((x, 340), label, fill=(255, 255, 255, 255), font=font)

    file_path = asset_dir / f'{name}.jpg'
    image.save(file_path, format='JPEG', quality=92)
    print(f'Created {file_path}')

print('All student photos generated successfully.')
