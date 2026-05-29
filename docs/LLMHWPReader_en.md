
# Documentation
- Class name: LLMHWPReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMHWPReader node is designed to read and process HWP (Hangul Word Processor) files, a word processing file format widely used in South Korea. This node converts HWP files into a format suitable for further analysis or processing within the llama_index ecosystem.

# Input types
## Required
- path
    - Specifies the file path of the HWP document to read. This path is critical for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- extra_info
    - Provides additional information or parameters in JSON string format, which may affect how the HWP file is processed, allowing for custom processing of the file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Returns the processed HWP file content as a document object that can be directly integrated into the llama_index ecosystem for further analysis or processing.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMHWPReader(HWPReader):
    """
    @NOTE: Reads HWP (Korean) files into a llama_index Document
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.HWPReader
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

    def execute(self, path:str,  extra_info:str, fs = None):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, extra_info)
        return (data, )

```
