# Documentation
- Class name: BreakoutVec4
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BreakoutVec4 node splits a four‑dimensional vector into its individual components. It enables operations that require handling each element of a Vec4 separately. This node plays a key role in mathematical transformations, especially when the context demands separate processing of vector components.

# Input types
## Required
- a
    - Parameter `a` is the input four‑dimensional vector that the node will split. It is essential to the node’s operation because it is the primary data structure being processed. The node’s function focuses on decomposing this vector into its components for further use.
    - Comfy dtype: VEC4
    - Python dtype: Vec4

# Output types
- a components
    - The BreakoutVec4 node outputs four independent floats, each representing one component of the original Vec4 input. This output allows individual analysis and manipulation of vector components, which is important for many mathematical and computational applications.
    - Comfy dtype: FLOAT
    - Python dtype: Tuple[float, float, float, float]

# Usage tips
- Infra type: CPU

# Source code
```
class BreakoutVec4:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('VEC4', {'default': VEC4_ZERO})}}
    RETURN_TYPES = ('FLOAT', 'FLOAT', 'FLOAT', 'FLOAT')
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: Vec4) -> tuple[float, float, float, float]:
        return (a[0], a[1], a[2], a[3])
```