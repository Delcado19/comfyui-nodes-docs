# Documentation
- Class name: ClownGuide_Style_Beta
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

Transfer some visual aspects of style from a guide (reference) image. If nothing about style is specified in the prompt, it may just transfer the lighting and color scheme.If using CFG results in burn, or a very dark/bright image in the preview followed by a bad output, try duplicating and chaining this node, so that the guide may be applied to both positive and negative conditioning.Currently supported models: SD1.5, SDXL, Stable Cascade, SD3.5, AuraFlow, Flux, HiDream, WAN, and LTXV.

# Input types
## Required
- apply_to
    - When using CFG, decides whether to apply the guide to the positive or negative conditioning.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight
    - Set the strength of the guide by multiplying all other weights by this value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- synweight
    - Set the relative strength of the guide on the opposite conditioning to what was selected: i.e., negative if positive in apply_to. Recommended to avoid CFG burn.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_scheduler
    - Selecting any scheduler except constant will cause the strength to gradually decay to zero. Try beta57 vs. linear quadratic.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_step
    - The start_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- end_step
    - The end_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- invert_mask
    - The invert_mask input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- guide
    - The guide input is used by this node during execution.
    - Comfy dtype: LATENT
    - Python dtype: dict
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- weights
    - The weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Output types
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
