
# Documentation
- Class name: IG Load Images
- Category: 🐓 IG Nodes/IO
- Output node: False
- Repo Ref: https://github.com/goyalayush0610/ComfyUI-Image-Generator

IG Load Images node is designed to efficiently load multiple images from a specified folder. It provides options to limit the number of loaded images, skip initial images, and select images at specified intervals. This function is important for managing and preprocessing large image datasets for further analysis or processing.

# Input types
## Required
- folder
    - Specify the directory to load images from. This is a required input that determines the source of images.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- image_load_cap
    - Limit the number of images loaded from the folder. If set to 0, no limit.
    - Comfy dtype: INT
    - Python dtype: int
- skip_first_images
    - Skip the specified number of images from the beginning of the folder. Used to start the loading process from a specific point.
    - Comfy dtype: INT
    - Python dtype: int
- select_every_nth
    - Load every nth image from the folder, allowing selective loading at fixed intervals.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - Images loaded from the specified folder.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - Masks associated with the loaded images (if available).
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- int
    - Total number of images loaded from the folder.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/goyalayush0610/ComfyUI-Image-Generator)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
