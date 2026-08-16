# Documentation
- Class name: ImageSharpenKJ
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

GPU-accelerated image sharpening with multiple methods.

**RCAS** — AMD's Robust Contrast-Adaptive Sharpening (from FSR).
Single 5-tap cross filter that adapts to local contrast.
Minimal artifacts, good for general use with little tuning.

**Adaptive USM** — Unsharp mask with local variance modulation.
Sharpens detail-rich areas more, flat/noisy areas less.
More controllable than RCAS via radius and threshold parameters.

**High-Pass** — Extracts high-frequency detail and blends it back.
Gives a "clarity" enhancement feel. Uses radius to control detail scale.

**Deconvolution** — Richardson-Lucy iterative deconvolution.
Can recover actual lost detail from blur, not just enhance edges.
Uses radius as the estimated blur kernel and iterations to control convergence.

# Input types
## Required
- image
    - The image input is used by this node during execution.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
