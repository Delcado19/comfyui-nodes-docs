# Documentation
- Class name: StandardStaticViewOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts/view opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

StandardStaticViewOptionsNode is designed to generate a set of options for static views within an animation context. It allows customization of view length and overlap, ensuring a seamless and coherent animation experience. This node plays a key role in defining how different frames or segments of an animation are presented to the audience.

# Input types
## Required
- view_length
    - The view_length parameter determines the number of frames or elements displayed in each view. It is crucial for setting the scope and level of detail of the animation, affecting the overall viewing experience.
    - Comfy dtype: INT
    - Python dtype: int
- view_overlap
    - The view_overlap parameter specifies the degree of overlap between adjacent views. This is important for maintaining continuity and can help create smooth transitions between different parts of the animation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fuse_method
    - The fuse_method parameter defines the method used to combine or fuse different views in the animation. It can significantly affect the final appearance and the way information is conveyed through the animation sequence.
    - Comfy dtype: ContextFuseMethod.LIST
    - Python dtype: str

# Output types
- view_options
    - The view_options output provides a structured set of options that determine how views are configured in the animation. It encapsulates the user‑set parameters and is essential for the execution of the animation.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
