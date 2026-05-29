# Documentation
- Class name: PPFNoiseSettings
- Category: Power Noise Suite/Sampling/Settings
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node configures and generates settings for power fractal noise, a procedural noise type used in computer graphics and simulation. It encapsulates parameters affecting noise characteristics, ensuring high control over the noise generation process.

# Input types
## Required
- X
    - X coordinate input is essential for defining the spatial position within the noise function. It affects how the noise pattern is generated and evolves on the X axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Y
    - Y coordinate input is essential for determining the vertical position within the noise function, affecting how the noise pattern is generated and evolves on the Y axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Z
    - Z coordinate input is necessary for specifying the depth position within the noise function, affecting how the noise pattern is generated and evolves on the Z axis.
    - Comfy dtype: FLOAT
    - Python dtype: float
- evolution
    - Evolution parameter controls the noise pattern progression over time, giving the noise landscape dynamic and evolving characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frame
    - Frame input initializes noise generation, ensuring the noise pattern starts at a specific point and evolves consistently.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - Scale parameter adjusts the overall size and frequency of the noise pattern, affecting the granularity and detail level of the generated noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- octaves
    - Octaves determine the number of frequency layers in the noise, contributing to the complexity and richness of the noise pattern.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
    - Persistence affects the smoothness of noise transitions, with higher values leading to smoother gradients and lower values causing more abrupt changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lacunarity
    - Lacunarity adjusts the spacing between successive frequency layers, affecting the overall structure and appearance of the noise pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- exponent
    - Exponential parameter modifies the contrast and sharpness of the noise, with higher values increasing contrast and creating more defined edges.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness adjusts the overall intensity of the noise, with positive values increasing visibility and negative values decreasing it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Contrast parameter controls the difference between the brightest and darkest parts of the noise, enhancing or reducing the overall visual impact.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ppf_settings
    - Output provides a comprehensive set of power fractal noise settings, encapsulating all configured parameters that can be used to generate and manipulate the noise pattern accordingly.
    - Comfy dtype: PPF_SETTINGS
    - Python dtype: Dict[str, float]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
