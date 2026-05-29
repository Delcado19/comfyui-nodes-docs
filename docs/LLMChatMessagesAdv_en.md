
# Documentation
- Class name: LLMChatMessagesAdv
- Category: SALT/Language Toolkit/Messages
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMChatMessagesAdv node aims to prepare chat messages by encapsulating system prompts and user prompts into a structured format. The node facilitates the creation of chat interactions by organizing input prompts into a series of messages, enabling a more structured and coherent conversation flow.

# Input types
## Required
- system_prompt
    - System prompts represent the initial message or context provided by the system. They set the tone for the chat interaction and guide the user's responses.
    - Comfy dtype: STRING
    - Python dtype: str
- user_prompt
    - User prompts capture the user's responses or questions to the system prompts. They play a crucial role in driving the conversation forward.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- llm_message
    - A list of chat messages containing system and user prompts, structured for further processing or interaction.
    - Comfy dtype: LIST
    - Python dtype: List[ChatMessage]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
