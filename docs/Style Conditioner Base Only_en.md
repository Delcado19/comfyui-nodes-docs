# Documentation
- Class name: StyleConditionerBaseOnly
- Category: Mikey/Conditioning
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The 'add_style' method of the StyleConditionerBaseOnly node aims to integrate user-defined styles into the conditioning process. It allows the application of style preferences by combining positive and negative prompts with base conditioning elements. This method intelligently manages the integration of these styles, adjusting their influence based on a specified strength factor, and supports the use of seeds for style selection. This node plays a crucial role in enabling style control during the generation process, without directly handling the generation itself.

# Input types
## Required
- style
    - The "style" parameter plays a key role in determining the style direction of the conditioning process. It determines the specific positive and negative prompts that will be used to guide the generation. The choice of style has a profound impact on the resulting output, making it an important element in the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The "strength" parameter controls the intensity of the style influence applied to the conditioning process. It is a floating-point number used to adjust the weight of the style influence, allowing fine-tuning of stylistic elements in the output. This parameter is essential for achieving the desired balance between style control and base conditioning elements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- positive_cond_base
    - The "positive_cond_base" parameter represents the base positive conditioning element that will be affected by the style. It is a key component of the node's operation, as it forms the foundation upon which style adjustments are applied. This parameter is crucial for establishing the initial positive context of the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- negative_cond_base
    - The "negative_cond_base" parameter is the base negative conditioning element that will be affected by the style. It plays an important role in shaping the output by providing a balance to the positive conditioning, forming a contrast. This parameter is crucial for ensuring that the generated content conforms to the desired style constraints while avoiding unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- base_clip
    - The "base_clip" parameter is the reference image or clip that serves as the visual foundation of the conditioning process. It is essential for providing a stable visual context to which the style will be applied. This parameter is crucial for ensuring that style adjustments are made within a specific visual framework.
    - Comfy dtype: CLIP
    - Python dtype: CLIP
## Optional
- use_seed
    - The "use_seed" parameter determines whether a seed value should be used to select a style from available options. When set to 'true', it introduces an element of randomness into the style selection process, which can be beneficial for diversifying output. This parameter is important for increasing the variability of the generation process.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: str
- seed
    - The "seed" parameter is used in conjunction with the "use_seed" parameter to control randomness in style selection. It provides a specific reference point for the random number generator, ensuring a repeatable selection process. This parameter is important for maintaining consistency across multiple runs of the node when randomness is involved.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- base_pos_cond
    - The "base_pos_cond" output represents the updated positive conditioning element after applying the style. It is a key component of the node's operation, as it carries the style adjustments into subsequent stages of the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- base_neg_cond
    - The "base_neg_cond" output is the updated negative conditioning element after applying the style. It plays an important role in ensuring that the generated content conforms to style constraints and avoids unwanted elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: Conditioning
- style_str
    - The "style_str" output provides a text representation of the style that has been applied. It serves as a record of the style choices made during the conditioning process, which can be useful for tracking and documenting generation parameters.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class StyleConditionerBaseOnly:

    @classmethod
    def INPUT_TYPES(s):
        (s.styles, s.pos_style, s.neg_style) = read_styles()
        return {'required': {'style': (s.styles,), 'strength': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'positive_cond_base': ('CONDITIONING',), 'negative_cond_base': ('CONDITIONING',), 'base_clip': ('CLIP',), 'use_seed': (['true', 'false'], {'default': 'false'}), 'seed': ('INT', {'default': 0, 'min': 0, 'max': 18446744073709551615})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'STRING')
    RETURN_NAMES = ('base_pos_cond', 'base_neg_cond', 'style_str')
    FUNCTION = 'add_style'
    CATEGORY = 'Mikey/Conditioning'

    def add_style(self, style, strength, positive_cond_base, negative_cond_base, base_clip, use_seed, seed):
        if use_seed == 'true' and len(self.styles) > 0:
            offset = seed % len(self.styles)
            style = self.styles[offset]
        pos_prompt = self.pos_style[style]
        neg_prompt = self.neg_style[style]
        pos_prompt = pos_prompt.replace('{prompt}', '')
        neg_prompt = neg_prompt.replace('{prompt}', '')
        if style == 'none':
            return (positive_cond_base, negative_cond_base, style)
        positive_cond_base_new = CLIPTextEncodeSDXL.encode(self, base_clip, 1024, 1024, 0, 0, 1024, 1024, pos_prompt, pos_prompt)[0]
        negative_cond_base_new = CLIPTextEncodeSDXL.encode(self, base_clip, 1024, 1024, 0, 0, 1024, 1024, neg_prompt, neg_prompt)[0]
        positive_cond_base = ConditioningAverage.addWeighted(self, positive_cond_base_new, positive_cond_base, strength)[0]
        negative_cond_base = ConditioningAverage.addWeighted(self, negative_cond_base_new, negative_cond_base, strength)[0]
        return (positive_cond_base, negative_cond_base, style)
```