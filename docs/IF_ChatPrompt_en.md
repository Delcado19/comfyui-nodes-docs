
# Documentation
- Class name: IF_ChatPrompt
- Category: ImpactFrames💥🎞️
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The IF_ChatPrompt node aims to facilitate interactive chat sessions by generating questions and answers based on image prompts. It leverages various AI engines to interpret visual content and engage in meaningful conversations with users, enhancing the interactive experience within the ComfyUI framework.

# Input types
## Required
- image_prompt
    - Multi-line string input serving as the foundation for generating chat prompts, allowing users to describe or upload images for AI interpretation and response.
    - Comfy dtype: STRING
    - Python dtype: str
- base_ip
    - Specifies the base IP address of the AI engine server, enabling the node to connect and communicate with the selected AI engine for processing requests.
    - Comfy dtype: STRING
    - Python dtype: str
- port
    - Defines the port number for connecting to the AI engine server, facilitating the node's access to the AI engine's services.
    - Comfy dtype: STRING
    - Python dtype: str
- engine
    - Selects the AI engine used to generate chat prompts, offering options such as ollama, kobold, groq, openai, and anthropic.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- selected_model
    - Allows selection of a specific model from the chosen AI engine, currently set to accept an empty tuple, indicating no specific model selection.
    - Comfy dtype: []
    - Python dtype: tuple
- profile
    - Selects a user profile that can influence the style and content of AI responses, based on predefined profiles within the node.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- max_tokens
    - Sets the maximum number of tokens (words) the AI can generate per response, with a configurable range to control the level of detail in AI output.
    - Comfy dtype: INT
    - Python dtype: int
- temperature
    - Adjusts the creativity or randomness of AI responses, using a scale that affects the predictability or variability of responses.
    - Comfy dtype: FLOAT
    - Python dtype: float
- top_k
    - Limits the AI's choices to the top-k most likely next words, focusing response generation on a narrower range of options.
    - Comfy dtype: INT
    - Python dtype: int
- top_p
    - Applies a probability threshold to filter the AI's choices, ensuring only words with cumulative probability above this threshold are considered.
    - Comfy dtype: FLOAT
    - Python dtype: float
- repeat_penalty
    - Imposes a penalty on repeated words or phrases, encouraging the AI to produce more diverse and less repetitive responses.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- image
    - Unknown
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- seed
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- random
    - Unknown
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- keep_alive
    - Unknown
    - Comfy dtype: BOOLEAN
    - Python dtype: unknown
- stop
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- history_steps
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown

# Output types
- Question
    - Questions generated based on image prompts, designed to initiate or continue chat interactions.
    - Comfy dtype: STRING
    - Python dtype: str
- Response
    - AI-generated answers to user input or questions, contributing to the ongoing conversation.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
