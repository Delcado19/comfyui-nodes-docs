# Documentation
- Class name: BatchedContextOptionsNode
- Category: Animate Diff 🎭🅐🅓/context opts
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

BatchedContextOptionsNode is designed to manage and generate context options for animation sequences. It provides a structured approach to defining the length, start percentage, and guaranteed steps of each context, ensuring coherence and efficiency in the animation workflow.

# Input types
## Required
- context_length
    - context_length parameter specifies the duration of the context window, which is crucial for determining the scope of each animation segment. It directly affects the node's ability to segment animation timelines.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- start_percent
    - start_percent parameter specifies the starting point of a context within an animation sequence, allowing fine-tuning of the initial focus. It plays an important role in the overall animation strategy by controlling the start position of each context.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guarantee_steps
    - guarantee_steps parameter ensures a minimum number of steps per context, providing protection against premature termination. It is important for maintaining the integrity of the animation sequence.
    - Comfy dtype: INT
    - Python dtype: int
- prev_context
    - prev_context parameter allows continuation or modification of existing context options, enabling the node to build upon previous states. This is crucial for maintaining continuity in the animation process.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Output types
- CONTEXT_OPTS
    - OUTPUT_CONTEXT_OPTS represents the set of context options generated or updated by the node. These options are critical for guiding subsequent steps in the animation process.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: ContextOptionsGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
