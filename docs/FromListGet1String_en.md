
# Documentation
- Class name: FromListGet1String
- Category: Bmad/Lists/Get1
- Output node: False

The FromListGet1String node retrieves a single string element from a given list at a specified index. It supports flexible list element access, including using negative indices to access elements from the end of the list.

# Input types
## Required
- list
- The source list containing the string element to retrieve. This is the key input specifying the source list.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- index
- The index used to retrieve the string element from the list. Negative indices are supported for reverse access.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- string
- The string element retrieved from the list at the specified index position.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGet1String(metaclass=GetSingleFromListMeta): TYPE = "STRING"

```
