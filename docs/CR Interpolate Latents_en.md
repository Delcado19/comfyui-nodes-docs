# Documentation
- Class name: CR_InterpolateLatents
- Category: Comfyroll/Animation/Interpolate
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_InterpolateLatents is a node for performing interpolation between two latent representations, providing smooth transitions between states. This node is essential for creating seamless animations or transformations within a given data space.

# Input types
## Required
- latent1
    - The first latent representation used as the starting point of the interpolation process. It is crucial for defining the initial state of the animation or transformation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latent2
    - The second latent representation serving as the endpoint of the interpolation. It defines the final state that the interpolation aims to achieve.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- weight
    - The weight parameter influences the degree of interpolation between the two latent states. It is essential for controlling the speed and range of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - The interpolation method determines the algorithm used to transition between latent states. It is a key factor in the type of interpolation performed.
    - Comfy dtype: COMBO['lerp']
    - Python dtype: str

# Output types
- LATENT
    - The output latent state produced by the interpolation process, representing a blend of the input latent states.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - A URL linking to documentation for further assistance and understanding of the interpolation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
