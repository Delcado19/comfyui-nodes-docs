
# Documentation
- Class name: GroupChatAdvanced
- Category: SALT/Language Toolkit/Agents
- Output node: False
- Repo Ref: https://github.com/jmcheon/saltai/tree/d26748c7a9cb42f687c0a48949b7fc949a3bbf50

The GroupChatAdvanced node provides an advanced group chat feature that can coordinate conversations between multiple agents. It includes features such as message filtering, speaker selection, and custom chat introduction to enhance the dynamics of interaction.

# Input types
## Required
- group_manager
    - Specify the manager responsible for overseeing the group chat, ensuring structured and orderly interaction.
    - Comfy dtype: GROUP_MANAGER
    - Python dtype: GroupManager
- init_message
    - The initial message to start the chat session, setting the tone for the conversation.
    - Comfy dtype: STRING
    - Python dtype: str
- select_speaker_message_template
    - Custom message for selecting the next speaker, providing context and instructions in the chat.
    - Comfy dtype: STRING
    - Python dtype: str
- select_speaker_prompt_template
    - Custom prompt for selecting the next speaker, guiding the LLM to choose the next agent to take on the role.
    - Comfy dtype: STRING
    - Python dtype: str
- summary_method
    - Decide the method for generating chat summaries, allowing for customized reflection on the conversation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_turns
    - Specify the maximum number of rounds in the chat, controlling the length of the conversation.
    - Comfy dtype: INT
    - Python dtype: int
- func_call_filter
    - When enabled, filters next speaker suggestions based on function calls, adding a layer of interaction based on agent capabilities.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- speaker_selection_method
    - Define the strategy for selecting the next speaker, promoting organized and dynamic conversation flow.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- allow_repeat_speaker
    - Allow the same speaker to speak consecutively, increasing flexibility in the conversation flow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- send_introductions
    - Choose to send an introductory message at the start of the chat, setting the stage for the conversation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- role_for_select_speaker_messages
    - Specify the role of the message related to selecting the next speaker, enhancing the context of speaker selection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- clear_history
    - Choose to clear the chat history before starting a new session, ensuring a fresh start.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- agent_i
    - Represents one of the potential multiple agents in the chat, contributing to the interactive conversation.
    - Comfy dtype: AGENT
    - Python dtype: Agent

# Output types
- chat_history
    - Complete history of messages exchanged during the chat session.
    - Comfy dtype: STRING
    - Python dtype: str
- summary
    - A summary of the chat session, capturing the essence and key points of the conversation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/jmcheon/saltai/tree/d26748c7a9cb42f687c0a48949b7fc949a3bbf50)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
