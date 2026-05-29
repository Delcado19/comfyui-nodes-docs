
# Documentation
- Class name: GlobalSampler __Inspire
- Category: InspirePack/Prompt
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack

The GlobalSampler __Inspire node aims to integrate various advanced sampling techniques within the Inspire Pack framework for image generation and processing. It leverages a suite of complex samplers and schedulers, providing a versatile and customizable approach to generating or modifying images to meet a wide range of creative and technical needs.

# Input types
## Required
- sampler_name
    - Specifies the sampler to use, allowing selection from various predefined sampling strategies within the Inspire Pack framework. This choice has a significant impact on the quality and characteristics of the final generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Determines the scheduler used to control the sampling process, influencing the progression and quality of image generation. A suitable scheduler choice can optimize the generation process and improve output results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class GlobalSampler:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "sampler_name": (comfy.samplers.KSampler.SAMPLERS, ),
                "scheduler": (common.SCHEDULERS, ),
            }
        }

    RETURN_TYPES = ()
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Prompt"

    OUTPUT_NODE = True

    def doit(self, **kwargs):
        return {}

```
