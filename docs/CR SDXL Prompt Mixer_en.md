# Documentation
- Class name: CR_PromptMixer
- Category: Comfyroll/Essential/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_PromptMixer is a node designed to blend different prompts and styles to generate refined outputs. It receives positive and negative prompts along with style inputs, then applies selected presets to mix these inputs in specific ways. The node's functionality focuses on improving the quality and consistency of generated text through intelligent combination of various text elements.

# Input types
## Optional
- prompt_positive
    - Positive prompts are critical inputs in the text generation process, providing constructive examples or guidelines. They play a crucial role in guiding the output toward desired quality and attributes.
    - Comfy dtype: STRING
    - Python dtype: str
- prompt_negative
    - Negative prompts are used to provide examples or guidelines to avoid in text generation. They play an important role in shaping the output by specifying what to exclude.
    - Comfy dtype: STRING
    - Python dtype: str
- style_positive
    - Positive style inputs are used to refine text generation by adding style elements considered beneficial. They enhance the output with specific stylistic characteristics.
    - Comfy dtype: STRING
    - Python dtype: str
- style_negative
    - Negative style inputs allow specifying style elements to omit from text generation. This is important for ensuring the final output aligns with the intended style.
    - Comfy dtype: STRING
    - Python dtype: str
- preset
    - The preset parameter determines the specific blending strategy applied to inputs. Each preset represents a different approach to combining positive and negative prompts and styles.
    - Comfy dtype: COMBO['preset 1', 'preset 2', 'preset 3', 'preset 4', 'preset 5']
    - Python dtype: str

# Output types
- pos_g
    - The 'pos_g' output represents the mixed positive prompt generated according to the selected preset. It is a key component of the final output, reflecting the combined effect of inputs.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The 'pos_l' output is another mixed positive prompt, reflecting different aspects of the input mixing process. It contributes to the overall coherence and quality of generated text.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_r
    - The 'pos_r' output represents a further variation of the mixed positive prompt, providing additional depth to the text generation process.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_g
    - The 'neg_g' output is a mixed negative prompt, processed to exclude unwanted elements from the final text generation.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_l
    - The 'neg_l' output represents another mixed negative prompt, ensuring specific unwanted style elements are excluded from text generation.
    - Comfy dtype: STRING
    - Python dtype: str
- neg_r
    - The 'neg_r' output is the final variation of the mixed negative prompt, providing comprehensive exclusion of unwanted elements for text generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_PromptMixer:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {}, 'optional': {'prompt_positive': ('STRING', {'multiline': True, 'default': 'BASE_POSITIVE'}), 'prompt_negative': ('STRING', {'multiline': True, 'default': 'BASE_NEGATIVE'}), 'style_positive': ('STRING', {'multiline': True, 'default': 'REFINER_POSTIVE'}), 'style_negative': ('STRING', {'multiline': True, 'default': 'REFINER_NEGATIVE'}), 'preset': (['preset 1', 'preset 2', 'preset 3', 'preset 4', 'preset 5'],)}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING', 'STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('pos_g', 'pos_l', 'pos_r', 'neg_g', 'neg_l', 'neg_r')
    FUNCTION = 'mixer'
    CATEGORY = icons.get('Comfyroll/Essential/Legacy')

    def mixer(self, prompt_positive, prompt_negative, style_positive, style_negative, preset):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Legacy-Nodes#cr-prompt-mixer'
        if preset == 'preset 1':
            pos_g = prompt_positive
            pos_l = prompt_positive
            pos_r = prompt_positive
            neg_g = prompt_negative
            neg_l = prompt_negative
            neg_r = prompt_negative
        elif preset == 'preset 2':
            pos_g = prompt_positive
            pos_l = style_positive
            pos_r = prompt_positive
            neg_g = prompt_negative
            neg_l = style_negative
            neg_r = prompt_negative
        elif preset == 'preset 3':
            pos_g = style_positive
            pos_l = prompt_positive
            pos_r = style_positive
            neg_g = style_negative
            neg_l = prompt_negative
            neg_r = style_negative
        elif preset == 'preset 4':
            pos_g = prompt_positive + style_positive
            pos_l = prompt_positive + style_positive
            pos_r = prompt_positive + style_positive
            neg_g = prompt_negative + style_negative
            neg_l = prompt_negative + style_negative
            neg_r = prompt_negative + style_negative
        elif preset == 'preset 5':
            pos_g = prompt_positive
            pos_l = prompt_positive
            pos_r = style_positive
            neg_g = prompt_negative
            neg_l = prompt_negative
            neg_r = style_negative
        return (pos_g, pos_l, pos_r, neg_g, neg_l, neg_r)
```