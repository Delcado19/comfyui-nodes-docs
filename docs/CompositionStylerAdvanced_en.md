
# Documentation
- Class name: CompositionStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The CompositionStylerAdvanced node provides advanced styling capabilities for composition-based text prompts by dynamically inheriting from the SDXLPromptStylerAdvanced class. It utilizes predefined menu sets to apply specific style transformations to both positive and negative text prompts, enhancing their thematic and aesthetic qualities.

# Input types
## Required
- text_positive_g
    - Global positive text prompt requiring style processing, providing broader context for the styling process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text prompt requiring style processing, focusing on more specific or detailed aspects of the composition.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Unknown
    - Comfy dtype: STRING
    - Python dtype: unknown
- composition
    - Option selected from the composition menu to apply specific style transformations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: list
- negative_prompt_to
    - Controls where negative style is applied, with options for global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - Boolean flag to enable or disable logging of the prompt styling process. This aids in debugging and understanding the transformations applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Styled global positive text prompt, transformed according to the selected composition style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Styled local positive text prompt, reflecting detailed composition-based style enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Merged styled positive text prompt, integrating both global and local transformations.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Styled global negative text prompt, modified according to the negative style direction.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Styled local negative text prompt, showcasing specific negative style changes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Merged styled negative text prompt, encompassing both global and local negative transformations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
