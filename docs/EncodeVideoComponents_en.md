# Documentation
- Class name: EncodeVideoComponents
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Extracts video frames, resizes them, and encodes with a VAE directly, avoiding storing the full image tensor.

# Input types
## Required
- video
    - The video to extract and encode.
    - Comfy dtype: VIDEO
    - Python dtype: object
- vae
    - The VAE model to use for encoding.
    - Comfy dtype: VAE
    - Python dtype: object
- width
    - Target width for the frames before encoding. 0 = original width.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Target height for the frames before encoding. 0 = original height.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames
    - Maximum number of frames. 0 = no limit.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_method
    - Interpolation method for resizing.
    - Comfy dtype: COMBO
    - Python dtype: object
- keep_proportion
    - How to handle aspect ratio mismatch when resizing.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- audio
    - The audio output is produced by this node.
    - Comfy dtype: AUDIO
    - Python dtype: object
- fps
    - The fps output is produced by this node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame_count
    - Number pixel space frames after any possible cropping
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
