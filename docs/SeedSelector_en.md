
# Documentation
- Class name: SeedSelector
- Category: Art Venture/Utils
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SeedSelector node is designed to select a seed value for procedural generation tasks, allowing users to switch between random and fixed seed modes. This flexibility enables reproducibility of results through fixed seeds, as well as diverse outcomes through random seeds.

# Input types
## Required
- mode
    - Determines whether seed selection is random or fixed, affecting the reproducibility and variability of generation results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The seed value used when the mode is set to random, influencing the procedural generation process.
    - Comfy dtype: INT
    - Python dtype: int
- fixed_seed
    - The seed value used when the mode is set to fixed, ensuring reproducibility of generation results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- seed
    - The selected seed value, which may be fixed or randomly determined depending on the mode, used for procedural generation.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - Reroute

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
