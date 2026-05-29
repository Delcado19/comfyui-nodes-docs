
# Documentation
- Class name: File Count [Dream]
- Category: ✨ Dream/🎥 animation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node counts files in a specified directory that match a given pattern (such as a file extension). It facilitates file management and organization tasks by providing a quick way to quantify relevant files in a project or dataset.

# Input types
## Required
- directory_path
    - Specify the directory path where files will be counted. This path is essential for the node to locate and evaluate files at the desired location.
    - Comfy dtype: STRING
    - Python dtype: str
- patterns
    - Define the file pattern used to match files in the directory (e.g., '*.jpg', '*.png'). This allows filtering and counting specific file types, improving the node's utility in managing and organizing files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- TOTAL
    - The total number of files in the given directory that match the specified pattern. This output provides an intuitive metric for assessing the volume of relevant files.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class DreamDirectoryFileCount:
    NODE_NAME = "File Count"
    ICON = "📂"

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "directory_path": ("STRING", {"default": '', "multiline": False}),
                "patterns": ("STRING", {"default": '*.jpg|*.png|*.jpeg', "multiline": False}),
            },
        }

    CATEGORY = NodeCategories.ANIMATION
    RETURN_TYPES = ("INT",)
    RETURN_NAMES = ("TOTAL",)
    FUNCTION = "result"

    @classmethod
    def IS_CHANGED(cls, *v):
        return ALWAYS_CHANGED_FLAG

    def result(self, directory_path, patterns):
        if not os.path.isdir(directory_path):
            return (0,)
        total = 0
        for pattern in patterns.split("|"):
            files = list(glob.glob(pattern, root_dir=directory_path))
            total += len(files)
        print("total " + str(total))
        return (total,)

```
