# Documentation
- Class name: VHS_SelectLatest
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Select Latest 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>Experimental virtual node to select the most recently modified file from a given folder</div></div><div style="font-size: 0.8em">Assists in the creation of workflows where outputs from one execution are used elsewhere in subsequent executions.</div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="filename_prefix" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">filename_prefix: A path which can consist of a combination of folders and a prefix which candidate files must match</div></div><div vhs_title="filename_postfix" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">filename_postfix: A string which chich the selected file must end with. Useful for limiting to a target extension.</div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="Filename" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Filename: A string representing a file path to the most recently modified file.</div></div></div></div></div>

# Input types
## Required
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_postfix
    - The filename_postfix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- Filename
    - The Filename output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
