
# Documentation
- Class name: Range(Step) - Int
- Category: List Stuff
- Output node: False

This node generates integer sequences within a specified range, allowing users to control the start value, end value, and step size. It aims to create integer lists based on customizable intervals and endpoints, supporting both inclusive and exclusive modes.

# Input types
## Required
- start
    - Specify the start value of the range. This parameter sets the starting point of the integer sequence.
    - Comfy dtype: INT
    - Python dtype: List[int]
- stop
    - Determine the end value of the range. This parameter defines the endpoint of the integer sequence, which can be set as inclusive or exclusive based on end_mode.
    - Comfy dtype: INT
    - Python dtype: List[int]
- step
    - Define the interval between each number within the range. This parameter controls the step size of sequence generation.
    - Comfy dtype: INT
    - Python dtype: List[int]
- end_mode
    - Indicate whether the end value is inclusive or exclusive. This parameter allows flexible definition of the integer sequence boundary.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- range
    - The sequence of integers generated within the specified range.
    - Comfy dtype: INT
    - Python dtype: List[int]
- range_sizes
    - The size of each generated integer sequence, providing the number of elements within each range.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IntRangeNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(s) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "start": ("INT", {"default": 0, "min": -4096, "max": 4096, "step": 1}),
                "stop": ("INT", {"default": 0, "min": -4096, "max": 4096, "step": 1}),
                "step": ("INT", {"default": 0, "min": -4096, "max": 4096, "step": 1}),
                "end_mode": (["Inclusive", "Exclusive"], {"default": "Inclusive"}),
            },
        }

    RETURN_TYPES = ("INT", "INT")
    RETURN_NAMES = ("range", "range_sizes")
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True)
    FUNCTION = "build_range"

    CATEGORY = "List Stuff"

    def build_range(
        self, start: List[int], stop: List[int], step: List[int], end_mode: List[str]
    ) -> Tuple[List[int], List[int]]:
        error_if_mismatched_list_args(locals())

        ranges = []
        range_sizes = []
        for e_start, e_stop, e_step, e_end_mode in zip_with_fill(
            start, stop, step, end_mode
        ):
            if e_end_mode == "Inclusive":
                e_stop += 1
            vals = list(range(e_start, e_stop, e_step))
            ranges.extend(vals)
            range_sizes.append(len(vals))

        return ranges, range_sizes

```
