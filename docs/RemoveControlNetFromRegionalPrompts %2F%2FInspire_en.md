# Documentation
- Class name: RemoveControlNetFromRegionalPrompts
- Category: InspirePack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node aims to process and refine regional prompts by removing control elements, thereby improving the clarity and focus of prompts in subsequent tasks.

# Input types
## Required
- regional_prompts
    - Regional prompts are the key input that guides node operations, serving as the basis for removing control elements.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, str, str, str, List[str], List[str]]]

# Output types
- REGIONAL_PROMPTS
    - The refined prompt without control elements is the primary output, which can be used for further processing or analysis.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[Tuple[str, str, str, str, List[str], List[str]]]

# Usage tips
- Infra type: CPU

# Source code
```
class RemoveControlNetFromRegionalPrompts:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'regional_prompts': ('REGIONAL_PROMPTS',)}}
    RETURN_TYPES = ('REGIONAL_PROMPTS',)
    FUNCTION = 'doit'
    CATEGORY = 'InspirePack/Util'

    def doit(self, regional_prompts):
        rcn = RemoveControlNet()
        res = []
        for rp in regional_prompts:
            (_, _, _, _, positive, negative) = rp.sampler.params
            (positive, negative) = (rcn.doit(positive)[0], rcn.doit(negative)[0])
            sampler = rp.sampler.clone_with_conditionings(positive, negative)
            res.append(rp.clone_with_sampler(sampler))
        return (res,)
```