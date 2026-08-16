# Documentation
- Class name: SaveStringKJ
- Category: KJNodes/misc
- Output node: True
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Saves the input string to your ComfyUI output directory.

# Input types
## Required
- string
    - string to save as .txt file
    - Comfy dtype: STRING
    - Python dtype: str
- filename_prefix
    - The prefix for the file to save. This may include formatting information such as %date:yyyy-MM-dd% or %Empty Latent Image.width% to include values from nodes.
    - Comfy dtype: STRING
    - Python dtype: str
- output_folder
    - Subfolder within the ComfyUI output directory to save to. Paths resolving outside the output directory are rejected.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- file_extension
    - The extension for the saved file. Limited to plain-text/data formats.
    - Comfy dtype: STRING
    - Python dtype: str

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
