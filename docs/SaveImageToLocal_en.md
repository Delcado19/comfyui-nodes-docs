# Documentation
- Class name: SaveImageToLocal
- Category: ♾️Mixlab/Image
- Output node: True
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The "SaveImageToLocal" node is designed to save image data to the local file system. It provides a simple mechanism to persist images, ensuring they are stored in a specified output directory. This node is particularly useful in scenarios where image visualization or further processing is required outside the computational environment.

# Input types
## Required
- images
    - The "images" parameter is critical to the node's operation, as it represents the raw image data to be saved. Its successful execution depends on the correct format and integrity of the provided image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- file_path
    - The "file_path" parameter indicates the location where the image will be stored on the local system. It is essential for directing the node's output and systematically organizing saved files.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The "prompt" parameter, while optional, can add context to saved images by embedding descriptive text in the image metadata. This is particularly useful for categorizing and searching image collections.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - The "extra_pnginfo" parameter allows additional metadata to be included with each saved image, enhancing the image's descriptive capabilities and facilitating more complex search or organization schemes.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
