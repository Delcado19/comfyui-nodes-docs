# Documentation
- Class name: ClipSegNode
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

The ClipSegNode class aims to automatically generate masks from input images based on provided text prompts. It leverages a pre-trained model to understand textual descriptions and apply them to visual content, creating a segmented mask that isolates the described subject in the image.

# Input types
## Required
- image
    - The input image is the primary data source for the node's operation. It is the visual content from which the mask will be generated. The quality and resolution of the image directly affect the accuracy of the generated mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - The text prompt is a descriptive input that guides the node in identifying the subject to be masked in the image. It is critical for the model to understand what to focus on during the segmentation process.
    - Comfy dtype: STRING
    - Python dtype: str
- precision
    - The precision parameter determines the threshold for mask generation. It is a floating-point value that decides how strict the node should be in determining which pixels belong to the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- normalize
    - The normalize parameter indicates whether the resulting mask should be normalized to a range between 0 and 1. Normalization may be useful in applications requiring consistent mask intensity.
    - Comfy dtype: COMBO['no', 'yes']
    - Python dtype: Literal['no', 'yes']
## Optional
- negative_prompt
    - The negative prompt is an optional input that helps refine the mask by indicating content to be excluded from the segmentation. It improves mask precision by providing additional context to the model.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- thresholded_mask
    - The threshold mask is the primary output of the node, representing a binary segmentation of the image based on the provided text prompt. It is a critical component for applications requiring subject isolation for further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- raw_mask
    - The raw mask output provides a continuous-value representation of the segmentation mask before any thresholding is applied. It may be useful for applications requiring a more nuanced understanding of the segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
