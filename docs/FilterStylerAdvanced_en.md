
# Documentation
- Class name: FilterStylerAdvanced
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The FilterStylerAdvanced node is an advanced text prompt styler that applies sophisticated styling to text prompts by combining user-selected options, enhancing or modifying the original prompt to achieve desired aesthetic or thematic effects. The node supports dynamic style selection, allowing a high degree of customization during the styling process.

# Input types
## Required
- text_positive_g
    - The global positive text prompt to be styled, serving as one of the base contents for style transformation.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt to be styled, working alongside the global prompt to refine the thematic direction of the styled text.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled, used to specify content that should be avoided or contrasted against in the styled output.
    - Comfy dtype: STRING
    - Python dtype: str
- filter
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative style application, whether it affects the global prompt, the local prompt, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - When enabled, logs the original prompts, styled prompts, and the user's menu selections, aiding in debugging and understanding the impact of the chosen styles.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - The styled version of the global positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The styled version of the local positive text prompt.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive
    - The combined styled version of both the global and local positive text prompts.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_g
    - The styled version of the global negative text prompt, if applicable based on the 'negative_prompt_to' selection.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative_l
    - The styled version of the local negative text prompt, if applicable based on the 'negative_prompt_to' selection.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled version of the negative text prompt, demonstrating the contrast or avoidance effect of the applied filter on the original content.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
