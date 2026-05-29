# Documentation
- Class name: ResizeImageSDXL
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

ResizeImageSDXL node aims to adjust and upscale image dimensions using multiple methods. It provides functionality to resize images while maintaining aspect ratio and applying different upscaling techniques to improve quality.

# Input types
## Required
- image
    - Image parameters are crucial for the node's operation because they are the inputs to be resized and upscaled. They directly affect the execution process and the final output image's quality and dimensions.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- upscale_method
    - The upscale_method parameter determines the algorithm used to upscale the image. It is essential for the quality of the resized image and allows the use of different interpolation techniques.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area', 'bicubic']
    - Python dtype: str
- crop
    - The crop parameter specifies whether and how the image is cropped after resizing. It is important for controlling the final dimensions and aspect ratio of the output image.
    - Comfy dtype: COMBO['disabled', 'center']
    - Python dtype: str

# Output types
- resized_image
    - The resized_image output represents the processed image after resizing and upscaling. It is the main result of the node operation and reflects the impact of the chosen method on image size and quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ResizeImageSDXL:
    crop_methods = ['disabled', 'center']
    upscale_methods = ['nearest-exact', 'bilinear', 'area', 'bicubic']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'upscale_method': (s.upscale_methods,), 'crop': (s.crop_methods,)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'resize'
    CATEGORY = 'Mikey/Image'

    def upscale(self, image, upscale_method, width, height, crop):
        samples = image.movedim(-1, 1)
        s = comfy.utils.common_upscale(samples, width, height, upscale_method, crop)
        s = s.movedim(1, -1)
        return (s,)

    def resize(self, image, upscale_method, crop):
        (w, h) = find_latent_size(image.shape[2], image.shape[1])
        img = self.upscale(image, upscale_method, w, h, crop)[0]
        return (img,)
```