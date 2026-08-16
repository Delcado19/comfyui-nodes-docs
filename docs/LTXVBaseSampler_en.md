# Documentation
- Class name: LTXVBaseSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Base Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- model
    - The diffusion model to use.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The VAE to use.
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
- num_frames
    - The num_frames input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- guider
    - The guider to use, must be a STGGuiderAdvanced.
    - Comfy dtype: GUIDER
    - Python dtype: object
- sampler
    - The sampler to use.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- sigmas
    - The sigmas to use.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- noise
    - The noise to use for the sampling.
    - Comfy dtype: NOISE
    - Python dtype: object
## Optional
- optional_cond_images
    - The images to use for conditioning the sampling.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_cond_indices
    - The indices of the images to use for conditioning the sampling.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The strength of the conditioning on the images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - The crop mode to use for the images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- crf
    - The CRF value to use for preprocessing the images.
    - Comfy dtype: INT
    - Python dtype: int
- blur
    - The blur value to use for preprocessing the images.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- denoised
    - The denoised output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- positive
    - The positive output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The negative output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
