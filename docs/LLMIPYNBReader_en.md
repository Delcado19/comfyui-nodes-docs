
# Documentation
- Class name: LLMIPYNBReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMIPYNBReader node is specifically designed to read and interpret IPYNB (Jupyter Notebook) files, converting them into a format suitable for further processing or analysis within the llama_index ecosystem. It leverages the structure and content of IPYNB files to extract documents or data, facilitating integration with llama_index's document management capabilities.

# Input types
## Required
- path
    - Specifies the path to the IPYNB file in the file system. This path is essential for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information in string format, which can be used to influence the reading process or handle specific requirements of the IPYNB file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Data processed from the IPYNB file, formatted as documents suitable for use within the llama_index ecosystem.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
