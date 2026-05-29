# Documentation
- Class name: WAS_Image_Threshold
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Image_Threshold node is designed to process images by applying a threshold, which is useful for creating binary images from grayscale input. It plays a key role in image segmentation and feature extraction tasks, simplifying the image to its core structure through a specified threshold.

# Input types
## Required
- image
    - The image parameter is critical to the node's operation as it is the input to be processed. It influences execution by determining what will undergo thresholding, which is essential for the clarity and detail of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- threshold
    - The threshold parameter is very important because it determines the cutoff point for pixel value classification in the image. It directly affects the node's output by controlling the conversion of gray values to black or white based on whether they meet or exceed the threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- thresholded_image
    - The thresholded image output represents the result of processing the input image after applying the threshold. It is important because it provides a binary version of the input, often used for further analysis or as a step in a more complex image processing workflow.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
