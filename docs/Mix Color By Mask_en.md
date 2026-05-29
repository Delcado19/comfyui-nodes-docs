# Documentation
- Class name: MixColorByMask
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The 'mix' method of the MixColorByMask node blends an input image with a solid color based on a provided mask. It adjusts the image's color channels to the specified RGB values, then applies the mask to selectively combine the original image with the new color layer. This node is particularly useful for creating composite images where certain areas need to be highlighted or modified with specific tones.

# Input types
## Required
- image
    - The 'image' parameter is the input image to be operated on by the node. It is critical as it serves as the foundation for the color blending operation. The node processes this image in combination with the provided color values and mask to achieve the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- r
    - The 'r' parameter specifies the red channel intensity of the color to blend with the image. It plays a key role in determining the final color that will overlay the image according to the mask. This parameter directly affects the color output of the node's operation.
    - Comfy dtype: INT
    - Python dtype: int
- g
    - The 'g' parameter defines the green channel intensity of the color overlay. It works together with the red and blue channels to create the desired color to be applied to the image through the mask. The choice of green intensity is crucial for achieving the target color effect.
    - Comfy dtype: INT
    - Python dtype: int
- b
    - The 'b' parameter sets the blue channel intensity of the color to be applied to the image. It is a critical component in the color blending process, ensuring the color blend aligns with the creative vision. The blue channel value is essential for accurate representation of the final color.
    - Comfy dtype: INT
    - Python dtype: int
- mask
    - The 'mask' parameter is a binary image that indicates which parts of the input image will receive the color overlay. It is a key element as it controls the areas of the image that will be affected by the color blending. The pattern of the mask determines where the new color will be visible.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- output_image
    - The 'output_image' is the result of the color blending process, where the original image is combined with the specified color according to the mask's guidance. It represents the final visual result of the node's operation, showcasing the creative application of color to specific areas of the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
