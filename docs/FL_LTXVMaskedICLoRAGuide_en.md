# Documentation
- Class name: FL_LTXVMaskedICLoRAGuide
- Category: 🏵️Fill Nodes/WIP
- Output node: False
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Adds an image/video as an LTXV IC-LoRA guide. When a mask is connected, it can affect latent denoising, guide attention, or both.

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
    - Pixel frame index where the guide starts. LTX video guides snap to the model's latent cadence.
    - Comfy dtype: INT
    - Python dtype: int
- guide_strength
    - Strength for the IC-LoRA guide conditioning.
    - Comfy dtype: FLOAT
    - Python dtype: float
- denoise_strength
    - Maximum denoise mask value applied to masked target latent areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- attention_strength
    - Strength for the guide attention mask metadata.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask_mode
    - Choose whether the mask affects latent denoising, guide attention, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- inpaint_preprocess
    - Fill masked guide pixels with LTX's inpaint green before VAE encoding.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- write_source_to_latent
    - Encode the source image/video into the target latent frames before applying the denoise mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- latent_downscale_factor
    - Downscale only the IC-LoRA guide latent. The source latent write remains full size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - The crop input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
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
## Optional
- mask
    - Optional mask for latent denoise, guide attention, and green inpaint preprocessing.
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
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
