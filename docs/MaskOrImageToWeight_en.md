
# Documentation
- Class name: MaskOrImageToWeight
- Category: KJNodes
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is used to compute the mean of input masks or images, but cannot process both simultaneously. It supports converting the computed mean into different output types, including list, pandas series, or tensor, depending on the specified output type.

# Input types
## Required
- output_type
    - Specifies the output format, which can be list, pandas series, or tensor, determining the return method of the mean calculated from the input masks or images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- images
    - An optional list of images, used to calculate the mean. If images are provided, masks should not be used.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- masks
    - An optional list of masks, used to calculate the mean. If masks are provided, images should not be used.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]

# Output types
- float
    - The computed mean of the input masks or images, returned in the format specified by the output_type parameter.
    - Comfy dtype: FLOAT
    - Python dtype: Union[List[float], pandas.Series, torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
