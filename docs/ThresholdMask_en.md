# Documentation
- Class name: ThresholdMask
- Category: mask
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ThresholdMask node converts an image into a binary mask based on a specified threshold. It plays a key role in image segmentation tasks by determining which pixels belong to the object of interest and which do not. The node simplifies image complexity through binary classification, facilitating downstream processing and analysis.

# Input types
## Required
- mask
- The 'mask' parameter is the input image to be thresholded. It is essential to the node’s operation because it directly affects the quality and accuracy of the output mask. The parameter’s value, determined by the provided threshold, decides which pixels are included in the final mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- value
- The 'value' parameter sets the threshold for mask conversion. It is critical because it determines the cutoff point for pixel inclusion in the mask. A higher value yields a more conservative mask with fewer pixels, while a lower value includes more pixels.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- mask
- The output 'mask' is a binary representation of the input image, where pixels are classified as belonging to the object or not based on the threshold. This binary mask is essential for applications such as object detection and segmentation in image processing workflows.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
