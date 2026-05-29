
# Documentation
- Class name: FocusStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

FocusStylerAdvanced is an advanced text prompt styler that enhances text prompts through sophisticated styling techniques. This node allows for complex customization of positive and negative prompts, introducing nuanced styling layers for both global and local contexts, enabling users to fine-tune their text prompts with greater precision.

# Input types
## Required
- text_positive_g
    - Serves as the global context for the positive text prompt, providing a broad thematic foundation for styling.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - Represents the local context for the positive text prompt, allowing detailed customization within the global theme.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled, which can be adjusted to contrast or complement the positive prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- focus
    - Unknown parameter.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Determines how negative styling is applied, specifying whether adjustments affect the global aspect, local aspect, or both of the negative prompt.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - When true, logs detailed information about the styling process, providing insight into the choices made and their effects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled global positive text prompt, reflecting the applied styling options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled local positive text prompt, showcasing the effects of fine-tuned adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - A combination of global and local positive prompts, styled and merged according to the specified options.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled global negative text prompt, adjusted according to the negative_prompt_to parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled local negative text prompt, customized according to the negative_prompt_to parameter.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The overall styled negative prompt, incorporating both global and local adjustments.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
