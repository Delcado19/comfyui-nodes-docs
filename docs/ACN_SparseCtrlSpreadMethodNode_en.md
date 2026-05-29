# Documentation
- Class name: SparseSpreadMethodNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The SparseSpreadMethodNode class aims to generate and manage sparse index distributions within a given range. It abstractly handles the logic of different diffusion methods, such as uniform, start, end, and center, allowing flexible handling of sparse data.

# Input types
## Required
- spread
    - The 'spread' parameter determines how sparse indices are distributed across the entire length range. It is critical for node operations because it determines the pattern of sparse data generation, which may significantly affect the process's outcome.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- SPARSE_METHOD
    - The output parameter 'SPARSE_METHOD' denotes the method used for spreading indices. It is important because it encapsulates the logic of the chosen spreading strategy, which is crucial for downstream tasks that depend on sparse index distributions.
    - Comfy dtype: SparseSpreadMethod
    - Python dtype: SparseSpreadMethod

# Usage tips
- Infra type: CPU

# Source code
```
class SparseSpreadMethodNode:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'spread': (SparseSpreadMethod.LIST,)}}
    RETURN_TYPES = ('SPARSE_METHOD',)
    FUNCTION = 'get_method'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl'

    def get_method(self, spread: str):
        return (SparseSpreadMethod(spread=spread),)
```