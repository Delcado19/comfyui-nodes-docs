# Documentation
- Class name: WAS_Mask_Threshold_Region
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Mask_Threshold_Region node applies thresholding to image masks to distinguish regions within an image. It uses black and white thresholds to create a binary mask, segmenting the image based on pixel intensity. This node is essential for image segmentation, object detection, and any application that requires distinguishing image areas by color or brightness levels.

# Input types
## Required
- masks
- The input mask is the primary source of the node's operation. It generates thresholded regions within the image. This parameter is crucial because all node functions revolve around manipulating and analyzing these masks.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- black_threshold
- The black_threshold parameter defines the lower intensity limit at which a pixel is considered part of a black region. It plays a vital role in determining how the image is segmented into different areas based on color intensity.
    - Comfy dtype: INT
    - Python dtype: int
- white_threshold
- The white_threshold parameter sets the upper intensity limit at which a pixel is considered part of a white region. It is a key parameter controlling the segmentation process and defining white areas within the image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- MASKS
- The MASKS output consists of image masks processed after thresholding. This output is important because it represents the final segmented regions of the input image according to the specified thresholds.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
