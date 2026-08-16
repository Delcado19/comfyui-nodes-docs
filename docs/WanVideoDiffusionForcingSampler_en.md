# Documentation
- Class name: WanVideoDiffusionForcingSampler
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
- text_embeds
    - The text_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDEOTEXTEMBEDS
    - Python dtype: object
- image_embeds
    - The image_embeds input is used by this node during execution.
    - Comfy dtype: WANVIDIMAGE_EMBEDS
    - Python dtype: object
- addnoise_condition
    - Improves consistency in long video generation
    - Comfy dtype: INT
    - Python dtype: int
- fps
    - The fps input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
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
## Optional
- samples
    - init Latents to use for video2video process
    - Comfy dtype: LATENT
    - Python dtype: dict
- prefix_samples
    - prefix latents
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise_strength
    - The denoise_strength input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cache_args
    - The cache_args input is used by this node during execution.
    - Comfy dtype: CACHEARGS
    - Python dtype: object
- slg_args
    - The slg_args input is used by this node during execution.
    - Comfy dtype: SLGARGS
    - Python dtype: object
- rope_function
    - Comfy's RoPE implementation doesn't use complex numbers and can thus be compiled, that should be a lot faster when using torch.compile
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- experimental_args
    - The experimental_args input is used by this node during execution.
    - Comfy dtype: EXPERIMENTALARGS
    - Python dtype: object
- unianimate_poses
    - The unianimate_poses input is used by this node during execution.
    - Comfy dtype: UNIANIMATE_POSE
    - Python dtype: object

# Output types
- samples
    - The samples output is produced by this node.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
