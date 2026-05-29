# Documentation
- Class name: WAS_Image_To_Mask
- Category: WAS Suite/Image/Masking
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `image_to_mask` method is designed to extract specific color channels from a set of images and convert them into masks. This process is critical for applications that require isolating specific components of an image, such as in image segmentation or object recognition tasks. The node operates by selecting the desired channel and converting it into a binary mask, which can then be further analyzed or manipulated.

# Input types
## Required
- images
    - The 'images' parameter is critical because it represents the input images that the node will process. It is required for the node to run and directly affects the output mask, as it determines the source material for the mask operation.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- channel
    - The 'channel' parameter determines which color channel will be extracted to form the mask. This is a critical choice that affects the appearance of the final mask and its usefulness in subsequent processing steps.
    - Comfy dtype: COMBO['alpha', 'red', 'green', 'blue']
    - Python dtype: str

# Output types
- MASKS
    - The 'MASKS' output consists of generated masks derived from the selected color channel of the input images. These masks are important for tasks involving the isolation and analysis of specific parts of an image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
