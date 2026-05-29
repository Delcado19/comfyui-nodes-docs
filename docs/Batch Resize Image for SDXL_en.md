# Documentation
- Class name: BatchResizeImageSDXL
- Category: Mikey/Image
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The BatchResizeImageSDXL node is designed to batch process images based on specified parameters, optimizing them through resizing. It supports multiple cropping and upscaling methods, ensuring images can be resized accurately and efficiently. This node is particularly suitable for preparing image datasets for further processing or display.

# Input types
## Required
- image_directory
    - The image_directory parameter specifies the location where the images to be resized are stored. This is critical for the node to locate and access the images for processing.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_method
    - The upscale_method parameter determines the algorithm used to upscale images. It has a significant impact on the quality and appearance of the resized images.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'area', 'bicubic']
    - Python dtype: str
- crop
    - The crop parameter indicates whether and how to crop images after resizing. This may be important for maintaining aspect ratios or focusing on specific parts of the image.
    - Comfy dtype: COMBO['disabled', 'center']
    - Python dtype: str

# Output types
- image
    - The image output of the BatchResizeImageSDXL node is a list of resized images. Each image has been processed according to the input parameters, making it ready for the next stage of application or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
