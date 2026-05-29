
# Documentation
- Class name: LLMChatMessages
- Category: SALT/Language Toolkit/Messages
- Output node: False

This node aims to encapsulate system prompts and user prompts into structured chat messages, facilitating further processing or interaction of these messages in chat-based applications.

# Input types
## Required
- prompt
    - This parameter is used to receive the prompt text from the system or user, serving as the main content of the chat message.
    - Comfy dtype: STRING
    - Python dtype: unknown
- role
    - This parameter is used to specify the role of the message, which may include different identities such as system, user, etc.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown

# Output types
- llm_message
    - Outputs a structured chat message list, combining system and user inputs into a coherent interaction sequence.
    - Comfy dtype: LIST
    - Python dtype: List[ChatMessage]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMChatMessages:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "prompt"}),
                "role": (["SYSTEM", "USER"],),
            },
        }

    RETURN_TYPES = ("LIST", )
    RETURN_NAMES = ("llm_message", )

    FUNCTION = "prepare_messages"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Messages"

    def prepare_messages(self, prompt, role):
        messages = [
                ChatMessage(role=MessageRole.SYSTEM if role == "SYSTEM" else MessageRole.USER, content=prompt ),
        ]
        return (messages,)

```
