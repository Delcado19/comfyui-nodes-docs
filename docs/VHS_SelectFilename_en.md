# Documentation
- Class name: VHS_SelectFilename
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

VAE Select Filename 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>Select a single filename from the VHS_FILENAMES output by a Video Combine and return it as a string</div></div><div style="font-size: 0.8em">Take care when combining this node with Prune Outputs. The VHS_FILENAMES object is immutable and will always contain the full list of output files, but execution order is undefined behavior (currently, Prune Outputs will generally execute first) and SelectFilename may return a path to a file that no longer exists.</div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="filenames" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">filenames: A VHS_FILENAMES from a Video Combine node</div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="filename" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">filename: A string representation of the full output path for the chosen file</div></div></div></div><div vhs_title="Widgets" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Widgets: <div vhs_title="index" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">index: The index of which file should be selected. The default, -1, chooses the most complete output</div></div></div></div></div>

# Input types
## Required
- filenames
    - The filenames input is used by this node during execution.
    - Comfy dtype: VHS_FILENAMES
    - Python dtype: object
- index
    - The index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

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
