
# Documentation
- Class name: LLMFlatReader
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMFlatReader node is designed to read and process "flat" files, converting them into a format suitable for indexing and further analysis within the llama_index document system. It leverages the basic functionality of the FlatReader class to transform simple text files into structured document representations.

# Input types
## Required
- path
    - Specifies the file system path of the "flat" file to be read. This path is essential for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information in string format, which can be used to influence the reading process or pass additional parameters that may be required for specific use cases.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Processed data from the "flat" file, constructed in document form suitable for indexing and further analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMFlatReader(FlatReader):
    """
    @NOTE: Reads 'flat' files into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/flat/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.FlatReader
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
