#!/usr/bin/env python3
from __future__ import annotations

import argparse
import shutil
import zipfile
from pathlib import Path


def repo_root() -> Path:
    # blog/scripts/ -> blog/ -> repo root
    return Path(__file__).resolve().parents[2]

def _iter_files_recursive(root: Path) -> list[Path]:
    return sorted([p for p in root.rglob("*") if p.is_file()])


def _zip_run_logs_bundle(
    *,
    src_run_data: Path,
    src_mapping: Path,
    dst_zip: Path,
    archive_root: str = "logs",
) -> None:
    dst_zip.parent.mkdir(parents=True, exist_ok=True)
    tmp_zip = dst_zip.with_suffix(dst_zip.suffix + ".tmp")

    compression = zipfile.ZIP_DEFLATED if hasattr(zipfile, "ZIP_DEFLATED") else zipfile.ZIP_STORED
    with zipfile.ZipFile(tmp_zip, mode="w", compression=compression, compresslevel=6) as zf:
        for file_path in _iter_files_recursive(src_run_data):
            arcname = Path(archive_root) / "run_data" / file_path.relative_to(src_run_data)
            zf.write(file_path, arcname.as_posix())

        if src_mapping.exists() and src_mapping.is_file():
            arcname = Path(archive_root) / "run_mapping.json"
            zf.write(src_mapping, arcname.as_posix())

    tmp_zip.replace(dst_zip)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Copy results/run_data (and run_mapping.json) into blog/data so the blog can serve/plot it."
    )
    parser.add_argument(
        "--src-run-data",
        default=str(repo_root() / "results" / "run_data"),
        help="Source directory containing exported CSVs.",
    )
    parser.add_argument(
        "--dst-run-data",
        default=str(repo_root() / "blog" / "data" / "run_data"),
        help="Destination directory served by the blog.",
    )
    parser.add_argument(
        "--src-mapping",
        default=str(repo_root() / "results" / "run_mapping.json"),
        help="Source mapping JSON (optional).",
    )
    parser.add_argument(
        "--dst-mapping",
        default=str(repo_root() / "blog" / "data" / "run_mapping.json"),
        help="Destination mapping JSON path.",
    )
    parser.add_argument(
        "--skip-zip-logs",
        action="store_true",
        help="Skip creating blog/data/logs.zip bundle for download.",
    )
    parser.add_argument(
        "--dst-logs-zip",
        default=str(repo_root() / "blog" / "data" / "logs.zip"),
        help="Path to write the downloadable logs bundle zip.",
    )
    parser.add_argument(
        "--zip-archive-root",
        default="",
        help="Optional top-level folder name inside the zip (default: none).",
    )
    args = parser.parse_args()

    src_run_data = Path(args.src_run_data)
    dst_run_data = Path(args.dst_run_data)
    if not src_run_data.exists():
        raise FileNotFoundError(f"Missing source run_data directory: {src_run_data}")

    dst_run_data.parent.mkdir(parents=True, exist_ok=True)
    shutil.copytree(src_run_data, dst_run_data, dirs_exist_ok=True)

    src_mapping = Path(args.src_mapping)
    if src_mapping.exists():
        dst_mapping = Path(args.dst_mapping)
        dst_mapping.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(src_mapping, dst_mapping)

    if not args.skip_zip_logs:
        dst_mapping = Path(args.dst_mapping)
        dst_zip = Path(args.dst_logs_zip)
        _zip_run_logs_bundle(
            src_run_data=dst_run_data,
            src_mapping=dst_mapping,
            dst_zip=dst_zip,
            archive_root=args.zip_archive_root,
        )

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
