
# Documentation
- Class name: FocusStyler
- Category: ali1234/stylers
- Output node: False

FocusStyler is a node specifically designed to apply particular stylistic effects to text prompts based on predefined templates, aiming to enhance their descriptive nature for generating stylized images. It dynamically adjusts the input prompt according to the selected style option, with the goal of optimizing the visual output around the focal subject.

# Input types
## Required
- text_positive
    - The positive text prompt to be stylized, serving as the primary input for generating stylized descriptions. Modifying this is core to achieving the desired subject focus in the visual output.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The negative text prompt to be stylized, used to negate or balance certain aspects of image generation. Modifying this prompt helps fine-tune the focus of the generated image.
    - Comfy dtype: STRING
    - Python dtype: str
- focus
    - Specifies the style focus to be applied to the text prompt, guiding the thematic direction of the stylistic effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- log_prompt
    - A boolean flag indicating whether to log the input and output prompts for debugging or analysis. Enabling this option provides insight into how the style affects the prompt.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- text_positive
    - The stylized positive text prompt, reflecting the applied focal subject, used to guide the image generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- text_negative
    - The stylized negative text prompt, adjusted to complement the focal subject, used to negate unwanted elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Could not find class definition, unable to automatically detect source code
```
