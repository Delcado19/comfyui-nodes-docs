
# Documentation
- Class name: LoadImagesFromDir __Inspire
- Category: image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LoadImagesFromDir __Inspire node is designed to batch load images from a specified directory, preparing them for image processing or machine learning tasks. It efficiently handles image loading, optional resizing, and format standardization to ensure compatibility with downstream processing.

# Input types
## Required
- directory
- Specify the directory path for loading images. This parameter is crucial for determining the source of images the node will process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- image_load_cap
- Limit the number of images loaded from the directory, allowing control over resource usage and processing time.
    - Comfy dtype: INT
    - Python dtype: int
- start_index
- Determine the starting index for loading images, enabling partial loading from the directory based on order.
    - Comfy dtype: INT
    - Python dtype: int
- load_always
- A flag indicating whether images should always be loaded under other conditions, ensuring flexible loading behavior.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- image
- Loaded images, processed and formatted, ready for further image applications.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- mask
- Optional masks associated with loaded images, useful for tasks requiring background separation or focusing on specific image regions.
    - Comfy dtype: MASK
    - Python dtype: List[torch.Tensor]
- int
- Total number of loaded images, providing a count that can be used for subsequent processing steps or informational purposes.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
