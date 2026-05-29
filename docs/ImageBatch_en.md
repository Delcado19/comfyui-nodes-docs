# Documentation
- Class name: ImageBatch
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The 'batch' method of the ImageBatch node is designed to efficiently process and combine two image inputs into a batch. It performs upsampling operations to ensure both images have the same dimensions (if necessary), then concatenates them along the batch dimension. This node plays a critical role in preparing data for further image processing tasks, such as neural network training or batch image operations.

# Input types
## Required
- image1
    - The 'image1' parameter represents the first image in the batch. It is essential to the node's operation, as it is one of the two images to be processed and combined. The dimensions and content of the image significantly affect the node's output and subsequent processing steps.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- image2
    - The 'image2' parameter represents the second image to be included in the batch. It is required for the node's functionality and is processed together with 'image1'. If the dimensions of 'image2' differ from 'image1', its dimensions will be adjusted to match 'image1', ensuring consistency within the batch for uniform processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- batched_images
    - The 'batched_images' output is a tensor containing the combined images of 'image1' and 'image2'. It is the primary result of the node's operation, representing the image batch ready for downstream tasks such as model inference or further image analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
