# Documentation
- Class name: WAS_Image_History
- Category: WAS Suite/History
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_History node is designed to manage and retrieve historical images stored in the WASDatabase. It provides functionality to access and display images from the history, ensuring users can view past image states or data.

# Input types
## Required
- image
    - The 'image' parameter is essential for specifying which historical image the user wants to access. The node uses it to locate and retrieve the correct image from the database.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- image
    - The 'image' output parameter represents the retrieved historical image in tensor form, suitable for further processing or display purposes.
    - Comfy dtype: COMBO[str, torch.Tensor]
    - Python dtype: Union[str, torch.Tensor]
- filename_text
    - The 'filename_text' output parameter provides the filename of the retrieved image, which is useful for logging, referencing, or additional metadata purposes.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
