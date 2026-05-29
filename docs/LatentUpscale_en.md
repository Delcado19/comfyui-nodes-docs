# Documentation
- Class name: LatentUpscale
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

LatentUpscale node aims to improve the resolution of input latent samples through different upscaling methods, thereby enhancing the quality and details of generated images. It plays a key role in the image generation pipeline by providing high-resolution outputs that can be further processed or used for downstream tasks.

# Input types
## Required
- samples
    - The “samples” parameter is crucial because it provides the latent representation that the node will upscale. It directly affects the quality and resolution of the final output, determining the starting point of the upscaling process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- upscale_method
    - The “upscale_method” parameter determines the algorithm used to upscale the latent samples. It significantly affects the efficiency and visual effect of the upscaling process, providing different levels of detail and smoothness for the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- width
    - The “width” parameter specifies the desired width of the upscaled output. It plays a key role in determining the aspect ratio and size of the final image, thereby affecting the overall aesthetics and composition.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The “height” parameter sets the target height of the upscaled image. It works together with the “width” parameter to establish the image dimensions, which is essential for achieving the desired visual scale and proportion.
    - Comfy dtype: INT
    - Python dtype: int
- crop
    - The “crop” parameter decides how the node handles centering of the upscaled image. It affects the positioning and composition of the output, ensuring that the generated image is correctly aligned and focused.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- samples
    - The “samples” output contains the upscaled latent representation, now with higher resolution and details. This output is very important because it serves as the basis for subsequent image processing or analysis steps.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class LatentUpscale:
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic', 'bislerp']
    crop_methods = ['disabled', 'center']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'upscale_method': (s.upscale_methods,), 'width': ('INT', {'default': 512, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 512, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'crop': (s.crop_methods,)}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'upscale'
    CATEGORY = 'latent'

    def upscale(self, samples, upscale_method, width, height, crop):
        if width == 0 and height == 0:
            s = samples
        else:
            s = samples.copy()
            if width == 0:
                height = max(64, height)
                width = max(64, round(samples['samples'].shape[3] * height / samples['samples'].shape[2]))
            elif height == 0:
                width = max(64, width)
                height = max(64, round(samples['samples'].shape[2] * width / samples['samples'].shape[3]))
            else:
                width = max(64, width)
                height = max(64, height)
            s['samples'] = comfy.utils.common_upscale(samples['samples'], width // 8, height // 8, upscale_method, crop)
        return (s,)
```