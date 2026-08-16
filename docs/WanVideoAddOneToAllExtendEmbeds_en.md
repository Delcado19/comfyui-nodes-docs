# Documentation
- Class name: WanVideoAddOneToAllExtendEmbeds
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- embeds
    - The embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- prev_latents
    - Previous latents to be used to continue generation
    - Comfy dtype: LATENT
    - Python dtype: dict
- window_size
    - Number of new frames to generate
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - Number of overlapping frames between previous and new frames
    - Comfy dtype: INT
    - Python dtype: int
- frames_processed
    - Number of frames already processed in the video
    - Comfy dtype: INT
    - Python dtype: int
- if_not_enough_frames
    - What to do if there are not enough frames in pose_images for the window
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- pose_images
    - Pose images for the entire video
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image_embeds
    - The image_embeds output is produced by this node.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- pose_slice
    - The pose_slice output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
