# Documentation
- Class name: JoinImageBatch
- Category: EasyUse/Image
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node merges multiple images into a single large image by stacking them vertically or horizontally. It simplifies creating image collages or combining visual data for comparison and analysis.

# Input types
## Required
- images
    - The images parameter is the key input providing the batch of images to merge. It is a numpy array containing batches of images, where each image is a multidimensional array of pixel values.
    - Comfy dtype: COMBO[numpy.ndarray]
    - Python dtype: numpy.ndarray
## Optional
- mode
    - The mode parameter determines the direction of merging, either 'horizontal' or 'vertical'. It affects how images are arranged in the final merged image.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- image
    - The output image is the result of merging the input image batch. It represents a single large image containing all input images arranged horizontally or vertically.
    - Comfy dtype: numpy.ndarray
    - Python dtype: numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
