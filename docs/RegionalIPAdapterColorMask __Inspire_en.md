
# Documentation
- Class name: RegionalIPAdapterColorMask __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

This node aims to apply local image processing adaptation based on color masks. It can integrate specific image embeddings and adjustments into specified regions of the image (via color recognition), thus achieving local image modification or enhancement.

# Input types
## Required
- color_mask
    - Specifies the image to which the color mask will be applied, serving as the basis for local adaptation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - Defines the color used to identify the region of interest in the image for adaptation.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The target image, which is the object of the adaptation effect, provides context for the applied effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - Determines the strength or influence of the embedding applied to the specified area.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - Specifies the noise level applied together with the embedding for the adaptation effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - Specifies the method of applying weights to the embedding, offering options such as raw, linear, or channel penalty to increase adaptation flexibility.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- start_at
    - Marks the starting point of effect application during adaptation, allowing phased or gradual implementation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - Defines the end point of effect application, enabling precise control over the adaptation range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- unfold_batch
    - A boolean flag that, when set, allows batch processing of images to improve adaptation efficiency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional
- faceid_v2
    - An optional boolean flag to enable or disable face recognition version 2 for finer adaptation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- weight_v2
    - An optional weight parameter for version 2 adaptation, providing additional control over adaptation strength.
    - Comfy dtype: FLOAT
    - Python dtype: float
- combine_embeds
    - Specifies the method of combining embeddings, with options including concatenation, addition, subtraction, averaging, and normalized averaging, providing variety in effect application.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- neg_image
    - An optional negative image for effects or adjustments that are not desired in the specified area, providing balance to the main image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- regional_ipadapter
    - Adapted image processing settings, encapsulating local adaptation based on specified color masks and embeddings.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: IPAdapterConditioning
- mask
    - A mask generated based on the specified color, identifying the region of interest for adaptation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
