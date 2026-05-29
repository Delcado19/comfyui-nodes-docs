
# Documentation
- Class name: ToStringList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToStringList node aggregates multiple string inputs into a single list, facilitating operations that require collective string handling. It abstracts the complexity of processing individual strings, enabling efficient batch processing and manipulation.

# Input types
## Required
- inputs_len
    - Specifies the number of string inputs to aggregate into the list. This parameter allows dynamic adjustment of the list size based on the number of inputs provided.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
    - Outputs a list composed of the aggregated string inputs. This list can be further processed or manipulated as a whole.
    - Comfy dtype: STRING
    - Python dtype: List[str]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToStringList(metaclass=MakeListMeta): TYPE = "STRING"

```
