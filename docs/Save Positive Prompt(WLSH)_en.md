# Documentation
- Class name: WLSH_Save_Positive_Prompt_File
- Category: WLSH Nodes/IO
- Output node: True
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Save_Positive_Prompt_File node is designed to manage the storage of text data. It receives a prompt and saves it to a specified file, ensuring the data is persisted for future use. This node plays a critical role in maintaining a record of positive prompts, which can be essential for various applications such as training models or content analysis.

# Input types
## Required
- filename
    - The filename parameter specifies the name of the file where the positive prompt will be saved. It is crucial for identifying the stored data and is essential for the node's operation, as it determines the file's identity within the output directory.
    - Comfy dtype: STRING
    - Python dtype: str
- positive
    - The positive parameter represents the text content to be saved as a positive prompt. It is a mandatory input for the node, as it is the core data the node is designed to process and save.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- path
    - The path parameter determines the directory where the file will be saved. It is optional; if not provided, a default directory will be used. This parameter affects the node's execution by specifying the file storage location.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive
    - The output of the save_text_file function is the positive prompt saved to the file. This output represents the successful storage of the input data and is important for confirming the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
