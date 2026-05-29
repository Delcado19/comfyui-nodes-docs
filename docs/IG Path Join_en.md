
# Documentation
- Class name: IG Path Join
- Category: 🐓 IG Nodes/IO
- Output node: False

The IG Path Join node is designed to concatenate two string paths into a single path string, facilitating the construction of file and directory paths in workflows.

# Input types
## Required
- first
    - Specifies the first part of the path to be joined. It forms the base to which the second part will be appended.
    - Comfy dtype: STRING
    - Python dtype: str
- second
    - Defines the second part of the path to be joined to the first part. This addition completes the construction of the full path.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - The full path string formed by concatenating the first and second input strings.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_PathJoin:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "first": ("STRING", {"default": '', "multiline": False}),
                "second": ("STRING", {"default": '', "multiline": False}),
            },
        }
    
    RETURN_TYPES = ("STRING",)
    FUNCTION = "main"
    CATEGORY = TREE_IO
    def main(self, first, second):
        path = os.path.join(first, second)
        return (path,)

```
