# Documentation
- Class name: WAS_Remove_Background
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Remove_Background node is designed to process images by removing the background to achieve foreground extraction. It converts the image to grayscale, applies Gaussian blur, and uses binary thresholding to create a mask that isolates the desired elements. This node is particularly suitable for tasks requiring clean foreground objects without background interference.

# Input types
## Required
- images
    - The 'images' parameter is essential for the node, as it represents the input images that the node will process. The node's functionality revolves around manipulating these images to remove the background, making this parameter critical to the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- mode
    - The 'mode' parameter determines whether the node will remove the background or the foreground of the image. This is an optional parameter that can influence the node's behavior based on the desired outcome, allowing flexibility when processing different types of images.
    - Comfy dtype: STRING
    - Python dtype: str
- threshold
    - The 'threshold' parameter is crucial in controlling the sensitivity of the background removal process. It sets the level at which grayscale values are considered background or foreground, directly affecting the node's ability to distinguish between the two.
    - Comfy dtype: INT
    - Python dtype: int
- threshold_tolerance
    - The 'threshold_tolerance' parameter defines the radius of the Gaussian blur used to smooth the image before applying the threshold. It affects the node's ability to handle noise and detail in the image, playing an important role in the quality of the final output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The 'images' output parameter contains the processed images after background removal. It is the final result of the node's operation, representing the primary outcome of the image processing task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Remove_Background:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'mode': (['background', 'foreground'],), 'threshold': ('INT', {'default': 127, 'min': 0, 'max': 255, 'step': 1}), 'threshold_tolerance': ('INT', {'default': 2, 'min': 1, 'max': 24, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'image_remove_background'
    CATEGORY = 'WAS Suite/Image/Process'

    def image_remove_background(self, images, mode='background', threshold=127, threshold_tolerance=2):
        return (self.remove_background(images, mode, threshold, threshold_tolerance),)

    def remove_background(self, image, mode, threshold, threshold_tolerance):
        images = []
        image = [tensor2pil(img) for img in image]
        for img in image:
            grayscale_image = img.convert('L')
            if mode == 'background':
                grayscale_image = ImageOps.invert(grayscale_image)
                threshold = 255 - threshold
            blurred_image = grayscale_image.filter(ImageFilter.GaussianBlur(radius=threshold_tolerance))
            binary_image = blurred_image.point(lambda x: 0 if x < threshold else 255, '1')
            mask = binary_image.convert('L')
            inverted_mask = ImageOps.invert(mask)
            transparent_image = img.copy()
            transparent_image.putalpha(inverted_mask)
            images.append(pil2tensor(transparent_image))
        batch = torch.cat(images, dim=0)
        return batch
```