# Documentation
- Class name: VHS_VHSAudioToAudio
- Category: Video Helper Suite 🎥🅥🅗🅢/audio
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Legacy VHS_AUDIO to Audio 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>utility function for compatibility with external nodes</div></div><div style="font-size: 0.8em">VHS used to use an internal VHS_AUDIO format for routing audio between inputs and outputs. This format was intended to only be used internally and was designed with a focus on performance over ease of use. Since ComfyUI now has an internal AUDIO format, VHS now uses this format. However, some custom node packs were made that are external to both ComfyUI and VHS that use VHS_AUDIO. This node was added so that those external nodes can still function</div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="vhs_audio" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">vhs_audio: An input in the legacy VHS_AUDIO format produced by an external node</div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="vhs_audio" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">vhs_audio: An output in the standardized AUDIO format</div></div></div></div></div>

# Input types
## Required
- vhs_audio
    - The vhs_audio input is used by this node during execution.
    - Comfy dtype: VHS_AUDIO
    - Python dtype: object

# Output types
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
