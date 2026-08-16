# Documentation
- Class name: LoadImagesFromFolderKJ
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Loads images from a folder into a batch, images are resized and loaded into a batch.

# Input types
## Required
- folder
    - The folder input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- keep_aspect_ratio
    - The keep_aspect_ratio input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- image_load_cap
    - The image_load_cap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- include_subfolders
    - The include_subfolders input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- count
    - The count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- image_path
    - The image_path output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
