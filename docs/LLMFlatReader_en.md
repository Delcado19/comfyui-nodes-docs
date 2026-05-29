
# Documentation
- Class name: LLMFlatReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMFlatReader node is designed to read and process "flat" files, converting them into a format suitable for indexing and further analysis within the llama_index document system. It leverages the basic functionality of the FlatReader class to transform simple text files into structured document representations.

# Input types
## Required
- path
    - Specifies the file system path of the "flat" file to be read. This path is essential for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information in string format, which can be used to influence the reading process or pass additional parameters that may be required for specific use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Processed data from the "flat" file, constructed in document form suitable for indexing and further analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
