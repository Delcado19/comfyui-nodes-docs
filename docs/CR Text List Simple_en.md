# Documentation
- Class name: CR_TextListSimple
- Category: Comfyroll/Animation/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_TextListSimple node is designed to efficiently manage and combine multiple text inputs into a single list. It is suitable for applications that require text aggregation, such as preparing data for batch processing or generating combined text output. The node is known for its simplicity and flexibility, allowing easy integration of various text sources into a unified structure.

# Input types
## Optional
- text_1
    - The parameter 'text_1' is an optional input that allows users to contribute a line of text to the list. It plays an important role in the aggregation process, enhancing the node's ability to handle diverse text inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- text_2
    - The parameter 'text_2' is another optional input used to add a line of text to the list. It is crucial in scenarios where multiple text entries are needed to form a comprehensive dataset.
    - Comfy dtype: STRING
    - Python dtype: str
- text_3
    - The parameter 'text_3' is used to include another line of text in the list. It contributes to the overall functionality of the node by providing users with more text content options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_4
    - The parameter 'text_4' allows another line of text to be included in the list, further expanding the range of text inputs that can be integrated by the node.
    - Comfy dtype: STRING
    - Python dtype: str
- text_5
    - The parameter 'text_5' is an optional field where users can add another line of text to the list. It is an important part of the node's design to accommodate various text inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- text_list_simple
    - The parameter 'text_list_simple' is an optional input that allows inclusion of a pre-existing list of text lines. This is very useful for users who wish to expand or modify an existing text list without having to start from scratch.
    - Comfy dtype: TEXT_LIST_SIMPLE
    - Python dtype: List[str]

# Output types
- TEXT_LIST_SIMPLE
    - The output 'TEXT_LIST_SIMPLE' is a merged list of all text inputs provided to the node. It represents the primary result of the node's operation, serving as an aggregated text dataset ready for further processing or analysis.
    - Comfy dtype: TEXT_LIST_SIMPLE
    - Python dtype: List[str]
- show_help
    - The output 'show_help' provides a URL link to the node's documentation page, allowing users to directly access additional information and guidance on effective use of the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
