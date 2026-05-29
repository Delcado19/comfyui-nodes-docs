
# Documentation
- Class name: ConversableAgentCreator
- Category: SALT/Shakers/Agents
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConversableAgentCreator node is designed to create conversational agents capable of engaging in dialogue based on predefined system messages, with optional integration of Large Language Models (LLMs) to generate responses. This node provides a flexible and powerful tool for building AI entities with conversational capabilities.

# Input types
## Required
- name
    - Specifies the name of the conversational agent, serving as its unique identifier. This name is critical for identifying and referencing specific agents within the system.
    - Comfy dtype: STRING
    - Python dtype: str
- system_message
    - Defines the initial system message, setting the context or instructions for the conversational agent and guiding its interaction behavior. This message plays a key role in shaping the agent's personality and functionality.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- llm_model
    - An optional parameter that allows integration of a Large Language Model (LLM) to enhance the agent's conversational capabilities by generating dynamic responses, thereby improving interaction quality. This provides the agent with advanced language understanding and generation abilities.
    - Comfy dtype: LLM_MODEL
    - Python dtype: dict or None

# Output types
- agent
    - The created conversational agent, ready for interaction, capable of processing user inputs and generating responses. This output represents a fully functional conversational AI entity.
    - Comfy dtype: AGENT
    - Python dtype: ConversableAgent


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConversableAgentCreator:
	@classmethod
	def INPUT_TYPES(cls):
		return {
			"required": {
				"name": ("STRING", {"multiline": False, "placeholder": "Assistant"}),
				"system_message": ("STRING", {
					"multiline": True,
					"default": "You are a helpful AI assistant. You can help with document QA. Return 'TERMINATE' when the task is done."
				}),
			},
			"optional": {
				"llm_model": ("LLM_MODEL",),
			}
		}

	RETURN_TYPES = ("AGENT",)
	RETURN_NAMES = ("agent",)

	FUNCTION = "create_agent"
	CATEGORY = f"{MENU_NAME}/Shakers/Agents"

	def create_agent(self, name, system_message, llm_model=None):
		agent = ConversableAgent(
			name=name,
			system_message=system_message,
			llm_config={"config_list": [{"model": llm_model["llm"].model, "api_key": llm_model["llm"].api_key}]} if llm_model is not None else False,
			human_input_mode="NEVER",
		)
		return (agent,)

```
