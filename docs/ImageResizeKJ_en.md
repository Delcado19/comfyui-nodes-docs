# Documentation
- Class name: ImageResizeKJ
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

DEPRECATED!

Due to ComfyUI frontend changes, this node should no longer be used, please check the   
v2 of the node. This node is only kept to not completely break older workflows.

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
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- divisible_by
    - The divisible_by input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- get_image_size
    - The get_image_size input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- crop
    - 0 will do the default center crop, this is a workaround for the widget order changing with the new frontend, as in old workflows the value of this widget becomes 0 automatically
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

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

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
