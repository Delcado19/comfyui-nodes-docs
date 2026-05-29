# Documentation
- Class name: PPFNLinearCrossHatchNode
- Category: Power Noise Suite/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node aims to generate complex cross-line patterns with dynamic fractal effects for high-detail images, controlling noise frequency, persistence, and other properties to create rich visuals. It adjusts brightness, contrast, and supports optional integration with VAE models.

# Input types
## Required
- batch_size
- Determines the number of images generated per operation, affecting processing scale and throughput.
    - Comfy dtype: INT
    - Python dtype: int
- width
- Image width impacts canvas size and detail capture.
    - Comfy dtype: INT
    - Python dtype: int
- height
- Height parameter is crucial for vertical size and overall resolution.
    - Comfy dtype: INT
    - Python dtype: int
- resampling
- Re-sampling method ensures image quality during scaling or adjustment.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- frequency
- Frequency parameter controls line density, defining pattern complexity and texture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gain
- Gain adjusts noise amplitude, affecting pattern prominence.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
- Angle degrees define line direction, influencing structural detail.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
- Persistence controls fractal complexity and detail across scales.
    - Comfy dtype: FLOAT
    - Python dtype: float
- add_noise
- Adding noise introduces randomness, creating more natural textures.
    - Comfy dtype: FLOAT
    - Python dtype: float
- linear_range
- Linear range maps noise values, affecting line propagation.
    - Comfy dtype: INT
    - Python dtype: int
- angle_degrees
- Angle degree specifies line direction, defining overall structure.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
- Brightness adjusts image overall brightness, enabling broader visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
- Contrast controls the difference between bright and dark areas, enhancing visual depth.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
- Seed ensures reproducibility and consistency of random patterns.
    - Comfy dtype: INT
    - Python dtype: int
- device
- Specifies the device for computation, important for performance and hardware compatibility.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
## Optional
- optional_vae
- Optional VAE integration enhances generated images with additional complexity.
    - Comfy dtype: VAE
    - Python dtype: VAE

# Output types
- latents
Optional variable encoding allows further processing or analysis of generated images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
Preview provides a scaled-down version for quick visualization and review.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
