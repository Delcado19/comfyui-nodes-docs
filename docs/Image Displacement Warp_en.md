# Documentation
- Class name: WAS_Image_Displacement_Warp
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Displacement_Warp node is designed to apply a displacement warp effect to a given set of images. It uses a displacement map and an amplitude factor to determine the degree of warping, resulting in visually distorted outputs that can be used for various creative and technical applications.

# Input types
## Required
- images
    - The input images to which the displacement warp effect is applied. These images serve as the base layer for the transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- displacement_maps
    - The displacement map indicates the direction and intensity of the warp effect applied to the input images. Each pixel value in the map corresponds to a displacement vector.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- amplitude
    - The amplitude parameter controls the intensity of the displacement effect. Higher values result in more pronounced warping, while lower values produce a more subtle effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- images
    - The output images are the result of applying the displacement warp effect to the input images, using the specified displacement map and amplitude.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Displacement_Warp:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'displacement_maps': ('IMAGE',), 'amplitude': ('FLOAT', {'default': 25.0, 'min': -4096, 'max': 4096, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'displace_image'
    CATEGORY = 'WAS Suite/Image/Transform'

    def displace_image(self, images, displacement_maps, amplitude):
        WTools = WAS_Tools_Class()
        displaced_images = []
        for i in range(len(images)):
            img = tensor2pil(images[i])
            if i < len(displacement_maps):
                disp = tensor2pil(displacement_maps[i])
            else:
                disp = tensor2pil(displacement_maps[-1])
            disp = self.resize_and_crop(disp, img.size)
            displaced_images.append(pil2tensor(WTools.displace_image(img, disp, amplitude)))
        displaced_images = torch.cat(displaced_images, dim=0)
        return (displaced_images,)

    def resize_and_crop(self, image, target_size):
        (width, height) = image.size
        (target_width, target_height) = target_size
        aspect_ratio = width / height
        target_aspect_ratio = target_width / target_height
        if aspect_ratio > target_aspect_ratio:
            new_height = target_height
            new_width = int(new_height * aspect_ratio)
        else:
            new_width = target_width
            new_height = int(new_width / aspect_ratio)
        image = image.resize((new_width, new_height))
        left = (new_width - target_width) // 2
        top = (new_height - target_height) // 2
        right = left + target_width
        bottom = top + target_height
        image = image.crop((left, top, right, bottom))
        return image
```