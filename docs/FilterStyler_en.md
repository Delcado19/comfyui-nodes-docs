
# Documentation
- Class name: FilterStyler
- Category: ali1234/stylers
- Output node: False

The FilterStyler node dynamically applies style modifications to text prompts based on a filter selected by the user from a predefined menu. It uses a series of templates to transform the input prompt, aiming to enhance or alter its style attributes according to the chosen filter option.

# Input types
## Required
- text_positive
    - The positive text prompt to be stylized. It serves as the base content for style modification, and the selected style filter influences the node's output by being applied to it.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be stylized. Similar to the positive prompt, it undergoes style modification according to the selected filter, affecting the overall style of the output.
    - Comfy dtype: STRING
    - Python dtype: str
- filter
    - Specifies the filter used to style the text prompts. This selection determines the style transformation that will be applied to both the positive and negative prompts.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag that controls whether the input and stylized prompts are logged for debugging or verification purposes. When enabled, it records the before-and-after state of the prompts along with the selected filter.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The stylized version of the positive text prompt, transformed according to the selected style filter.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The stylized version of the negative text prompt, similarly transformed according to the applied style filter.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
