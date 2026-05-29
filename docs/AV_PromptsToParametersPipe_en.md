
# Documentation
- Class name: AV_PromptsToParametersPipe
- Category: Art Venture/Parameters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_PromptsToParametersPipe node aims to convert text prompts into a structured parameter pipeline, in order to integrate user-defined positive and negative prompts into a broader art generation or modification pipeline. It allows dynamic customization of content by incorporating these prompts along with optional image and mask inputs into the processing flow.

# Input types
## Required
- positive
    - Positive prompts represent the desired attributes or elements to be included in the art generation process, guiding the output creation.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - Negative prompts specify the attributes or elements to be excluded in the art generation process, helping to refine the output by avoiding unwanted characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- pipe
    - A structured data pipeline, optionally provided, to contain existing parameters for further processing or modification.
    - Comfy dtype: PIPE
    - Python dtype: Dict
- image
    - An optional image input, which can be used to influence the art generation process, providing visual context or a basis for modification.
    - Comfy dtype: IMAGE
    - Python dtype: Optional[Image]
- mask
    - An optional mask input, which can be used to specify regions of interest or exclusion in the provided image, facilitating targeted modifications or enhancements.
    - Comfy dtype: MASK
    - Python dtype: Optional[Mask]

# Output types
- pipe
    - The output is a structured parameter pipeline that contains the provided positive and negative prompts, as well as optional image and mask data, for customized art generation.
    - Comfy dtype: PIPE
    - Python dtype: Dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
