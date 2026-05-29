
# Documentation
- Class name: UnzipPrompt __Inspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The UnzipPrompt node is designed to decompress and separate compressed prompts, typically including positive, negative, and optional name parts. This function is essential for handling and leveraging complex prompt structures within the InspirePack framework.

# Input types
## Required
- zipped_prompt
    - The zipped_prompt argument is the compressed form of the prompt that needs to be decompressed. It plays a key role in the node operation as the source data to be unpacked into its components.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: Tuple[str, str, str]

# Output types
- positive
    - The positive output represents the positive aspect of the prompt after decompression.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The negative output represents the negative aspect of the prompt after decompression.
    - Comfy dtype: STRING
    - Python dtype: str
- name
    - The name output represents the optional name part of the prompt after decompression, providing additional context or identification.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
