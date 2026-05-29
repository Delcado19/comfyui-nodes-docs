
# Documentation
- Class name: Preview from image [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node aims to generate a preview of an image by temporarily saving it and extracting metadata, including detailed information such as resolution, date, and size. Its goal is to provide a comprehensive overview of image properties along with any additional information encoded in the image, facilitating deeper understanding and more convenient management of image files.

# Input types
## Optional
- image
    - The image that needs to be previewed. It is essential for generating the preview and extracting metadata, which provides detailed information about the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- Metadata RAW
    - The raw metadata extracted from the image, providing essential details such as resolution, date, and size.
    - Comfy dtype: METADATA_RAW
    - Python dtype: Dict[str, Any]
- ui
    - A structured representation of the image preview and its metadata, including a text description and the image itself, ready for display at any time.
    - Comfy dtype: UI
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
