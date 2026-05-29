
# Documentation
- Class name: LLMChatMessageConcat
- Category: SALT/Language Toolkit/Messages
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMChatMessageConcat node is designed to concatenate two chat message lists, effectively merging conversations or message sequences into a single, continuous stream. This node is particularly useful when processing and organizing large amounts of dialogue data, integrating scattered message sequences into a complete conversation flow.

# Input types
## Required
- message_a
    - Represents the first chat message list to be concatenated. It is essential for combining multiple message sequences into a unified list. This input can contain any type of chat message, such as user queries, system responses, etc.
    - Comfy dtype: LIST
    - Python dtype: List[ChatMessage]
- message_b
    - Represents the second chat message list to be concatenated with the first list. This parameter is crucial for merging conversations or expanding message sequences. It allows users to seamlessly combine two separate conversation fragments.
    - Comfy dtype: LIST
    - Python dtype: List[ChatMessage]

# Output types
- llm_message
    - Outputs the concatenated chat message list, providing a unified conversation sequence or message exchange. This output can be used directly for further processing, such as analyzing conversation content, generating summaries, or feeding into other natural language processing tasks.
    - Comfy dtype: LIST
    - Python dtype: List[ChatMessage]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
