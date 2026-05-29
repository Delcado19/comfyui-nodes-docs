
# Documentation
- Class name: NounsStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The NounsStylerAdvanced node dynamically enhances text prompts by selecting multiple style options, allowing the use of advanced styling techniques to customize text properties. It utilizes a comprehensive dataset to apply stylistic modifications to text inputs, aiming to refine and personalize the output according to user-selected criteria.

# Input types
## Required
- text_positive_g
    - The global positive text to be stylized, serving as the foundation for applying global style enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text to be stylized, allowing for more refined, localized adjustments to text styling.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text input for stylistic modification, achieving the desired negative tone or emphasis.
    - Comfy dtype: STRING
    - Python dtype: str
- nouns
    - A list of nouns to be specifically stylized or emphasized within the text, enabling targeted style enhancement.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- negative_prompt_to
    - Specifies the scope of negative style application, offering options for global, local, or both text types.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- log_prompt
    - Controls the logging of prompt information, aiding in debugging and refining style selections.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The globally stylized positive text, reflecting broad style enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The locally stylized positive text, showcasing detailed style adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The comprehensive positive text output, integrating both global and local style enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The globally stylized negative text, indicating overall negative style changes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The locally stylized negative text, highlighting specific negative style details.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The overall stylized negative text, merging global and local negative style modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
