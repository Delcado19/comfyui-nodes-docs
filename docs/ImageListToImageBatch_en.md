# Documentation
- Class name: ImageListToImageBatch
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

This node is designed to efficiently convert a list of images into a single image batch. It achieves this by concatenating images along the first dimension, ensuring all images in the batch have the same shape. The node plays a key role in preparing image data for further processing, such as batch-based neural network operations.

# Input types
## Required
- images
    - The 'image' parameter is the list of image tensors that the node will process. It is essential to the node's operation, as it directly affects the creation of the image batch. This parameter ensures all images are compatible and can be concatenated into a single batch.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Output types
- image_batch
    - The output of this node is a single image tensor representing the image batch. This batch is created by concatenating the input images along the first dimension, making it suitable for downstream tasks that require batched image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
