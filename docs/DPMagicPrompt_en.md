# Documentation
- Class name: DPMagicPrompt
- Category: Sampling
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

DPMagicPrompt is a node designed to generate creative and contextually relevant prompts using random and magic generation techniques. It leverages the power of pre-trained language models to generate diverse and engaging text content based on the provided input text and parameters.

# Input types
## Required
- text
    - The input text is the foundation of node operations, guiding the generation of prompts. It is very important because it directly affects the context and relevance of the generated content.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- seed
    - The seed parameter is crucial for controlling randomness in prompt generation, ensuring reproducibility and consistency across different runs.
    - Comfy dtype: int
    - Python dtype: int
- autorefresh
    - The auto-refresh parameter is used to determine whether the node should generate new prompts based on the latest input text, contributing to the dynamism of content creation.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- prompt
    - The output prompt is the result of node operations, containing generated content that is both creative and relevant to the input text.
    - Comfy dtype: str
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/adieyal/comfyui-dynamicprompts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
