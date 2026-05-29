# Documentation
- Class name: VividSharpen
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The VividSharpen node enhances image clarity and sharpness by applying a sharpening algorithm. It adjusts visual details to create a more vivid and crisp appearance, suitable for post-processing tasks in image editing.

# Input types
## Required
- images
    - The 'images' parameter is the input for the sharpening process. It is critical because it determines what will be enhanced. The quality and resolution of the input image directly affect the sharpening result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- radius
    - The 'radius' parameter controls the extent of the blur effect applied before sharpening. This is an important adjustment factor that influences the degree of sharpness in the output image, allowing fine control over the final visual appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength
    - The 'strength' parameter defines the intensity of the sharpening effect. It is important because it allows users to control how aggressive the sharpening is, producing images with varying levels of detail and clarity.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The output 'images' are images with enhanced sharpness and clarity after processing by the sharpening algorithm. They are ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class VividSharpen:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'radius': ('FLOAT', {'default': 1.5, 'min': 0.01, 'max': 64.0, 'step': 0.01}), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'sharpen'
    CATEGORY = 'image/postprocessing'

    def sharpen(self, images, radius, strength):
        results = []
        if images.size(0) > 1:
            for image in images:
                image = tensor2pil(image)
                results.append(pil2tensor(vivid_sharpen(image, radius=radius, strength=strength)))
            results = torch.cat(results, dim=0)
        else:
            results = pil2tensor(vivid_sharpen(tensor2pil(images), radius=radius, strength=strength))
        return (results,)
```