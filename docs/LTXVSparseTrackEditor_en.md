# Documentation
- Class name: LTXVSparseTrackEditor
- Category: Lightricks/motion_tracking
- Output node: True
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Interactive spline editor for drawing sparse motion tracks on a reference image.

# Input types
## Required
- image
    - Reference image displayed as the editor canvas background.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- points_store
    - JSON array of spline control points managed by the editor widget.
    - Comfy dtype: STRING
    - Python dtype: str
- coordinates
    - JSON array of interpolated track coordinates produced by the editor.
    - Comfy dtype: STRING
    - Python dtype: str
- points_to_sample
    - Number of points sampled along each spline curve.
    - Comfy dtype: INT
    - Python dtype: int
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- tracks
    - The tracks output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
