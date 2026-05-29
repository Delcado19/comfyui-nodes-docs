# Documentation
- Class name: Dissolve
- Category: postprocessing/Blends
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Dissolve node aims to seamlessly blend two images based on a specified dissolve factor. It creates a smooth transition between the two images by generating a dot pattern and using it to determine the contribution of each image to the final output.

# Input types
## Required
- image1
    - image1 is the first input image to be blended with the second image. It plays a crucial role in the initial combination of the final blended image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - image2 is the second input image to be blended with the first image. Its visual elements will be combined with those of image1 to create the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- dissolve_factor
    - dissolve factor is a floating point value that determines the blend ratio between image1 and image2. It affects the visibility of each image in the final result, with a value of 0.0 showing only image1 and a value of 1.0 showing only image2.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- dissolve_image
    - The output of the Dissolve node is a single image representing the result of blending image1 and image2 using the specified dissolve factor.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
