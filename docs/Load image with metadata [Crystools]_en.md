
# Documentation
- Class name: Load image with metadata [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node loads images and their associated metadata, integrating them into data processing or analysis workflows. It seamlessly handles images and inherent information, simplifying tasks requiring both visual and contextual data.

# Input types
## Required
- image
    - The image parameter represents the target image file to load. It is crucial to the node's operation as it determines the source of visual content and related metadata, essential for subsequent processing or analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Processed image data, available for further operations or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Mask generated from the image, used for operations that require distinguishing image regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- prompt
    - Prompt information extracted from image metadata, providing context or instructions related to the image.
    - Comfy dtype: JSON
    - Python dtype: str
- Metadata RAW
    - Comprehensive metadata associated with the image, encapsulating all contextual information extracted during loading.
    - Comfy dtype: METADATA_RAW
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
