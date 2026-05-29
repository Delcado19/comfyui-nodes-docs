# Documentation
- Class name: WAS_Latent_Upscale
- Category: WAS Suite/Latent/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `latent_upscale` method is designed to enhance the resolution of latent representations by applying a specified interpolation mode and scaling factor. It plays a critical role in the transformation pipeline of the WAS suite, ensuring that latent features are accurately and efficiently upscaled, thereby contributing to the overall quality of the generated output.

# Input types
## Required
- samples
    - The "samples" parameter is crucial because it holds the latent representation to be upscaled. It directly influences the node's operation by determining the input data to be upscaled.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- mode
    - The "mode" parameter defines the interpolation method used for upscaling. It is critical because it determines the algorithmic approach to increasing resolution, thereby affecting the quality of the final output.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- factor
    - The "factor" parameter specifies the scaling factor for the upscaling operation. It is a key determinant in the transformation process because it controls the degree of magnification applied to the latent samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- align
    - The "align" parameter is important because it determines whether corner-aligned scaling is used. This choice can have a subtle but observable effect on the final upscaled representation.
    - Comfy dtype: COMBO[bool]
    - Python dtype: bool

# Output types
- upscaled_samples
    - The "upscaled_samples" output contains the upscaled latent representation produced by the transformation. It is important because it represents the direct result of the node's operation, containing the upscaled features.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
