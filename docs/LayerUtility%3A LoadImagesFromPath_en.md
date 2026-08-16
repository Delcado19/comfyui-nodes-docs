# Documentation
- Class name: LayerUtility: LoadImagesFromPath
- Category: 😺dzNodes/LayerUtility/SystemIO
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

A set of nodes for ComfyUI it generate image like Adobe Photoshop's Layer Style. the Drop Shadow is first completed node, and follow-up work is in progress.

# Input types
## Required
- path
    - The path input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_load_cap
    - The image_load_cap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - The select_every_nth input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- file_name
    - The file_name output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_count
    - The frame_count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
