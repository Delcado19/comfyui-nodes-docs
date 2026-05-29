
# Documentation
- Class name: FocalPointStylerAdvanced
- Category: ali1234/stylers
- Output node: False

FocalPointStylerAdvanced node is an advanced text prompt style processor that inherits functionality from a base node through a dynamic subclassing mechanism. It modifies and enhances text prompts using predefined style menus and style template datasets. Its purpose is to optimize the generation of image or text output by applying specific style adjustments, including global and local prompt modifications.

# Input types
## Required
- text_positive_g
    - The global positive text prompt to be styled, one of the primary style adjustment inputs. Modifications to this prompt affect the thematic direction and visual characteristics of the generated output on a global scale.
    - Comfy dtype: STRING
    - Python dtype: str
- text_positive_l
    - The local positive text prompt to be styled, another primary style adjustment input. Modifications to this prompt affect the thematic direction and visual characteristics of the generated output on a local scale.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be styled, used to specify elements or themes that should not appear in the output. Modifying this prompt allows fine-tuning the generation process by excluding specific features.
    - Comfy dtype: STRING
    - Python dtype: str
- focal point
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- negative_prompt_to
    - Specifies the scope of negative prompt styling, allowing selection between global only, local only, or both.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether to log input and output prompts for debugging or analysis. Enabling this option provides insight into the styling process and its impact on prompts.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive_g
    - Comfy dtype: STRING
    - The styled global positive text prompt, reflecting the applied style adjustments.
    - Python dtype: str
- text_positive_l
    - Comfy dtype: STRING
    - The styled local positive text prompt, reflecting the applied style adjustments.
    - Python dtype: str
- text_positive
    - Comfy dtype: STRING
    - The modified positive text prompt combining global and local adjustments.
    - Python dtype: str
- text_negative_g
    - Comfy dtype: STRING
    - The adjusted global negative text prompt, designed to more effectively exclude unwanted elements or themes from the generated output.
    - Python dtype: str
- text_negative_l
    - Comfy dtype: STRING
    - The adjusted local negative text prompt, designed to more effectively exclude unwanted elements or themes from the generated output.
    - Python dtype: str
- text_negative
    - Comfy dtype: STRING
    - The modified negative text prompt combining global and local adjustments.
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
