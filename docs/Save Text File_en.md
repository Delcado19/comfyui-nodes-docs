# Documentation
- Class name: WAS_Text_Save
- Category: WAS Suite/IO
- Output node: True
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_Save node manages the process of saving text data to a file. It handles directory creation, checks for empty text, and generates filenames with appropriate padding and separators. The node ensures saved files have unique names and are stored at the specified path.

# Input types
## Required
- text
    - The text parameter represents the text content intended to be saved to a file. It is the foundational part of the node's operation, as it is the primary data being managed.
    - Comfy dtype: STRING
    - Python dtype: str
- path
    - The path parameter specifies the directory where the text file will be saved. It is critical for determining the file's location in the file system.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- filename_prefix
    - The filename prefix parameter sets the starting characters of the filename. It helps with the uniqueness and organization of saved files.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_delimiter
    - The filename separator parameter defines the character used to separate the filename prefix and the numeric portion. It helps distinguish the different parts of the filename.
    - Comfy dtype: STRING
    - Python dtype: str
- filename_number_padding
    - The filename number padding parameter determines the number of digits used for the numeric portion of the filename. It ensures consistent formatting of filenames.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The text output parameter returns the text saved to the file, providing confirmation of the data that was written.
    - Comfy dtype: STRING
    - Python dtype: str
- ui
    - The ui output parameter is used to provide user interface feedback. It typically contains a string representation of the saved text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Dict[str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
