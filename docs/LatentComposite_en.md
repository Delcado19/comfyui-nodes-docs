# Documentation
- Class name: LatentComposite
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentComposite node is designed to blend latent representations of two different sample sets. It performs a compositing operation, either normal or feathered, seamlessly integrating one sample set into another based on specified coordinates and blending method.

# Input types
## Required
- samples_to
    - The 'samples_to' parameter represents the base latent samples onto which 'samples_from' is composited. It is critical as it determines the structure and dimensions of the final output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples_from
    - The 'samples_from' parameter defines the latent samples to be composited onto 'samples_to'. Its choice significantly affects the final composition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- x
    - The 'x' parameter specifies the horizontal starting coordinate for the compositing operation. Its value directly influences the position of 'samples_from' within 'samples_to'.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The 'y' parameter determines the vertical starting coordinate for the compositing operation. It is essential for the placement of 'samples_from' within 'samples_to'.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- feather
    - The 'feather' parameter controls the smoothness of the edges of the compositing operation. A non-zero value produces a feathered or gradual transition between the two sample sets.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples_out
    - The 'samples_out' parameter is the result of the compositing operation, representing the merged latent samples from 'samples_to' and 'samples_from'.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
