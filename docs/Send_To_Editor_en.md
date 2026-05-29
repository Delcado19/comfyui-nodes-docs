# Documentation
- Class name: Send_To_Editor
- Category: image
- Output node: True
- Repo Ref: https://github.com/Lerc/canvas_tab.git

This node is designed to process and collect image data, converting it into a format suitable for further use in an editing environment. It emphasizes transforming raw image inputs into structured outputs that can be seamlessly integrated into various editing tools.

# Input types
## Required
- unique_id
    - A unique identifier for the image batch, ensuring that each group of images can be individually tracked and managed during the editing process.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- images
    - The input images to be processed by the node. These images are critical as they form the basis of the output and directly impact the quality and usability of the data sent to the editor.
    - Comfy dtype: COMBO[Image]
    - Python dtype: List[PIL.Image.Image]

# Output types
- collected_images
    - Represents a list of data URLs for the collected images, ready for use in the editing interface.
    - Comfy dtype: List[str]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Lerc/canvas_tab)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
