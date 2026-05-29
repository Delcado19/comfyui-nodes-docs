# Documentation
- Class name: WLSH_Image_Grayscale
- Category: WLSH Nodes/image
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node is designed to convert color images to grayscale images, a basic operation in image processing that reduces image complexity by removing color information, thus focusing on the structure and brightness aspects of the image.

# Input types
## Required
- original
    - The original image is the input required for the grayscale conversion process. It is crucial because it is the object of conversion, and the quality and resolution of the original image directly affect the result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- grayscale
    - The output is a grayscale version of the input image, processed to focus on brightness and structural details without color interference.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WLSH_Image_Grayscale:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'original': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('grayscale',)
    FUNCTION = 'make_grayscale'
    CATEGORY = 'WLSH Nodes/image'

    def make_grayscale(self, original):
        image = tensor2pil(original)
        image = ImageOps.grayscale(image)
        image = image.convert('RGB')
        image = np.array(image).astype(np.float32) / 255.0
        image = torch.from_numpy(image)[None,]
        return (image,)
```