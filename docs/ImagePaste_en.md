# Documentation
- Class name: ImagePaste
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The ImagePaste node is designed to seamlessly integrate a foreground image onto a specified position on a background image. It achieves this by converting the tensor representation of images to PIL images, manipulating the alpha channel for transparency, and pasting the foreground onto the background at exact coordinates. This node is essential for image compositing tasks requiring precise control over image placement.

# Input types
## Required
- background_image
    - The background image is where the foreground will be pasted. It serves as the canvas for the composite and is critical to the final appearance of the output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- foreground_image
    - The image to be placed on the background image. It is important because it defines the subject or element that will visually stand out in the final image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- x_position
    - The horizontal position on the background where the top-left corner of the foreground image will be placed. It is important because it determines the specific placement of the image within the composition.
    - Comfy dtype: INT
    - Python dtype: int
- y_position
    - The vertical position on the background where the top-left corner of the foreground image will be placed. It works together with x_position to set the exact location for pasting the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The resulting image after pasting the foreground onto the background at the specified position. It represents the final composite and is the primary output of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ImagePaste:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'background_image': ('IMAGE',), 'foreground_image': ('IMAGE',), 'x_position': ('INT', {'default': 0, 'min': -10000, 'max': 10000}), 'y_position': ('INT', {'default': 0, 'min': -10000, 'max': 10000})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('image',)
    FUNCTION = 'paste'
    CATEGORY = 'Mikey/Image'

    def tensor2pil(self, image):
        image_np = np.clip(255.0 * image.cpu().numpy().squeeze(), 0, 255).astype(np.uint8)
        if image_np.shape[0] == 4:
            return Image.fromarray(image_np.transpose(1, 2, 0), 'RGBA')
        else:
            return Image.fromarray(image_np.transpose(1, 2, 0), 'RGB')

    def paste(self, background_image, foreground_image, x_position, y_position):
        background_image = tensor2pil(background_image)
        foreground_image = tensor2pil(foreground_image)
        if foreground_image.mode != 'RGBA':
            foreground_image = foreground_image.convert('RGBA')
        (r, g, b, alpha) = foreground_image.split()
        background_image.paste(foreground_image, (x_position, y_position), mask=alpha)
        return (pil2tensor(background_image),)
```