# Documentation
- Class name: StyleConditioner
- Category: Mikey/Conditioning
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The StyleConditioner node manages and applies style conditions to the generation process. It integrates positive and negative style prompts, allowing fine-tuning of generated content to desired style attributes. This node guides the generation process towards a specific aesthetic or artistic direction.

# Input types
## Required
- style
    - The 'style' parameter is crucial for determining the stylistic direction of the generation process. It influences the selection of positive and negative prompts that will shape the output.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The 'strength' parameter adjusts the intensity of style influence on the generation process. It is important for controlling the degree to which style characteristics are reflected in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- positive_cond_base
    - The 'positive_cond_base' parameter represents the base positive condition elements that will be combined with new positive prompts to refine the generation style.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- negative_cond_base
    - The 'negative_cond_base' parameter represents the base negative condition elements used to balance style influence during generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- positive_cond_refiner
    - The 'positive_cond_refiner' parameter is used to further refine the positive aspects of style during generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- negative_cond_refiner
    - The 'negative_cond_refiner' parameter ensures that negative aspects of style are minimized in the final output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- base_clip
    - The 'base_clip' parameter is essential for encoding base positive and negative prompts into a form that can be processed by the generation model.
    - Comfy dtype: CLIP
    - Python dtype: Clip
- refiner_clip
    - The 'refiner_clip' parameter is used to encode refined positive and negative prompts to further enhance the style influence on generation.
    - Comfy dtype: CLIP
    - Python dtype: Clip
- use_seed
    - The 'use_seed' parameter determines whether to select a specific style based on a provided seed, adding a layer of control to the style selection process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - The 'seed' parameter is used together with the 'use_seed' flag to specify the starting point for style selection when using a seed.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- base_pos_cond
    - The 'base_pos_cond' output represents the updated base positive condition, reflecting the integrated style characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- base_neg_cond
    - The 'base_neg_cond' output represents the updated base negative condition, helping to exclude undesired style elements from generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- refiner_pos_cond
    - The 'refiner_pos_cond' output is the refined positive condition element, further shaping the style of the generated content.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- refiner_neg_cond
    - The 'refiner_neg_cond' output is the refined negative condition element, ensuring negative style aspects are excluded in generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- style_str
    - The 'style_str' output provides a textual representation of the applied style, offering a descriptive summary of the style's influence on generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StyleConditioner:

    @classmethod
    def INPUT_TYPES(s):
        (s.styles, s.pos_style, s.neg_style) = read_styles()
        return {'required': {'style': (s.styles,), 'strength': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.1}), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'positive_cond_refiner': ('CONDITIONING',), 'negative_cond_refiner': ('CONDITIONING',), 'base_clip': ('CLIP',), 'refiner_clip': ('CLIP',), 'use_seed': (['true', 'false'], {'default': 'false'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'CONDITIONING', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('base_pos_cond', 'base_neg_cond', 'refiner_pos_cond', 'refiner_neg_cond', 'style_str')
    FUNCTION = 'add_style'
    CATEGORY = 'Mikey/Conditioning'

    def add_style(self, style, strength, positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, base_clip, refiner_clip, use_seed, seed):
        if use_seed == 'true' and len(self.styles) > 0:
            offset = seed % len(self.styles)
            style = self.styles[offset]
        pos_prompt = self.pos_style[style]
        neg_prompt = self.neg_style[style]
        pos_prompt = pos_prompt.replace('{prompt}', '')
        neg_prompt = neg_prompt.replace('{prompt}', '')
        if style == 'none':
            return (positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, style)
        positive_cond_base_new = CLIPTextEncodeSDXL.encode(self, base_clip, 1024, 1024, 0, 0, 1024, 1024, pos_prompt, pos_prompt)[0]
        negative_cond_base_new = CLIPTextEncodeSDXL.encode(self, base_clip, 1024, 1024, 0, 0, 1024, 1024, neg_prompt, neg_prompt)[0]
        positive_cond_refiner_new = CLIPTextEncodeSDXLRefiner.encode(self, refiner_clip, 6, 4096, 4096, pos_prompt)[0]
        negative_cond_refiner_new = CLIPTextEncodeSDXLRefiner.encode(self, refiner_clip, 2.5, 4096, 4096, neg_prompt)[0]
        positive_cond_base = ConditioningAverage.addWeighted(self, positive_cond_base_new, positive_cond_base, strength)[0]
        negative_cond_base = ConditioningAverage.addWeighted(self, negative_cond_base_new, negative_cond_base, strength)[0]
        positive_cond_refiner = ConditioningAverage.addWeighted(self, positive_cond_refiner_new, positive_cond_refiner, strength)[0]
        negative_cond_refiner = ConditioningAverage.addWeighted(self, negative_cond_refiner_new, negative_cond_refiner, strength)[0]
        return (positive_cond_base, negative_cond_base, positive_cond_refiner, negative_cond_refiner, style)
```