
# Documentation
- Class name: ListCounter __Inspire
- Category: InspirePack/Util
- Output node: False

The ListCounter node is designed to maintain and increment counts associated with unique identifiers, allowing tracking of occurrences or iterations of specific actions or items in a list. It provides a mechanism for generating sequential counting that can be reset or continued based on unique identifiers, which is useful in operations that require counting in dynamic or iterative contexts.

# Input types
## Required
- signal
    - The signal input acts as the trigger for the counting operation, indicating when to increment the count. It is essential for initiating the counting increment process.
    - Comfy dtype: *
    - Python dtype: Any
- base_value
    - The base_value parameter sets the starting point for counting, allowing the count to start from a specified value other than zero. This flexibility is useful for operations that require a custom counting start point.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- int
    - Returns the current count after incrementing, adjusted based on the base value. This output is essential for tracking the progress of counting in a specified context.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ListCounter:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "signal": (utils.any_typ,),
                    "base_value": ("INT", {"default": 0, "min": 0, "max": 0xffffffffffffffff}),
                    },
                "hidden": {"unique_id": "UNIQUE_ID"},
                }

    RETURN_TYPES = ("INT",)
    FUNCTION = "doit"

    CATEGORY = "InspirePack/Util"

    def doit(self, signal, base_value, unique_id):
        if unique_id not in list_counter_map:
            count = 0
        else:
            count = list_counter_map[unique_id]

        list_counter_map[unique_id] = count + 1

        return (count + base_value, )

```
