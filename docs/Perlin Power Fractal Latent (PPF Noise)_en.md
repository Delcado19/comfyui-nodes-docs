# Documentation
- Class name: PPFNoiseNode
- Category: Power Noise Suite/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

PPFNoiseNode aims to generate fractal noise patterns using Perlin noise, with adjustable parameters to control the generation process, resulting in complex visual textures. It provides a method to produce a batch of noise tensors with adjustable parameters to control the generation process, thereby producing diverse noise maps.

# Input types
## Required
- batch_size
    - Determines the number of noise maps generated in a single operation, affecting the overall throughput and diversity of the output.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - Specifies the width of the generated noise map, affecting the resolution and level of detail of the texture.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Defines the height of the noise map, which directly relates to the vertical dimension of the output texture.
    - Comfy dtype: INT
    - Python dtype: int
- X
    - Controls the X coordinate offset of noise sampling, shifting the pattern along the X axis, contributing to overall variation in the noise map.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y
    - Adjusts the Y coordinate offset of noise sampling, affecting the position of the pattern along the Y axis, contributing to output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Z
    - Affects the Z coordinate offset of noise sampling, adding depth to the noise pattern and introducing temporal evolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- evolution
    - Regulates the temporal evolution of the noise pattern, creating dynamic changes in the output over a sequence of frames.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame
    - Represents the current frame in the evolution sequence, affecting the progression of the noise pattern over time.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - Adjusts the frequency ratio of noise, affecting the granularity and level of detail of the generated texture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
    - Specifies the number of octaves in the fractal generation process, determining the complexity and richness of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
    - Affects the persistence of each octave in the fractal, controlling amplitude reduction and the overall smoothness of the noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lacunarity
    - Adjusts the frequency increase between successive octaves, affecting the variation and contrast of the noise pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- exponent
    - Regulates the exponent applied to the noise value, affecting the overall intensity and contrast of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Adjusts the overall brightness of the noise, allowing variation from dark to light in the generated texture.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Affects the contrast of the noise, enhancing or reducing the difference between dark and light areas in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_min
    - Sets the minimum value of the noise, preventing the result from being too dark or negative.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_max
    - Defines the maximum value of the noise, ensuring the output does not exceed a certain intensity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - Provides a seed for random number generation, ensuring reproducibility and consistency of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- device
    - Selects the computing device based on performance and resource requirements, can be CPU or GPU.
    - Comfy dtype: COMBO['cpu', 'cuda']
    - Python dtype: str

# Output types
- latents
    - Contains the noise map generated in latent form, which can be further processed or used as input to other nodes.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - Provides a visual representation of the generated noise map, allowing quick evaluation of the noise pattern and its properties.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
