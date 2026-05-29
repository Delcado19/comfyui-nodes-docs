# Documentation
- Class name: MixColorByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The 'mix' method of the MixColorByMask node blends an input image with a solid color based on a provided mask. It adjusts the image's color channels to the specified RGB values, then applies the mask to selectively combine the original image with the new color layer. This node is particularly useful for creating composite images where certain areas need to be highlighted or modified with specific tones.

# Input types
## Required
- image
    - The 'image' parameter is the input image to be operated on by the node. It is critical as it serves as the foundation for the color blending operation. The node processes this image in combination with the provided color values and mask to achieve the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- r
    - The 'r' parameter specifies the red channel intensity of the color to blend with the image. It plays a key role in determining the final color that will overlay the image according to the mask. This parameter directly affects the color output of the node's operation.
    - Comfy dtype: INT
    - Python dtype: int
- g
    - The 'g' parameter defines the green channel intensity of the color overlay. It works together with the red and blue channels to create the desired color to be applied to the image through the mask. The choice of green intensity is crucial for achieving the target color effect.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The 'b' parameter sets the blue channel intensity of the color to be applied to the image. It is a critical component in the color blending process, ensuring the color blend aligns with the creative vision. The blue channel value is essential for accurate representation of the final color.
    - Comfy dtype: INT
    - Python dtype: int
- mask
    - The 'mask' parameter is a binary image that indicates which parts of the input image will receive the color overlay. It is a key element as it controls the areas of the image that will be affected by the color blending. The pattern of the mask determines where the new color will be visible.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The 'output_image' is the result of the color blending process, where the original image is combined with the specified color according to the mask's guidance. It represents the final visual result of the node's operation, showcasing the creative application of color to specific areas of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class MixColorByMask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'r': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'g': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'b': ('INT', {'default': 0, 'min': 0, 'max': 255, 'step': 1}), 'mask': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'mix'
    CATEGORY = 'Masquerade Nodes'

    def mix(self, image, r, g, b, mask):
        (r, g, b) = (r / 255.0, g / 255.0, b / 255.0)
        image_size = image.size()
        image2 = torch.tensor([r, g, b]).to(device=image.device).unsqueeze(0).unsqueeze(0).unsqueeze(0).repeat(image_size[0], image_size[1], image_size[2], 1)
        (image, image2) = tensors2common(image, image2)
        mask = tensor2batch(tensor2mask(mask), image.size())
        return (image * (1.0 - mask) + image2 * mask,)
```