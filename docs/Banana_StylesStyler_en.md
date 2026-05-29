
# Documentation
- Class name: Banana_StylesStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Banana Styles Styler node dynamically applies various style options to text prompts based on the style selected by the user from a predefined collection. It enhances or modifies the original text prompt to reflect specific aesthetic or thematic choices by leveraging a customized set of templates.

# Input types
## Required
- text_positive
    - The positive text prompt to be styled. It serves as the base content that will be enhanced or modified based on the selected style option, affecting the overall thematic or aesthetic output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled. This input works in conjunction with the positive prompt, allowing nuanced style manipulation through potential contrast or supplementation of modifications to the positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- banana_styles
    - A collection of style options available for the user to apply to the text prompt. This parameter allows customization of the text's appearance, reflecting the chosen aesthetic or thematic style.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- log_prompt
    - A boolean flag that, when enabled, logs the original and styled prompts, as well as the user's menu selection. This aids in debugging and understanding the impact of the selected style on the text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled version of the positive text prompt, reflecting the applied style options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled version of the negative text prompt, showing the modifications based on the selected style.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
