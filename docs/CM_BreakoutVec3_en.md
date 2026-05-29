# Documentation
- Class name: BreakoutVec3
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BreakoutVec3 node is designed to decompose a three-dimensional vector into its individual components. It plays a fundamental role in mathematical operations that require further processing or analysis, where the separation of vector elements is necessary.

# Input types
## Required
- a
    - The 'a' parameter is a three-dimensional vector that the node operates on. It is crucial to the node's functionality as it is the input vector that will be decomposed into its components.
    - Comfy dtype: VEC3
    - Python dtype: Vec3

# Output types
- result
    - The output of the BreakoutVec3 node is a tuple containing the three independent components of the input vector. Each component is a float representing one dimension of the vector.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[float, float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class BreakoutVec3:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('VEC3', {'default': VEC3_ZERO})}}
    RETURN_TYPES = ('FLOAT', 'FLOAT', 'FLOAT')
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: Vec3) -> tuple[float, float, float]:
        return (a[0], a[1], a[2])
```