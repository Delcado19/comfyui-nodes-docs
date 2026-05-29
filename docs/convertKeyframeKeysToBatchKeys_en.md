# Documentation
- Class name: convertKeyframeKeysToBatchKeys
- Category: FizzNodes 📅🅕🅝/HelperNodes
- Output node: False
- Repo Ref: https://github.com/FizzleDorf/ComfyUI_FizzNodes

The 'concat' method in the 'convertKeyframeKeysToBatchKeys' node efficiently combines keyframe data into a single batch for processing by multiplying the number of input keyframes by the number of latent dimensions, creating a continuous sequence suitable for batch operations. This method is crucial for optimizing the processing of keyframe data in large-scale animations or simulations.

# Input types
## Required
- input
    - The 'input' parameter represents the number of keyframes to process. It is a fundamental part of the node operation because it directly affects the batch size and consequently the efficiency of subsequent processing steps.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- num_latents
    - The 'num_latents' parameter specifies the number of latent dimensions to consider in the keyframe data. It is crucial for determining the final structure of the batch, ensuring that the data is properly organized for downstream tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result
    - The 'result' output provides the computed batch key sequence, which is the product of the input keyframe count and the number of latent dimensions. This output is important because it forms the basis for further processing and analysis in the animation or simulation pipeline.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class convertKeyframeKeysToBatchKeys:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'input': ('INT', {'forceInput': True, 'default': 0}), 'num_latents': ('INT', {'default': 16})}}
    RETURN_TYPES = ('INT',)
    FUNCTION = 'concat'
    CATEGORY = 'FizzNodes 📅🅕🅝/HelperNodes'

    def concat(self, input, num_latents):
        c = input * num_latents - 1
        return (c,)
```