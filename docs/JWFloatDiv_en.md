
# Documentation
- Class name: JWFloatDiv
- Category: jamesWalker55
- Output node: False

The JWFloatDiv node performs division between two floating-point values and returns a floating-point result. This operation allows dynamic calculation of ratios or adjustments based on floating-point numbers.

# Input types
## Required
- a
    - The 'a' parameter represents the dividend in the division operation. It is a key component because it determines the base value from which division starts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- b
    - The 'b' parameter acts as the divisor in the division operation. Its value directly affects the result and is crucial for computing the division result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- float
    - The output is the result of dividing the 'a' parameter by the 'b' parameter. It represents the quotient in floating-point format.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
        @register_node(identifier, display_name)
        class _:
            CATEGORY = category
            INPUT_TYPES = lambda: {"required": required_inputs}
            RETURN_TYPES = tuple(return_types)
            OUTPUT_NODE = output_node
            FUNCTION = "execute"

            def execute(self, *args, **kwargs):
                return func(*args, **kwargs)

```
