# Documentation
- Class name: LatentInterpolate
- Category: latent/advanced
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentInterpolate node is designed to interpolate between two sets of latent samples. It achieves this by computing a weighted sum of the input samples, with weights determined by a specified ratio. This node is particularly useful for generating smooth transitions between different latent representations, which is critical in applications such as image morphing or style transfer.

# Input types
## Required
- samples1
    - The first set of latent samples to be interpolated. These samples serve as the starting point of the interpolation process and are essential for defining the initial state of the transition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- samples2
    - The second set of latent samples to be used for interpolation. These samples represent the endpoint of the interpolation and are essential for determining the final state of the transition.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- ratio
    - The ratio parameter controls the degree of interpolation between the two sets of samples. Values close to 0 produce output closer to samples1, while values close to 1 produce output closer to samples2.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - The output of the LatentInterpolate node is a set of interpolated latent samples. These samples blend the input samples based on the specified ratio, providing a seamless transition between the two.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
