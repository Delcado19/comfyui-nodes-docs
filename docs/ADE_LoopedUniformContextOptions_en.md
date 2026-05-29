# Documentation
- Class name: LoopedUniformContextOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

LoopedUniformContextOptionsNode is designed to generate a series of context options for animation purposes. It creates a context-based uniform distribution based on the given parameters, ensuring a consistent flow of animation frames. This node is particularly useful for creating animation loops where uniformity and continuity are essential.

# Input types
## Required
- context_length
    - The context_length parameter determines the length of each context in the animation sequence. It is crucial for defining the scope of each context and affects the overall structure of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- context_stride
    - The context_stride parameter specifies the stride between consecutive contexts. It affects the degree of correlation between each context and its neighbors, influencing the coherence of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - The context_overlap parameter defines the amount of overlap between adjacent contexts. This is important for ensuring smooth transitions between contexts in the animation and maintaining visual continuity.
    - Comfy dtype: INT
    - Python dtype: int
- closed_loop
    - The closed_loop parameter indicates whether the animation should loop back to the beginning after the last context. This can be used to create seamless, repeating animations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- fuse_method
    - The fuse_method parameter determines how contexts are fused together in the animation. It can affect the blending and merging of contexts, influencing the final appearance of the animation.
    - Comfy dtype: ContextFuseMethod.LIST
    - Python dtype: str
- use_on_equal_length
    - The use_on_equal_length parameter specifies whether the context should only be used if the length of the context meets a specific condition. This can be used to control the application of contexts based on specific criteria.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_percent
    - The start_percent parameter defines the starting percentage of contexts in the animation sequence. It is used to control when each context starts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - The guarantee_steps parameter ensures that each context is displayed for at least a certain number of steps in the animation. This helps maintain the visibility and influence of each context in the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- view_opts
    - The view_opts parameter provides options for viewing the animation. It can include settings that affect the display or rendering of the animation.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions
- prev_context
    - The prev_context parameter allows the continuation of a previous context sequence. It is used when extending or modifying an existing animation sequence.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Output types
- CONTEXT_OPTS
    - The output CONTEXT_OPTS provides a structured set of context options generated based on the input parameters. These options can be directly used in the animation process.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
