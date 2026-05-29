# Documentation
- Class name: MaskMorphologyNode
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The MaskMorphologyNode class is designed to perform morphological operations on image masks. It provides dilation, erosion, opening, and closing operations, which are essential for image processing tasks such as noise removal and feature enhancement.

# Input types
## Required
- image
    - The image parameter is a tensor representing the input image mask. It is critical to the node's operation, as morphological transformations are applied directly to this image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- distance
    - The distance parameter determines the range of the morphological operation, such as the kernel size used for dilation or erosion. It significantly affects the result of the node's processing.
    - Comfy dtype: INT
    - Python dtype: int
- op
    - The operation parameter specifies the type of morphological operation to perform, which can be dilation, erosion, opening, or closing. This choice directly impacts the transformation applied to the image mask.
    - Comfy dtype: COMBO['dilate', 'erode', 'open', 'close']
    - Python dtype: str

# Output types
- output_image
    - The output image is the result of applying the selected morphological operation to the input image. It is a transformed version of the original image mask, reflecting the effect of the chosen operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class MaskMorphologyNode:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'distance': ('INT', {'default': 5, 'min': 0, 'max': 128, 'step': 1}), 'op': (['dilate', 'erode', 'open', 'close'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'morph'
    CATEGORY = 'Masquerade Nodes'

    def morph(self, image, distance, op):
        image = tensor2mask(image)
        if op == 'dilate':
            image = self.dilate(image, distance)
        elif op == 'erode':
            image = self.erode(image, distance)
        elif op == 'open':
            image = self.erode(image, distance)
            image = self.dilate(image, distance)
        elif op == 'close':
            image = self.dilate(image, distance)
            image = self.erode(image, distance)
        return (image,)

    def erode(self, image, distance):
        return 1.0 - self.dilate(1.0 - image, distance)

    def dilate(self, image, distance):
        kernel_size = 1 + distance * 2
        image = image.unsqueeze(1)
        out = torchfn.max_pool2d(image, kernel_size=kernel_size, stride=1, padding=kernel_size // 2).squeeze(1)
        return out
```