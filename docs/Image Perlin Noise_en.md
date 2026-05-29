# Documentation
- Class name: WAS_Image_Perlin_Noise
- Category: WAS Suite/Image/Generate/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Perlin_Noise node generates Perlin noise patterns for use in various graphics applications to create natural textures. It leverages the Python Imaging Library to produce procedurally noisy images based on specified parameters such as width, height, scale, octaves, persistence, and an optional random seed. This node is valuable for users seeking to introduce organic and varied textures into their projects without external image assets.

# Input types
## Required
- width
    - The 'Width' parameter determines the horizontal resolution of the generated noise image. It is a critical factor in defining the output dimensions and influences how the noise pattern is displayed and used in graphics applications.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'Height' parameter sets the vertical resolution of the noise image. Together with 'Width', it establishes the image canvas on which the Perlin noise will be rendered, affecting the scale at which noise details are viewed.
    - Comfy dtype: INT
    - Python dtype: int
- scale
    - The 'Scale' parameter adjusts the size of Perlin noise cells. It changes the density of the noise pattern, with higher values producing more intricate and smaller noise cells, while lower values yield sparser and larger cells.
    - Comfy dtype: INT
    - Python dtype: int
- octaves
    - The 'Octaves' parameter controls the number of frequency levels used to construct the noise pattern. More octaves add complexity and detail to the noise, creating more natural and varied textures.
    - Comfy dtype: INT
    - Python dtype: int
- persistence
    - The 'Persistence' parameter defines the rate at which amplitude decreases between successive octaves. It affects the contrast between different noise layers and contributes to the overall texture character.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- seed
    - The 'Seed' parameter is an optional integer used to initialize the random number generator, ensuring reproducible noise patterns. It allows consistent results when the same seed value is used.
    - Comfy dtype: INT
    - Python dtype: Optional[int]

# Output types
- image
    - The 'Image' output provides the generated Perlin noise as an image. It can be further manipulated or used directly for texture purposes in graphics applications.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Perlin_Noise:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'width': ('INT', {'default': 512, 'max': 2048, 'min': 64, 'step': 1}), 'height': ('INT', {'default': 512, 'max': 2048, 'min': 64, 'step': 1}), 'scale': ('INT', {'default': 100, 'max': 2048, 'min': 2, 'step': 1}), 'octaves': ('INT', {'default': 4, 'max': 8, 'min': 0, 'step': 1}), 'persistence': ('FLOAT', {'default': 0.5, 'max': 100.0, 'min': 0.01, 'step': 0.01}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'perlin_noise'
    CATEGORY = 'WAS Suite/Image/Generate/Noise'

    def perlin_noise(self, width, height, scale, octaves, persistence, seed):
        WTools = WAS_Tools_Class()
        image = WTools.perlin_noise(width, height, octaves, persistence, scale, seed)
        return (pil2tensor(image),)
```