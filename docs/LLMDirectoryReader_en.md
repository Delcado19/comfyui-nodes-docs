
# Documentation
- Class name: LLMDirectoryReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMDirectoryReader node is designed to read and process directories, efficiently handle and organize content, and transform it into a structured format suitable for further analysis or processing. It abstracts the complexity of directory traversal and content extraction, making it easier to handle large numbers of files or nested directory structures.

# Input types
## Required
- input_directory
    - Specifies the directory path to read, serving as the starting point for the node's directory traversal and content extraction operations. This parameter is crucial for defining the scope of the read process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- optional_path_list
    - A list of specific paths within the directory to focus processing. This can refine the reading process to specific files or subdirectories, potentially optimizing the performance and relevance of the output.
    - Comfy dtype: *
    - Python dtype: list
- recursive
    - A boolean flag that determines whether the read operation should recursively traverse subdirectories. Enabling this can significantly affect the depth and comprehensiveness of the directory reading process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- required_ext_list
    - Defines the list of file extensions to include in the reading process. This filters the files to be processed, directly affecting the node's output by limiting it to files of the specified types.
    - Comfy dtype: STRING
    - Python dtype: str
- exclude_glob_list
    - Specifies patterns to exclude from the reading process. This can prevent certain files or directories from being processed, thereby tailoring the output to exclude irrelevant or sensitive information.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Returns a structured representation of the content read from the directory, typically organized in a way that facilitates further analysis or processing.
    - Comfy dtype: DOCUMENT
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMDirectoryReader:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "input_directory": ("STRING", {}),
            },
            "optional": {
                "optional_path_list": (WILDCARD, {}),
                "recursive": ("BOOLEAN", {"default": False}),
                "required_ext_list": ("STRING", {"default": ".json, .txt, .html"}),
                "exclude_glob_list": ("STRING", {"default": ".sqlite, .zip"}),
            },
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "read_directory"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def read_directory(self, input_directory, optional_path_list=[], recursive=False, required_ext_list=None, exclude_glob_list=None):

        if required_ext_list.strip():
            required_exts = [ext.strip() for ext in required_ext_list.split(",") if ext.strip()]
        else:
            required_exts = None

        if exclude_glob_list.strip():
            exclude = [pattern.strip() for pattern in exclude_glob_list.split(",") if pattern.strip()]
        else:
            exclude = None

        print("Excluding: ", exclude)
        print("Required Extensions: ", required_exts)

        if not optional_path_list:
            full_path = get_full_path(1, input_directory.strip())
            input_dir = full_path if os.path.isdir(full_path) else None
            if not input_dir:
                raise ValueError("The provided subdirectory does not exist.")

            reader = SimpleDirectoryReader(
                input_dir=input_dir,
                exclude_hidden=True,
                recursive=recursive,
                required_exts=required_exts,
                exclude=exclude
            )
        elif optional_path_list and isinstance(optional_path_list, (str, list)):

            if isinstance(optional_path_list, str):
                path_list = [optional_path_list]
            else:
                path_list = []
                for path in optional_path_list:
                    if os.path.isfile(path): # and path.startswith(folder_paths.get_input_directory()):
                        path_list.append(path)

            reader = SimpleDirectoryReader(
                input_files=path_list,
            )


        documents = reader.load_data()
        if not documents:
            raise ValueError("No documents found in the specified directory.")

        return (documents,)

```
