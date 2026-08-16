# Documentation
- Class name: VRGDG_MakeLUT
- Category: VRGDG/IV Adjustments
- Output node: False
- Repo Ref: https://github.com/vrgamegirl19/comfyui-vrgamedevgirl

VRGDG_MakeLUT is a ComfyUI node registered by `custom_nodes.comfyui-vrgamedevgirl`. The live metadata did not provide a longer description.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- colors
    - The colors input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- name_suffix
    - The name_suffix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- lut_size
    - The lut_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- lut_name
    - The lut_name output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- lut_path
    - The lut_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/vrgamegirl19/comfyui-vrgamedevgirl)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
