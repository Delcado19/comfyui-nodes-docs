# Documentation
- Class name: CannyEdgeMask
- Category: postprocessing/Masks
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This type of node encapsulates the functionality of applying the Canny edge detection algorithm to the input image, generating a binary edge mask that highlights edges in the image according to the specified thresholds.

# Input types
## Required
- image
    - Input image to apply Canny edge detection. It is key to the node's operation as it is the main data processed by the algorithm to produce the edge mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- lower_threshold
    - The lower threshold parameter is crucial for controlling the sensitivity of edge detection. It works together with the upper threshold to determine which edges are strong enough to be included in the final edge mask.
    - Comfy dtype: INT
    - Python dtype: int
- upper_threshold
    - The upper threshold parameter, together with the lower threshold, plays an important role in defining the criteria for edge detection. It helps refine edges by including only those that meet or exceed this threshold.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- edge_mask
    - The output is a binary edge mask representing the edges detected by the Canny algorithm. This mask is very important as it is used for further image processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class CannyEdgeMask:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'lower_threshold': ('INT', {'default': 100, 'min': 0, 'max': 500, 'step': 10}), 'upper_threshold': ('INT', {'default': 200, 'min': 0, 'max': 500, 'step': 10})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'canny'
    CATEGORY = 'postprocessing/Masks'

    def canny(self, image: torch.Tensor, lower_threshold: int, upper_threshold: int):
        (batch_size, height, width, _) = image.shape
        result = torch.zeros(batch_size, height, width)
        for b in range(batch_size):
            tensor_image = image[b].numpy().copy()
            gray_image = (cv2.cvtColor(tensor_image, cv2.COLOR_RGB2GRAY) * 255).astype(np.uint8)
            canny = cv2.Canny(gray_image, lower_threshold, upper_threshold)
            tensor = torch.from_numpy(canny)
            result[b] = tensor
        return (result,)
```