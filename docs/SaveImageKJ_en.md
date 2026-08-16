# Documentation
- Class name: SaveImageKJ
- Category: KJNodes/image
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Saves the input images to your ComfyUI output directory.

# Input types
## Required
- images
    - The images to save.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename_prefix
    - The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.
    - Comfy dtype: STRING
    - Python dtype: str
- output_folder
    - The folder to save the images to.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- caption_file_extension
    - The extension for the caption file. Limited to plain-text/data formats.
    - Comfy dtype: STRING
    - Python dtype: str
- caption
    - string to save as .txt file
    - Comfy dtype: STRING
    - Python dtype: str
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- filename
    - The filename output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
