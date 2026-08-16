# Documentation
- Class name: StripModelExtension
- Category: utils/filename
- Output node: False
- Repo Ref: https://github.com/Delcado19/comfyui-save-image-organized

Removes one known model file extension from the end of a string. Useful when you want a clean folder or filename from values such as 'model.safetensors' or 'model.gguf'.

# Input types
## Required
- text
    - Text to clean. Removes one known model file extension from the end, for example '.safetensors' or '.gguf'.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- clean_text
    - The input text with one known model file extension removed.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Delcado19/comfyui-save-image-organized)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
