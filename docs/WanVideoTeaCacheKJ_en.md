# Documentation
- Class name: WanVideoTeaCacheKJ
- Category: KJNodes/deprecated
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

DEPRECATED, use the native EasyCache or alternative custom node that's up to date instead of this.

# Input types
## Required
- model
    - The model input is used by this node during execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- rel_l1_thresh
    - Threshold for to determine when to apply the cache, compromise between speed and accuracy. When using coefficients a good value range is something between 0.2-0.4 for all but 1.3B model, which should be about 10 times smaller, same as when not using coefficients.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_percent
    - The start percentage of the steps to use with TeaCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - The end percentage of the steps to use with TeaCache.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cache_device
    - Device to cache to
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- coefficients
    - Coefficients for rescaling the relative l1 distance, if disabled the threshold value should be about 10 times smaller than the value used with coefficients.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
