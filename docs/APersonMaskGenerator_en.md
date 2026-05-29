
# Documentation
- Class name: APersonMaskGenerator
- Category: A Person Mask Generator - David Bielejeski
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The APersonMaskGenerator node is used to generate segmentation masks for various parts of a person in an image, such as hair, face, body, and clothes. It utilizes image segmentation techniques to identify and separate these regions, creating masks that can be used for various image editing and processing tasks.

# Input types
## Required
- images
    - The input images for which masks need to be generated. These images are the basis of all segmentation operations, determining the regions to be separated and masked.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]
## Optional
- face_mask
    - Indicates whether face masks should be generated, affecting the segmentation process by separating the face region.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- background_mask
    - Indicates whether background masks should be generated, affecting the segmentation process by separating regions not covered by other specified masks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- hair_mask
    - Indicates whether hair masks should be generated, guiding the segmentation process to separate the hair region.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- body_mask
    - Indicates whether body masks should be generated, guiding the segmentation process to separate the body region.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- clothes_mask
    - Indicates whether clothing masks should be generated, guiding the segmentation process to separate the clothing region.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- confidence
    - Specifies the confidence threshold for mask generation, affecting the precision of segmentation and the resulting masks.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- masks
    - Outputs a collection of masks for the specified targets, each mask representing a segmented region in the image. These masks can be used for further image editing or processing tasks.
    - Comfy dtype: MASK
    - Python dtype: List[Image]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
