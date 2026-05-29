# Documentation
- Class name: PrepImageForClipVision
- Category: ipadapter/utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

This node aims to preprocess images for the ClipVision model, ensuring they are properly formatted for analysis. It focuses on resizing, cropping, and sharpening images to enhance their features and meet the model's input requirements.

# Input types
## Required
- image
    - The image parameter is crucial as it is the primary input for the node to process. It affects the overall operation of the node, determining the quality and characteristics of the output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- interpolation
    - The interpolation mode defines how the image should be resized, which significantly affects the clarity and detail of the resulting image. This is an optional parameter that allows control over the appearance of the image after resizing.
    - Comfy dtype: COMBO[('LANCZOS', 'BICUBIC', 'HAMMING', 'BILINEAR', 'BOX', 'NEAREST')]
    - Python dtype: str
- crop_position
    - The crop position determines how the image is cropped after resizing. This affects the composition and focus of the image, ensuring the most relevant features are centered or appropriately positioned.
    - Comfy dtype: COMBO[('top', 'bottom', 'left', 'right', 'center', 'pad')]
    - Python dtype: str
- sharpening
    - Sharpening adjusts the contrast of the image, enhancing its edges and details. This parameter allows fine-tuning the visual clarity of the image and can significantly improve the model's ability to recognize features.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output
    - The output is the processed image, now formatted and ready for analysis by the ClipVision model. It represents the culmination of the node's processing, containing all adjustments made to the original image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
