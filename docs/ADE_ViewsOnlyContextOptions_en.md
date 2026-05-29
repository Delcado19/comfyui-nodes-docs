# Documentation
- Class name: ViewAsContextOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The 'create_options' method of the ViewAsContextOptionsNode class is designed to generate a set of context options that determine how the view's context is processed and animated. It allows customization of the animation's start percentage and the number of guaranteed steps, ensuring smooth transitions between different contexts.

# Input types
## Required
- view_opts_req
    - The parameter 'view_opts_req' is essential for defining the view options required for the animation context. It lays the foundation for the interpretation and manipulation of the context within the animation framework.
    - Comfy dtype: VIEW_OPTS
    - Python dtype: ContextOptions
## Optional
- start_percent
    - The parameter 'start_percent' specifies the start percentage of the animation, allowing users to control the initial state of the animation. This is an optional parameter that can fine-tune the animation's start.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - The parameter 'guarantee_steps' ensures the minimum number of steps the animation runs, providing a mechanism to maintain animation continuity and stability.
    - Comfy dtype: INT
    - Python dtype: int
- prev_context
    - The parameter 'prev_context' allows previous context options to be included in the new set, enabling the method to build upon existing context states and facilitating more complex or layered animation setups.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Output types
- CONTEXT_OPTS
    - The output 'CONTEXT_OPTS' represents the newly created or updated set of context options, which will be used to influence subsequent animation or processing steps.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
