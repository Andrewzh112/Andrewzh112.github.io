#!/usr/bin/env python3
from __future__ import annotations

import argparse
import subprocess
import sys
from pathlib import Path


def repo_root() -> Path:
    # blog/scripts/ -> blog/ -> repo root
    return Path(__file__).resolve().parents[2]


def run(cmd: list[str], cwd: Path) -> None:
    printable = " ".join(cmd)
    print(f"$ {printable}")
    subprocess.check_call(cmd, cwd=str(cwd))


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Refresh results/run_data from W&B and sync it into blog/data/run_data."
    )
    parser.add_argument(
        "--skip-wandb",
        action="store_true",
        help="Skip downloading from W&B; only sync existing results/run_data into the blog.",
    )
    args = parser.parse_args()

    root = repo_root()
    python = sys.executable

    if not args.skip_wandb:
        run([python, str(root / "results" / "get_run_data.py")], cwd=root)

    run([python, str(root / "blog" / "scripts" / "sync_run_data.py")], cwd=root)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

