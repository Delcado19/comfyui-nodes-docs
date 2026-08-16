# Documentation
- Class name: LTXVLoopingSampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Lightricks/ComfyUI-LTXVideo

🅛🅣🅧 LTXV Looping Sampler is a ComfyUI node registered by `custom_nodes.ComfyUI-LTXVideo`. The live metadata did not provide a longer description.

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
- noise
    - The noise to use.
    - Comfy dtype: NOISE
    - Python dtype: object
- sampler
    - The sampler to use.
    - Comfy dtype: SAMPLER
    - Python dtype: object
- sigmas
    - The sigmas to use.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- guider
    - The guider to use, must be a STGGuiderAdvanced.
    - Comfy dtype: GUIDER
    - Python dtype: object
- latents
    - The latents to use for creating the long video, they can be guiding latents or empty latents when no guidance is used.
    - Comfy dtype: LATENT
    - Python dtype: dict
- temporal_tile_size
    - The size of the temporal tile to use for the sampling, in pixel frames, in addition to the overlapping region.
    - Comfy dtype: INT
    - Python dtype: int
- temporal_overlap
    - The overlap between the temporal tiles, in pixel frames.
    - Comfy dtype: INT
    - Python dtype: int
- guiding_strength
    - The strength of the conditioning on guiding latents, when optional_guiding_latents are provided.
    - Comfy dtype: FLOAT
    - Python dtype: float
- temporal_overlap_cond_strength
    - The strength of the conditioning on the latents from the previous temporal tile.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cond_image_strength
    - The strength of the conditioning on the optional_cond_images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- horizontal_tiles
    - Number of horizontal spatial tiles.
    - Comfy dtype: INT
    - Python dtype: int
- vertical_tiles
    - Number of vertical spatial tiles.
    - Comfy dtype: INT
    - Python dtype: int
- spatial_overlap
    - Overlap between spatial tiles.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- optional_cond_images
    - The image to use for conditioning the first frame in the video (i2v setup). If not provided, the first frame will be unconditioned (t2v setup). The image will be resized to the size of the first frame.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- optional_guiding_latents
    - The latents to use for guiding the sampling, typically with an IC-LoRA.
    - Comfy dtype: LATENT
    - Python dtype: dict
- adain_factor
    - The strength of the AdaIn operation used to fix the statistics of each new generated temporal tile, to prevent accumulated oversaturation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- optional_positive_conditionings
    - Optional way to provide changing positive prompts, one per temporal tile, using the MultiPromptProvider node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- optional_negative_index_latents
    - Special optional latents to condition on a negative index before each new temporal tile as a way to provide long term context during video generation.
    - Comfy dtype: LATENT
    - Python dtype: dict
- guiding_start_step
    - The step at which the guiding latents start to be used.
    - Comfy dtype: INT
    - Python dtype: int
- guiding_end_step
    - The step at which the guiding latents stop to be used.
    - Comfy dtype: INT
    - Python dtype: int
- optional_cond_image_indices
    - The indices of the keyframes to use for the sampling, separated by commas. The indices are counted from the end of the video.
    - Comfy dtype: STRING
    - Python dtype: str
- optional_normalizing_latents
    - The latents to use for normalizing the output latents, they will be used to normalize the output latents to the same statistics as the input latents.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- denoised_output
    - The denoised_output output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Lightricks/ComfyUI-LTXVideo)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
