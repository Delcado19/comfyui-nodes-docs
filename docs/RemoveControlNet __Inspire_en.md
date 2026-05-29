
# Documentation
- Class name: RemoveControlNet __Inspire
- Category: InspirePack/Util
- Output node: False

This node is designed to remove control network influence from region prompts in a given dataset. It iterates over each region prompt, extracts positive and negative condition text, applies a process to remove the control network from these texts, and then reassembles the prompt with the updated conditions. Its purpose is to eliminate the influence of specific control networks in the dataset, making it suitable for further processing or analysis.

# Input types
## Required
- conditioning
- Condition data that requires removal of control network influence. This process purifies the conditions for subsequent use, ensuring they do not contain specific control network attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]

# Output types
- conditioning
- Condition data with the control network removed. This output has been purified and no longer contains the previously specified control network influence, and can be used for further processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict]]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RemoveControlNet:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"conditioning": ("CONDITIONING", )}}
    RETURN_TYPES = ("CONDITIONING",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Util"

    def doit(self, conditioning):
        c = []
        for t in conditioning:
            n = [t[0], t[1].copy()]

            if 'control' in n[1]:
                del n[1]['control']
            if 'control_apply_to_uncond' in n[1]:
                del n[1]['control_apply_to_uncond']
            c.append(n)

        return (c, )

```
