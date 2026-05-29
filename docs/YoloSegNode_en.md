# Documentation
- Class name: YoloSegNode
- Category: Jags_vector/yoloSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

This node aims to perform semantic segmentation using a YOLO-based model, identifying and masking specific categories of instances in an image. It processes the input image to identify the required categories and outputs a segmented image and a corresponding mask highlighting the identified instances.

# Input types
## Required
- image
    - The input image is essential for the node to perform segmentation. It is the primary data source for the model to analyze and identify the specified categories.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- model_name
    - This parameter determines the specific YOLO model used for segmentation. It is critical as it determines the accuracy and effectiveness of the segmentation process.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- class_id
    - The category ID parameter allows users to specify which categories in the image should be segmented, influencing the node's output to focus on the desired categories.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- SEG_IMAGE
    - The segmented image represents the input image with identified category instances highlighted, providing a visual output of the segmentation process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- SEG_MASK
    - The mask output is a binary representation of the segmented category instances, serving as a precise tool for further analysis or manipulation of the identified categories in the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jags111/ComfyUI_Jags_VectorMagic)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
