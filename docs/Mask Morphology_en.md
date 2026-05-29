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
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
