# Documentation
- Class name: WAS_Image_High_Pass_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_High_Pass_Filter node is designed to enhance high-frequency details in an image, effectively removing low-frequency noise or blur. It applies a high-pass filter to the input image, making details more prominent. The node allows adjusting strength and radius to control the intensity and scale of the filtering effect.

# Input types
## Required
- images
    - The input image to be processed by the high-pass filter. This parameter is critical as it defines the data on which the node operates to enhance high-frequency components.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- radius
    - The radius parameter determines the degree of blur the high-pass filter removes. It affects the scale of details preserved in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter controls the intensity of the high-pass filter effect. Higher values result in more pronounced enhancement of high-frequency details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_output
    - The color_output parameter specifies whether the output should be color (RGB) or grayscale (L). This affects the visual appearance of the filtered image.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: Union[str, Literal['true', 'false']]
- neutral_background
    - The neutral_background parameter determines whether a neutral color background should be added to the image. This can be helpful when a neutral background plate is needed for better visual contrast.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: Union[str, Literal['true', 'false']]

# Output types
- images
    - The output parameter containing the processed image with enhanced high-frequency details. These images have had low-frequency components filtered out, emphasizing detail.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
