# Create Sigma Schedule 🎭🅐🅓
## Documentation
- Class name: ADE_SigmaSchedule
- Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_SigmaSchedule node is designed to generate a sigma schedule based on a given beta schedule. It abstracts the complexity of sigma schedule creation, providing an easy way to obtain a sigma schedule that matches a specific model sampling type and configuration.

## Input types
### Required
- beta_schedule
    - Specify the beta schedule used to generate the sigma schedule. This parameter is crucial as it determines the underlying configuration from which the sigma schedule will be derived.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: BetaSchedules.ALIAS_ACTIVE_LIST

## Output types
- sigma_schedule
    - Comfy dtype: SIGMA_SCHEDULE
    - Output a sigma schedule object, which is essential for defining the noise level process in diffusion-based generative models.
    - Python dtype: SigmaSchedule (custom type from the animatediff package)

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
