# Documentation
- Class name: StandardUniformContextOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The `create_options` method of the StandardUniformContextOptionsNode class is designed to generate a set of context options for animation and differentiation tasks. It configures context parameters that control the granularity and continuity of the animation process, such as length, stride, and overlap. This method plays a key role in establishing the framework for how animation is differentiated across different frames or stages.

# Input types
## Required
- context_length
- The `context_length` parameter defines the range of frames or data points that the context will cover. It is crucial for determining the scope of influence each context option has on the animation outcome. This parameter directly affects the level of detail and the smoothness of transitions between different animation stages.
    - Comfy dtype: INT
    - Python dtype: int
- context_stride
- The `context_stride` parameter specifies the interval between consecutive context frames. It is important for the efficiency of the animation process because it influences how frequently new context information is introduced. This stride setting can optimize the balance between performance and the desired level of detail in the animation.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
- The `context_overlap` parameter determines the degree of overlap between consecutive contexts. This overlap is essential for maintaining continuity in the animation sequence, ensuring a smooth transition from one context to the next. It is especially important when handling complex transitions that require gradual change rather than abrupt shifts.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fuse_method
- The `fuse_method` parameter determines the strategy for merging or blending different contexts within the animation. It plays a significant role in how the overall context is constructed and can greatly affect the coherence of the final animation and how different elements interact within it.
    - Comfy dtype: ContextFuseMethod.LIST
    - Python dtype: str
- use_on_equal_length
- The `use_on_equal_length` flag is a boolean that, when set, indicates that context options should only be applied when the context lengths are equal. This is important for ensuring consistency in the animation process, especially when dealing with data of varying lengths.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_percent
- The `start_percent` parameter determines the starting point of the context on the animation timeline. It is crucial for aligning the context with specific moments or events in the animation, allowing precise timing control and synchronization with other elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
- The `guarantee_steps` parameter sets the minimum number of steps for which the context will be applied. It ensures that each context has a defined duration within the animation, aiding the overall structure and predictability of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- view_opts
- The `view_opts` parameter allows customization of view options within the context. It can be used to adjust visual aspects such as rendering settings or display preferences, enhancing the presentation of the animation.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions
- prev_context
- The `prev_context` refers to the previous set of context options used in the animation. It is important for maintaining continuity and flow in the animation, especially when building upon or transitioning from one context to another.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Output types
- CONTEXT_OPTS
- The output `CONTEXT_OPTS` represents a configured set of context options that are ready to be applied to the animation. These options encapsulate the parameters that define how the animation differentiates and evolves over time, ensuring a structured and coherent animation sequence.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
