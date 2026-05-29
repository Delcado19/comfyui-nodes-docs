
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
```python
class GroupChatAdvanced:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "group_manager": ("GROUP_MANAGER",),
                "init_message": ("STRING", {"multiline": True, "dynamicPrompts": False}),
                # select_speaker_message_template: customize the select speaker message (used in "auto" speaker selection), which appears first in the message context and generally includes the agent descriptions and list of agents. The string value will be converted to an f-string, use "{roles}" to output the agent's and their role descriptions and "{agentlist}" for a comma-separated list of agent names in square brackets.
                "select_speaker_message_template": ("STRING", {
                    "multiline": True,
                    "dynamicPrompts": False,
                    "default": "You are in a role play game. The following roles are available:\n{roles}.\nRead the following conversation.\nThen select the next role from {agentlist} to play. Only return the role."
                }),
                # select_speaker_prompt_template: customize the select speaker prompt (used in "auto" speaker selection), which appears last in the message context and generally includes the list of agents and guidance for the LLM to select the next agent. The string value will be converted to an f-string, use "{agentlist}" for a comma-separated list of agent names in square brackets.
                "select_speaker_prompt_template": ("STRING", {
                    "multiline": True,
                    "dynamicPrompts": False,
                    "default": "Read the above conversation. Then select the next role from {agentlist} to play. Only return the role."
                }),
                "summary_method": ([
                    "last_msg",
                    "reflection_with_llm",
                ],),
                "max_turns": ("INT", {"default": 10}),
                # When set to True and when a message is a function call suggestion,
                # the next speaker will be chosen from an agent which contains the corresponding function name
                # in its `function_map`
                "func_call_filter": ("BOOLEAN", {"default": True},),
                # speaker_selection_method: the method for selecting the next speaker.
                # Could be any of the following (case insensitive), will raise ValueError if not recognized:
                # - "auto": the next speaker is selected automatically by LLM.
                # - "manual": the next speaker is selected manually by user input.
                # - "random": the next speaker is selected randomly.
                # - "round_robin": the next speaker is selected in a round robin fashion, i.e., iterating in the same order as provided in `agents`.
                "speaker_selection_method": ([
                    "auto",
                    # "manual",
                    "random",
                    "round_robin",
                ],),
                # whether to allow the same speaker to speak consecutively.
                "allow_repeat_speaker": ("BOOLEAN", {"default": True},),
                # send_introductions: send a round of introductions at the start of the group chat, so agents know who they can speak to
                "send_introductions": ("BOOLEAN", {"default": False},),
                # role_for_select_speaker_messages: sets the role name for speaker selection when in 'auto' mode, typically 'user' or 'system'.
                "role_for_select_speaker_messages": ([
                    "system",
                    "user",
                ],),
                "clear_history": ("BOOLEAN", {"default": True},),
            },
            "optional": {
                "agent_1": ("AGENT",),
                "agent_2": ("AGENT",),
                "agent_3": ("AGENT",),
                "agent_4": ("AGENT",),
                "agent_5": ("AGENT",),
                "agent_6": ("AGENT",),
                "agent_7": ("AGENT",),
                "agent_8": ("AGENT",),
            },
        }

    RETURN_TYPES = ("STRING", "STRING",)
    RETURN_NAMES = ("chat_history", "summary", )

    FUNCTION = "start_chat"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

    def start_chat(
        self,
        group_manager,
        init_message,
        select_speaker_message_template,
        select_speaker_prompt_template,
        func_call_filter,
        speaker_selection_method,
        allow_repeat_speaker,
        send_introductions,
        role_for_select_speaker_messages,
        summary_method,
        max_turns,
        clear_history,
        **kwargs,
    ):
        agents = [kwargs[i] for i in kwargs if "agent_" in i]
        assert len(agents) != 1, "At least 1 agent is needed to start a group chat session"
        # create chat
        group_chat = AutogenGroupChat(
            agents=agents,
            messages=[],
            max_round=max_turns,
            func_call_filter=func_call_filter,
            select_speaker_prompt_template=select_speaker_prompt_template,
            speaker_selection_method=speaker_selection_method,
            allow_repeat_speaker=allow_repeat_speaker,
            send_introductions=send_introductions,
            role_for_select_speaker_messages=role_for_select_speaker_messages,
        )
        group_chat_manager = GroupChatManager(
            groupchat=group_chat,
            **group_manager,
        )
        # start chat
        chat_result = agents[0].initiate_chat(
            group_chat_manager,
            message=init_message,
            summary_method=summary_method,
            max_turns=max_turns,
            clear_history=clear_history,
        )
        # parse results
        summary = chat_result.summary
        chat_history = ""
        for message in chat_result.chat_history:
            chat_history += "- " + str(message["content"]) + "\n\n"
        return (chat_history, summary)

```
