# Documentation
- Class name: MakeImageBatch
- Category: Masquerade Nodes
- Output node: False
- Repo Ref: https://github.com/BadCafeCode/masquerade-nodes-comfyui

‘MakeImageBatch’ node is designed to efficiently merge multiple individual images or existing image batches into a single, unified batch. This node plays a crucial role in the preprocessing stage of image processing tasks, allowing various image inputs to be aggregated into a format suitable for batch processing.

# Input types
## Required
- image1
    - The primary image that serves as the basis for batch creation. It is required, and its presence initiates the batch formation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- image2
    - An optional additional image that can be connected to the batch. It enhances diversity within the batch, providing more data for processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image3
    - Another optional image in the batch, further expanding the dataset for comprehensive analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image4
    - An extra image that can be included in the batch to increase the volume of image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image5
    - This image is optional, it adds complexity and richness to the image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image6
    - The final optional image that can be added to the batch, providing the last contribution to the dataset size.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - The output is a consolidated image batch created by appending input images in sequence. It is important because it represents the culmination of the batch creation process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BadCafeCode/masquerade-nodes-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
