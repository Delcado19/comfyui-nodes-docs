# Documentation
- Class name: AnimateDiffSettingsNode
- Category: Animate Diff 🎭🅐🅓/ad settings
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

AnimateDiffSettingsNode is designed to generate animation settings for adjusting scene differences. It encapsulates the logic for adjusting position embeddings and weights, which are crucial for the animation process. The main function of this node is to provide a structured way to animate differences, ensuring that adjustments are applied consistently and effectively throughout the animation sequence.

# Input types
## Optional
- pe_adjust
    - The pe_adjust parameter allows for fine-tuning of the position embeddings in the animation. This is crucial for achieving the desired spatial distribution and movement of animated elements. This parameter directly affects how the spatial aspects of the animation are presented, influencing the overall quality and coherence of the animated scene.
    - Comfy dtype: PE_ADJUST
    - Python dtype: Union[AdjustGroup, None]
- weight_adjust
    - The weight_adjust parameter is used to modify the weights associated with animated elements. It plays an important role in controlling the intensity and focus of the animation effect. By adjusting the weights, the node can enhance or diminish specific aspects of the animation, resulting in more nuanced and targeted visual outcomes.
    - Comfy dtype: WEIGHT_ADJUST
    - Python dtype: Union[AdjustGroup, None]

# Output types
- ad_settings
    - The ad_settings output provides a comprehensive set of animation settings adjusted according to the input parameters. This output is crucial for the subsequent steps of the animation pipeline, as it determines how the animation differences will be manifested in the final rendered scene.
    - Comfy dtype: AD_SETTINGS
    - Python dtype: AnimateDiffSettings

# Usage tips
- Infra type: CPU

# Source code
```
class AnimateDiffSettingsNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'optional': {'pe_adjust': ('PE_ADJUST',), 'weight_adjust': ('WEIGHT_ADJUST',)}}
    RETURN_TYPES = ('AD_SETTINGS',)
    CATEGORY = 'Animate Diff 🎭🅐🅓/ad settings'
    FUNCTION = 'get_ad_settings'

    def get_ad_settings(self, pe_adjust: AdjustGroup=None, weight_adjust: AdjustGroup=None):
        return (AnimateDiffSettings(adjust_pe=pe_adjust, adjust_weight=weight_adjust),)
```