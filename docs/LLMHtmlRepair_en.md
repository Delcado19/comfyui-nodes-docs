
# Documentation
- Class name: LLMHtmlRepair
- Category: SALT/Language Toolkit/Tools/HTML
- Output node: False
- Repo Ref: https://github.com/saltlang/salt-ComfyUI

The LLMHtmlRepair node uses a language model to analyze and fix malformed HTML content, ensuring the output is well-structured and valid HTML without any data loss.

# Input types
## Required
- llm_model
    - Specify the language model used for fixing HTML. It is crucial for understanding the input and generating the corrected HTML.
    - Comfy dtype: LLM_MODEL
    - Python dtype: Dict[str, Any]
- text_input
    - The malformed HTML content that needs fixing. It is the main input for the correction process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- extra_directions
    - Optional additional instructions to guide the language model for a more specific fixing process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- html_output
    - The fixed HTML content, well-structured and valid, ensuring no data is missed.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/saltlang/salt-ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
