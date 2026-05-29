
# Documentation
- Class name: SaltLayerExtractor
- Category: SALT/Scheduling/Parallax Motion
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SaltLayerExtractor node is specifically designed to extract data from a specific layer within a set of animation layers, with a focus on parallax motion scheduling. It processes the input animation layers and generates schedules for scale, x, and y values, facilitating the creation of dynamic, multi-dimensional animations.

# Input types
## Required
- float_layers
    - This is a list of animation layers, each containing frame data for scale, x, and y values. This input is critical for determining which specific layer data to extract and schedule.
    - Comfy dtype: LIST
    - Python dtype: List[List[float]]
- layer_index
    - Specifies the index of which layer to extract data from the provided animation layer list. This allows targeted extraction of animation data, enabling precise control over parallax motion scheduling.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- zoom_schedule_lsit
    - A list of scale values extracted from the specified animation layer, used for scheduling scaling effects in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- x_schedule_list
    - A list of x-coordinate values extracted from the specified animation layer, used for scheduling horizontal movement in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- y_schedule_list
    - A list of y-coordinate values extracted from the specified animation layer, used for scheduling vertical movement in parallax motion.
    - Comfy dtype: LIST
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SaltLayerExtractor:

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "float_layers": ("LIST", ),
                "layer_index": ("INT", {"default": 0, "min": 0})
            }
        }

    RETURN_TYPES = ("LIST", "LIST", "LIST")
    RETURN_NAMES = ("zoom_schedule_lsit", "x_schedule_list", "y_schedule_list")
    FUNCTION = "extract"
    CATEGORY = "SALT/Scheduling/Parallax Motion"

    def extract(self, **kwargs):
        animation_data = kwargs.get("float_layers", [])
        layer_index = kwargs.get("layer_index", 0)

        if layer_index >= len(animation_data):
            raise ValueError("Layer index out of range.")

        selected_layer_data = animation_data[layer_index]
        zoom_values = [frame[0] for frame in selected_layer_data]
        x_values = [frame[1] for frame in selected_layer_data]
        y_values = [frame[2] for frame in selected_layer_data]

        print("\033[1m\033[94mOPAC Schedule Curves:\033[0m")
        log_curve("Zoom Values", zoom_values)
        log_curve("X Values", x_values)
        log_curve("Y Values", y_values)

        return zoom_values, x_values, y_values

```
