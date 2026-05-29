
# Documentation
- Class name: Preview from metadata [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to generate a preview of image metadata, including details such as filename, resolution, date, and size. It can also process additional metadata related to the image, such as prompts and workflows, providing a comprehensive overview in text format. The goal of the node is to facilitate the visualization and understanding of image metadata by presenting it in a structured and easy-to-understand manner.

# Input types
## Optional
- metadata_raw
    - Raw metadata input containing image information, including file details and any related prompts or workflows. This metadata is essential for generating preview text and determining visualization content.
    - Comfy dtype: METADATA_RAW
    - Python dtype: Dict[str, Any]

# Output types
- Metadata RAW
    - Comfy dtype: METADATA_RAW
    - Output raw format of metadata, containing the processed image metadata information.
    - Python dtype: unknown
- ui
    - Output includes a text preview of image metadata and any related images, structured for display in the user interface. This facilitates easy interpretation and visualization of the metadata.
    - Comfy dtype: UI
    - Python dtype: Dict[str, Union[str, List[str]]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
