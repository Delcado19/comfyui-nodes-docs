
# Documentation
- Class name: GroupChat
- Category: SALT/Language Toolkit/Agents
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GroupChat node is responsible for creating and managing group chat sessions among multiple agents. It supports chat initiation, message processing, and chat flow management, including selecting speakers and introducing agents, thereby orchestrating complex multi-agent interactions in a group chat environment.

# Input types
## Required
- group_manager
    - The administrator responsible for overseeing the group chat, providing necessary configuration and permissions for the chat session.
    - Comfy dtype: GROUP_MANAGER
    - Python dtype: GroupManager
- init_message
    - The initial message used to start the group chat session, setting the tone and context for the conversation.
    - Comfy dtype: STRING
    - Python dtype: str
- send_introductions
    - A flag indicating whether agents should send self-introductions at the start of the chat, laying the groundwork for their interactions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- summary_method
    - The method used to generate a summary of the chat session, determining how to capture the key points of the conversation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_turns
    - Specifies the maximum number of rounds the chat session can have, controlling the length and potential depth of the conversation.
    - Comfy dtype: INT
    - Python dtype: int
- clear_history
    - A flag indicating whether chat history should be cleared before starting a new session, ensuring privacy and relevance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- agent_i
    - Represents one of the multiple agents that may participate in the group chat, contributing to the dynamic flow of the conversation.
    - Comfy dtype: AGENT
    - Python dtype: Agent

# Output types
- chat_history
    - A record of all messages exchanged during the chat session, providing a comprehensive overview of the conversation flow.
    - Comfy dtype: STRING
    - Python dtype: str
- summary
    - A concise summary of the chat session, capturing the essence and key points of the conversation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
