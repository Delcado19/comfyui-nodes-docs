# Documentation
- Class name: BatchCropImage
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The `batch` method of the BatchCropImage node is designed to process images in a directory by cropping each image to a specified size while maintaining the aspect ratio. It can handle various image formats and converts the cropped images into tensor format suitable for further processing.

# Input types
## Required
- image_directory
    - The parameter `image_directory` specifies the path to the directory containing the images to be cropped. This is a critical parameter because the node's execution depends on the existence and accessibility of this directory.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- crop_amount
    - The parameter `crop_amount` determines the proportion of the image to be cropped. It is important because it directly affects the dimensions of the resulting cropped image, influencing subsequent analysis or processing.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The output `image` consists of a list of cropped images converted to tensor format. This output is important because it represents the processed data ready for downstream tasks such as machine learning or image analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
