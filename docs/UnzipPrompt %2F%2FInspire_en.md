# Documentation
- Class name: UnzipPrompt
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node is designed to handle and decompress prompts, facilitating content extraction for further use. It is a key component in workflows that require processing compressed data, ensuring data is always available and correctly formatted for subsequent operations.

# Input types
## Required
- zipped_prompt
- The `zipped_prompt` parameter is required because it contains the compressed data the node is designed to process. It directly affects the node's operation and output quality, as the node's primary function is to extract and process this input.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: bytes

# Output types
- positive
- The `positive` output represents content successfully extracted and processed from `zipped_prompt`. It is the key result of the node's operation, indicating that the data has been properly handled and is ready for further use.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
- The `negative` output provides information about any issues or errors encountered while processing `zipped_prompt`. This output is essential for understanding the node's success or failure and for troubleshooting when necessary.
    - Comfy dtype: STRING
    - Python dtype: str
- name
- The `name` output typically contains the filename or identifier of `zipped_prompt`. This output is useful for tracking and referencing the processed data within the workflow.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
