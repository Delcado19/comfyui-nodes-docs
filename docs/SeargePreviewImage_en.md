# Documentation
- Class name: SeargePreviewImage
- Category: UI
- Output node: True
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node facilitates image preview by saving images to a temporary directory, allowing users to visualize the output of image processing tasks without affecting the main workflow.

# Input types
## Required
- enabled
    - This parameter controls whether the image preview feature is activated, determining whether the node proceeds with the image saving process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- images
    - The input images to be previewed and saved; they are the primary objects the node operates on.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- prompt
    - Optional text descriptions associated with the images, which can provide context or additional information for the image preview.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - Additional metadata that can be embedded into the saved images, enhancing the information available for each image file.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: Dict[str, str]

# Output types
- images
    - The original images provided as input, now accompanied by the preview feature, allowing visualization in the UI.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
