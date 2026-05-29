
# Documentation
- Class name: ToFloatList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToFloatList node is designed to aggregate individual float values into a list, facilitating scenarios where multiple float entries need to be processed or operated on collectively. This node serves as a utility that converts discrete float inputs into a structured list format, enabling more efficient processing and application in subsequent computational tasks.

# Input types
## Required
- inputs_len
    - Specifies the number of float inputs to aggregate into the list. This parameter determines the size of the generated float list, allowing dynamic list creation based on the number of inputs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- float
    - Generates a list composed of the aggregated float inputs. This list serves as a structured collection of float values that can be further processed or manipulated in subsequent operations.
    - Comfy dtype: FLOAT
    - Python dtype: List[float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToFloatList(metaclass=MakeListMeta): TYPE = "FLOAT"

```
