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
```
class PPFNoiseSettings:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'X': ('FLOAT', {'default': 0, 'max': 99999999, 'min': -99999999, 'step': 0.01}), 'Y': ('FLOAT', {'default': 0, 'max': 99999999, 'min': -99999999, 'step': 0.01}), 'Z': ('FLOAT', {'default': 0, 'max': 99999999, 'min': -99999999, 'step': 0.01}), 'evolution': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': 0.0, 'step': 0.01}), 'frame': ('INT', {'default': 0, 'max': 99999999, 'min': 0, 'step': 1}), 'scale': ('FLOAT', {'default': 5, 'max': 2048, 'min': 2, 'step': 0.01}), 'octaves': ('INT', {'default': 8, 'max': 8, 'min': 1, 'step': 1}), 'persistence': ('FLOAT', {'default': 1.5, 'max': 23.0, 'min': 0.01, 'step': 0.01}), 'lacunarity': ('FLOAT', {'default': 2.0, 'max': 99.0, 'min': 0.01, 'step': 0.01}), 'exponent': ('FLOAT', {'default': 4.0, 'max': 38.0, 'min': 0.01, 'step': 0.01}), 'brightness': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.01}), 'contrast': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.01})}}
    RETURN_TYPES = ('PPF_SETTINGS',)
    RETURN_NAMES = ('ppf_settings',)
    FUNCTION = 'power_fractal_settings'
    CATEGORY = 'Power Noise Suite/Sampling/Settings'

    def power_fractal_settings(self, X, Y, Z, evolution, frame, scale, octaves, persistence, lacunarity, exponent, brightness, contrast):
        return ({'X': X, 'Y': Y, 'Z': Z, 'evolution': evolution, 'frame': frame, 'scale': scale, 'octaves': octaves, 'persistence': persistence, 'lacunarity': lacunarity, 'exponent': exponent, 'brightness': brightness, 'contrast': contrast},)
```