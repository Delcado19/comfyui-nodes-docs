# Documentation
- Class name: PPFNPowerLawNoise
- Category: Power Noise Suite/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node is designed to generate various types of power-law noise, applicable to texture generation, stochastic processes, noise-based art, and more. It provides a flexible interface for specifying parameters such as noise type, scale, and alpha exponent, allowing users to tailor the output to their specific needs.

# Input types
## Required
- batch_size
    - This parameter determines the number of noise images generated in a single batch, affecting computational efficiency and the suitability of the results.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the noise image determines the horizontal resolution, affecting the level of detail and the overall size of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Similar to width, the height parameter sets the vertical resolution of the noise image, affecting the size and detail of the output.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The selected noise type determines the statistical properties of the generated noise, which is critical for applications that depend on specific noise characteristics.
    - Comfy dtype: COMBO
    - Python dtype: str
- scale
    - The scale parameter adjusts the overall amplitude of the noise, controlling the visibility and intensity of the noise pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_exponent
    - The alpha exponent shapes the power-law distribution of the noise, affecting the frequency content and the "color" of the noise (e.g., from white to Brownian noise).
    - Comfy dtype: FLOAT
    - Python dtype: float
- device
    - Specifying the device ('cpu' or 'cuda') determines the hardware on which the computation will be performed, affecting performance and compatibility.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- resampling
    - The resampling parameter affects how the noise image is interpolated when resizing, impacting the quality and appearance of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- modulator
    - The modulation parameter adds modulation to the noise, enabling more complex patterns and variations in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - By setting a seed, users can ensure reproducibility of the noise generation process, which is important for experimental and research purposes.
    - Comfy dtype: INT
    - Python dtype: int
- optional_vae
    - When provided, the optional_vae parameter allows integration of a Variational Autoencoder (VAE), enabling more sophisticated noise manipulation and generation.
    - Comfy dtype: VAE
    - Python dtype: VAE

# Output types
- latents
    - The latent output contains the noise images in latent space representation, which can be further processed or used as input to other nodes.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - The preview output provides a visual representation of the generated noise, allowing users to quickly evaluate and compare different noise settings and parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
