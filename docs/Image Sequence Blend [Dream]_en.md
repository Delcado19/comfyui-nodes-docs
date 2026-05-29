
# Documentation
- Class name: Image Sequence Blend [Dream]
- Category: ✨ Dream/🎥 animation/⚙ postprocessing
- Output node: False
- Repo Ref: https://github.com/ComfyUI-extensions/ComfyUI_DreamExamples

This node blends animation sequences by applying fade-in and fade-out effects over a specified number of iterations, enhancing visual transitions and continuity within the sequence.

# Input types
## Required
- sequence
    - The animation sequence to be blended, serving as the primary input for the blending process.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence
- fade_in
    - Specifies the intensity of the fade-in effect at the start of each frame transition, affecting the smoothness of the sequence's visual flow.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fade_out
    - Determines the intensity of the fade-out effect at the end of each frame transition, contributing to seamless integration between consecutive frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iterations
    - Controls the number of times the blending process is applied, influencing the overall smoothness and continuity of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- sequence
    - The resulting animation sequence after blending processing, featuring enhanced visual transitions between frames.
    - Comfy dtype: ANIMATION_SEQUENCE
    - Python dtype: AnimationSequence


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ComfyUI-extensions/ComfyUI_DreamExamples)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
