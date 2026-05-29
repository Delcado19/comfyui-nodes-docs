# Documentation
- Class name: CR_ImageInputSwitch4way
- Category: Comfyroll/Utils/Logic
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageInputSwitch4way node conditionally selects an image input based on an integer input. It routes image data through a logic switch mechanism, ensuring the appropriate image is selected and passed through. This node is essential in scenarios requiring dynamic image selection without additional conditional logic.

# Input types
## Required
- Input
    - The 'Input' parameter is critical because it determines which of the four possible image inputs will be selected. It acts as a switch, with the integer value corresponding to the index of the image to be routed through the node.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image1
    - The 'image1' parameter represents the first optional image input, selectable by the node based on the 'Input' parameter. When 'Input' is set to 1, it plays a key role in the node's operation, becoming the primary output image.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- image2
    - The 'image2' parameter is the second optional image input the node can select based on the 'Input' value. It becomes relevant when 'Input' is 2, at which point it is the image output by the node.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- image3
    - The 'image3' parameter is the third optional image input in the node's selection process. When the 'Input' value is 3, it is used and becomes the selected image passed through the node.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- image4
    - The 'image4' parameter is the fourth and final optional image input the node can output. It is only considered when 'Input' is set to 4, in which case it becomes the node's output image.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]

# Output types
- IMAGE
    - The 'IMAGE' output parameter represents the image selected based on the input integer value. It is the primary result of the node's operation and is essential for continuing the image processing workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The 'show_help' output provides a URL to the node's documentation, offering guidance on how to use the node effectively. It is a useful resource for understanding the node's functionality and purpose.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
