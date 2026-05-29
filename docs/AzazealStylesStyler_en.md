
# Documentation
- Class name: AzazealStylesStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/ali1234/comfyui-stylers

The AzazealStylesStyler node dynamically applies a specific aesthetic or thematic style to text prompts based on a selection from a predefined style list. It enhances the original text prompt by incorporating style elements, aiming for more targeted or nuanced expression.

# Input types
## Required
- text_positive
    - The original positive text prompt to be stylized. It serves as the base content and will be enhanced according to the selected style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The original negative text prompt to be stylized. It corresponds to the positive prompt, and both will be modified based on the chosen style.
    - Comfy dtype: STRING
    - Python dtype: str
- Azazeal Styles
    - Specify the particular style to apply to the text prompt, selected from the predefined style list. This choice determines the style adjustments made to the prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Boolean flag; when set to true, enables logging of the prompt stylization process for debugging or verification purposes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The stylized positive text prompt, reflecting the intended thematic enhancement.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The stylized negative text prompt, showing the applied aesthetic or thematic elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ali1234/comfyui-stylers)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
