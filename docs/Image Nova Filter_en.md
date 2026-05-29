# Documentation
- Class name: WAS_Image_Nova_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

WAS_Image_Nova_Filter class's `nova_sine` method applies sine wave distortion to the image, enhancing its visual characteristics with a wave-like pattern. This method aims to introduce a creative and artistic effect into the image processing workflow, allowing control over the intensity and scale of the distortion by adjusting amplitude and frequency.

# Input types
## Required
- image
    - 'image' parameter is crucial for the node's operation as it is the input image to be processed. It directly affects the node's execution and final result, determining the object of the sine wave distortion.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- amplitude
    - 'amplitude' parameter controls the intensity of the sine wave distortion applied to the image. It is a key factor in determining the visual effect, allowing users to fine-tune the effect according to personal preference.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency
    - 'frequency' parameter determines the scale of the sine wave pattern applied to the image. It is crucial for adjusting the period of the wave, thereby affecting the overall appearance of the distortion.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - 'output_image' is the result of applying the sine wave distortion to the input image. It represents the final visually altered image with the creative effect expected from the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
