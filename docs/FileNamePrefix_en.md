# Documentation
- Class name: FileNamePrefix
- Category: Mikey/Meta
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The FileNamePrefix node is responsible for generating a standardized file name prefix based on the current date, custom directory name, and custom text input. It ensures file names are unique and organized according to specified criteria, facilitating file management and retrieval.

# Input types
## Required
- date
    - The 'date' parameter determines whether to include the current date in the file name prefix. It plays a key role in organizing files chronologically and ensuring each file has a date-based unique identifier.
    - Comfy dtype: STRING
    - Python dtype: str
- date_directory
    - The 'date_directory' parameter specifies whether to create a directory based on the current date. This is crucial for maintaining a hierarchical file structure that categorizes files by date.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- custom_directory
    - The 'custom_directory' parameter allows including a user-defined directory name in the file name prefix. It provides flexibility in organizing files based on specific projects or user needs.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_text
    - The 'custom_text' parameter allows adding a user-defined text string to the file name prefix. This can be used to add specific tags or identifiers related to file content.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt
    - The 'prompt' parameter is used for advanced customization of the file name prefix with additional metadata. It is particularly useful when dynamic elements need to be incorporated into the file naming convention.
    - Comfy dtype: PROMPT
    - Python dtype: dict
- extra_pnginfo
    - The 'extra_pnginfo' parameter provides supplementary information that can be used to further refine the file name prefix. It is typically used together with the 'prompt' parameter to include more detailed contextual data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: dict

# Output types
- filename_prefix
    - The 'filename_prefix' output is the final generated prefix that combines all input parameters into a coherent and standardized string. It is the basis for the file naming convention used within the system.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
