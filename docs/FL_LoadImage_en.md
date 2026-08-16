# Documentation
- Class name: FL_LoadImage
- Category: 🏵️Fill Nodes/Image
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Loads, previews, and resizes an image from ComfyUI input.

# Input types
## Required
- root_directory
    - The root_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- selected_file
    - The selected_file input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- load_settings
    - The load_settings input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width_override
    - The width_override input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height_override
    - The height_override input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- file_path
    - The file_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
