# Documentation
- Class name: Flux2KleinEnhancer
- Category: conditioning/flux2klein
- Output node: False
- Repo Ref: https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer

Flux.2Klein 9B Enhancement Nodes Suite

# Input types
## Required
- conditioning
    - The conditioning input is used by this node during execution.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- active_scale
    - Multiplier on every active-token embedding. 1.0 = unchanged. The model was trained on Qwen3's natural distribution; values far from 1.0 push it off-distribution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- per_token_whiten
    - Amplifies per-token deviation from the sequence mean: (x - mean)*(1+w) + mean. >0 widens spread, <0 compresses. Was called 'contrast' in v1.
    - Comfy dtype: FLOAT
    - Python dtype: float
- norm_equalize
    - Blend each token toward the per-sequence mean L2 norm. Flattens magnitude variance — fights Qwen3's natural emphasis. 0 = no effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- early_layer_scale
    - Klein-specific. Scale the first Qwen3 layer slice (low-level / structural features). Klein conditioning stacks 3 layers along the embed dim; this targets the first.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mid_layer_scale
    - Klein-specific. Scale the middle Qwen3 layer slice (intermediate semantic features).
    - Comfy dtype: FLOAT
    - Python dtype: float
- late_layer_scale
    - Klein-specific. Scale the last Qwen3 layer slice (high-level / abstract semantic features).
    - Comfy dtype: FLOAT
    - Python dtype: float
- preserve_original
    - Linear blend back the unmodified active region. 0.0 = full enhancement, 1.0 = no change.
    - Comfy dtype: FLOAT
    - Python dtype: float
- active_end_override
    - Override the active-region end. 0 = auto-detect from attention_mask, falls back to full sequence length if mask missing.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - The device input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- debug
    - The debug input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- CONDITIONING
    - The CONDITIONING output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/capitan01R/ComfyUI-Flux2Klein-Enhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
