#!/usr/bin/env python3
"""
Claude Code statusline script.
Reads JSON input from stdin and displays the current output style.
"""

import sys
import json
import os


def main():
    data = {}
    try:
        raw = sys.stdin.read()
        if raw.strip():
            data = json.loads(raw)
    except Exception:
        pass

    # Try to get the output style name from the stdin JSON first
    output_style = None
    try:
        output_style = data.get("output_style", {}).get("name")
    except Exception:
        pass

    # Fall back to reading from settings files if not available via stdin
    if not output_style:
        script_dir = os.path.dirname(os.path.abspath(__file__))
        settings_files = [
            os.path.join(script_dir, "settings.local.json"),
            os.path.join(script_dir, "settings.json"),
        ]
        for settings_path in settings_files:
            try:
                with open(settings_path) as f:
                    settings = json.load(f)
                    output_style = settings.get("outputStyle")
                    if output_style:
                        break
            except Exception:
                continue

    if output_style:
        label = "\033[33mstyle:\033[0m"
        print(f"{label} {output_style}", end="")
    else:
        print("\033[33mstyle:\033[0m default", end="")


if __name__ == "__main__":
    main()
