# Documentation
- Class name: OobaPrompt
- Category: Mikey/AI
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The OobaPrompt node is designed to process prompts and interact with AI text‑to‑image models to generate detailed image descriptions. It enhances input prompts through various modes such as "prompt", "style", "descriptor", and "character" to guide the AI model in creating specific types of images. The node can also handle custom history and seeds to introduce random variation in the output.

# Input types
## Required
- input_prompt
    - The input prompt is a key parameter for the node because it directly influences the AI model's understanding of the image to generate. It should be a descriptive text that clearly depicts the desired appearance of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- mode
    - The mode determines the type of processing the node will perform on the input prompt. Each mode corresponds to a different way of enhancing the prompt to achieve a specific image generation result.
    - Comfy dtype: ['prompt', 'style', 'descriptor', 'character', 'negative', 'custom']
    - Python dtype: str
## Optional
- custom_history
    - Use custom history when the user wants to provide a set of personalized prompts to influence the AI model. It should point to a file containing historical prompt data.
    - Comfy dtype: STRING
    - Python dtype: str
- seed
    - The seed parameter is crucial for generating reproducible image sequences. It ensures that the same input prompt with the same seed value will produce identical output.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- text
    - The output text is the result of the AI model processing the input prompt. It represents the detailed description the AI model uses to generate the image.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
