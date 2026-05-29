# Documentation
- Class name: OneButtonPrompt
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

This node aims to generate dynamic prompts based on various input parameters, designed to produce diverse and engaging outputs for content creation. It combines elements such as theme, artistic style, and environmental context to generate cohesive and richly themed prompts.

# Input types
## Required
- insanitylevel
    - This parameter determines the complexity and sophistication of the generated prompts, with higher levels resulting in more detailed and nuanced outputs. It directly affects the diversity and depth of elements included in the prompt.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- artist
    - The artist parameter allows specifying a particular artistic style or creator, guiding the aesthetic and thematic direction of the generated prompt.
    - Comfy dtype: COMBO
    - Python dtype: str
- imagetype
    - This parameter sets the desired type of image or visual representation, influencing the medium, style, and overall visual approach of the generated content.
    - Comfy dtype: COMBO
    - Python dtype: str
- subject
    - The theme parameter is crucial in determining the main focus or subject of the generated prompt, influencing narrative, character, and setting elements.
    - Comfy dtype: COMBO
    - Python dtype: str
- imagemodechance
    - This parameter adjusts the likelihood of including certain image patterns in the prompt, thereby affecting visual diversity and creativity.
    - Comfy dtype: INT
    - Python dtype: int
- custom_subject
    - The custom theme parameter allows inputting specific themes the user wishes to focus on, ensuring the generated prompt is tailored to their interests.
    - Comfy dtype: STRING
    - Python dtype: str
- custom_outfit
    - This parameter enables users to specify particular clothing or attire for the theme, adding a personalized touch to the generated prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- prompt
    - The output is a comprehensive and creatively constructed prompt, encompassing the input parameters, providing a rich foundation for content creation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class OneButtonPrompt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'insanitylevel': ('INT', {'default': 5, 'min': 1, 'max': 10, 'step': 1})}, 'optional': {'artist': (artists, {'default': 'all'}), 'imagetype': (imagetypes, {'default': 'all'}), 'imagemodechance': ('INT', {'default': 20, 'min': 1, 'max': 100, 'step': 1}), 'subject': (subjects, {'default': 'all'}), 'custom_subject': ('STRING', {'multiline': False, 'default': ''}), 'custom_outfit': ('STRING', {'multiline': False, 'default': ''}), 'subject_subtype_objects': (subjectsubtypesobject, {'default': 'all'}), 'subject_subtypes_humanoids': (subjectsubtypeshumanoid, {'default': 'all'}), 'humanoids_gender': (genders, {'default': 'all'}), 'subject_subtypes_concepts': (subjectsubtypesconcept, {'default': 'all'}), 'emojis': (emojis, {'default': False}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('STRING', 'STRING', 'STRING')
    RETURN_NAMES = ('prompt', 'prompt_g', 'prompt_l')
    FUNCTION = 'Comfy_OBP'
    CATEGORY = 'OneButtonPrompt'

    def Comfy_OBP(self, insanitylevel, custom_subject, seed, artist, imagetype, subject, imagemodechance, humanoids_gender, subject_subtype_objects, subject_subtypes_humanoids, subject_subtypes_concepts, emojis, custom_outfit):
        generatedpromptlist = build_dynamic_prompt(insanitylevel, subject, artist, imagetype, False, '', '', '', 1, '', custom_subject, True, '', imagemodechance, humanoids_gender, subject_subtype_objects, subject_subtypes_humanoids, subject_subtypes_concepts, False, emojis, seed, custom_outfit, True)
        generatedprompt = generatedpromptlist[0]
        prompt_g = generatedpromptlist[1]
        prompt_l = generatedpromptlist[2]
        return (generatedprompt, prompt_g, prompt_l)
```