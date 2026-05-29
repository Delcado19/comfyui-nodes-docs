
# Documentation
- Class name: ChangeSystemMessage
- Category: SALT/Language Toolkit/Agents
- Output node: False

The ChangeSystemMessage node is designed to modify the agent's system message, allowing dynamic updates to the agent's instructions or behavior based on the new system message.

# Input types
## Required
- agent
    - Represents the agent whose system message needs to be updated, serving as the primary modification target.
    - Comfy dtype: AGENT
    - Python dtype: CustomAgentType
- system_message
    - The new system message to set for the agent, used to customize the agent's instructions or behavior.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- agent
    - The updated agent that has applied the new system message, reflecting the changes in instructions or behavior.
    - Comfy dtype: AGENT
    - Python dtype: CustomAgentType


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ChangeSystemMessage:
	@classmethod
	def INPUT_TYPES(cls):
		return {
			"required": {
				"agent": ("AGENT",),
				"system_message": ("STRING", {
					"multiline": True,
					"default": "You are a helpful AI assistant. You can help with document QA. Return 'TERMINATE' when the task is done."
				}),
			},
		}

	RETURN_TYPES = ("AGENT",)
	RETURN_NAMES = ("agent",)

	FUNCTION = "update_system_prompt"
	CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

	def update_system_prompt(self, agent, system_message, llm_model=None):
		agent = clone_conversable_agent(agent)
		agent.update_system_message(system_message)
		return (agent,)

```
