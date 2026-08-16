# Documentation
- Class name: LTXVInContextSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV In Context Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

# Input types
## Required
- vae
    - The VAE to use.
    - Comfy dtype: VAE
    - Python dtype: object
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
- guiding_latents
    - The latents to use for guiding the sampling, typically with an IC-LoRA.
    - Comfy dtype: LATENT
    - Python dtype: dict
## Optional
- optional_cond_images
    - The image to use for conditioning the sampling, if not provided, the sampling will be unconditioned (t2v setup). The image will be resized to the size of the first frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- num_frames
    - If -1, the number of frames will be based on the number of frames in the guiding_latents.
    - Comfy dtype: INT
    - Python dtype: int

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
