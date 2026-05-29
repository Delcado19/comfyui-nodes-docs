
# Documentation
- Class name: ThemeStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ThemeStyler node dynamically applies theme styles to text prompts based on a predefined theme selection. It modifies the input text to reflect the selected theme, thereby enhancing the expressiveness and specificity of the prompts for generating content with a particular style.

# Input types
## Required
- text_positive
    - The positive part of the text prompt to be styled. It influences the thematic direction and tone of the generated content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative part of the text prompt to be styled. It is used to refine and contrast the applied theme style, ensuring the output is balanced and nuanced.
    - Comfy dtype: STRING
    - Python dtype: str
- theme
    - A specific theme for styling the text prompt. This selection determines the thematic elements and characteristics injected into the text.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list[str]
- log_prompt
    - A flag to enable or disable logging of the prompt styling process, aiding in debugging and optimization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled positive part of the text prompt, transformed to embody the selected theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled negative part of the text prompt, adjusted to complement the thematic style of the positive text.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
