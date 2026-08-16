# Documentation
- Class name: WanVideoSampler
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: WANVIDEOMODEL
    - Python dtype: object
- image_embeds
    - The image_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- steps
    - The steps input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shift
    - The shift input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- force_offload
    - Moves the model to the offload device after sampling
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- scheduler
    - The scheduler input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- riflex_freq_index
    - Frequency index for RIFLEX, disabled when 0, default 6. Allows for new frames to be generated after without looping
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- text_embeds
    - The text_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- samples
    - init Latents to use for video2video process
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise_strength
    - The denoise_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feta_args
    - The feta_args input is used by this node during execution.
    - Comfy dtype: FETAARGS
    - Python dtype: object
- context_options
    - The context_options input is used by this node during execution.
    - Comfy dtype: WANVIDCONTEXT
    - Python dtype: object
- cache_args
    - The cache_args input is used by this node during execution.
    - Comfy dtype: CACHEARGS
    - Python dtype: object
- flowedit_args
    - FlowEdit support has been deprecated
    - Comfy dtype: FLOWEDITARGS
    - Python dtype: object
- batched_cfg
    - Batch cond and uncond for faster sampling, possibly faster on some hardware, uses more memory
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- slg_args
    - The slg_args input is used by this node during execution.
    - Comfy dtype: SLGARGS
    - Python dtype: object
- rope_function
    - Comfy's RoPE implementation doesn't use complex numbers and can thus be compiled, that should be a lot faster when using torch.compile. Chunked version has reduced peak VRAM usage when not using torch.compile
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- loop_args
    - The loop_args input is used by this node during execution.
    - Comfy dtype: LOOPARGS
    - Python dtype: object
- experimental_args
    - The experimental_args input is used by this node during execution.
    - Comfy dtype: EXPERIMENTALARGS
    - Python dtype: object
- sigmas
    - The sigmas input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- unianimate_poses
    - The unianimate_poses input is used by this node during execution.
    - Comfy dtype: UNIANIMATE_POSE
    - Python dtype: object
- fantasytalking_embeds
    - The fantasytalking_embeds input is used by this node during execution.
    - Comfy dtype: FANTASYTALKING_EMBEDS
    - Python dtype: object
- uni3c_embeds
    - The uni3c_embeds input is used by this node during execution.
    - Comfy dtype: UNI3C_EMBEDS
    - Python dtype: object
- multitalk_embeds
    - The multitalk_embeds input is used by this node during execution.
    - Comfy dtype: MULTITALK_EMBEDS
    - Python dtype: object
- freeinit_args
    - The freeinit_args input is used by this node during execution.
    - Comfy dtype: FREEINITARGS
    - Python dtype: object
- start_step
    - Start step for the sampling, 0 means full sampling, otherwise samples only from this step
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - End step for the sampling, -1 means full sampling, otherwise samples only until this step
    - Comfy dtype: INT
    - Python dtype: int
- add_noise_to_samples
    - Add noise to the samples before sampling, needed for video2video sampling when starting from clean video
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- samples
    - The samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoised_samples
    - The denoised_samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
