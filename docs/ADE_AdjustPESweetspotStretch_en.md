# Documentation
- Class name: SweetspotStretchPENode
- Category: Animate Diff 🎭🅐🅓/ad settings/pe adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The SweetspotStretchPENode class is designed to adjust the peak effect (PE) of an animation by stretching or compressing it. This node allows fine-tuning of the animation's dynamics, ensuring the PE is optimally positioned and scaled to achieve the desired visual effect.

# Input types
## Required
- sweetspot
    - The 'sweetspot' parameter defines the initial length of the peak effect in the animation. This is crucial for determining the starting point of the PE adjustment process.
    - Comfy dtype: INT
    - Python dtype: int
- new_sweetspot
    - The 'new_sweetspot' parameter specifies the target length to which the peak effect should be adjusted. It is a key factor in controlling the final appearance of the PE in the animation.
    - Comfy dtype: INT
    - Python dtype: int
- print_adjustment
    - The 'print_adjustment' parameter is a boolean flag that, when set to True, instructs the node to print detailed information about the PE adjustment process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_pe_adjust
    - The 'prev_pe_adjust' parameter is an optional group of previous adjustments that can be applied to the current PE adjustment. It allows chaining of adjustments for complex animation scenarios.
    - Comfy dtype: PE_ADJUST
    - Python dtype: Union[AdjustGroup, None]

# Output types
- PE_ADJUST
    - The output of the node is an AdjustGroup object containing the new PE adjustment along with any previous adjustments. This object is used to apply the PE adjustments to the animation.
    - Comfy dtype: PE_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
