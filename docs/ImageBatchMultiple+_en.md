
# Documentation
- Class name: ImageBatchMultiple+
- Category: essentials
- Output node: False
- Repo Ref: https://github.com/shleemr/ComfyUI-Custom-Nodes

The ImageBatchMultiple+ node merges multiple images into a single batch, facilitating batch image processing. It abstracts the complexity of handling various image formats and sizes, ensuring compatibility for batch operations.

# Input types
## Required
- image_i
    - Represents the images to be included in the batch. Their format and size are adjusted as needed to ensure compatibility with other images in the batch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- method
    - Specifies the method for merging images into the batch, ensuring consistency and compatibility of all images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional

# Output types
- image
    - The output is a batch of images combined from the input images. This batch can be used for further image processing or analysis tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/shleemr/ComfyUI-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
