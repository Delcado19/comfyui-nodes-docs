# Documentation
- Class name: WAS_Image_Stitch
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Stitch node is designed to seamlessly combine two images according to a specified stitching direction. It applies a feathering effect to create smooth transitions between images, which is particularly useful for creating panoramic images or textures. The node is capable of handling different stitching modes such as 'top', 'left', 'bottom', and 'right', allowing flexible image composition.

# Input types
## Required
- image_a
    - The first image to be stitched. It serves as the base layer for the stitching operation and determines the initial portion of the final stitched image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - The second image to be stitched. It will be aligned with the first image according to the specified stitching mode and blended to create a seamless combination.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- stitch
    - The direction in which the two images should be stitched together. It can be 'top', 'left', 'bottom', or 'right', defining the direction of stitching and how the images are combined.
    - Comfy dtype: COMBO[top, left, bottom, right]
    - Python dtype: str
- feathering
    - The amount of feathering applied at the stitching boundary. Higher values produce softer, more gradual transitions between images but also reduce the size of the output image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- stitched_image
    - The resulting image after the stitching process. It combines the two input images into a single, seamless image according to the specified stitching mode and feathering.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
