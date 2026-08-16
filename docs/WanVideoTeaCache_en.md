# Documentation
- Class name: WanVideoTeaCache
- Category: WanVideoWrapper
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanVideoWrapper

Patch WanVideo model to use TeaCache. Speeds up inference by caching the output and  
applying it instead of doing the step.  Best results are achieved by choosing the  
appropriate coefficients for the model. Early steps should never be skipped, with too  
aggressive values this can happen and the motion suffers. Starting later can help with that too.   
When NOT using coefficients, the threshold value should be  
about 10 times smaller than the value used with coefficients.  

Official recommended values https://github.com/ali-vilab/TeaCache/tree/main/TeaCache4Wan2.1

# Input types
## Required
- rel_l1_thresh
    - Higher values will make TeaCache more aggressive, faster, but may cause artifacts. Good value range for 1.3B: 0.05 - 0.08, for other models 0.15-0.30
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_step
    - Start percentage of the steps to apply TeaCache
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - End steps to apply TeaCache
    - Comfy dtype: INT
    - Python dtype: int
- cache_device
    - Device to cache to
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_coefficients
    - Use calculated coefficients for more accuracy. When enabled therel_l1_thresh should be about 10 times higher than without
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mode
    - Choice between using e (time embeds, default) or e0 (modulated time embeds)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- cache_args
    - The cache_args output is produced by this node.
    - Comfy dtype: CACHEARGS
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanVideoWrapper)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
