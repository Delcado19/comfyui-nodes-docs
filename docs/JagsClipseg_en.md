# Documentation
- Class name: JagsCLIPSeg
- Category: Jags_vector/CLIPSEG
- Output node: False
- Repo Ref: https://github.com/jags111/ComfyUI_Jags_VectorMagic

JagsCLIPSeg is a node designed to perform image segmentation using text prompts and image inputs. It leverages the power of the CLIPSeg model to generate detailed masks corresponding to the provided text descriptions, enhancing the segmentation process and utilizing the context of language.

# Input types
## Required
- image
    - The image parameter is crucial for the segmentation process, as it provides the visual context that the node will analyze and segment based on the provided text prompt.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- text
    - The text parameter serves as the guiding prompt for the segmentation process, describing what the node should focus on or the features it should identify in the image.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- blur
    - The blur parameter affects the smoothness of the segmentation mask, with higher values resulting in more generalized masks and lower values preserving more detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold
    - The threshold parameter determines the cutoff point for binarizing the segmentation mask; values above the threshold are retained and those below are discarded, affecting the final appearance of the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation_factor
    - The dilation factor parameter controls the expansion of the segmentation mask, with higher values resulting in more aggressive dilation and lower values resulting in more conservative expansion.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Mask
    - The mask output is a binary representation of the segmentation, where elements described by the text prompt are highlighted, providing a clear visual separation of the segmented features.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- Heatmap Mask
    - The heatmap mask output provides a visual gradient representing the confidence level of the segmentation, with higher values indicating regions of greater certainty about the segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- BW Mask
    - The black and white mask output is a black-and-white version of the mask, providing a straightforward visual representation of the segmentation result, suitable for further analysis or processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/jags111/ComfyUI_Jags_VectorMagic)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
