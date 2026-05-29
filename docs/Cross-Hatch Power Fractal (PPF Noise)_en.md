# Documentation
- Class name: PPFNCrossHatchNode
- Category: Power Noise Suite/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node is designed to generate complex cross-line patterns with kinetic fractal effects, providing an advanced method for creating visually complex and detailed images. It controls the complexity, color, and overall aesthetic of noise patterns by manipulating various parameters, offering diverse outputs for different visual applications.

# Input types
## Required
- batch_size
    - This parameter determines the number of images generated in a single operation, directly affecting the scale and throughput of the node's output.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the image determines the horizontal resolution and plays a key role in defining the canvas size of the cross-line patterns.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Similar to width, the height parameter sets the vertical resolution, which is essential for establishing the dimensions of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- frequency
    - The frequency parameter controls the density of the cross-lines; higher values result in more complex patterns and greater visual complexity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
    - This parameter affects the level of detail and complexity in the fractal generation process; higher octaves produce more detailed and diverse patterns.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
    - Persistence adjusts the amplitude of each successive octave, affecting the smoothness and overall visual texture of the generated pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_tolerance
    - Color tolerance refines the mapping of noise values to colors, ensuring a more nuanced and diverse color palette for the cross-line patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- angle_degrees
    - The angle parameter sets the direction of the cross-lines, which is fundamental in defining the overall aesthetic and orientation of the pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness adjusts the overall luminance of the generated image, allowing for variations in lightness and darkness of the cross-line patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Contrast affects the dynamic range of the generated image, influencing the vibrancy and depth of the cross-line patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur
    - The blur parameter applies a smoothing effect to the image, softening edges and creating a more subtle and blended appearance for the cross-lines.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latents
    - The latent output provides a compressed representation of the generated image, suitable for further processing or analysis within the kinetic noise suite.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - The preview provides a scaled-down version of the generated image, allowing quick visual inspection and evaluation of the cross-line patterns.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
