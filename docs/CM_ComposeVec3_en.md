# Documentation
- Class name: ComposeVec3
- Category: math/conversion
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node synthesizes a Vec3 object from three independent floating-point values, facilitating the creation and manipulation of three-dimensional vectors in mathematical or geometric contexts.

# Input types
## Required
- x
    - The x-coordinate of the vector is a basic parameter that defines the position along the horizontal axis in three-dimensional space, affecting the vector's direction and magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- y
    - The y-coordinate of the vector determines its position on the vertical axis in three-dimensional space, which is crucial for establishing the vector's direction and influence within the coordinate system.
    - Comfy dtype: FLOAT
    - Python dtype: float
- z
    - The z-coordinate of the vector determines its position on the depth axis in three-dimensional space, which plays a crucial role in the overall spatial representation of the vector.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- Vec3
    - The output is a Vec3 object that encapsulates three input values, representing a vector in three-dimensional space, which can be used in various mathematical and geometric operations.
    - Comfy dtype: VEC3
    - Python dtype: Vec3

# Usage tips
- Infra type: CPU

# Source code
```
class ComposeVec3:

    @classmethod
    def INPUT_TYPES(cls) -> Mapping[str, Any]:
        return {'required': {'x': ('FLOAT', {'default': 0.0}), 'y': ('FLOAT', {'default': 0.0}), 'z': ('FLOAT', {'default': 0.0})}}
    RETURN_TYPES = ('VEC3',)
    FUNCTION = 'op'
    CATEGORY = 'math/conversion'

    def op(self, x: float, y: float, z: float) -> tuple[Vec3]:
        return ((x, y, z),)
```