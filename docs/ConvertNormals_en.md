
# Documentation
- Class name: ConvertNormals
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConvertNormals node is specifically designed to convert normal map formats, adjust their scale, and optionally normalize or fill missing regions. It supports multiple input and output modes, allowing flexible adjustment of normal maps to suit different rendering or processing requirements. This node is particularly useful in graphics and image processing pipelines, especially when normal maps need to be converted or adjusted for specific purposes.

# Input types
## Required
- normals
    - The input normal map tensor to be converted. This is the core parameter for the node operation, which undergoes various transformations based on other input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- input_mode
    - Specifies the format of the input normal map, affecting its initial processing method. This parameter determines the initial adjustments made to the normal map before further conversion.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- output_mode
    - Defines the desired format of the output normal map, guiding the final adjustments to the tensor. This parameter ensures the converted normal map meets specific format requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scale_XY
    - Scaling factors applied to the X and Y components of the normal map, affecting its overall appearance. This parameter allows fine-tuning the visual effect of the normal map on surfaces.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - A boolean flag indicating whether to normalize the normal map after conversion. Normalization ensures the normal map vectors are unit length, which is typically done to guarantee consistent lighting effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fix_black
    - A boolean flag that, when enabled, corrects black regions in the normal map, potentially filling these regions based on the optional_fill parameter. This is useful for repairing or enhancing normal maps with missing data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- optional_fill
    - An optional tensor used to fill black regions in the normal map when fix_black is enabled. This parameter allows applying custom fill patterns or colors, enhancing the node's versatility.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The converted normal map tensor, adjusted according to the specified input and output modes, scaling, normalization, and optional filling. This output can be directly used in subsequent processing or rendering steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
