# Documentation
- Class name: LatentUpscaleBy
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ‘LatentUpscaleBy’ node aims to increase the resolution of latent representations by using various upsampling methods. It plays a key role in the preprocessing pipeline, especially for applications that require higher-fidelity latent vectors. The node’s goal is to improve latent data quality without altering its inherent characteristics.

# Input types
## Required
- samples
- The ‘samples’ parameter is crucial because it contains the latent representations to be upsampled. It significantly influences the node’s operation and final output, determining the base data for upsampling.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- upscale_method
- The ‘upscale_method’ parameter determines the algorithm used to upsample latent samples. It is a key factor for output quality and style, offering multiple options to meet different needs.
    - Comfy dtype: STRING
    - Python dtype: str
- scale_by
- The ‘scale_by’ parameter specifies the scaling factor during upsampling. It is essential for controlling the degree of upsampling applied to latent samples, directly affecting the final output resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- upscaled_samples
- The ‘upscaled_samples’ output represents the latent representation after upsampling. It is important because it contains the node’s primary function, providing enhanced latent vectors ready for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
