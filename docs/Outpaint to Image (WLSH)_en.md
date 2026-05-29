# Documentation
- Class name: WLSH_Outpaint_To_Image
- Category: WLSH Nodes/inpainting
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node expands the image in a specified direction and generates a corresponding mask, enhancing image manipulation and expansion capabilities to meet various application scenarios.

# Input types
## Required
- image
    - The source image is critical for the inpainting process, serving as the base layer for expansion and mask generation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- direction
    - The direction parameter determines the direction of image expansion, affecting the overall structure and composition of the output.
    - Comfy dtype: COMBO
    - Python dtype: str
- pixels
    - The pixel count determines the degree of image expansion, directly impacting the final dimensions and the scope of inpainting.
    - Comfy dtype: INT
    - Python dtype: int
- mask_padding
    - Mask padding is essential for defining the expanded area around the image, ensuring a smooth transition between the original portion and the new region.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output image represents the result of inpainting, where the original image has been expanded according to the specified direction and pixel count.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask corresponds to the inpainted region, providing a binary representation that distinguishes the original portion from the expanded portion.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Outpaint_To_Image:
    directions = ['left', 'right', 'up', 'down']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'direction': (s.directions,), 'pixels': ('INT', {'default': 128, 'min': 32, 'max': 512, 'step': 32}), 'mask_padding': ('INT', {'default': 12, 'min': 0, 'max': 64, 'step': 4})}}
    RETURN_TYPES = ('IMAGE', 'MASK')
    FUNCTION = 'outpaint'
    CATEGORY = 'WLSH Nodes/inpainting'

    def convert_image(self, im, direction, mask_padding):
        (width, height) = im.size
        im = im.convert('RGBA')
        alpha = Image.new('L', (width, height), 255)
        im.putalpha(alpha)
        return im

    def outpaint(self, image, direction, mask_padding, pixels):
        image = tensor2pil(image)
        image = self.convert_image(image, direction, mask_padding)
        if direction == 'right':
            border = (0, 0, pixels, 0)
            new_image = ImageOps.expand(image, border=border, fill=(0, 0, 0, 0))
        elif direction == 'left':
            border = (pixels, 0, 0, 0)
            new_image = ImageOps.expand(image, border=border, fill=(0, 0, 0, 0))
        elif direction == 'up':
            border = (0, pixels, 0, 0)
            new_image = ImageOps.expand(image, border=border, fill=(0, 0, 0, 0))
        elif direction == 'down':
            border = (0, 0, 0, pixels)
            new_image = ImageOps.expand(image, border=border, fill=(0, 0, 0, 0))
        image = new_image.convert('RGB')
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        if 'A' in new_image.getbands():
            mask = np.array(new_image.getchannel('A')).astype(np.float32) / 255.0
            mask = 1.0 - torch.from_numpy(mask)
        else:
            mask = torch.zeros((64, 64), dtype=torch.float32, device='cpu')
        return (image, mask)
```