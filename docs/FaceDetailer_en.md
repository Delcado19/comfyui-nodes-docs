# Documentation
- Class name: FaceDetailer
- Category: ImpactPack/Simple
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The FaceDetailer node is designed to enhance and refine facial details in images. It combines multiple models and algorithms to detect faces, apply detailed enhancements, and output refined images with improved facial features. In image post-processing workflows, this node plays a critical role when high-quality facial detail is required.

# Input types
## Required
- image
    - Input image on which facial detail enhancement will be performed. It is the primary data source for the node's processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- model
    - Model used for facial detail enhancement. It is a critical component that defines the quality and style of enhancement applied to the input image.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - CLIP model used alongside the facial detail model to ensure coherence and relevance of the enhanced image.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- guide_size
    - Guide size parameter influences the scale of facial features the model focuses on during enhancement. This is an important tuning parameter for controlling the level of detail in the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- enhanced_image
    - Result image with enhanced facial details after processing by the FaceDetailer node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- cropped_enhanced
    - A series of cropped and potentially enhanced facial segments detected in the input image.
    - Comfy dtype: COMBO[IMAGE]
    - Python dtype: List[torch.Tensor]
- mask
    - Mask representing the facial regions that have been enhanced.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
