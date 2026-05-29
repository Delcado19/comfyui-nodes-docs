# Documentation
- Class name: CR_ImageInputSwitch
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageInputSwitch node is designed to conditionally select one of two image inputs based on a single integer input. It operates by evaluating the integer value and returning the corresponding image, ensuring that the output is consistent with the input selection. This node is particularly useful in scenarios where there is a need to dynamically alter the image data flow based on user input or other conditional logic.

# Input types
## Required
- Input
    - The ‘Input’ parameter is a critical integer that determines which image will be selected as the output. It directly impacts the node's decision process, allowing conditional routing of image data.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image1
    - The ‘image1’ parameter represents the first image option that the node can select. It plays an important role when the ‘Input’ value designates ‘image1’ as the specified output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- image2
    - The ‘image2’ parameter is the second image option that the node can select. It becomes important when the ‘Input’ value indicates that ‘image2’ should be the output image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- IMAGE
    - The ‘IMAGE’ output is the image selected based on the ‘Input’ parameter. It represents the result of the node's conditional logic and is essential for further processing in the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- show_help
    - The ‘show_help’ output provides a URL pointing to the node's documentation, offering guidance on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
