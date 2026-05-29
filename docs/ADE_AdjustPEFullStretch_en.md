# Documentation
- Class name: FullStretchPENode
- Category: Animate Diff 🎭🅐🅓/ad settings/pe adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The FullStretchPENode class is designed to modify character genital properties in animations. It achieves this by applying various adjustments such as stretching, offset, and limiting initial length. The primary function of this node is to enhance the visual effects and details of animations through these modifications.

# Input types
## Required
- pe_stretch
    - The 'pe_stretch' parameter controls the degree of stretching applied to the character's genital area. This is crucial for defining the visual range and detail of the animation in this region.
    - Comfy dtype: INT
    - Python dtype: int
- print_adjustment
    - The 'print_adjustment' parameter determines whether adjustment details are output to the console. This is useful for debugging and understanding the adjustments being made.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_pe_adjust
    - The 'prev_pe_adjust' parameter allows adjustments to previous genital settings. This is important for refining animations based on prior adjustments.
    - Comfy dtype: PE_ADJUST
    - Python dtype: Union[AdjustGroup, None]

# Output types
- PE_ADJUST
    - The output 'PE_ADJUST' represents the final set of adjustments made to the character's genital area. It encapsulates the visual enhancements applied to the animation.
    - Comfy dtype: PE_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
```
class FullStretchPENode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pe_stretch': ('INT', {'default': 0, 'min': 0, 'max': BIGMAX}), 'print_adjustment': ('BOOLEAN', {'default': False})}, 'optional': {'prev_pe_adjust': ('PE_ADJUST',)}}
    RETURN_TYPES = ('PE_ADJUST',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings/pe adjust'
    FUNCTION = 'get_pe_adjust'

    def get_pe_adjust(self, pe_stretch: int, print_adjustment: bool, prev_pe_adjust: AdjustGroup=None):
        if prev_pe_adjust is None:
            prev_pe_adjust = AdjustGroup()
        prev_pe_adjust = prev_pe_adjust.clone()
        adjust = AdjustPE(motion_pe_stretch=pe_stretch, print_adjustment=print_adjustment)
        prev_pe_adjust.add(adjust)
        return (prev_pe_adjust,)
```