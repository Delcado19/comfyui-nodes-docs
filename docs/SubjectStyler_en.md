
# Documentation
- Class name: SubjectStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/alyssaxvo/ComfyUI-Custom-Nodes

SubjectStyler node is used to dynamically apply theme styles to text prompts based on predefined "theme" style sets. It enhances text prompts by incorporating theme-specific style elements, aiming for more targeted and refined content generation.

# Input types
## Required
- text_positive
- Positive aspects of the text prompt that need styling. It plays a crucial role in guiding the styling process to enhance desired theme elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Negative aspects of the text prompt that need styling. It is used to balance or avoid certain themes, ensuring the styling process focuses on the required theme.
    - Comfy dtype: STRING
    - Python dtype: str
- subject
- Specific theme to apply during styling. This parameter determines how the text prompt is adjusted for thematic direction and style.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- A boolean flag indicating whether to log detailed information of the styling process. This aids debugging and understanding how the selected theme affects the final styled prompt.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
- Positive aspects of the text prompt after applying the theme style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Negative aspects of the text prompt also affected by the selected theme.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
