# Documentation
- Class name: StandardUniformViewOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts/view opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

StandardUniformViewOptionsNode is designed to generate a unified set of view options for differentiated animation. It focuses on creating a structured approach for the animation process, ensuring consistency and uniformity throughout. This node abstracts the complexity of view scheduling, providing users with a straightforward way to define and apply view parameters.

# Input types
## Required
- view_length
    - The **view_length** parameter defines the length of each view in the animation sequence. It is crucial for determining the scope and detail of each individual view, thereby affecting the overall quality and composition of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- view_stride
    - The **view_stride** parameter specifies the interval between consecutive views in the animation. It plays an important role in controlling the pacing of the animation and ensuring that transitions between views are coherent and visually appealing.
    - Comfy dtype: INT
    - Python dtype: int
- view_overlap
    - The **view_overlap** parameter indicates the amount of overlap between adjacent views in the animation. This is essential for creating a seamless and smooth animation experience where transitions between views are not abrupt.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fuse_method
    - The **fuse_method** parameter determines the method used to fuse views within the animation. It provides flexibility in how views are combined, allowing for different visual effects and creative control over the final output.
    - Comfy dtype: ContextFuseMethod.LIST
    - Python dtype: str

# Output types
- view_options
    - The **view_options** output provides a structured set of options that define the characteristics of views in the animation. It encapsulates parameters such as view length, stride, and overlap, which are critical for the execution and final appearance of the animation.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
