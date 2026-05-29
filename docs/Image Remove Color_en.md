# Documentation
- Class name: WAS_Image_Remove_Color
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Remove_Color node aims to process images according to user-defined criteria, removing specific colors. It allows identifying and replacing target colors with a specified replacement color to enhance images for further analysis or beautification purposes.

# Input types
## Required
- image
    - The image parameter is required as it is the input that the node will process. It determines the content and format of the color removal operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- target_red
    - The target_red parameter specifies the red component of the color to be removed. It plays a key role in determining the accuracy of the color removal process.
    - Comfy dtype: INT
    - Python dtype: int
- target_green
    - The target_green parameter defines the green component of the color to be removed, affecting the node's ability to isolate and replace the target color.
    - Comfy dtype: INT
    - Python dtype: int
- target_blue
    - The target_blue parameter sets the blue component of the color to be replaced, which is crucial for achieving the desired result in the color removal task.
    - Comfy dtype: INT
    - Python dtype: int
- replace_red
    - The replace_red parameter determines the red component of the replacement color, which is important for the final appearance of the modified image.
    - Comfy dtype: INT
    - Python dtype: int
- replace_green
    - The replace_green parameter sets the green component of the color used to replace the target color, affecting the node's output.
    - Comfy dtype: INT
    - Python dtype: int
- replace_blue
    - The replace_blue parameter specifies the blue component of the color that will replace the original color, which is essential for the node's color change functionality.
    - Comfy dtype: INT
    - Python dtype: int
- clip_threshold
    - The clip_threshold parameter sets the threshold for color difference, which is crucial for the node's ability to distinguish between the target color and other colors.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - output_image represents the processed image where the specified color has been removed, demonstrating the node's ability to alter visual content.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
