# Documentation
- Class name: DPJinja
- Category: Prompt Generation
- Output node: False
- Repo Ref: https://github.com/adieyal/comfyui-dynamicprompts.git

The DPJinja node is designed to generate prompts using Jinja template syntax. It leverages JinjaGenerator to create a set of prompts based on provided text and template configuration, offering a flexible approach to generating dynamic prompts tailored to specific needs.

# Input types
## Required
- text
    - The "text" parameter is the source material from which the Jinja template will generate prompts. It is critical as it directly influences the content and diversity of the generated prompts.
    - Comfy dtype: "str"
    - Python dtype: str

# Output types
- prompts
    - The "prompts" output is a list of prompts generated based on the input text and Jinja template. It represents the primary result of the node's functionality, encompassing the dynamic nature of the prompt generation process.
    - Comfy dtype: COMBO["str"]
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/adieyal/comfyui-dynamicprompts)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
