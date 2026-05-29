# Documentation
- Class name: CR_LoadTextList
- Category: List
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_LoadTextList node loads text data from a file into a list format. It handles CSV and TXT file extensions, providing a versatile way to ingest text information for further processing. This node plays a key role in data preparation and applies to various applications that require text input.

# Input types
## Required
- input_file_path
- The input_file_path parameter specifies the directory where the text file resides. This is essential for the node to locate and read the file, thus affecting the node's execution and the resulting loaded text data list.
    - Comfy dtype: STRING
    - Python dtype: str
- file_name
- The file_name parameter indicates the name of the text file to load, without its extension. It is a key component for identifying a specific file in the given directory, influencing the node's operation and the loaded text data.
    - Comfy dtype: STRING
    - Python dtype: str
- file_extension
- The file_extension parameter denotes the type of text file to load, which can be 'txt' or 'csv'. This choice determines how the node processes the file, affecting the structure and format of the resulting text list.
    - Comfy dtype: COMBO['txt', 'csv']
    - Python dtype: Literal['txt', 'csv']

# Output types
- list
- The list output parameter represents the loaded text data organized as a list of strings. Each element corresponds to a line in the text file, providing a direct way to access and manipulate the text data.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
- The show_help output provides a documentation URL for further assistance. This is useful for users seeking more information about the node's usage and features.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
