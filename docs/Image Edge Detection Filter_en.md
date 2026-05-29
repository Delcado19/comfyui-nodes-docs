# Documentation
- Class name: WAS_Image_Edge
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_edges` method is designed to apply edge detection to the input image. It processes the image using 'normal' or 'laplacian' mode to highlight edges within the image, enhancing visual features for further analysis or processing.

# Input types
## Required
- image
    - The 'image' parameter is critical as it is the input the node will process. It influences the node's execution by determining what content will have edges detected.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mode
    - The 'mode' parameter indicates the type of edge detection to apply. It is essential to the node's functionality as it determines the algorithm used to find edges in the image.
    - Comfy dtype: COMBO[normal, laplacian]
    - Python dtype: str

# Output types
- edges_image
    - The 'edges_image' output contains the processed image with edges highlighted according to the selected mode. It is important as it represents the direct result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Edge:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'mode': (['normal', 'laplacian'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_edges'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_edges(self, image, mode):
        image = tensor2pil(image)
        if mode:
            if mode == 'normal':
                image = image.filter(ImageFilter.FIND_EDGES)
            elif mode == 'laplacian':
                image = image.filter(ImageFilter.Kernel((3, 3), (-1, -1, -1, -1, 8, -1, -1, -1, -1), 1, 0))
            else:
                image = image
        return (torch.from_numpy(np.array(image).astype(np.float32) / 255.0).unsqueeze(0),)
```