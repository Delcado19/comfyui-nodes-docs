# Documentation
- Class name: CreateLoraNames
- Category: ♾️Mixlab/Utils
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node simplifies extracting and organizing names from given text, especially for handling Lora font name lists. It streamlines input text, removes any extraneous characters or blank lines, and separates names from their file extensions, providing a clean name list and prompts for further use.

# Input types
## Required
- lora_names
    - Input text containing Lora font names, expected to be in multiline format for use. This parameter is critical because it is the primary data source for the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- lora_names
    - Cleaned and processed Lora font name list, free of extraneous characters or blank lines, ready for further processing or use.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- prompt
    - Prompt list derived from Lora font names, with file extensions removed, suitable for generating creative or thematic content.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
