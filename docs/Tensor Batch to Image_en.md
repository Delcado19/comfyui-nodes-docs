# Documentation
- Class name: WAS_Tensor_Batch_to_Image
- Category: WAS Suite/Latent/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The method `tensor_batch_to_image` converts a batch of tensor images into a single image representation. It is a key step in image processing pipelines, allowing batch data to be transformed into a format that is easier to use or display.

# Input types
## Required
- images_batch
    - The parameter `images_batch` is critical, as it contains the batch of tensor images to be converted into a single image. It plays a central role in the node's operation, determining the source data for the conversion process.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
## Optional
- batch_image_number
    - The parameter `batch_image_number` determines which image from the batch is selected for conversion. Its value affects the node's execution by specifying the index of the desired image within the batch.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output `image` is the result of the conversion process, representing the selected image from the batch. It is important because it is the direct output of the node's functionality, containing the transformed data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
