
# Documentation
- Class name: MaterialsStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The MaterialsStyler node can dynamically apply styles to text prompts based on a selected material theme template. It allows users to enhance or modify the aesthetic and thematic aspects of their prompts by incorporating the style of a specific material, aiming for more targeted and refined output.

# Input types
## Required
- text_positive
- The positive portion of the text prompt that requires styling. It plays a key role in determining the overall positive tone and theme of the stylized output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- The negative portion of the text prompt that requires styling. It is essential for defining elements to be muted or avoided in the stylized output, helping produce more nuanced results.
    - Comfy dtype: STRING
    - Python dtype: str
- materials
- Specify the material theme template to apply to the text prompt. This choice is crucial for customizing the styling process and directly impacts the final aesthetic and thematic effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- A boolean flag indicating whether to log the prompt styling process. Enabling this option provides transparency and insight into styling decisions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
- Reflects the positive portion of the text prompt after the material theme style has been applied.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Shows the negative portion of the text prompt after adjustments made to mute or avoid certain elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
