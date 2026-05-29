
# Documentation
- Class name: ImageBatchMulti
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageBatchMulti node facilitates creating image batches by combining multiple input images into a single batch. It allows dynamic adjustment of the number of input images, supporting flexible and scalable batch image processing.

# Input types
## Required
- inputcount
    - Specifies the number of images to include in the batch, allowing dynamic adjustment of the batch size.
    - Comfy dtype: INT
    - Python dtype: int
- image_i
    - Represents any images to include in the batch, from 'image_1' to 'image_{inputcount}'. Each 'image_i' is dynamically added based on 'inputcount', collectively forming the combined image batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The combined image batch aggregated from individual input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
