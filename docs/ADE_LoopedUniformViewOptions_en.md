# Documentation
- Class name: LoopedUniformViewOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts/view opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The Loop Uniform View Options node is designed to generate a set of uniform view options for looping animations. It provides a systematic way to define the length, stride, and overlap of views within a closed-loop structure, enabling a consistent and coherent visualization of the animation sequence.

# Input types
## Required
- view_length
    - The view length parameter specifies the length of each view in the animation sequence, which is crucial for determining the overall scope and detail of the animation. It directly affects the number of generated frames and the comprehensiveness of the looping view.
    - Comfy dtype: INT
    - Python dtype: int
- view_stride
    - The view stride parameter defines the interval between consecutive views in the animation, affecting the smoothness and continuity of transitions between frames. It is a key factor in creating a cohesive animation flow.
    - Comfy dtype: INT
    - Python dtype: int
- view_overlap
    - The view overlap parameter determines the degree of overlap between adjacent views in the loop, which is essential for maintaining visual continuity and preventing abrupt changes that could disrupt the viewer's experience.
    - Comfy dtype: INT
    - Python dtype: int
- closed_loop
    - The closed-loop flag indicates whether the animation sequence should form a closed loop, which is crucial for creating seamless transitions and ensuring the animation can continuously loop without ending.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- fuse_method
    - The blending method parameter allows specifying the blending technique to be applied when combining views, which can enhance the visual quality and coherence of the animation.
    - Comfy dtype: ContextFuseMethod.LIST
    - Python dtype: str
- use_on_equal_length
    - When encountering equal-length views, the use_on_equal_length parameter determines whether specific conditions should be applied, potentially optimizing the animation for certain scenarios.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- VIEW_OPTS
    - The VIEW_OPTS output provides a structured set of options that define the parameters for looping animation views. These options include length, stride, overlap, and other critical settings for animation execution and visual results.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions

# Usage tips
- Infra type: CPU

# Source code
```
class LoopedUniformViewOptionsNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'view_length': ('INT', {'default': 16, 'min': 1, 'max': LENGTH_MAX}), 'view_stride': ('INT', {'default': 1, 'min': 1, 'max': STRIDE_MAX}), 'view_overlap': ('INT', {'default': 4, 'min': 0, 'max': OVERLAP_MAX}), 'closed_loop': ('BOOLEAN', {'default': False})}, 'optional': {'fuse_method': (ContextFuseMethod.LIST,), 'use_on_equal_length': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('VIEW_OPTS',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/context opts/view opts'
    FUNCTION = 'create_options'

    def create_options(self, view_length: int, view_overlap: int, view_stride: int, closed_loop: bool, fuse_method: str=ContextFuseMethod.PYRAMID, use_on_equal_length=False):
        view_options = ContextOptions(context_length=view_length, context_stride=view_stride, context_overlap=view_overlap, context_schedule=ContextSchedules.UNIFORM_LOOPED, closed_loop=closed_loop, fuse_method=fuse_method, use_on_equal_length=use_on_equal_length)
        return (view_options,)
```