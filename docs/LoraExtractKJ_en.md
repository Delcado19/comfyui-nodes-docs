# Documentation
- Class name: LoraExtractKJ
- Category: KJNodes/lora
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Various quality of life -nodes for ComfyUI, mostly just visual stuff to improve usability.

# Input types
## Required
- finetuned
    - The finetuned model or clip to extract LoRA from.
    - Comfy dtype: MODEL,CLIP
    - Python dtype: object
- original
    - The original base model or clip to diff against.
    - Comfy dtype: MODEL,CLIP
    - Python dtype: object
- filename_prefix
    - The filename_prefix input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- rank
    - The rank to use for standard LoRA, or maximum rank limit for adaptive methods.
    - Comfy dtype: INT
    - Python dtype: int
- lora_type
    - The lora_type input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- algorithm
    - SVD algorithm to use, svd_lowrank is faster but less accurate.
    - Comfy dtype: COMBO
    - Python dtype: object
- lowrank_iters
    - The number of subspace iterations for lowrank SVD algorithm.
    - Comfy dtype: INT
    - Python dtype: int
- output_dtype
    - The output_dtype input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- bias_diff
    - The bias_diff input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- adaptive_param
    - For ratio mode, this is the ratio of the maximum singular value. For quantile mode, this is the quantile of the singular values. For fro mode, this is the Frobenius norm retention ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_quantile
    - The clamp_quantile input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
No outputs are defined in the live ComfyUI metadata.

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
