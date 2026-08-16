# Documentation
- Class name: LoraReduceRankKJ
- Category: KJNodes/lora
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Resize a LoRA model by reducing its rank. Based on kohya's sd-scripts: https://github.com/kohya-ss/sd-scripts/blob/main/networks/resize_lora.py

# Input types
## Required
- lora_name
    - The name of the LoRA.
    - Comfy dtype: COMBO
    - Python dtype: object
- new_rank
    - The new rank to resize the LoRA. Acts as max rank when using dynamic_method.
    - Comfy dtype: INT
    - Python dtype: int
- dynamic_method
    - Method to use for dynamically determining new alphas and dims. sv_knee finds the elbow point in the singular value curve.
    - Comfy dtype: COMBO
    - Python dtype: object
- dynamic_param
    - Parameter for dynamic methods. For sv_knee: sensitivity (1.0=standard knee, <1.0=more aggressive/lower rank, >1.0=more conservative).
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_dtype
    - Data type to save the LoRA as.
    - Comfy dtype: COMBO
    - Python dtype: object
- verbose
    - The verbose input is used by this node during execution.
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
