# Documentation
- Class name: CombineRegionalPrompts
- Category: ImpactPack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The CombineRegionalPrompts node is designed to merge multiple sets of regional prompts into a unified collection. It plays a key role in simplifying the regional data input process, ensuring all relevant prompts are efficiently aggregated without redundancy, thereby facilitating more coherent and comprehensive analysis of regional information.

# Input types
## Required
- regional_prompts1
    - The regional_prompts1 parameter is critical for the CombineRegionalPrompts node, as it is the primary input containing the regional prompts to be merged. It is essential to the node's execution, as the quality and relevance of the aggregated prompts directly impact subsequent analysis and results.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[str]

# Output types
- combined_prompts
    - The combined_prompts output parameter represents the result of merging multiple regional prompts into a coherent list. This output is important as it lays the foundation for further processing and analysis within the ImpactPack/Regional category, ensuring the merged data is available for subsequent operations.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[str]

# Usage tips
- Infra type: CPU

# Source code
```
class CombineRegionalPrompts:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'regional_prompts1': ('REGIONAL_PROMPTS',)}}
    RETURN_TYPES = ('REGIONAL_PROMPTS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Regional'

    def doit(self, **kwargs):
        res = []
        for (k, v) in kwargs.items():
            res += v
        return (res,)
```