# Documentation
- Class name: BreakoutVec2
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The BreakoutVec2 node is designed to decompose a two-dimensional vector into its individual components. It plays a fundamental role in vector operations by providing access to the individual elements of a Vec2 object, which can then be used independently for further calculations or operations.

# Input types
## Required
- a
    - The parameter 'a' is a two-dimensional vector, the object of the node's operation. It is critical because it is the primary input that determines the node's output. The node decomposes this vector into its components, which are then available for use by other processes.
    - Comfy dtype: VEC2
    - Python dtype: Vec2

# Output types
- x
    - The output 'x' represents the first component of the input vector after processing by the node. It is important because it allows for the separation and individual handling of vector elements, which can be critical in various mathematical and geometric calculations.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y
    - The output 'y' corresponds to the second component of the input vector. It is equally important as the 'x' output and is applicable in scenarios that require separate manipulation or analysis of vector components, such as in graphics rendering or physics simulations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
```
class BreakoutVec2:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'a': ('VEC2', {'default': VEC2_ZERO})}}
    RETURN_TYPES = ('FLOAT', 'FLOAT')
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, a: Vec2) -> tuple[float, float]:
        return (a[0], a[1])
```