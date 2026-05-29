# Timesteps Conditioning 🎭🅐🅓
## Documentation
- Class name: ADE_TimestepsConditioning
- Category: Animate Diff 🎭🅐🅓/conditioning
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node focuses on adjusting the application timing of specific conditions during animation or diffusion processes, allowing precise control over when certain effects or modifications are introduced during the animation progression. This makes the application of conditions more dynamic and detailed, thereby improving the overall quality and flexibility of the generated content.

## Input types
### Required
- start_percent
    - Specifies the starting point for applying a given condition (as a percentage of the total animation length), allowing precise timing control.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_percent
    - Defines the ending point for condition application (as a percentage of the total animation length), enabling effects to be tailored to specific stages of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Output types
- timesteps_cond
    - Comfy dtype: TIMESTEPS_COND
    - Temporal adjustment of conditions, encapsulated as a specific type, representing condition scheduling throughout the entire animation or diffusion process.
    - Python dtype: TimestepsCond

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
