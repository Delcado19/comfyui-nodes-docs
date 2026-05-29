# Documentation
- Class name: AutoNegativePrompt
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/AIrjen/OneButtonPrompt

This node aims to automatically generate negative prompts based on given positive prompts, enhancing the contrast between the two. It creatively modifies text by replacing positive sentiments in the input text with negative sentiments, aiming to provide sharp contrasts or opposing points. The node's functionality is not limited to direct text inversion; it also includes the ability to enhance negative sentiments using a predefined list of negative attributes.

# Input types
## Required
- postive_prompt
    - The positive prompt is the foundation of the node's operation. It is the text that will be converted into its negative counterpart. This parameter is crucial as it determines the context and thematic content of the generated negative prompt.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- base_negative
    - This parameter provides a default negative prompt, serving as a starting point for the transformation process. It is important for establishing the initial negative context that the node can further refine and enhance.
    - Comfy dtype: STRING
    - Python dtype: str
- enhancenegative
    - This parameter controls the level of enhancement applied to the negative prompt, strengthening negative attributes to make the contrast with the positive prompt more pronounced. It influences the overall tone and severity of the generated negative prompt.
    - Comfy dtype: INT
    - Python dtype: int
- insanitylevel
    - The craziness level parameter introduces an element of randomness in the transformation process, simulating more chaotic or unpredictable negative prompts. It affects the diversity and creativity of negative vocabulary included in the final output.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed parameter ensures reproducibility of results by setting a fixed point for the random number generator. It is essential for maintaining consistency in the node's operations, especially when multiple runs are required for testing or comparison.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- negative_prompt
    - The output of this node is a refined negative prompt that contrasts with the original positive prompt. It encapsulates the essence of the transformation process, providing a creative and nuanced expression of negative sentiment.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class AutoNegativePrompt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'postive_prompt': ('STRING', {'default': '', 'multiline': True})}, 'optional': {'base_negative': ('STRING', {'multiline': True, 'default': 'text, watermark'}), 'enhancenegative': ('INT', {'default': 0, 'min': 0, 'max': 1, 'step': 1}), 'insanitylevel': ('INT', {'default': 0, 'min': 0, 'max': 10, 'step': 1}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('STRING',)
    RETURN_NAMES = ('negative_prompt',)
    FUNCTION = 'Comfy_OBP_AutoNegativePrompt'
    CATEGORY = 'OneButtonPrompt'

    def Comfy_OBP_AutoNegativePrompt(self, postive_prompt, insanitylevel, enhancenegative, base_negative, seed):
        generatedprompt = build_dynamic_negative(postive_prompt, insanitylevel, enhancenegative, base_negative)
        print('Generated negative prompt: ' + generatedprompt)
        return (generatedprompt,)
```