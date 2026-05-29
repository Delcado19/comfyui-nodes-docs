# Documentation
- Class name: WAS_Image_RGB_Merge
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_RGB_Merge node is designed to merge separate color channels into a single RGB image. It generates a full-color image by combining the red, green, and blue channels, playing a key role in image processing, enhancing visual output for further analysis or display.

# Input types
## Required
- red_channel
    - The red_channel parameter is crucial as it represents the red component of the final RGB image. It significantly affects the color balance and overall appearance of the merged image, contributing to the node's core functionality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- green_channel
    - The green_channel parameter is essential for creating the RGB image, as it determines the green component. It is indispensable for achieving the desired color representation and visual quality of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- blue_channel
    - The blue_channel parameter defines the blue component of the RGB image. It is a key element in the node's operation, ensuring correct hue and enhancing the realism of the final merged result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- merged_image
    - The merged_image output parameter represents the final product of the node, a fully merged RGB image. It is important as it summarizes the node's purpose, showcasing the combined visual data in a coherent and visually pleasing manner.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
