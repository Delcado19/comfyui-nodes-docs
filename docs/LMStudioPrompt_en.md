# Documentation
- Class name: LMStudioPrompt
- Category: Mikey/AI
- Output node: True
- Repo Ref: https://github.com/bash-j/mikey_nodes

The LMStudioPrompt node is designed to facilitate prompt generation for AI text-to-image models. It processes input prompts through various modes such as 'prompt', 'style', 'descriptor', and 'character', enriching them with detailed descriptions to guide the AI model's image generation. The node also supports custom history for personalized responses and integrates with external servers to retrieve and process prompt results.

# Input types
## Required
- input_prompt
    - The input prompt is a critical parameter of the LMStudioPrompt node, as it directly influences the content and direction of AI-generated images. It serves as the foundation upon which the node produces detailed descriptions, aiming to provide the AI model with clear and imaginative visuals.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode parameter determines how the LMStudioPrompt node processes the input prompt. Each mode corresponds to a different approach for generating detailed descriptions—for example, focusing on the style of the image in 'style' mode or crafting detailed character descriptions in 'character' mode. The choice of mode significantly impacts the output and application of the generated prompt.
    - Comfy dtype: COMBO['prompt', 'style', 'descriptor', 'character', 'custom']
    - Python dtype: str
## Optional
- custom_history
    - When the mode is set to 'custom', the custom_history parameter becomes important. It allows users to provide a path to a history file, which the node will use to generate responses. This feature enables the node to access external data sources for a more personalized or context-aware prompt generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- server_address
    - The server_address parameter specifies the server address with which the LMStudioPrompt node will communicate to send and receive data. This is particularly useful when the node needs to interact with external services or applications to process prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- server_port
    - The server_port parameter defines the port number on the server that the LMStudioPrompt node will use for communication. It is an essential component for establishing a connection with the server, ensuring the node can correctly send and receive data.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter is used to initialize the random number generator, ensuring that the results produced by the LMStudioPrompt node are reproducible. This is especially useful for debugging or when consistent results are expected across multiple runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The text output of the LMStudioPrompt node contains the processed prompt results. It consists of detailed descriptions generated based on the input prompt and the selected mode, and can be used directly as input for AI text-to-image models to create images.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
