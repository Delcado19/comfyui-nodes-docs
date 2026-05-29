
# Documentation
- Class name: ToCondList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False

The ToCondList node creates a condition data list from separate condition inputs. It simplifies aggregating multiple condition elements into a single organized list, facilitating easier manipulation and application in later processing.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter specifies the number of individual condition elements to aggregate into the list. This parameter is crucial for determining the result list size, affecting the node's execution and output characteristics.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- conditioning
    - The output is a condition data list, aggregated from the single condition input provided to the node. This list can be used directly in processes that require condition data in a collection format.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[CONDITIONING]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ToCondList(metaclass=MakeListMeta): TYPE = "CONDITIONING"

```
