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
```
class PPFNLinearCrossHatchNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'batch_size': ('INT', {'default': 1, 'max': 64, 'min': 1, 'step': 1}), 'width': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'height': ('INT', {'default': 512, 'max': 8192, 'min': 64, 'step': 1}), 'resampling': (['nearest-exact', 'bilinear', 'area', 'bicubic', 'bislerp'],), 'frequency': ('FLOAT', {'default': 320.0, 'max': 1024.0, 'min': 0.001, 'step': 0.001}), 'gain': ('FLOAT', {'default': 0.25, 'max': 1.0, 'min': 0.0, 'step': 0.001}), 'octaves': ('INT', {'default': 12, 'max': 32, 'min': 1, 'step': 1}), 'persistence': ('FLOAT', {'default': 1.5, 'max': 2.0, 'min': 0.001, 'step': 0.001}), 'add_noise': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': 0.0, 'step': 0.001}), 'linear_range': ('INT', {'default': 16, 'max': 256, 'min': 2, 'step': 1}), 'linear_tolerance': ('FLOAT', {'default': 0.05, 'max': 1.0, 'min': 0.001, 'step': 0.001}), 'angle_degrees': ('FLOAT', {'default': 45.0, 'max': 360.0, 'min': 0.0, 'step': 0.01}), 'brightness': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'contrast': ('FLOAT', {'default': 0.0, 'max': 1.0, 'min': -1.0, 'step': 0.001}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615}), 'device': (['cpu', 'cuda'],)}, 'optional': {'optional_vae': ('VAE',)}}
    RETURN_TYPES = ('LATENT', 'IMAGE')
    RETURN_NAMES = ('latents', 'previews')
    FUNCTION = 'cross_hatch'
    CATEGORY = 'Power Noise Suite/Noise'

    def cross_hatch(self, batch_size, width, height, resampling, frequency, gain, octaves, persistence, add_noise, linear_range, linear_tolerance, angle_degrees, brightness, contrast, seed, device, optional_vae=None):
        cross_hatch = CrossHatchLinearPowerFractal(width=width, height=height, frequency=frequency, gain=gain, octaves=octaves, persistence=persistence, add_noise_tolerance=add_noise, mapping_range=linear_range, angle_degrees=angle_degrees, brightness=brightness, contrast=contrast)
        tensors = cross_hatch(batch_size, device, seed)
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