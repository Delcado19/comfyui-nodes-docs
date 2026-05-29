
# Documentation
- Class name: ConversableAgentCreatorAdvanced
- Category: SALT/Shakers/Agents
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConversableAgentCreatorAdvanced node is specifically designed to create advanced conversational agents with customizable features, including integration of large language models (LLMs) and personalized system messages. It allows the creation of AI agents that can handle complex interactions and provide tailored responses based on specific configurations.

# Input types
## Required
- name
    - The name parameter specifies the identity of the created conversational agent, serving as a unique identifier and interaction tag.
    - Comfy dtype: STRING
    - Python dtype: str
- system_message
    - The system_message parameter defines the initial message or instruction set used by the agent to guide its interactions, setting the tone and context for its operations.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- llm_model
    - The llm_model parameter allows specifying a large language model to endow the agent with advanced understanding and response generation capabilities.
    - Comfy dtype: LLM_MODEL
    - Python dtype: dict
- default_auto_reply
    - Specifies the default response used by the agent when it cannot generate a specific reply, ensuring a fallback communication method.
    - Comfy dtype: STRING
    - Python dtype: str
- description
    - A brief description of the agent's purpose or capabilities, used for identification or reference by other agents.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- agent
    - The output is a conversational agent configured with the provided parameters, ready to interact and capable of handling complex tasks.
    - Comfy dtype: AGENT
    - Python dtype: ConversableAgent


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ConversableAgentCreatorAdvanced:
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
				# default auto reply when no code execution or llm-based reply is generated.
				"default_auto_reply": ("STRING", {"multiline": True}),
				# a short description of the agent, this description is used by other agents.
				"description": ("STRING", {"multiline": True}),
			}
		}

	RETURN_TYPES = ("AGENT",)
	RETURN_NAMES = ("agent",)

	FUNCTION = "create_agent"
	CATEGORY = f"{MENU_NAME}/Shakers/Agents"

	def create_agent(self, name, system_message, llm_model=None, default_auto_reply="", description=None):
		agent = ConversableAgent(
			name=name,
			system_message=system_message,
			llm_config={"config_list": [{"model": llm_model["llm"].model, "api_key": llm_model["llm"].api_key}]} if llm_model is not None else False,
			human_input_mode="NEVER",
			default_auto_reply=default_auto_reply,
			description=description if description is not None else system_message,
		)
		return (agent,)

```
