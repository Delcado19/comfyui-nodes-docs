
# Documentation
- Class name: MoodStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

MoodStyler nodes dynamically customize text prompts by applying a set of predefined mood-related style templates, enabling content generation with specific emotional or atmospheric tones. It uses these templates to stylize input prompts, helping create nuanced and contextually rich output results.

# Input types
## Required
- text_positive
    - The original text prompt for positive or desired outcomes. It serves as the base content that MoodStyler will stylize to reflect a specific mood tone.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The original text prompt for negative or undesired outcomes. This input allows content differentiation based on the applied mood style, ensuring output can avoid certain topics or tones.
    - Comfy dtype: STRING
    - Python dtype: str
- mood
    - Specifies the mood style to apply to the text prompt. This choice determines the emotional or atmospheric tone reflected in the stylized output, enabling customized content generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag that, when enabled, logs the original prompt, the stylized prompt, and the selected mood style. This aids in debugging and understanding the transformation process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The enhanced text prompt reflecting the selected mood style for positive or desired outcomes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The enhanced text prompt reflecting the selected mood style for negative or undesired outcomes.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
