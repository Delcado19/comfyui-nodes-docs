
# Documentation
- Class name: AdjectiveStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The AdjectiveStylerAdvanced node dynamically applies style transformations to text input based on the adjectives selected by the user, thereby enhancing or altering the tone, emotion, or descriptive quality of the text. It uses a set of predefined templates to modify the text input according to the user’s chosen style preferences, aiming to achieve specific aesthetic or thematic effects.

# Input types
## Required
- text_positive_g
    - Global positive text to be stylized, affecting the overall positive tone or content of the input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Local positive text to be stylized, targeting specific positive aspects or details within the input.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Negative text to be stylized, focusing on changing or enhancing negative elements or tone in the input.
    - Comfy dtype: STRING
    - Python dtype: str
- adjective
    - unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Determines the scope of negative text transformation, allowing customization of which parts of the text to stylize (global, local, or both).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- log_prompt
    - A boolean flag to enable or disable logging of the prompt stylization process, providing insight into the selections and transformations applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Stylized global positive text, reflecting the applied style transformation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Stylized local positive text, showcasing the specific style enhancements made.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - Combined stylized positive text, merging global and local transformations to produce a coherent effect.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - Stylized global negative text, indicating style changes applied to the overall negative tone or content.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - Stylized local negative text, highlighting the style modifications made to specific negative details or aspects.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - Fully stylized negative text, containing both global and local style transformations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
