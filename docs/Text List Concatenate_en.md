# Documentation
- Class name: WAS_Text_List_Concatenate
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Text_List_Concatenate node is designed to efficiently merge multiple string lists into a single unified list. It plays a key role in streamlining data preprocessing workflows, particularly when handling text data from different sources that needs to be aggregated for further processing or analysis.

# Input types
## Required
- list_a
    - The 'list_a' parameter is a string list that will be merged with other lists. It is the fundamental input for the node, as it directly contributes to the formation of the final merged list.
    - Comfy dtype: LIST
    - Python dtype: List[str]
## Optional
- list_b
    - The 'list_b' parameter is an optional string list that can be concatenated with the primary list. It enhances the flexibility of the node by allowing additional data to be included in the final list.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[str]]
- list_c
    - The 'list_c' parameter is another optional string list used for concatenation. It provides further customization options for the node, enabling users to control the composition of the output list more precisely.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[str]]
- list_d
    - The 'list_d' parameter is another optional list that can be concatenated with the merged list. It gives users the ability to include more strings, further tailoring the final output to specific requirements.
    - Comfy dtype: LIST
    - Python dtype: Optional[List[str]]

# Output types
- merged_list
    - The 'merged_list' output is the result of concatenating all input lists. It represents the combined text data that can be used for subsequent operations or analysis.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
