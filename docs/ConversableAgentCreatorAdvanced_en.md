
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
