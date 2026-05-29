
# Documentation
- Class name: easy ipadapterApplyRegional
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Easy Apply IPAdapter (Regional) node is specifically designed for localized image adjustments using IPAdapter, enhancing or modifying specific regions based on given parameters. It leverages IPAdapter's capabilities to adjust and optimize image content, focusing on region-specific targeting to achieve the desired visual effects.

# Input types
## Required
- pipe
    - Specifies the pipeline configuration to be used, indicating how the image processing should be structured and executed.
    - Comfy dtype: PIPE_LINE
    - Python dtype: str
- image
    - The image to be locally adjusted, serving as the primary input for the transformation process.
    - Comfy dtype: IMAGE
    - Python dtype: str
- positive
    - A string parameter used to define positive adjustments or enhancements to be applied to specific regions of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - A string parameter used to define negative adjustments or modifications to be applied to specific regions of the image, to counteract or balance positive enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- image_weight
    - Specifies the weight of the image during the adjustment process, influencing the degree to which the image is modified.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prompt_weight
    - Determines the weight of the prompt during the adjustment process, influencing the intensity of applied changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - Defines the weight type applied to the adjustment, such as linear or exponential, affecting how the adjustment is scaled.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_at
    - Indicates the starting point of the adjustment effect in the image, allowing for gradual application of changes.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - Specifies the endpoint of the adjustment effect in the image, enabling precise control over where modifications stop.
    - Comfy dtype: FLOAT
    - Python dtype: float

## Optional
- mask
    - An optional parameter that allows adjustments to be applied to specific regions of the image defined by a mask.
    - Comfy dtype: MASK
    - Python dtype: str
- optional_ipadapter_params
    - An optional parameter used to further customize IPAdapter behavior, providing additional control over the adjustment process.
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: str

# Output types
- pipe
    - Comfy dtype: PIPE_LINE
    - The modified pipeline configuration after applying local adjustments, reflecting any changes made during the process.
    - Python dtype: str
- ipadapter_params
    - Comfy dtype: IPADAPTER_PARAMS
    - Parameters used or modified within IPAdapter during the adjustment process, detailing the specific adjustments applied.
    - Python dtype: str
- positive
    - Comfy dtype: CONDITIONING
    - Positive embeddings or adjustments produced during the adjustment process, used to enhance specific regions of the image.
    - Python dtype: str
- negative
    - Comfy dtype: CONDITIONING
    - Negative embeddings or adjustments generated to balance or modify specific regions of the image, contrasting with positive enhancements.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
