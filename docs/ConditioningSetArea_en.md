# Documentation
- Class name: ConditioningSetArea
- Category: conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ConditioningSetArea node is designed to manipulate and add data to conditioning sets, which is crucial for influencing the behavior of certain models. It allows specifying a region and its associated strength, which can guide the model's output in a desired direction.

# Input types
## Required
- conditioning
    - The condition parameter is crucial as it defines the initial state or context for model processing. This is a critical input that directly affects how the model interprets and responds to the data it processes.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]
- width
    - The width parameter specifies the width of the region to be conditioned. It plays an important role in determining the spatial extent of the conditioning effect in model operations.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the region affected by the conditioning. It is important for controlling the model's attention to specific regions.
    - Comfy dtype: INT
    - Python dtype: int
- x
    - The x parameter determines the horizontal starting point of the region affected by the conditioning. It is crucial for precisely locating the exact position in the model's input space where the conditioning is applied.
    - Comfy dtype: INT
    - Python dtype: int
- y
    - The y parameter determines the vertical starting point of the region to be conditioned. It works together with the x parameter to define the precise coordinates of the conditioning effect.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter quantifies the intensity of the conditioning effect. It is a critical factor in how much the model's output is influenced by the conditioning set.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- conditioning
    - The output conditioning set is the result of applying the specified parameters to the initial conditioning set. It reflects the updated state that the model will use for further processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, Any]]]

# Usage tips
- Infra type: CPU

# Source code
```
class ConditioningSetArea:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'conditioning': ('CONDITIONING',), 'width': ('INT', {'default': 64, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'height': ('INT', {'default': 64, 'min': 64, 'max': MAX_RESOLUTION, 'step': 8}), 'x': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'y': ('INT', {'default': 0, 'min': 0, 'max': MAX_RESOLUTION, 'step': 8}), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 10.0, 'step': 0.01})}}
    RETURN_TYPES = ('CONDITIONING',)
    FUNCTION = 'append'
    CATEGORY = 'conditioning'

    def append(self, conditioning, width, height, x, y, strength):
        c = node_helpers.conditioning_set_values(conditioning, {'area': (height // 8, width // 8, y // 8, x // 8), 'strength': strength, 'set_area_to_bounds': False})
        return (c,)
```