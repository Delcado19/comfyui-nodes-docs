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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
