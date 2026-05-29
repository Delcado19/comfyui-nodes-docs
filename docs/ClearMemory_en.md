
# Documentation
- Class name: ClearMemory
- Category: SALT/Language Toolkit/Agents
- Output node: False

The ClearMemory node is designed to reset or clear the memory of a specified agent, potentially targeting specific recipients within its memory scope. This functionality is critical for managing and refreshing the state of conversational agents, ensuring they can operate without the burden of outdated or irrelevant conversation history.

# Input types
## Required
- agent
    - The agent parameter represents the conversational agent whose memory needs to be cleared. This is essential for resetting the agent's state or context to ensure it can effectively handle new interactions.
    - Comfy dtype: AGENT
    - Python dtype: ConversableAgent

# Output types
- agent
    - Returns the agent with its memory cleared or reset, ready for new interactions. This ensures the agent can operate in a fresh state, free from the constraints of prior conversation history.
    - Comfy dtype: AGENT
    - Python dtype: ConversableAgent


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ClearMemory:
	@classmethod
	def INPUT_TYPES(cls):
		return {
			"required": {
				"agent": ("AGENT",),
			},
			"oprional": {
				"recipient": ("AGENT", {"default": None}),
			},
		}

	RETURN_TYPES = ("AGENT",)
	RETURN_NAMES = ("agent",)

	FUNCTION = "clear_memory"
	CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

	def clear_memory(self, agent, recipient=None):
		agent = clone_conversable_agent(agent)
		agent.clear_history(recipient)
		return (agent,)

```
