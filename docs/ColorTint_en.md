# Documentation
- Class name: ColorTint
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The ColorTint node is designed to adjust the color tone of an image, enhancing or altering its visual appeal. It applies color tinting based on the selected mode, effectively changing the mood and style of the image. This node is suitable for post-processing tasks requiring color adjustments to match desired aesthetics or correct color imbalances.

# Input types
## Required
- image
    - The image parameter is the primary input to the ColorTint node. It is the source image that will undergo color adjustment. The quality and characteristics of the image directly affect the final output, making it a critical component for achieving the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The intensity parameter controls the strength of the color tinting effect applied to the image. It is a float value that determines the prominence of the color change. Higher values increase the effect, while lower values make it more subtle.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mode
    - The mode parameter determines the specific color tinting to be applied to the image. It offers multiple preset options, each creating a unique visual style. The choice of mode significantly impacts the overall mood and aesthetics of the processed image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- result
    - The result parameter is the output of the ColorTint node. It is the image modified by color tinting, reflecting the input settings. This output is essential for further processing or final presentation, containing the creative adjustments made by the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
