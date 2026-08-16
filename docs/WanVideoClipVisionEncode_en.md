# Documentation
- Class name: WanVideoClipVisionEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- clip_vision
    - The clip_vision input is used by this node during execution.
    - Comfy dtype: CLIP_VISION
    - Python dtype: object
- image_1
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength_1
    - Additional clip embed multiplier
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_2
    - Additional clip embed multiplier
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Crop image to 224x224 before encoding
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- combine_embeds
    - Method to combine multiple clip embeds
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- negative_image
    - image to use for uncond
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tiles
    - Use matteo's tiled image encoding for improved accuracy
    - Comfy dtype: INT
    - Python dtype: int
- ratio
    - Ratio of the tile average
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
