
# Documentation
- Class name: Breast_StateStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The Breast_StateStylerAdvanced node applies advanced styling options to text prompts, using a comprehensive set of style parameters to enhance or modify the aesthetic and thematic elements of the input text. It abstracts complex style operations into a user‑friendly interface, allowing detailed customization and fine‑tuning of text‑based content.

# Input types
## Required
- text_positive_g
- Represents the style for a global positive text prompt, setting a broad thematic direction.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- Specifies a local positive text prompt, allowing finer thematic adjustments within the global context.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Initial negative text prompt, which the node will modify to balance or avoid specific themes.
    - Comfy dtype: STRING
    - Python dtype: str
- breast_state
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
- Determines how negative styles are applied, offering options for global, local, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
- Boolean flag to enable logging of the styling process, providing insight into choices made and transformations applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
- Styled global positive text prompt, reflecting broad thematic enhancements.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
- Styled local positive text prompt, showing finer adjustments within the global theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
- Combination of global and local positive prompts, with styles fully applied.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
- Styled global negative text prompt, modified to balance or avoid specific global themes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
- Styled local negative text prompt, handling more subtle thematic elements that need to be avoided or balanced.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
- Combination of global and local negative prompts, with styles fully applied to avoid or balance specific themes.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
