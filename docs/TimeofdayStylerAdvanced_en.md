
# Documentation
- Class name: TimeofdayStylerAdvanced
- Category: ali1234/stylers
- Output node: False

The TimeofdayStylerAdvanced node is designed for advanced styling of text prompts through customizable templates and options. It dynamically adjusts text prompts based on user-defined styles and preferences, enabling the creation of nuanced and contextually relevant text output.

# Input types
## Required
- text_positive_g
    - The global positive text prompt to be styled, representing a broad thematic input that will be modified according to the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt to be styled, representing a more specific or detailed thematic input that will be modified alongside the global prompt according to the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled, serving as a contrasting input to the positive prompts, which will be modified according to the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- timeofday
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative style application, determining whether it affects the global prompt, the local prompt, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A flag for enabling logging of input and output prompts, used for debugging or analysis purposes, providing insight into how style adjustments are applied.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled global positive text prompt, reflecting modifications from the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled local positive text prompt, reflecting modifications from the selected styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - A combined styled positive text prompt integrating both global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled global negative text prompt, reflecting modifications from the styling options selected for the negative prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled local negative text prompt, reflecting modifications from the styling options selected for the negative prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - A combined styled negative text prompt integrating both global and local modifications.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
