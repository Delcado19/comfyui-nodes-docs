
# Documentation
- Class name: RemoveControlNetFromRegionalPrompts __Inspire
- Category: InspirePack/Util
- Output node: False

This node processes region prompts by removing control network information from them. It iterates through each region prompt, extracts positive and negative conditioning text, applies a process to remove control network data from these texts, then reassembles the prompts with the updated conditions. Its purpose is to clean specific control instructions from the prompts, making them suitable for further processing or generation tasks without influence from the original control network settings.

# Input types
## Required
- regional_prompts
    - A collection of region prompts to be processed. Each prompt contains positive and negative conditioning text that may include control network information to be removed. This input is critical to the node's operation, as it defines the dataset requiring cleanup of control network-specific information.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[RegionalPrompt]

# Output types
- regional_prompts
    - A list of region prompts with control network information removed from the conditioning text. This output is ready for further processing or generation tasks, no longer affected by the original control network.
    - Comfy dtype: REGIONAL_PROMPTS
    - Python dtype: List[RegionalPrompt]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemoveControlNetFromRegionalPrompts:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"regional_prompts": ("REGIONAL_PROMPTS", )}}
    RETURN_TYPES = ("REGIONAL_PROMPTS",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Util"

    def doit(self, regional_prompts):
        rcn = RemoveControlNet()
        res = []
        for rp in regional_prompts:
            _, _, _, _, positive, negative = rp.sampler.params
            positive, negative = rcn.doit(positive)[0], rcn.doit(negative)[0]
            sampler = rp.sampler.clone_with_conditionings(positive, negative)
            res.append(rp.clone_with_sampler(sampler))
        return (res, )

```
