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
```
class PPFNCrossHatchNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'batch_size': ('INT', {'default': 1, 'max': 64, 'min': 1, 'step': 1}), 'width': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'height': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'resampling': (['nearest-exact', 'bilinear', 'area', 'bicubic', 'bislerp'],), 'frequency': ('FLOAT', {'default': 320.0, 'max': 1024.0, 'min': 0.001, 'step': 0.001}), 'octaves': ('INT', {'default': 12, 'max': 32, 'min': 1, 'step': 1}), 'persistence': ('FLOAT', {'default': 1.5, 'max': 2.0, 'min': 0.001, 'step': 0.001}), 'num_colors': ('INT', {'default': 16, 'max': 256, 'min': 2, 'step': 1}), 'color_tolerance': ('FLOAT', {'default': 0.05, 'max': 1.0, 'min': 0.001, 'step': 0.001}), 'angle_degrees': ('FLOAT', {'default': 45.0, 'max': 360.0, 'min': 0.0, 'step': 0.01}), 'brightness': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'contrast': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'blur': ('FLOAT', {'default': 2.5, 'max': 1024, 'min': 0, 'step': 0.01}), 'clamp_min': ('FLOAT', {'default': 0.0, 'max': 10.0, 'min': -10.0, 'step': 0.01}), 'clamp_max': ('FLOAT', {'default': 1.0, 'max': 10.0, 'min': -10.0, 'step': 0.01}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'device': (['cpu', 'cuda'],)}, 'optional': {'optional_vae': ('VAE',), 'ch_settings': ('CH_SETTINGS',)}}
    RETURN_TYPES = ('LATENT', 'IMAGE')
    RETURN_NAMES = ('latents', 'previews')
    FUNCTION = 'cross_hatch'
    CATEGORY = 'Power Noise Suite/Noise'

    def cross_hatch(self, batch_size, width, height, resampling, frequency, octaves, persistence, color_tolerance, num_colors, angle_degrees, brightness, contrast, blur, clamp_min, clamp_max, seed, device, optional_vae=None, ch_settings=None):
        if ch_settings:
            ch = ch_settings
            frequency = ch['frequency']
            octaves = ch['octaves']
            persistence = ch['persistence']
            color_tolerance = ch['color_tolerance']
            num_colors = ch['num_colors']
            angle_degrees = ch['angle_degrees']
            brightness = ch['brightness']
            contrast = ch['contrast']
            blur = ch['blur']
        cross_hatch = CrossHatchPowerFractal(width=width, height=height, frequency=frequency, octaves=octaves, persistence=persistence, num_colors=num_colors, color_tolerance=color_tolerance, angle_degrees=angle_degrees, blur=blur, clamp_min=clamp_min, clamp_max=clamp_max)
        tensors = cross_hatch(batch_size, device, seed).to(device='cpu')
        tensors = torch.cat([tensors, torch.ones(batch_size, height, width, 1, dtype=tensors.dtype, device='cpu')], dim=-1)
        if optional_vae is None:
            latents = tensors.permute(0, 3, 1, 2)
            latents = F.interpolate(latents, size=(height // 8, width // 8), mode=resampling)
            return ({'samples': latents}, tensors)
        encoder = nodes.VAEEncode()
        latents = []
        for tensor in tensors:
            tensor = tensor.unsqueeze(0)
            latents.append(encoder.encode(optional_vae, tensor)[0]['samples'])
        latents = torch.cat(latents)
        return ({'samples': latents}, tensors)
```