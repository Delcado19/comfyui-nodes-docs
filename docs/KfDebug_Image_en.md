# Documentation
- Class name: KfDebug_Image
- Category: Debugging
- Output node: True
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

The KfDebug_Image node is designed to facilitate visualization of image data within workflows, providing a means to inspect and verify image inputs or outputs at different stages of processing. It enhances the debugging process by offering a clear visual representation of images, ensuring that image data is correctly processed and meets expected standards.

# Input types
## Required
- image
    - The image parameter is critical for the KfDebug_Image node, as it is the primary input for the node's visualization. It allows the node to display images for inspection, ensures image data meets expectations, and helps identify any potential issues or discrepancies, impacting the overall debugging process.
    - Comfy dtype: COMBO[numpy.ndarray,PIL.Image,torch.Tensor]
    - Python dtype: Union[numpy.ndarray, PIL.Image, torch.Tensor]

# Output types
- image
    - The output image of the KfDebug_Image node serves as a visual confirmation of the input image's state. It is important because it provides a means to verify the integrity and accuracy of image data after it has been passed through the workflow, ensuring no changes or corruption have occurred.
    - Comfy dtype: IMAGE
    - Python dtype: Union[numpy.ndarray, PIL.Image]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
