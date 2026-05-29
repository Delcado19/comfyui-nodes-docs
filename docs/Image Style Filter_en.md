# Documentation
- Class name: WAS_Image_Style_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Style_Filter node applies multiple predefined styles to input images, simulating various filters that mimic the look of popular photography apps. It enhances images by adjusting color tones, contrast, and other visual aspects based on the selected style, enabling a wide range of creative effects without requiring detailed knowledge of image processing techniques.

# Input types
## Required
- image
    - The input image to which the style will be applied. It serves as the foundation for the node's stylization operations. The content and properties of the image influence the final stylized result, making it an essential parameter for the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or list[PIL.Image.Image]
- style
    - The style to be applied to the input image. Each style corresponds to a specific set of visual adjustments that transform the image according to the chosen aesthetic standard. The choice of style is critical, as it determines the overall look and feel of the output image.
    - Comfy dtype: COMBO['1977', 'aden', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'fairy tale', 'gingham', 'hudson', 'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua', 'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2']
    - Python dtype: str

# Output types
- styled_image
    - The resulting image after the style has been applied. It reflects the creative transformation made by the node, embodying the visual effects of the chosen style. This output is important as it represents the final product of the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
