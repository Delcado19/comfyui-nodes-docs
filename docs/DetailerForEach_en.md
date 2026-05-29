# Documentation
- Class name: DetailerForEach
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The DetailerForEach node is designed to enhance details in various parts of an image. It works by applying a detailed enhancement process to each part, including upscaling, denoising, and pasting the enhanced parts back into the original image. This node is particularly useful for improving the visual quality of images with distinct regions that require more detailed representation.

# Input types
## Required
- image
    - The input image to which the detail enhancement process is applied. It serves as the foundation for all subsequent operations within the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - A series of segments defined in the image, each representing a region to be enhanced. These segments are crucial for the node to identify which parts of the image require detailed processing.
    - Comfy dtype: SEGS
    - Python dtype: List[Segment]
- model
    - The model used for the enhancement process, typically a deep learning model capable of understanding and generating detailed images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - A CLIP model or similar model, which assists in generating context-aware image enhancement by providing textual descriptions of the image content.
    - Comfy dtype: CLIP
    - Python dtype: Any
- vae
    - A variational autoencoder, responsible for encoding and decoding image data, which is essential for the detail enhancement process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- guide_size
    - The guide size parameter determines the scale at which detail enhancement is focused. It is a key factor in controlling the level of detail applied to each segment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - The number of steps to perform during sampling, which directly affects the quality and detail of the final enhanced image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- enhanced_image
    - The output is an enhanced image with improved details, where each segment has been individually processed for higher resolution and clarity.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
