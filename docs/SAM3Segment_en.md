# Documentation
- Class name: SAM3Segment
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

SAM3 Segmentation (RMBG) is a ComfyUI node registered by `custom_nodes.comfyui-rmbg`. The live metadata did not provide a longer description.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- output_mode
    - The output_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- confidence_threshold
    - The confidence_threshold input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- max_segments
    - The max_segments input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- segment_pick
    - The segment_pick input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_blur
    - The mask_blur input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_offset
    - The mask_offset input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert_output
    - The invert_output input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- unload_model
    - The unload_model input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- background
    - The background input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_color
    - The background_color input is used by this node during execution.
    - Comfy dtype: COLORCODE
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_IMAGE
    - The MASK_IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
