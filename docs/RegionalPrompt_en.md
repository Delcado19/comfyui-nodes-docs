# Documentation
- Class name: RegionalPrompt
- Category: ImpactPack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

RegionalPrompt node is designed to generate region-specific prompts, using masks to define regions of interest, and using an advanced sampler to determine points within the region. It plays a key role in focusing processing on specific areas of the image, improving the precision of subsequent operations.

# Input types
## Required
- mask
    - The mask parameter is crucial for defining the region of interest within the image. It acts as a filter to isolate the specific area that the node will process, significantly affecting the result of region prompt generation.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray
- advanced_sampler
    - The advanced sampler parameter is a key component in determining the sampling strategy within the defined region. It affects how points are selected within the mask, which is critical for the accuracy and representativeness of the region prompts.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper

# Output types
- REGIONAL_PROMPTS
    - The output of the RegionalPrompt node is a set of region prompts tailored to the input mask and sampler. These prompts are important for guiding further analysis or processing specific to the region of interest.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[REGIONAL_PROMPT]

# Usage tips
- Infra type: CPU

# Source code
```
class RegionalPrompt:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'mask': ('MASK',), 'advanced_sampler': ('KSAMPLER_ADVANCED',)}}
    RETURN_TYPES = ('REGIONAL_PROMPTS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Regional'

    def doit(self, mask, advanced_sampler):
        regional_prompt = core.REGIONAL_PROMPT(mask, advanced_sampler)
        return ([regional_prompt],)
```