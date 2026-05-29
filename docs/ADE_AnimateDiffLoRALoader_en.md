# Documentation
- Class name: AnimateDiffLoraLoader
- Category: Animate Diff 🎭🅐🅓
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The AnimateDiffLoraLoader node is designed to conveniently load and apply motion LoRA models to the subject. It can blend different LoRA models according to a specified strength, allowing fine‑grained control over the animation. This node is essential for character animation tasks that require integrating multiple motion influences together.

# Input types
## Required
- lora_name
    - The 'lora_name' parameter is critical for identifying the specific motion LoRA model to load. It ensures the correct model is selected from the available options, which is crucial for the node's operation and the final animation result.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The 'strength' parameter determines the intensity of the motion LoRA's influence on the animation. It is a key factor in fine‑tuning the animation to achieve the desired effect, allowing balance across different motion layers.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_motion_lora
    - The 'prev_motion_lora' parameter is used to provide the state of a previous motion LoRA model. It is important for maintaining continuity in the animation sequence and allows multiple LoRA models to be stacked for complex animation effects.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList

# Output types
- MOTION_LORA
    - The output 'MOTION_LORA' represents the resulting motion LoRA model after applying the specified strength and blending it with any previous motion LoRA models. It is important for subsequent animation steps and serves as a foundation for further character animation.
    - Comfy dtype: MOTION_LORA
    - Python dtype: MotionLoraList

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
