# Documentation
- Class name: MergeLatents
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The MergeLatents node aims to merge two sets of latent representations into a single coherent structure. It intelligently applies a specified merge strategy to ensure that the latent dimensions from both sets match, possibly scaling one set to match the other. This node plays a key role in integrating information from different sources into a unified format that can be further processed or analyzed.

# Input types
## Required
- latents_A
    - The parameter 'latents_A' represents the first set of latent representations to be merged. It is crucial because it constitutes half of the input required for the merging process. The dimensions and characteristics of these latent representations significantly affect the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latents_B
    - The parameter 'latents_B' contains the second set of latent representations for merging. It is equally important as 'latents_A', and together with 'latents_A', constitutes the complete input for the node's operation. The effectiveness of the node in merging depends on the compatibility and alignment of 'latents_A' and 'latents_B'.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- merge_strategy
    - The parameter 'merge_strategy' indicates how the latent representations should be merged. It is crucial for determining the resizing and alignment process that the node will follow in order to combine the latent representations into a harmonious structure.
    - Comfy dtype: str
    - Python dtype: str
- scale_method
    - The parameter 'scale_method' specifies the method used to scale the latent representations during the merging process. It is important because it affects the quality and resolution of the merged latent representations.
    - Comfy dtype: str
    - Python dtype: str
- crop
    - The parameter 'crop' defines how the latent representations should be cropped if needed during the merging process. It plays a crucial role in maintaining the integrity of the merged latent representations.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- LATENT
    - The output 'LATENT' contains the merged latent representations. It is the primary result of the node's operation and is of significant value for subsequent processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- count
    - The output 'count' provides the number of merged latent representations. It helps to understand the scope of the merge operation and can be used for further processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
```
class MergeLatents:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'latents_A': ('LATENT',), 'latents_B': ('LATENT',), 'merge_strategy': (MergeStrategies.list_all,), 'scale_method': (ScaleMethods.list_all,), 'crop': (CropMethods.list_all,)}}
    CATEGORY = 'Video Helper Suite 🎥🅥🅗🅢/latent'
    RETURN_TYPES = ('LATENT', 'INT')
    RETURN_NAMES = ('LATENT', 'count')
    FUNCTION = 'merge'

    def merge(self, latents_A: dict, latents_B: dict, merge_strategy: str, scale_method: str, crop: str):
        latents = []
        latents_A = latents_A.copy()['samples']
        latents_B = latents_B.copy()['samples']
        if latents_A.shape[3] != latents_B.shape[3] or latents_A.shape[2] != latents_B.shape[2]:
            A_size = latents_A.shape[3] * latents_A.shape[2]
            B_size = latents_B.shape[3] * latents_B.shape[2]
            use_A_as_template = True
            if merge_strategy == MergeStrategies.MATCH_A:
                pass
            elif merge_strategy == MergeStrategies.MATCH_B:
                use_A_as_template = False
            elif merge_strategy in (MergeStrategies.MATCH_SMALLER, MergeStrategies.MATCH_LARGER):
                if A_size <= B_size:
                    use_A_as_template = True if merge_strategy == MergeStrategies.MATCH_SMALLER else False
            if use_A_as_template:
                latents_B = comfy.utils.common_upscale(latents_B, latents_A.shape[3], latents_A.shape[2], scale_method, crop)
            else:
                latents_A = comfy.utils.common_upscale(latents_A, latents_B.shape[3], latents_B.shape[2], scale_method, crop)
        latents.append(latents_A)
        latents.append(latents_B)
        merged = {'samples': torch.cat(latents, dim=0)}
        return (merged, len(merged['samples']))
```