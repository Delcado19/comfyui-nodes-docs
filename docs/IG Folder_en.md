
# Documentation
- Class name: IG Folder
- Category: 🐓 IG Nodes/IO
- Output node: False

The IG Folder node constructs a directory path based on a specified parent directory and folder name. It simplifies the complexity of path operations, providing a straightforward way to generate paths required for input or output operations within the file system.

# Input types
## Required
- folder_parent
    - Specify the parent directory type, which can be an input folder or output folder, affecting the base path of the generated directory path.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- folder_name
    - Define the folder name to append to the parent directory path, allowing dynamic directory creation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- string
    - Return the fully constructed directory path string, ready for direct use in file system operations.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IG_Folder:
    def __init__(self) -> None:
        pass

    @classmethod
    def INPUT_TYPES(cls):
        folder_type = ["input folder", "output folder"]
        return {
            "required": {
                "folder_parent": (folder_type, ),
                "folder_name": ("STRING", {"default": '', "multiline": False}),
            },
        }

    RETURN_TYPES = ("STRING",)
    FUNCTION = "main"
    CATEGORY = TREE_IO

    def main(self, folder_parent, folder_name):
        parent = folder_paths.input_directory if folder_parent == "input folder" else folder_paths.output_directory
        directory = os.path.join(parent, folder_name)
        return (directory,)

```
