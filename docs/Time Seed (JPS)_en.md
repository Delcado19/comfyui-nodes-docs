
# Documentation
- Class name: Time Seed (JPS)
- Category: JPS Nodes/Text
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Time Seed node generates a unique seed value based on the current time, or optionally specifies a fixed seed value. This function is crucial for ensuring the reproducibility of processes that require randomization, as it provides a way to initialize the random number generator with a consistent starting point.

# Input types
## Required
- fixed_seed
    - Specify a fixed seed value to replace the seed generated based on the current time. If set to 0, a time-based seed will be generated, ensuring variation with each execution.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - The generated seed value can be based on the current time or a specified fixed seed value. This seed value is used to initialize the random number generator.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
