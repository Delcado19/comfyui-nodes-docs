
# Documentation
- Class name: JWFloatToInteger
- Category: jamesWalker55
- Output node: False

The JWFloatToInteger node is used to convert floating-point numbers to integers. It provides different rounding modes, such as round, floor, and ceiling, to control the conversion process. This node is useful in scenarios where continuous floating-point values need to be discretized into integers, such as in image processing or numerical calculations.

# Input types
## Required
- value
    - This is the floating-point number to convert to an integer. The specific behavior of the conversion can be controlled by the 'mode' parameter. The value parameter is the main input of the node, which determines the basis of the final integer output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
    - Specifies the rounding mode used when converting: 'round' means rounding to the nearest integer, 'floor' means flooring to the nearest smaller integer, and 'ceiling' means ceiling to the nearest larger integer. This parameter determines how floating-point numbers are rounded to integer results, thereby affecting the final output value.
    - Comfy dtype: ['round', 'floor', 'ceiling']
    - Python dtype: Literal['round', 'floor', 'ceiling']

# Output types
- int
    - The integer result obtained after converting the floating-point number according to the specified rounding mode. This output reflects the discretized result of the input floating-point number processed by the selected rounding method.
    - Comfy dtype: INT
    - Python dtype: int


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
