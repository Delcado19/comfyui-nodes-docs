
# Documentation
- Class name: Range(Step) - Float
- Category: List Stuff
- Output node: False

This node generates a sequence of floating-point numbers within a specified range, precisely controlling the start value, end value, and step size. It is designed for operations that need to traverse a range of floating-point numbers with a specific increment, making it ideal for scenarios requiring uniform spacing between values.

# Input types
## Required
- start
    - Specifies the start value of the range. It sets the lower limit of the generated number sequence.
    - Comfy dtype: FLOAT
    - Python dtype: List[Union[float, Decimal]]
- stop
    - Defines the end value of the range. It sets the upper limit of the generated number sequence.
    - Comfy dtype: FLOAT
    - Python dtype: List[Union[float, Decimal]]
- step
    - Determines the increment between each number in the range. This value controls the interval between consecutive numbers in the generated sequence.
    - Comfy dtype: FLOAT
    - Python dtype: List[Union[float, Decimal]]
- end_mode
    - Indicates whether the end value is included in the range. This parameter affects whether the last number in the sequence reaches or excludes the end value.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]

# Output types
- range
    - The sequence of floating-point numbers generated within the specified range.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]
- range_sizes
    - The size of each generated range, indicating the number of elements in each sequence.
    - Comfy dtype: INT
    - Python dtype: List[int]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FloatRangeNode:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(s) -> Dict[str, Dict[str, Any]]:
        return {
            "required": {
                "start": (
                    "FLOAT",
                    {"default": 0, "min": -4096, "max": 4096, "step": 1},
                ),
                "stop": ("FLOAT", {"default": 0, "min": -4096, "max": 4096, "step": 1}),
                "step": ("FLOAT", {"default": 0, "min": -4096, "max": 4096, "step": 1}),
                "end_mode": (["Inclusive", "Exclusive"], {"default": "Inclusive"}),
            },
        }

    RETURN_TYPES = ("FLOAT", "INT")
    RETURN_NAMES = ("range", "range_sizes")
    INPUT_IS_LIST = True
    OUTPUT_IS_LIST = (True, True)
    FUNCTION = "build_range"

    CATEGORY = "List Stuff"

    @staticmethod
    def _decimal_range(
        start: Decimal, stop: Decimal, step: Decimal, inclusive: bool
    ) -> Iterator[float]:
        ret_val = start
        if inclusive:
            stop = stop + step

        direction = 1 if step > 0 else -1
        # while ret_val < stop:
        #     yield float(ret_val)
        #     ret_val += step
        while (ret_val - stop) * direction < 0:
            yield float(ret_val)
            ret_val += step

    def build_range(
        self,
        start: List[Union[float, Decimal]],
        stop: List[Union[float, Decimal]],
        step: List[Union[float, Decimal]],
        end_mode: List[str],
    ) -> Tuple[List[float], List[int]]:
        error_if_mismatched_list_args(locals())
        getcontext().prec = 12

        start = [Decimal(s) for s in start]
        stop = [Decimal(s) for s in stop]
        step = [Decimal(s) for s in step]

        ranges = []
        range_sizes = []
        for e_start, e_stop, e_step, e_end_mode in zip_with_fill(
            start, stop, step, end_mode
        ):
            vals = list(
                self._decimal_range(e_start, e_stop, e_step, e_end_mode == "Inclusive")
            )
            ranges.extend(vals)
            range_sizes.append(len(vals))

        return ranges, range_sizes

```
