# Documentation
- Class name: SmoothMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

SmoothMask is a node that processes image masks to reduce noise and detail, providing smoother visual output. It achieves this by applying Gaussian blur to the input mask, effectively softening its edges and reducing high-frequency information. This node is essential for preparing masks that require more gradual transitions between masked and unmasked regions, improving the visual quality of the final image.

# Input types
## Required
- mask
    - The mask parameter is the source image for the smoothing operation. It is critical because it defines the initial state of the image to be processed by the node. The quality and resolution of the mask directly affect the effectiveness of the smoothing process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
## Optional
- smoothness
    - The smoothness parameter controls the degree of Gaussian blur applied to the mask. It is an important factor because it determines how much the mask edges are softened. Higher values produce a more blurred, smoother mask, while lower values preserve more of the original mask's detail.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASK
    - The output of the SmoothMask node is a modified version of the input mask with reduced noise and smoother edges. This smoothed mask can be used in various image processing tasks where a more refined transition between masked and unmasked regions is needed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class SmoothMask:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'smoothness': ('INT', {'default': 1, 'min': 0, 'max': 150, 'step': 1, 'display': 'slider'})}}
    RETURN_TYPES = ('MASK',)
    FUNCTION = 'run'
    CATEGORY = '♾️Mixlab/Mask'
    INPUT_IS_LIST = False
    OUTPUT_IS_LIST = (False,)

    def run(self, mask, smoothness):
        print('SmoothMask', mask.shape)
        mask = tensor2pil(mask)
        feathered_image = mask.filter(ImageFilter.GaussianBlur(smoothness))
        mask = pil2tensor(feathered_image)
        return (mask,)
```