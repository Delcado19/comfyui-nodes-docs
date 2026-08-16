# Documentation
- Class name: WanInfiniteTalkToVideo
- Category: model/conditioning/wan/infinite talk
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

WanInfiniteTalkToVideo is a ComfyUI node registered by `comfy_extras.nodes_wan`. The live metadata did not provide a longer description.

# Input types
## Required
- mode
    - The mode input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- model_patch
    - The model_patch input is used by this node during execution.
    - Comfy dtype: MODEL_PATCH
    - Python dtype: object
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
- width
    - The width input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- length
    - The length input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- audio_encoder_output_1
    - The audio_encoder_output_1 input is used by this node during execution.
    - Comfy dtype: AUDIO_ENCODER_OUTPUT
    - Python dtype: object
- motion_frame_count
    - Number of previous frames to use as motion context.
    - Comfy dtype: INT
    - Python dtype: int
- audio_scale
    - The audio_scale input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- clip_vision_output
    - The clip_vision_output input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- start_image
    - The start_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- previous_frames
    - The previous_frames input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
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
- trim_image
    - The trim_image output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
