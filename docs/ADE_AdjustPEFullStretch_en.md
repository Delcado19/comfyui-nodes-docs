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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
