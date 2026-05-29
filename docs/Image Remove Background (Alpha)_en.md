# Documentation
- Class name: WAS_Remove_Background
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Remove_Background node is designed to process images by removing the background to achieve foreground extraction. It converts the image to grayscale, applies Gaussian blur, and uses binary thresholding to create a mask that isolates the desired elements. This node is particularly suitable for tasks requiring clean foreground objects without background interference.

# Input types
## Required
- images
    - The 'images' parameter is essential for the node, as it represents the input images that the node will process. The node's functionality revolves around manipulating these images to remove the background, making this parameter critical to the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- mode
    - The 'mode' parameter determines whether the node will remove the background or the foreground of the image. This is an optional parameter that can influence the node's behavior based on the desired outcome, allowing flexibility when processing different types of images.
    - Comfy dtype: STRING
    - Python dtype: str
- threshold
    - The 'threshold' parameter is crucial in controlling the sensitivity of the background removal process. It sets the level at which grayscale values are considered background or foreground, directly affecting the node's ability to distinguish between the two.
    - Comfy dtype: INT
    - Python dtype: int
- threshold_tolerance
    - The 'threshold_tolerance' parameter defines the radius of the Gaussian blur used to smooth the image before applying the threshold. It affects the node's ability to handle noise and detail in the image, playing an important role in the quality of the final output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- images
    - The 'images' output parameter contains the processed images after background removal. It is the final result of the node's operation, representing the primary outcome of the image processing task.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
