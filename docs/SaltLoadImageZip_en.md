
# Documentation
- Class name: SaltLoadImageZip
- Category: SALT/Image/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltLoadImageZip node is specifically used to load and optionally resize images from a ZIP file. It supports multiple image formats and can concatenate the loaded images into a single tensor, facilitating use in image processing workflows.

# Input types
## Required
- path
    - Specify the file path to the ZIP archive containing the images. This is crucial for locating and accessing the images to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
- resize_images_to_first
    - Decide whether to resize all loaded images to match the dimensions of the first image found. This ensures consistency in image dimensions, which is often required when batching or using images in neural networks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- images
    - The output is a tensor containing the loaded (and possibly resized) images, available for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
