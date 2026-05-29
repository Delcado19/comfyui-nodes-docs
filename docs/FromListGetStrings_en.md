
# Documentation
- Class name: FromListGetStrings
- Category: Bmad/Lists/GetAll
- Output node: False

The FromListGetStrings node is designed to retrieve the string at a specific index from a list of strings. It abstracts the process of accessing list elements, supports forward and reverse indexing, and thus enhances flexibility and convenience when manipulating string lists in workflows.

# Input types
## Required
- list
- The list of strings used to retrieve a specific string. As a data source, it is essential to the node's operation.
    - Comfy dtype: STRING
    - Python dtype: List[str]

# Output types
- string
- The string retrieved from the specified index position in the list. This output is critical for further processing or use within the workflow.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FromListGetStrings(metaclass=UnMakeListMeta): TYPE = "STRING"

```
