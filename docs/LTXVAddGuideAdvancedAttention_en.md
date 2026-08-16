# Documentation
- Class name: LTXVAddGuideAdvancedAttention
- Category: conditioning/video_models
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Adds a conditioning frame/video at a specific frame index with per-guide attention strength control. Same preprocessing as LTXVAddGuideAdvanced, plus attention_strength and optional spatial attention_mask.

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
    - Frame index to start the conditioning at. Negative values are counted from the end of the video.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - Strength of the conditioning. Higher values make it more exact.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crf
    - CRF value. Higher = more motion, lower = higher quality.
    - Comfy dtype: INT
    - Python dtype: int
- blur_radius
    - Blur kernel radius. Higher = more motion.
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
- attention_strength
    - Controls how strongly this guide influences generation via self-attention. 1.0 = full conditioning, 0.0 = ignore.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- attention_mask
    - Optional pixel-space spatial mask. Shape (F, H, W) or (H, W). Values in [0, 1]. Controls per-region conditioning influence. Multiplied by attention_strength.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

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
