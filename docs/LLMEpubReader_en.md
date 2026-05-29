
# Documentation
- Class name: LLMEpubReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/some_repo/example

The LLMEpubReader node is dedicated to reading and converting Epub e-book files into a structured document format, facilitating processing and analysis of digital book content.

# Input types
## Required
- path
    - Specifies the path to the Epub e-book file to be read in the file system. This path is critical for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information that can be used to influence the reading process or pass extra parameters specific to the Epub file being processed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Returns the content of the Epub e-book file in the form of structured documents, making it available for further processing and analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMEpubReader(EpubReader):
    """
    @NOTE: Reads Epub book files into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/epub/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.EpubReader
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
