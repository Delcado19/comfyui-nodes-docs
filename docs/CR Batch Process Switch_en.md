# Documentation
- Class name: CR_BatchProcessSwitch
- Category: Comfyroll/Utils/Process
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_BatchProcessSwitch node is designed to provide a mechanism for switching between different types of image inputs. It intelligently routes the processing flow based on the input selection, allowing for the processing of both individual images and image batches. This node is crucial in scenarios where processing logic needs to be dynamically adapted based on input type, ensuring flexibility and efficiency in image processing workflows.

# Input types
## Required
- Input
    - The 'Input' parameter is crucial as it determines the type of image processing to be executed. It decides whether the node will process a single image or an image batch, thereby influencing subsequent steps and outputs in the workflow.
    - Comfy dtype: COMBO[image, image batch]
    - Python dtype: str
## Optional
- image
    - The 'image' parameter is used when processing a single image. It is important as it represents the input for individual image processing tasks, enabling the node to handle image-specific operations.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor]
- image_batch
    - The 'image_batch' parameter is essential for processing a group of images. It allows the node to efficiently manage and process image batches, suitable for scenarios requiring batch operations.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, List[torch.Tensor]]

# Output types
- IMAGE
    - The 'IMAGE' output parameter represents the processed image or image batch based on the input selection. It is a critical result of the node's operation, containing the outcome of the image processing task.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, torch.Tensor, List[torch.Tensor]]
- show_help
    - The 'show_help' output provides a documentation link for further assistance. It is important as it offers a resource for users to understand the node's functionality and usage in more detail.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
