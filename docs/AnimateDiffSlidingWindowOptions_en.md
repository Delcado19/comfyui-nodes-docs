# Documentation
- Class name: AnimateDiffSlidingWindowOptions
- Category: Animate Diff
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-animatediff.git

This node class encapsulates the configuration options required to set up a sliding‑window animation. It manages the parameters that control frame generation in a video sequence, ensuring smooth and coherent animation. The node’s purpose is to provide a structured way to define the temporal and spatial characteristics of the animation, such as context length, stride between frames, and overlap between consecutive contexts.

# Input types
## Required
- context_length
- The **context_length** parameter specifies the number of consecutive frames considered at each step of the animation. It is crucial for determining the model’s contextual range, affecting the coherence and continuity of the generated animation.
    - Comfy dtype: INT
    - Python dtype: int
- context_stride
- The **context_stride** parameter defines the interval between frames within the sliding window. It influences how the animation transitions from one context to the next, shaping the overall rhythm and pacing.
    - Comfy dtype: INT
    - Python dtype: int
- context_overlap
- The **context_overlap** parameter sets the number of overlapping frames between consecutive sliding windows. It is essential for maintaining smooth transitions and preventing disjointed or unstable visual output.
    - Comfy dtype: INT
    - Python dtype: int
- context_schedule
- The **context_schedule** parameter controls the distribution of frames within the sliding window, allowing various patterns such as uniform or non‑uniform arrangements. This affects the visual dynamics and narrative flow of the animation.
    - Comfy dtype: ENUM
    - Python dtype: ContextSchedules.CONTEXT_SCHEDULE_ENUM
- closed_loop
- The **closed_loop** parameter determines whether the animation should loop back to the beginning after reaching the end. It influences the overall structure and presentation, potentially creating seamless or cyclic narratives.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- sliding_window_opts
- The output is a configured **SlidingContext** object that encapsulates all parameters needed during the animation. It is a key component for generating coherent video sequences with smooth transitions.
    - Comfy dtype: OBJECT
    - Python dtype: SlidingContext

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffSlidingWindowOptions:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'context_length': ('INT', {'default': SLIDING_CONTEXT_LENGTH, 'min': 2, 'max': 32}), 'context_stride': ('INT', {'default': 1, 'min': 1, 'max': 32}), 'context_overlap': ('INT', {'default': 4, 'min': 0, 'max': 32}), 'context_schedule': (ContextSchedules.CONTEXT_SCHEDULE_LIST, {'default': ContextSchedules.UNIFORM}), 'closed_loop': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('SLIDING_WINDOW_OPTS',)
    FUNCTION = 'init_options'
    CATEGORY = 'Animate Diff'

    def init_options(self, context_length, context_stride, context_overlap, context_schedule, closed_loop):
        ctx = SlidingContext(context_length=context_length, context_stride=context_stride, context_overlap=context_overlap, context_schedule=context_schedule, closed_loop=closed_loop)
        return (ctx,)
```