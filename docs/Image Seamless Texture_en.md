# Documentation
- Class name: WAS_Image_Make_Seamless
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The make_seamless method processes a set of images and converts them into seamless textures. It achieves this by applying blending techniques to the edges of the images, allowing the processed images to be tiled without visible seams. This feature is particularly useful for creating textures that can be used in various graphics applications such as game development, compositing, and 3D modeling.

# Input types
## Required
- images
    - Input images to be processed into seamless textures. These are the raw materials that the node will process to create seamless output.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
- blending
    - The blend factor determines the degree of blending to apply to the image edges. Higher values produce smoother transitions but also reduce the image size.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- tiled
    - The tiled parameter indicates whether the output should be a single seamless image or a 2x2 tiled version for better visualization of the seamless effect.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- tiles
    - The number of tiles in each direction (horizontal and vertical) in the tiled output. Used when the tiled parameter is set to true.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The resulting processed seamless texture images. These images can be tiled without visible seams, making them suitable for use in various graphics applications.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Make_Seamless:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'blending': ('FLOAT', {'default': 0.4, 'max': 1.0, 'min': 0.0, 'step': 0.01}), 'tiled': (['true', 'false'],), 'tiles': ('INT', {'default': 2, 'max': 6, 'min': 2, 'step': 2})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'make_seamless'
    CATEGORY = 'WAS Suite/Image/Process'

    def make_seamless(self, images, blending, tiled, tiles):
        WTools = WAS_Tools_Class()
        seamless_images = []
        for image in images:
            seamless_images.append(pil2tensor(WTools.make_seamless(tensor2pil(image), blending, tiled, tiles)))
        seamless_images = torch.cat(seamless_images, dim=0)
        return (seamless_images,)
```