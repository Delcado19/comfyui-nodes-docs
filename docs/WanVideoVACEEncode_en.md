# Documentation
- Class name: WanVideoVACEEncode
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: WANVAE
    - Python dtype: object
- width
    - Width of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Height of the image to encode
    - Comfy dtype: INT
    - Python dtype: int
- num_frames
    - Number of frames to encode
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vace_start_percent
    - Start percent of the steps to apply VACE
    - Comfy dtype: FLOAT
    - Python dtype: float
- vace_end_percent
    - End percent of the steps to apply VACE
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- input_frames
    - The input_frames input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- ref_images
    - The ref_images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_masks
    - The input_masks input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- prev_vace_embeds
    - The prev_vace_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- vace_embeds
    - The vace_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
