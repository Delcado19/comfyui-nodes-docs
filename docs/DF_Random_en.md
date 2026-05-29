
# Documentation
- Class name: DF_Random
- Category: Derfuu_Nodes/Functions
- Output node: False

The DF_Random node generates a random floating-point number within a specified range. It uses a seed to produce repeatable randomness, ensuring consistent results across multiple executions.

# Input types
## Required
- Value_A
    - Specifies the lower bound of the random number range. It affects the minimum value the random number generator can produce.
    - Comfy dtype: FLOAT
    - Python dtype: float
- Value_B
    - Defines the upper bound of the random number range. It sets the maximum value the random number generator can output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed value for the random number generator, used to ensure reproducibility of results. It determines the sequence of numbers generated, allowing consistent randomness across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- float
    - The output is a random floating-point number within the specified range, determined by the input boundaries and seed.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class RandomValue:
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "Value_A": Field.float(default=0),
                "Value_B": Field.float(default=1),
                "seed": Field.int(default=0, min=0, max=2**32-1),
            }
        }

    RETURN_TYPES = ("FLOAT",)
    FUNCTION = "get_rand"

    CATEGORY = TREE_FUNCTIONS

    def get_rand(self, Value_A, Value_B, seed):
        random.seed(seed)
        value = random.uniform(Value_A, Value_B)
        return (value,)

```
