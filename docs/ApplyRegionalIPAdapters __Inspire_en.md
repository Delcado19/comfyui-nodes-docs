
# Documentation
- Class name: ApplyRegionalIPAdapters __Inspire
- Category: InspirePack/Regional
- Output node: False

This node aims to apply regional IP adapters to the model, enabling customized and enhanced model output based on regional adaptation. It facilitates seamless integration of various IP adapter components with the model, allowing dynamic adjustments and performance improvements according to specific regions or aspects.

# Input types
## Required
- ipadapter_pipe
    - The component pipeline required for the regional adaptation process, provided as a tuple. This parameter is critical for ensuring all necessary elements for the adaptation process are available.
    - Comfy dtype: IPADAPTER_PIPE
    - Python dtype: Tuple[IPADAPTER, MODEL, CLIP_VISION, INSIGHTFACE, Callable]
- regional_ipadapter1
    - The regional IP adapter used for targeted modification and enhancement. This parameter allows fine-tuning of specific regions or aspects of the model, thereby improving model performance in those areas.
    - Comfy dtype: REGIONAL_IPADAPTER
    - Python dtype: REGIONAL_IPADAPTER

# Output types
- model
    - The modified model with the regional IP adapter applied, reflecting the customized enhancements and adaptation effects. This output represents the regionally adjusted and optimized model, ready for use in subsequent tasks.
    - Comfy dtype: MODEL
    - Python dtype: MODEL


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ApplyRegionalIPAdapters:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "ipadapter_pipe": ("IPADAPTER_PIPE",),
                    "regional_ipadapter1": ("REGIONAL_IPADAPTER", ),
                    },
                }

    RETURN_TYPES = ("MODEL", )
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Regional"

    def doit(self, **kwargs):
        ipadapter_pipe = kwargs['ipadapter_pipe']
        ipadapter, model, clip_vision, insightface, lora_loader = ipadapter_pipe

        del kwargs['ipadapter_pipe']

        for k, v in kwargs.items():
            ipadapter_pipe = ipadapter, model, clip_vision, insightface, lora_loader
            model = v.doit(ipadapter_pipe)

        return (model, )

```
