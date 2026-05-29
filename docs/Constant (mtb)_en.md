# Documentation
- Class name: `Constant (mtb)`
- Category: `mtb/utils`
- Output node: `False`

The MTB_Constant node is designed to output a constant value. It serves as a tool node in the graph, providing a fixed value that can serve as input to other nodes, making it convenient to create static or dynamic flows based on predefined constants.

## Input types
### Required
- **`Value`**
    - Indicates the constant value that the node will output. This parameter is crucial for defining static data that will be passed in the graph, affecting subsequent operations.
    - Comfy dtype: `*`
    - Python dtype: `str | int | float | dict | list | bool | None`

## Output types
- **`output`**
    - Comfy dtype: `*`
    - The output of the MTB_Constant node, i.e., the constant value defined by the input parameters. This value will be passed in the graph for use by subsequent nodes.
    - Python dtype: `str | int | float | dict | list | bool | None`

## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
```python
class MTB_Constant:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {"Value": ("*",)},
        }

    RETURN_TYPES = ("*",)
    RETURN_NAMES = ("output",)
    CATEGORY = "mtb/utils"
    FUNCTION = "execute"

    def execute(
        self,
        **kwargs,
    ):
        log.debug("Received kwargs")
        log.debug(json.dumps(kwargs, check_circular=True))
        return (kwargs.get("Value"),)
```