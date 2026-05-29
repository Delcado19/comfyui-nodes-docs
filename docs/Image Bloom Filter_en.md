# Documentation
- Class name: WAS_Image_Bloom_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Bloom_Filter node applies a bloom effect to an image, enhancing its visual appeal by simulating light scattering. It adjusts the image brightness to create a glowing effect, useful for various image processing tasks.

# Input types
## Required
- image
    - The input image to which the bloom filter will be applied. It is the primary object processed by the node, directly affecting the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- radius
    - The radius parameter controls the extent of the Gaussian blur used to create the bloom effect. It is a key factor in determining the softness of the bloom.
    - Comfy dtype: FLOAT
    - Python dtype: float
- intensity
    - The intensity parameter adjusts the brightness of the bloom effect. Higher values result in a more pronounced bloom, while lower values produce a subtler effect.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - output_image is the processed image with the bloom filter applied. It represents the final visual result of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
