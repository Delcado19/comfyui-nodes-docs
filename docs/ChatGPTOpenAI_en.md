# Documentation
- Class name: ChatGPTNode
- Category: ♾️Mixlab/GPT
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The ChatGPTNode class is designed to generate context-aware text using large language models provided by OpenAI. It manages conversation history to maintain dialogue flow, enabling more coherent and relevant responses. The node excels at integrating with various models and APIs, ensuring flexibility and adaptability across different application scenarios.

# Input types
## Required
- api_key
    - The API key is essential for authenticating and authorizing access to the language model service. It plays a central role in ensuring secure communication with the API, enabling the node to fetch and process language model responses.
    - Comfy dtype: KEY
    - Python dtype: str
- api_url
    - The API URL specifies the endpoint of the language model service. It is critical for directing the node's requests to the correct service, affecting the node's interaction with the language model and its ability to retrieve data from it.
    - Comfy dtype: URL
    - Python dtype: str
- prompt
    - The prompt is the input query or statement used by the language model to generate a response. It is a key element of the node's operation, as it directly influences the content and direction of the generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- system_content
    - System content provides the language model with system-level instructions or context, which can influence the style and tone of the generated response. It is an optional parameter that can be used to customize the node's behavior.
    - Comfy dtype: STRING
    - Python dtype: str
- model
    - The model parameter selects the specific language model used by the node. It determines the complexity and capability of the language model interaction, affecting the quality and type of responses generated.
    - Comfy dtype: COMBO[gpt-3.5-turbo, gpt-35-turbo, gpt-3.5-turbo-16k, gpt-3.5-turbo-16k-0613, gpt-4-0613, gpt-4-1106-preview, glm-4]
    - Python dtype: str
- seed
    - The seed provides a starting point for random number generation used in the language model. It can be used to produce repeatable results by ensuring a consistent initial state for the model's stochastic processes.
    - Comfy dtype: INT
    - Python dtype: int
- context_size
    - Context size determines the number of previous exchanges the node will consider when generating a response. It affects the depth of dialogue context and the relevance of the generated text.
    - Comfy dtype: INT
    - Python dtype: int
- unique_id
    - The unique ID is an optional identifier that can be used to track or reference a specific interaction with the language model. It does not affect the node's execution but may be useful for logging or debugging purposes.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str
- extra_pnginfo
    - Additional PNG information is an optional parameter that can provide extra context or data to the language model. Its use is specific to certain applications and can enhance the node's ability to generate more detailed or specific responses.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str

# Output types
- text
    - The text output represents the language model's response to the input prompt. It is the primary result of the node's operation, reflecting the node's ability to generate coherent and contextually relevant text.
    - Comfy dtype: STRING
    - Python dtype: str
- messages
    - The message output is a JSON-formatted string containing the conversation history up to the current response. It includes system instructions, user prompts, and assistant replies, providing a comprehensive view of the interaction.
    - Comfy dtype: STRING
    - Python dtype: str
- session_history
    - The session history output is a JSON-formatted string that records the entire dialogue session with the language model. It serves as a record of the conversation and can be used for analysis or maintaining context across multiple interactions.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
