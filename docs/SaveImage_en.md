# Documentation
- Class name: SaveImage
- Category: image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node persists generated images to the file system, ensuring that the results of the image creation process are stored and organized in a user‑specified directory structure.

# Input types
## Required
- images
- Image data is required because it provides the node with the raw image content to be saved. It directly impacts the node’s core function of saving images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- filename_prefix
- This parameter lets the user specify a prefix for saved image filenames, which is essential for organizing and identifying images in the output directory.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- ui
- Output delivers a structured summary of saved images, including filenames and subfolders, which is crucial for users to track and manage generated content.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[Dict[str, Union[str, int]]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
