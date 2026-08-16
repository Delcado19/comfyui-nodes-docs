# Documentation
- Class name: WanVideoControlnet
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- controlnet
    - The controlnet input is used by this node during execution.
    - Comfy dtype: WANVIDEOCONTROLNET
    - Python dtype: object
- control_images
    - The control_images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - controlnet strength
    - Comfy dtype: FLOAT
    - Python dtype: float
- control_stride
    - controlnet stride
    - Comfy dtype: INT
    - Python dtype: int
- control_start_percent
    - Start percent of the steps to apply controlnet
    - Comfy dtype: FLOAT
    - Python dtype: float
- control_end_percent
    - End percent of the steps to apply controlnet
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
