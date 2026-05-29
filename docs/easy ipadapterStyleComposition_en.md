
# Documentation
- Class name: easy ipadapterStyleComposition
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy ipadapterStyleComposition node simplifies the process of applying style and composition adjustments to images through IPAdapter. It abstracts the complex workflow into a more user-friendly interface, enabling users to modify the aesthetic features and composition of images using preset or custom settings.

# Input types
## Required
- model
    - Models that will apply IPAdapter style and composition adjustments as the basis for modifications.
    - Comfy dtype: MODEL
    - Python dtype: str
- image_style
    - Specify the style image for style transfer or composition adjustments, providing a visual reference for the desired aesthetic effect.
    - Comfy dtype: IMAGE
    - Python dtype: str
- preset
    - Predefined configurations that set benchmarks for style and composition adjustments, simplifying the user's selection process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight_style
    - Determine the intensity of style adjustments applied to the image, allowing fine control over the aesthetic effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_composition
    - Control the degree of composition adjustment, enabling users to fine-tune the blending or arrangement of elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- expand_style
    - Boolean flag indicating whether to apply style adjustments more broadly or restrictively in the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- combine_embeds
    - Define the method for combining multiple embeddings or adjustments, such as concatenation or averaging, to achieve the desired effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- start_at
    - Specify the starting point for applying adjustments, allowing targeted modifications to specific areas in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - Define the end point for adjustment application, enabling precise control over the affected region.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - Adjust the scaling of embeddings to influence the intensity and impact of style and composition adjustments.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- cache_mode
    - Set the caching strategy for the node to optimize performance and resource usage based on the selected mode.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- image_composition
    - Optional. Image used for composition adjustments, providing an additional layer of blending or arrangement.
    - Comfy dtype: IMAGE
    - Python dtype: str
- image_negative
    - Optional. Image representing undesirable aesthetic elements, guiding the adjustment process to avoid these features.
    - Comfy dtype: IMAGE
    - Python dtype: str
- attn_mask
    - Optional. Mask that highlights specific areas of the image for focused adjustments, improving application precision.
    - Comfy dtype: MASK
    - Python dtype: str
- clip_vision
    - Optional. Integrate visual embeddings from the CLIP model to guide style and composition adjustments, enriching contextual understanding.
    - Comfy dtype: CLIP_VISION
    - Python dtype: str
- optional_ipadapter
    - Optional. Specify IPAdapter for advanced customization and control over the adjustment process, providing extended functionality beyond presets.
    - Comfy dtype: IPADAPTER
    - Python dtype: str

# Output types
- model
    - Modified model with style and composition adjustments applied, reflecting the desired aesthetic changes.
    - Comfy dtype: MODEL
    - Python dtype: str
- ipadapter
    - IPAdapter instance used for adjustments, encapsulating specific configurations and modifications made.
    - Comfy dtype: IPADAPTER
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
