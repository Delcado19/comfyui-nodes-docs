# Documentation
- Class name: CR_PromptMixPresets
- Category: Comfyroll/SDXL
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_PromptMixPresets is a node for composing and manipulating prompts and styles of generative models. It provides various preset options to mix positive and negative prompts as well as style text, enhancing control over the generation process and allowing fine-tuning of the output.

# Input types
## Optional
- prompt_positive
    - Positive prompt is a key input that defines the desired attributes of the generated content. It influences the overall direction of the generation process, steering the output towards specified characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_negative
    - Negative prompt is used to exclude certain elements from the generated content. It refines the generation by specifying what should not be included, thereby more precisely shaping the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- style_positive
    - Positive style input allows the incorporation of style elements into the positive prompt. It enhances the aesthetic quality of the generated content by adding specific stylistic features.
    - Comfy dtype: STRING
    - Python dtype: str
- style_negative
    - Negative style input complements the positive style by providing style elements to avoid, ensuring that the generated content follows the desired style guide while not including unwanted attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- preset
    - The preset parameter determines the mixing strategy of prompts and styles. It provides different methods to combine inputs, affecting the balance and focus of the generated content.
    - Comfy dtype: COMBO['default with no style text', 'default with style text', 'style boost 1', 'style boost 2', 'style text to refiner']
    - Python dtype: str

# Output types
- pos_g
    - Generated positive global prompt, containing the desired attributes and styles, ready to be used in the generative model to guide the creation process.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - Generated positive local prompt, focusing on specific details to be included in the generated content, providing a more nuanced direction for generation.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_r
    - Generated positive refinement prompt, further refining the generation process, adding a layer of detail to the desired output.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - Generated negative global prompt, specifying elements to be excluded from the generated content, ensuring that the final output aligns with the intended vision.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - Generated negative local prompt, targeting specific unwanted details to be avoided in the generation, increasing the precision of exclusion.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - Generated negative refinement prompt, adding further exclusions to the generation process, ensuring a higher level of control over the final output.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
    - A URL link to the documentation for additional guidance and information on effectively using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptMixPresets:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'prompt_positive': ('STRING', {'multiline': True, 'default': 'prompt_pos'}), 'prompt_negative': ('STRING', {'multiline': True, 'default': 'prompt_neg'}), 'style_positive': ('STRING', {'multiline': True, 'default': 'style_pos'}), 'style_negative': ('STRING', {'multiline': True, 'default': 'style_neg'}), 'preset': (['default with no style text', 'default with style text', 'style boost 1', 'style boost 2', 'style text to refiner'],)}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING', 'STRING', 'STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('pos_g', 'pos_l', 'pos_r', 'neg_g', 'neg_l', 'neg_r', 'show_help')
    FUNCTION = 'mixer'
    CATEGORY = icons.get('Comfyroll/SDXL')

    def mixer(self, prompt_positive, prompt_negative, style_positive, style_negative, preset):
        if preset == 'default with no style text':
            pos_g = prompt_positive
            pos_l = prompt_positive
            pos_r = prompt_positive
            neg_g = prompt_negative
            neg_l = prompt_negative
            neg_r = prompt_negative
        elif preset == 'default with style text':
            pos_g = prompt_positive + style_positive
            pos_l = prompt_positive + style_positive
            pos_r = prompt_positive + style_positive
            neg_g = prompt_negative + style_negative
            neg_l = prompt_negative + style_negative
            neg_r = prompt_negative + style_negative
        elif preset == 'style boost 1':
            pos_g = prompt_positive
            pos_l = style_positive
            pos_r = prompt_positive
            neg_g = prompt_negative
            neg_l = style_negative
            neg_r = prompt_negative
        elif preset == 'style boost 2':
            pos_g = style_positive
            pos_l = prompt_positive
            pos_r = style_positive
            neg_g = style_negative
            neg_l = prompt_negative
            neg_r = style_negative
        elif preset == 'style text to refiner':
            pos_g = prompt_positive
            pos_l = prompt_positive
            pos_r = style_positive
            neg_g = prompt_negative
            neg_l = prompt_negative
            neg_r = style_negative
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/SDXL-Nodes#cr-sdxl-prompt-mix-presets'
        return (pos_g, pos_l, pos_r, neg_g, neg_l, neg_r, show_help)
```