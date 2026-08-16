# Documentation
- Class name: FL_WanFirstLastFrameToVideo
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/filliptm/ComfyUI_Fill-Nodes

Fill-Nodes is a versatile collection of custom nodes for ComfyUI that extends functionality across multiple domains. Features include advanced image processing (pixelation, slicing, masking), visual effects generation (glitch, halftone, pixel art), comprehensive file handling (PDF creation/extraction, Google Drive integration), AI model interfaces (GPT, DALL-E, Hugging Face), utility nodes for workflow enhancement, and specialized tools for video processing, captioning, and batch operations. The pack provides both practical workflow solutions and creative tools within a unified node collection.

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
- batch_size
    - The batch_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- keyframe_start_position
    - The keyframe_start_position input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- keyframe_end_position
    - The keyframe_end_position input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- interpolation_curve
    - The interpolation_curve input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- temporal_buffer
    - The temporal_buffer input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- clip_vision_start_image
    - The clip_vision_start_image input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- clip_vision_end_image
    - The clip_vision_end_image input is used by this node during execution.
    - Comfy dtype: CLIP_VISION_OUTPUT
    - Python dtype: object
- start_image
    - The start_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- end_image
    - The end_image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- interpolation_mask
    - The interpolation_mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- mask_feather
    - The mask_feather input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_invert
    - The mask_invert input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- regional_blending
    - The regional_blending input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

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
[View source repository](https://github.com/filliptm/ComfyUI_Fill-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
