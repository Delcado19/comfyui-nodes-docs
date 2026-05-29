# Documentation
- Class name: CR_FontFileList
- Category: Comfyroll/List/IO
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_FontFileList is a node for generating a list of font files from a specified directory. It can retrieve fonts from the system font directory, a Comfyroll-specific directory, or a user-defined folder. The node handles large numbers of font files and provides options to specify a starting index and maximum rows to list, ensuring efficient data processing and retrieval.

# Input types
## Required
- source_folder
    - The source_folder parameter determines which directory to list font files from. It can be set to 'system' to list fonts from the system font directory, 'Comfyroll' to list fonts from the Comfyroll directory, or 'from folder' to specify a custom folder path.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- start_index
    - The start_index parameter specifies the starting point in the font file list. It allows selecting a subset of fonts from the beginning of the list, which is especially useful for large font collections.
    - Comfy dtype: INT
    - Python dtype: int
- max_rows
    - The max_rows parameter sets the maximum number of font files to list. It is a critical setting for controlling the output list size and managing memory usage effectively.
    - Comfy dtype: INT
    - Python dtype: int
- folder_path
    - The folder_path parameter is an optional input that allows users to specify a custom directory path when source_folder is set to 'from folder'. It enables the node to list font files from a user-defined location.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- LIST
    - The LIST output provides a list of font filenames selected from the specified directory based on the input parameters. It is a key output for further processing or display within the application.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- show_help
    - The show_help output provides a URL link to documentation for additional guidance on using the node. It is especially useful for users seeking more information or troubleshooting.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
