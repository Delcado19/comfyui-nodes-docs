# Documentation
- Class name: SeargeImageSave
- Category: Searge/_deprecated_/Files
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node is designed to facilitate the saving of image data, ensuring that images are correctly stored with relevant metadata and naming conventions.

# Input types
## Required
- images
    - Input images that need to be saved by the node. These images are the primary data operated on by the node, and their quality and format directly affect the output results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - A prefix string used to construct the filename of the saved image. This parameter is critical because it determines the identity and organization of the saved files.
    - Comfy dtype: STRING
    - Python dtype: str
- state
    - A status parameter that affects node execution. It determines whether the node performs the save operation.
    - Comfy dtype: ENABLE_STATE
    - Python dtype: int
- save_to
    - This parameter specifies the destination folder for saving images. It is essential for organizing output and ensuring images are accessible after post-processing.
    - Comfy dtype: SAVE_FOLDER
    - Python dtype: int
## Optional
- prompt
    - This is an optional parameter; when provided, it includes prompt text in the image metadata. This adds context to the image, which may be useful for future reference.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - Additional metadata to be saved along with the image. This parameter allows for the inclusion of extra information, which can enrich the context and utility of the saved image.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
