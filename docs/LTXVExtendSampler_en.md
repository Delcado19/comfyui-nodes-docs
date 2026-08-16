# Documentation
- Class name: LTXVExtendSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Extend Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

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
- latents
    - The latents of the video to extend.
    - Comfy dtype: LATENT
    - Python dtype: dict
- num_new_frames
    - If -1, the number of frames will be based on the number of frames in the optional_guiding_latents.
    - Comfy dtype: INT
    - Python dtype: int
- frame_overlap
    - The overlap region to use for conditioning the new frames on the end of the provided latents.
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
- strength
    - The strength of the conditioning on the overlapping latents, when using optional_guiding_latents.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- optional_guiding_latents
    - Optional latents to guide the sampling.
    - Comfy dtype: LATENT
    - Python dtype: dict
- optional_cond_images
    - The images to use for conditioning the sampling.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_cond_indices
    - The optional_cond_indices input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- cond_image_strength
    - The strength of the conditioning on the images.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- denoised_video
    - The denoised_video output is produced by this node.
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
