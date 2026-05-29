# Documentation
- Class name: CR_SaveTextToFile
- Category: Comfyroll/Utils/Text
- Output node: True
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SaveTextToFile node is designed to save text data to a file. It provides functionality for handling multiline text and writes the text to a specified file path, using a given file name and extension, ensuring the file has a unique name to avoid overwriting existing files.

# Input types
## Required
- multiline_text
    - The 'multiline_text' parameter holds the text content to be saved. It is essential because it is the main data the node processes and writes to the file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- output_file_path
    - The 'output_file_path' parameter specifies the directory where the file will be saved. It is optional; if not provided, a default path is used.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name
    - The 'file_name' parameter defines the name of the file to be created. It is important for identifying the file and ensuring its uniqueness.
    - Comfy dtype: STRING
    - Python dtype: str
- file_extension
    - The 'file_extension' parameter determines the format of the file to be saved. It can be 'txt' or 'csv', affecting how the text data is structured in the file.
    - Comfy dtype: COMBO['txt', 'csv']
    - Python dtype: str

# Output types
- show_help
    - The output 'show_help' provides a URL link to documentation for further help or guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
