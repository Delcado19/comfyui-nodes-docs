# Documentation
- Class name: Canny
- Category: image/preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Canny node aims to detect edges in an image using the Canny algorithm, a popular edge detection technique. It enhances the clarity of edges in the input image by applying a multi-stage process including Gaussian filtering, gradient computation, non-maximum suppression, and hysteresis thresholding. This node plays a key role in image preprocessing, suitable for applications such as feature detection, segmentation, and image analysis.

# Input types
## Required
- image
    - The input image is the basis of the Canny node operation, as it is the primary data for performing edge detection. The quality and resolution of the input image directly affect the accuracy and detail of detected edges.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- low_threshold
    - The low threshold parameter is crucial for the initial stage of edge detection, defining the lower limit for edge identification. It works together with the high threshold to fine-tune the detection process and control the sensitivity of edge detection.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_threshold
    - The high threshold is crucial for refining detected edges, setting the upper limit for edge acceptance. It helps control the number of false edges and ensures that only the most significant edges are retained in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output image of the Canny node is an edge version of the input image, where edges have been detected and highlighted. This output is important for further image analysis or as input to other processing nodes that require edge information.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class Canny:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'low_threshold': ('FLOAT', {'default': 0.4, 'min': 0.01, 'max': 0.99, 'step': 0.01}), 'high_threshold': ('FLOAT', {'default': 0.8, 'min': 0.01, 'max': 0.99, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'detect_edge'
    CATEGORY = 'image/preprocessors'

    def detect_edge(self, image, low_threshold, high_threshold):
        output = canny(image.to(comfy.model_management.get_torch_device()).movedim(-1, 1), low_threshold, high_threshold)
        img_out = output[1].to(comfy.model_management.intermediate_device()).repeat(1, 3, 1, 1).movedim(1, -1)
        return (img_out,)
```