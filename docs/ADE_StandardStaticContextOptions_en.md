# Documentation
- Class name: StandardStaticContextOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The `create_options` method of StandardStaticContextOptionsNode aims to generate and configure context options for the animation process. It allows customizing context length, overlap, and other parameters that affect how animation distinguishes between frames. This method is crucial in setting up the animation context, ensuring that the generated frames are coherent and context-aware.

# Input types
## Required
- context_length
    - Parameter `context_length` specifies the number of context frames to consider in each animation step. This is crucial for determining the scope of each frame's influence on the animation result.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
    - Parameter `context_overlap` defines the overlap between adjacent contexts in the animation sequence. This is significant for ensuring smooth transitions and continuity in the animation.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- fuse_method
    - Parameter `fuse_method` determines how different contexts are merged or fused during the animation process. It may affect the overall coherence and style consistency of the animation.
    - Comfy dtype: str
    - Python dtype: str
- use_on_equal_length
    - Flag `use_on_equal_length` indicates whether the context options should be applied when the animation frame lengths are equal. It may affect the distribution of frames in the animation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_percent
    - Parameter `start_percent` sets the starting percentage of the context options, which may affect when the animation begins to integrate these options.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - Parameter `guarantee_steps` ensures a minimum number of steps for applying the context options during the animation process, providing stability to the animation process.
    - Comfy dtype: INT
    - Python dtype: int
- view_opts
    - Parameter `view_opts` allows customizing view options in the context, which can alter the visual presentation of the animation.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions
- prev_context
    - Parameter `prev_context` is used to bring previous context options into the new context, maintaining the continuity of the animation sequence.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Output types
- CONTEXT_OPTS
    - Output `CONTEXT_OPTS` provides the configured context options to be used in subsequent steps of the animation process.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Usage tips
- Infra type: CPU

# Source code
```
class StandardStaticContextOptionsNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'context_length': ('INT', {'default': 16, 'min': 1, 'max': LENGTH_MAX}), 'context_overlap': ('INT', {'default': 4, 'min': 0, 'max': OVERLAP_MAX})}, 'optional': {'fuse_method': (ContextFuseMethod.LIST_STATIC,), 'use_on_equal_length': ('BOOLEAN', {'default': False}), 'start_percent': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'guarantee_steps': ('INT', {'default': 1, 'min': 0, 'max': BIGMAX}), 'prev_context': ('CONTEXT_OPTIONS',), 'view_opts': ('VIEW_OPTS',)}}
    RETURN_TYPES = ('CONTEXT_OPTIONS',)
    RETURN_NAMES = ('CONTEXT_OPTS',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/context opts'
    FUNCTION = 'create_options'

    def create_options(self, context_length: int, context_overlap: int, fuse_method: str=ContextFuseMethod.PYRAMID, use_on_equal_length=False, start_percent: float=0.0, guarantee_steps: int=1, view_opts: ContextOptions=None, prev_context: ContextOptionsGroup=None):
        if prev_context is None:
            prev_context = ContextOptionsGroup()
        prev_context = prev_context.clone()
        context_options = ContextOptions(context_length=context_length, context_stride=None, context_overlap=context_overlap, context_schedule=ContextSchedules.STATIC_STANDARD, fuse_method=fuse_method, use_on_equal_length=use_on_equal_length, start_percent=start_percent, guarantee_steps=guarantee_steps, view_options=view_opts)
        prev_context.add(context_options)
        return (prev_context,)
```