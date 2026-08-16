# Documentation
- Class name: ImageResizeKJv2
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Resizes the image to the specified width and height.  
Size can be retrieved from the input.

Keep proportions keeps the aspect ratio of the image, by  
highest dimension.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_method
    - The upscale_method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- keep_proportion
    - The keep_proportion input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pad_color
    - Color to use for padding.
    - Comfy dtype: STRING
    - Python dtype: str
- crop_position
    - The crop_position input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Hidden
- unique_id
    - The unique_id input is used by this node during execution.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: object

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- width
    - The width output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- mask
    - The mask output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
