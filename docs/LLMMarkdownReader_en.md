
# Documentation
- Class name: LLMMarkdownReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMMarkdownReader node is specifically designed to read and process Markdown document files, such as GitHub README files, and convert them into a structured document format suitable for further analysis or processing. This feature enables seamless integration of Markdown content into data processing workflows, facilitating automated content extraction and conversion.

# Input types
## Required
- path
    - Specifies the path to the Markdown file to be read within the file system. This parameter is critical for locating and accessing the target file.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides optional additional information to influence the reading process. This may include metadata or configuration options in JSON string format.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Returns a structured document representation of the input Markdown file, ready for direct use in subsequent processing or analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMMarkdownReader(MarkdownReader):
    """
    @NOTE: Reads Markdown documentation files (like github readmes) into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/markdown/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.MarkdownReader
    """

    def __init__(self):
        super().__init__()

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "path": ("STRING", {"default": ""}),
            },
            "optional": {
                "extra_info": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "{}"}),
            }
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "execute"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def execute(self, path:str, extra_info:str, fs = None):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, extra_info)
        return (data, )

```
