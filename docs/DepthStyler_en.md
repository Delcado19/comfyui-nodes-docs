
# Documentation
- Class name: DepthStyler
- Category: ali1234/stylers
- Output node: False

DepthStyler is a node specifically designed for stylizing text prompts. It enhances text prompts by applying various predefined styles, allowing users to customize the positive and negative aspects of prompts. The node supports dynamic style selection via a menu, enabling users to adjust the tone and content of prompts for specific generation tasks.

# Input types
## Required
- text_positive
    - The positive prompt text to be stylized. It serves as the base content for customization, intended to enhance or clarify desired elements in the generated output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative prompt text to be stylized. It guides the model to avoid certain elements or themes, serving as a balance to the positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- depth
    - Unknown parameter
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- log_prompt
    - A boolean flag to enable or disable logging of prompt transformations and selections. Useful for debugging or tracking how prompt changes affect the stylization process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The stylized positive prompt text, modified according to the selected style, used to emphasize or clarify desired elements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The adjusted stylized negative prompt text, ensuring certain elements or themes are avoided in the generated output.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
