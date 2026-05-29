
# Documentation
- Class name: FromListGetInts
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetInts node is designed to extract a single integer value at a specific index position from an integer list. It supports random access to the list, allowing both direct indexing and negative indexing for reverse access, enabling flexible retrieval of data from integer lists.

# Input types
## Required
- list
    - This is the integer list from which a single integer value is extracted. This parameter is essential for specifying the source list for extraction.
    - Comfy dtype: INT
    - Python dtype: List[int]

# Output types
- int
    - The integer value extracted from the specified index position in the list.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetInts(metaclass=UnMakeListMeta): TYPE = "INT"

```
