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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
