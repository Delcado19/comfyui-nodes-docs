
# Documentation
- Class name: LLMMarkdownRepair
- Category: SALT/Language Toolkit/Tools/Markdown
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Ltdrdata

The LLMMarkdownRepair node aims to fix malformed Markdown text, ensuring it is converted into valid and well-structured Markdown without losing any data. It leverages a language model to analyze and correct the input text based on given instructions.

# Input types
## Required
- llm_model
    - Specifies the language model used for repairing Markdown. It plays a crucial role in understanding and fixing malformed Markdown, processing based on the provided prompt.
    - Comfy dtype: LLM_MODEL
    - Python dtype: dict
- text_input
    - The malformed Markdown text that needs to be repaired. This input is critical as it provides the content the node will process to generate valid Markdown.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_directions
    - Optional additional instructions to guide the language model when repairing Markdown. This can more precisely direct the repair process according to specific requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- markdown_output
    - The repaired Markdown text, which is the result of the language model processing the input text and any additional instructions.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Ltdrdata)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
