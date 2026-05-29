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
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
