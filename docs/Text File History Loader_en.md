# Documentation
- Class name: WAS_Text_File_History
- Category: WAS Suite/History
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_File_History node is designed to manage and retrieve historical text file data. It provides functionality to read from a specified file path, process its content, and maintain a history of accessed text files. This node is essential for applications that need to track and review the evolution of text documents over time.

# Input types
## Required
- file
    - The ‘file’ parameter is critical because it specifies the path of the text file from which the node will read data. The node's operation heavily relies on the validity and accessibility of this file path. It directly affects the node's ability to process and return text content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- dictionary_name
    - The ‘dictionary_name’ parameter allows users to define a custom name for the dictionary that will contain the text file content. This is particularly useful for applications that need to specify naming conventions for data structures.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- text
    - The ‘text’ output parameter represents the processed text file content. It is a key element because it contains the actual data that the node has read and prepared for subsequent operations.
    - Comfy dtype: STRING
    - Python dtype: str
- dictionary
    - The ‘dictionary’ output parameter is a dictionary that stores the processed text lines under a specified key, which is typically the filename. It serves as a structured way to access and use the content of the text file in downstream processes.
    - Comfy dtype: DICT
    - Python dtype: Dict[str, List[str]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
