# Documentation
- Class name: VHS_LoadImagePath
- Category: Video Helper Suite 🎥🅥🅗🅢
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite

Load Image (Path) 🎥🅥🅗🅢<div style="font-size: 0.8em"><div id=VHS_shortdesc>Load a single image from a given path</div></div><div style="font-size: 0.8em"><div vhs_title="Inputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Inputs: <div vhs_title="vae" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">vae: (optional) If provided the node will output latents instead of images.</div></div></div></div><div vhs_title="Outputs" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Outputs: <div vhs_title="IMAGE" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">IMAGE: The loaded images</div></div><div vhs_title="MASK" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">MASK: The alpha channel of the loaded images.</div></div></div></div><div vhs_title="Widgets" style="display: flex; font-size: 0.8em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">Widgets: <div vhs_title="image" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">image: The image file to be loaded.<div style="font-size: 1em">This is a VHS_PATH input. When edited, it provides a list of possible valid files or directories</div><div style="font-size: 1em"><video preload="none" src=https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite/assets/4284322/729b7185-1fca-41d8-bc8d-a770bb2a5ce6 muted loop controls controlslist="nodownload noremoteplayback noplaybackrate" style="width: 0px; min-width: 100%" class="VHS_loopedvideo"></div><div style="font-size: 1em">The current top-most completion may be selected with Tab</div><div style="font-size: 1em">You can navigate up a directory by pressing Ctrl+B (or Ctrl+W if supported by browser)</div><div style="font-size: 1em">The filter on suggested file types can be disabled by pressing Ctrl+G.</div><div style="font-size: 1em">If converted to an input, this functions as a string</div></div></div><div vhs_title="force_size" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">force_size: Allows for conveniently scaling the input without requiring an additional node. Provides options to maintain aspect ratio or conveniently target common training formats for Animate Diff<div style="font-size: 1em"><div vhs_title="custom_width" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">custom_width: Allows for an arbitrary width to be entered, cropping to maintain aspect ratio if both are set</div></div><div vhs_title="custom_height" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">custom_height: Allows for an arbitrary height to be entered, cropping to maintain aspect ratio if both are set</div></div></div></div></div><div vhs_title="videopreview" style="display: flex; font-size: 1em" class="VHS_collapse"><div style="color: #AAA; height: 1.5em;">[<span style="font-family: monospace">-</span>]</div><div style="width: 100%">videopreview: Displays a preview for the selected video input. Will only be shown if Advanced Previews is enabled. This preview will reflect the image_load_cap, skip_first_images, and select_every_nth values chosen. Additional preview options can be accessed with right click.</div></div></div></div></div>

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_width
    - The custom_width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- custom_height
    - The custom_height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
## Hidden
- force_size
    - The force_size input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
