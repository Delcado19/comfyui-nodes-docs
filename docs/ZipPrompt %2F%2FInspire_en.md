# Documentation
- Class name: ZipPrompt
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The ZipPrompt node efficiently merges positive and negative prompts into a single compressed entity, enhancing the versatility of data processing in creative tasks. It emphasizes the node's role in simplifying the prompt merging process without delving into specific implementation details.

# Input types
## Required
- positive
    - The ‘positive’ parameter is essential for providing positive content to the node operation and is a key element in creating the compressed prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The ‘negative’ parameter plays a crucial role in providing contrasting content, which is vital for the comprehensiveness of the compressed prompt.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- name_opt
    - Although the ‘name_opt’ parameter is optional, it can be used to customize the output, adding a layer of personalization to the compressed prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- zipped_prompt
    - The output ‘zipped_prompt’ represents the combination of positive and negative inputs, encapsulated in a compact and orderly format for further use.
    - Comfy dtype: ZIPPED_PROMPT
    - Python dtype: Tuple[str, str, str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
