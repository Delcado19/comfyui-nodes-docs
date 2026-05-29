
# Documentation
- Class name: GroupChatManagerCreator
- Category: SALT/Language Toolkit/Agents
- Output node: False

This node aims to create a group chat manager capable of overseeing and managing interactions within a group chat environment. It is specifically used to configure and initialize a chat management agent suitable for group chat scenarios, ensuring smooth communication and interaction management among multiple participants.

# Input types
## Required
- name
    - The name of the group chat manager, serving as the identifier and label for the chat management entity.
    - Comfy dtype: STRING
    - Python dtype: str
- system_message
    - The system message available for the group chat manager, typically used to post announcements or instructions in the group chat.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- llm_model
    - Optional parameter specifying the Large Language Model (LLM) configuration for the chat manager, enabling advanced language understanding and response generation capabilities.
    - Comfy dtype: LLM_MODEL
    - Python dtype: dict
- max_consecutive_auto_reply
    - Optional parameter limiting the maximum number of consecutive automatic replies the chat manager can send, helping prevent spam and maintain conversation quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- group_manager
    - The configured group chat manager, ready for direct use in managing group chat sessions.
    - Comfy dtype: GROUP_MANAGER
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class GroupChatManagerCreator:
	"""
	A chat manager agent that can manage a group chat of multiple agents.
	Can only be used in group chats.
	"""
	@classmethod
	def INPUT_TYPES(cls):
		return {
			"required": {
				"name": ("STRING", {"multiline": False, "placeholder": "Manager"}),
				"system_message": ("STRING", {
					"multiline": True,
					"placeholder": "Group chat manager.",
				}),
			},
			"optional": {
				"llm_model": ("LLM_MODEL",),
				"max_consecutive_auto_reply": ("INT", {"default": 10}),
			}
		}

	RETURN_TYPES = ("GROUP_MANAGER",)
	RETURN_NAMES = ("group_manager",)

	FUNCTION = "create_agent"
	CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

	def create_agent(self, name, system_message, llm_model=None, max_consecutive_auto_reply=None):
		group_manager = {
			"name": name,
			"system_message": system_message,
			"llm_config": {
				"config_list": [
					{
						"model": llm_model["llm"].model,
						"api_key": llm_model["llm"].api_key,
					}
				]
			} if llm_model is not None else None,
			"max_consecutive_auto_reply": max_consecutive_auto_reply,
		}
		return (group_manager,)

```
