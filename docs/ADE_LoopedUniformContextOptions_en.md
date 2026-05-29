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
```
class LoopedUniformContextOptionsNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'context_length': ('INT', {'default': 16, 'min': 1, 'max': LENGTH_MAX}), 'context_stride': ('INT', {'default': 1, 'min': 1, 'max': STRIDE_MAX}), 'context_overlap': ('INT', {'default': 4, 'min': 0, 'max': OVERLAP_MAX}), 'closed_loop': ('BOOLEAN', {'default': False})}, 'optional': {'fuse_method': (ContextFuseMethod.LIST,), 'use_on_equal_length': ('BOOLEAN', {'default': False}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'guarantee_steps': ('INT', {'default': 1, 'min': 0, 'max': BIGMAX}), 'prev_context': ('CONTEXT_OPTIONS',), 'view_opts': ('VIEW_OPTS',)}}
    RETURN_TYPES = ('CONTEXT_OPTIONS',)
    RETURN_NAMES = ('CONTEXT_OPTS',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/context opts'
    FUNCTION = 'create_options'

    def create_options(self, context_length: int, context_stride: int, context_overlap: int, closed_loop: bool, fuse_method: str=ContextFuseMethod.FLAT, use_on_equal_length=False, start_percent: float=0.0, guarantee_steps: int=1, view_opts: ContextOptions=None, prev_context: ContextOptionsGroup=None):
        if prev_context is None:
            prev_context = ContextOptionsGroup()
        prev_context = prev_context.clone()
        context_options = ContextOptions(context_length=context_length, context_stride=context_stride, context_overlap=context_overlap, context_schedule=ContextSchedules.UNIFORM_LOOPED, closed_loop=closed_loop, fuse_method=fuse_method, use_on_equal_length=use_on_equal_length, start_percent=start_percent, guarantee_steps=guarantee_steps, view_options=view_opts)
        prev_context.add(context_options)
        return (prev_context,)
```