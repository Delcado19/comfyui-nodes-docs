
# Documentation
- Class name: Clothing_StyleStyler
- Category: ali1234/stylers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Clothing Style Styler node is designed to style text prompts according to specific clothing style preferences. It utilizes a predefined set of templates to modify and enhance input text prompts to reflect the desired clothing style in the generated content.

# Input types
## Required
- text_positive
    - The positive content of the text prompt to be styled, serving as the foundation for style modifications. It plays a crucial role in determining the final styled output, providing the initial content that will be enhanced according to the selected clothing style.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative content of the text prompt to be styled, used to specify elements that should be downplayed or avoided in the styled output. This parameter helps refine the styling process by excluding unwanted elements from the final content.
    - Comfy dtype: STRING
    - Python dtype: str
- clothing_style
    - Specifies the particular clothing style to be applied to the text prompt, guiding the style adjustments and enhancements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether the styling process and selections should be logged, providing transparency and traceability of style decisions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The styled version of the positive text prompt reflecting the applied clothing style adjustments.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The styled version of the negative text prompt, designed to exclude or minimize specified unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
