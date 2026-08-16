# Documentation
- Class name: WanVideoAnimateEmbeds
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
- force_offload
    - The force_offload input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- frame_window_size
    - Number of frames to use for temporal attention window
    - Comfy dtype: INT
    - Python dtype: int
- colormatch
    - Color matching method to use between the windows
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pose_strength
    - Additional multiplier for the pose
    - Comfy dtype: FLOAT
    - Python dtype: float
- face_strength
    - Additional multiplier for the face
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- clip_embeds
    - Clip vision encoded image
    - Comfy dtype: WANVIDIMAGE_CLIPEMBEDS
    - Python dtype: object
- ref_images
    - Image to encode
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pose_images
    - end frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- face_images
    - end frame
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bg_images
    - background images
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - mask
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- start_ref_image
    - start ref image
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- tiled_vae
    - Use tiled VAE encoding for reduced memory use
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
