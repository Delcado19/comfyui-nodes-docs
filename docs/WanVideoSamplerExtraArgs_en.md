# Documentation
- Class name: WanVideoSamplerExtraArgs
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

ComfyUI wrapper nodes for WanVideo

# Input types
## Optional
- riflex_freq_index
    - Frequency index for RIFLEX, disabled when 0, default 6. Allows for new frames to be generated after without looping
    - Comfy dtype: INT
    - Python dtype: int
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

# Output types
- extra_args
    - The extra_args output is produced by this node.
    - Comfy dtype: WANVIDSAMPLEREXTRAARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
