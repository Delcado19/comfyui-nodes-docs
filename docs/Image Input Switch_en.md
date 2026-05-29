# Documentation
- Class name: WAS_Image_Input_Switch
- Category: WAS Suite/Logic
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `image_input_switch` is designed to conditionally select between two image inputs based on a boolean flag. It acts as a logical switch in image processing workflows, allowing dynamic routing of image data according to the provided boolean condition.

# Input types
## Required
- image_a
    - The first image input to return when the boolean flag is true. This is a key parameter because it determines the result when the switch is in the "on" state.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- image_b
    - The second image input to return when the boolean flag is false. When the switch is in the "off" state, it plays a key role in determining the output in that case.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- boolean
    - A boolean flag that determines which image input to select. When true, it returns `image_a`; when false, it returns `image_b`. This parameter is crucial to the node's decision-making process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- selected_image
    - The output image determined by the boolean flag. It represents the result of the logical switch operation, providing the selected image based on the input condition.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
