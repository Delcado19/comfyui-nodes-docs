# Documentation
- Class name: LTXVAddGuideAdvanced
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Adds a conditioning frame or a video at a specific frame index. This node is used to add a keyframe or a video segment which should appear in the generated video at a specified index. It resizes the image to the correct size and applies preprocessing to it.

# Input types
## Required
- positive
    - The positive input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- vae
    - The vae input is used by this node during execution.
    - Comfy dtype: VAE
    - Python dtype: object
- latent
    - The latent input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frame_idx
    - Frame index to start the conditioning at. For single-frame images or videos with 1-8 frames, any frame_idx value is acceptable. For videos with 9+ frames, frame_idx must be divisible by 8, otherwise it will be rounded down to the nearest multiple of 8. Negative values are counted from the end of the video.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - Strength of the conditioning. Higher values will make the conditioning more exact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crf
    - CRF value for the video. Higher values mean more motion, lower values mean higher quality.
    - Comfy dtype: INT
    - Python dtype: int
- blur_radius
    - Blur kernel radius size. Higher values mean more motion, lower values mean higher quality.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The interpolation input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crop
    - The crop input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent
    - The latent output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
