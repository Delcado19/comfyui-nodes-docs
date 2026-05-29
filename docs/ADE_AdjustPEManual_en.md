# Documentation
- Class name: ManualAdjustPENode
- Category: Animate Diff 🎭🅐🅓/ad settings/pe adjust
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to manually adjust parameters related to PE (personal energy) in the animation workflow. It allows fine-tuning of initial and final PE indices, interpolation to specific lengths, and provides a print adjustment option. The node plays a key role in the energy level of the node in custom animations.

# Input types
## Required
- cap_initial_pe_length
    - This parameter defines the initial length of PE, which is crucial for controlling the starting energy level in the animation. It directly affects energy dynamics and the overall feel of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- interpolate_pe_to_length
    - Interpolation parameter allows PE to smoothly transition to the specified length, ensuring harmonious energy flow. This is key to achieving natural energy progression.
    - Comfy dtype: INT
    - Python dtype: int
- initial_pe_idx_offset
    - This offset parameter adjusts the starting index of PE, significantly altering the initial energy state. It offers a way to fine-tune energy input at the start of the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- final_pe_idx_offset
    - Final PE index offset defines the ending energy state of the animation. It enables precise control over the energy resolution at the sequence end.
    - Comfy dtype: INT
    - Python dtype: int
- print_adjustment
    - This boolean flag determines whether adjustments to PE are printed. It's useful for debugging and understanding the impact on the animation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_pe_adjust
    - Previous PE adjustment groups provide a method built on existing adjustments, allowing cumulative effects in the animation. This enhances flexibility.
    - Comfy dtype: PE_ADJUST
    - Python dtype: AdjustGroup

# Output types
- PE_ADJUST
    - The output of this node is an AdjustGroup object with manual PE adjustments. It is important as it directly influences final energy levels and the animation's outcome.
    - Comfy dtype: PE_ADJUST
    - Python dtype: AdjustGroup

# Usage tips
- Infra type: CPU

# Source code
```
class ManualAdjustPENode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'cap_initial_pe_length': ('INT', {'default': 0, 'min': 0, 'step': 1}), 'interpolate_pe_to_length': ('INT', {'default': 0, 'min': 0, 'step': 1}), 'initial_pe_idx_offset': ('INT', {'default': 0, 'min': 0, 'step': 1}), 'final_pe_idx_offset': ('INT', {'default': 0, 'min': 0, 'step': 1}), 'print_adjustment': ('BOOLEAN', {'default': False})}, 'optional': {'prev_pe_adjust': ('PE_ADJUST',)}}
    RETURN_TYPES = ('PE_ADJUST',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings/pe adjust'
    FUNCTION = 'get_pe_adjust'

    def get_pe_adjust(self, cap_initial_pe_length: int, interpolate_pe_to_length: int, initial_pe_idx_offset: int, final_pe_idx_offset: int, print_adjustment: bool, prev_pe_adjust: AdjustGroup=None):
        if prev_pe_adjust is None:
            prev_pe_adjust = AdjustGroup()
        prev_pe_adjust = prev_pe_adjust.clone()
        adjust = AdjustPE(cap_initial_pe_length=cap_initial_pe_length, interpolate_pe_to_length=interpolate_pe_to_length, initial_pe_idx_offset=initial_pe_idx_offset, final_pe_idx_offset=final_pe_idx_offset, print_adjustment=print_adjustment)
        prev_pe_adjust.add(adjust)
        return (prev_pe_adjust,)
```