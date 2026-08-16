# Documentation
- Class name: ClownRegionalConditionings
- Category: RES4LYF/conditioning
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownRegionalConditionings is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- weight
    - The weight input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region_bleed
    - The region_bleed input is used by this node during execution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- region_bleed_start_step
    - The region_bleed_start_step input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- weight_scheduler
    - The weight_scheduler input is used by this node during execution.
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
- mask_type
    - The mask_type input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- invert_masks
    - The invert_masks input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- cond_regions
    - The cond_regions input is used by this node during execution.
    - Comfy dtype: COND_REGIONS
    - Python dtype: object
- weights
    - The weights input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object
- region_bleeds
    - The region_bleeds input is used by this node during execution.
    - Comfy dtype: SIGMAS
    - Python dtype: object

# Output types
- conditioning
    - The conditioning output is produced by this node.
    - Comfy dtype: CONDITIONING
    - Python dtype: list

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
