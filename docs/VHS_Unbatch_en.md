# Documentation
- Class name: VHS_Unbatch
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Unbatch 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>Unbatch a list of items into a single concatenated item</div></div><div style="font-size: 0.8em">Useful for when you want a single video output from a complex workflow</div><div style="font-size: 0.8em">Has no relation to the Meta Batch system of VHS</div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="batched" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">batched: Any input which may or may not be batched</div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="unbatched" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">unbatched: A single output element. Torch tensors are concatenated across dim 0, all other types are added which functions as concatenation for strings and arrays, but may give undesired results for other types</div></div></div></div></div>

# Input types
## Required
- batched
    - The batched input is used by this node during execution.
    - Comfy dtype: *
    - Python dtype: object

# Output types
- unbatched
    - The unbatched output is produced by this node.
    - Comfy dtype: *
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
