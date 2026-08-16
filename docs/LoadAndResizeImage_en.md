# Documentation
- Class name: LoadAndResizeImage
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- resize
    - The resize input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- repeat
    - The repeat input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- keep_proportion
    - The keep_proportion input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- mask_channel
    - Channel to use for the mask output
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- background_color
    - Fills the alpha channel with the specified color.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The image output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
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
