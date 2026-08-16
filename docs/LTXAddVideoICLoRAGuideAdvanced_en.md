# Documentation
- Class name: LTXAddVideoICLoRAGuideAdvanced
- Category: Lightricks/IC-LoRA
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

Adds IC-LoRA guide conditioning with per-guide attention strength control. Same as LTXAddVideoICLoRAGuide, but allows controlling how strongly this guide influences generation via self-attention, optionally with a spatial mask.

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
    - Video-only latent to condition. Must be a 5D video latent.
    - Comfy dtype: LATENT
    - Python dtype: dict
- image
    - The image input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- frame_idx
    - Frame index to start the conditioning at. The value is rounded to the nearest frame and wrapped modulo the number of video frames. Negative values are counted from the end of the video before wrapping.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- latent_downscale_factor
    - For IC-LoRA on small grid. 1 = original size, 2 = half, etc.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - The crop input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- use_tiled_encode
    - The use_tiled_encode input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- tile_size
    - The tile_size input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- tile_overlap
    - The tile_overlap input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- attention_strength
    - Controls how strongly this guide influences generation via self-attention. 1.0 = full conditioning (default), 0.0 = ignore. When an attention_mask is also provided, this multiplies the mask values.
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
