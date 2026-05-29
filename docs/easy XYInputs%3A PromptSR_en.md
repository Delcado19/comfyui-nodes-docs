
# Documentation
- Class name: easy XYInputs: PromptSR
- Category: EasyUse/XY Inputs
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The PromptSR node is specifically designed for processing text prompts, adjusting or generating new prompts by specifying sentiment polarity (positive or negative). It leverages search text, replacement text, and conditions to dynamically create or modify prompts, aiming for a more targeted and nuanced approach to prompt engineering.

# Input types
## Required
- target_prompt
    - Determines the sentiment direction for prompt adjustment or generation, influencing output results toward positive or negative sentiment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- search_txt
    - Text used for searching within prompts, enabling specific topics or content to be targeted for optimization or generation.
    - Comfy dtype: STRING
    - Python dtype: str
- replace_all_text
    - Boolean flag indicating whether all occurrences of the search text in the prompt should be replaced.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- replace_count
    - Specifies the number of replacements to perform, allowing controlled modifications to the prompt.
    - Comfy dtype: INT
    - Python dtype: int
- replace_i
    - Dynamic replacement text input, where 'i' can range from 1 to the value specified by 'replace_count', facilitating specific text replacements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- X or Y
    - Generates a prompt classified as 'X' or 'Y' based on the sentiment direction specified by the target prompt, with detailed modifications reflecting input conditions.
    - Comfy dtype: X_Y
    - Python dtype: Dict[str, Any]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
