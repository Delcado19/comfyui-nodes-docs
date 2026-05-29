# Documentation
- Class name: CR_SDXLStyleText
- Category: Comfyroll/SDXL
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_SDXLStyleText node is designed to process and manage style-related text input, particularly suitable for style transfer operations in image processing workflows. It handles positive and negative style descriptions, allowing users to define style attributes they want to enhance or suppress in the output. This node plays a key role in guiding the style direction of image transformations, ensuring the desired aesthetic results are achieved.

# Input types
## Required
- positive_style
    - The positive_style parameter is essential for defining the style features users want to highlight in the final image. It allows detailed descriptions that can significantly influence the creative direction of the style transfer process.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_style
    - The negative_style parameter is used to specify style elements users want to avoid or minimize in the image output. This input is crucial for fine-tuning the style to meet user expectations and omitting unwanted features.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- positive_prompt_text_l
    - The positive_prompt_text_l output contains the processed positive style text, which will be used to guide image processing towards the desired style enhancement direction.
    - Comfy dtype: STRING
    - Python dtype: str
- negative_prompt_text_l
    - The negative_prompt_text_l output holds the processed negative style text, which is essential for steering image processing away from unwanted style features.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - The show_help output provides a URL link to documentation for further assistance and guidance when using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_SDXLStyleText:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'positive_style': ('STRING', {'default': 'POS_STYLE', 'multiline': True}), 'negative_style': ('STRING', {'default': 'NEG_STYLE', 'multiline': True})}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('positive_prompt_text_l', 'negative_prompt_text_l', 'show_help')
    FUNCTION = 'get_value'
    CATEGORY = icons.get('Comfyroll/SDXL')

    def get_value(self, positive_style, negative_style):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/SDXL-Nodes#cr-sdxl-style-text'
        return (positive_style, negative_style, show_help)
```