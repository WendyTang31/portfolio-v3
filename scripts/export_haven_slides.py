"""Rasterize Haven Google Slides PDF export into named portfolio placeholders."""
from __future__ import annotations

import sys
from pathlib import Path

import pymupdf

PDF = Path(sys.argv[1]) if len(sys.argv) > 1 else Path.home() / "AppData/Local/Temp/haven-slides.pdf"
OUT = Path(sys.argv[2]) if len(sys.argv) > 2 else Path(__file__).resolve().parents[1] / "Public/projects/haven"

MAPPING = {
    1: "hero-haven.png",
    2: "01-context.png",
    3: "03-persona-michelle.png",
    6: "03-pain-points.png",
    7: "02-solution.png",
    8: "exploration-1.png",
    9: "exploration-2.png",
    10: "exploration-3.png",
    11: "exploration-4.png",
    12: "06-new-concept.png",
    14: "05-user-flow.png",
    15: "05-app.png",
    16: "06-product-family.png",
    17: "06-brand.png",
    18: "06-scenario.png",
}


def main() -> None:
    if not PDF.exists():
        raise SystemExit(f"Missing PDF: {PDF}")
    OUT.mkdir(parents=True, exist_ok=True)
    pdf = pymupdf.open(PDF)
    print(f"pages={pdf.page_count} pdf={PDF}")
    for i, page in enumerate(pdf, start=1):
        text = page.get_text("text")[:140].replace("\n", " | ")
        safe = text.encode("ascii", "replace").decode("ascii")
        print(f"{i:02d}: {safe}")
        if i not in MAPPING:
            continue
        pix = page.get_pixmap(matrix=pymupdf.Matrix(2, 2), alpha=False)
        dest = OUT / MAPPING[i]
        pix.save(str(dest))
        print(f"  saved {dest.name} {pix.width}x{pix.height} {dest.stat().st_size}b")

    # Embedded bitmaps from exploration / concept slides (if any)
    for i in (8, 9, 10, 11, 12, 15, 16, 17, 18):
        page = pdf[i - 1]
        for j, img in enumerate(page.get_images(full=True), start=1):
            xref = img[0]
            try:
                info = pdf.extract_image(xref)
            except Exception as exc:  # noqa: BLE001
                print(f"  embed fail s{i}-{j}: {exc}")
                continue
            data = info["image"]
            if len(data) < 15000:
                continue
            dest = OUT / f"embed-s{i:02d}-{j}.{info['ext']}"
            dest.write_bytes(data)
            print(f"  embed {dest.name} {len(data)}b {info.get('width')}x{info.get('height')}")

    print("done:", sorted(p.name for p in OUT.iterdir() if p.name != ".gitkeep"))


if __name__ == "__main__":
    main()
