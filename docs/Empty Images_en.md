
# Documentation
- Class name: Empty Images
- Category: List Stuff
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

Empty Images node is designed to generate a batch of blank images with specified dimensions and colors. It serves as a basic tool for creating placeholders or background images in various image processing and generation tasks.

# Input types
## Optional
- num_images
- Specify the total number of images to generate. This parameter can control the overall output quantity when generating images.
    - Comfy dtype: INT
    - Python dtype: Optional[List[int]]
- splits
- Define how to split the total number of images into separate batches or groups. This can be used to create different image sets within the overall batch.
    - Comfy dtype: INT
    - Python dtype: Optional[List[int]]
- batch_size
- Determine the number of images to generate in a single batch. This allows creating multiple images at once, optimizing processing time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- Image
- Output is a batch of images with the specified dimensions and colors.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
