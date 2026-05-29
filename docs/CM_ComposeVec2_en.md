# Documentation
- Class name: ComposeVec2
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

The ComposeVec2 node is designed to combine two scalar values into a single two-dimensional vector. It plays a key role in vector mathematics by allowing the creation of Vec2 objects from individual components, which can then be used in further geometric or mathematical operations.

# Input types
## Required
- x
    - The 'x' parameter represents the first component of the two-dimensional vector. It is essential for defining the horizontal position in the Cartesian coordinate system and contributes significantly to the overall direction and magnitude of the vector.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y
    - The 'y' parameter represents the second component of the two-dimensional vector, denoting the vertical position in the coordinate system. It is critical for establishing the vertical orientation of the vector and, together with 'x', determines the overall trajectory of the vector.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- Vec2
    - The output of the ComposeVec2 node is a Vec2 object that encapsulates the provided 'x' and 'y' components into a coherent two-dimensional vector. This vector can be used in a wide range of mathematical and geometric calculations.
    - Comfy dtype: VEC2
    - Python dtype: Vec2

# Usage tips
- Infra type: CPU

# Source code
```
class ComposeVec2:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'x': ('FLOAT', {'default': 0.0}), 'y': ('FLOAT', {'default': 0.0})}}
    RETURN_TYPES = ('VEC2',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, x: float, y: float) -> tuple[Vec2]:
        return ((x, y),)
```