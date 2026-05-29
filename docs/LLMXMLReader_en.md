
# Documentation
- Class name: `LLMXMLReader`
- Category: `SALT/Language Toolkit/Readers`
- Output node: `False`

The LLMXMLReader node is specifically designed to read XML files and convert them into a format suitable for further processing or analysis within the llama_index ecosystem. It leverages the XMLReader base class to parse XML documents, and enriches the documents if optional extra_info is provided.

# Input types
## Required
- **`path`**
    - Specifies the file system path of the XML file to read. This is a critical input as it determines the source document to process.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- **`extra_info`**
    - Allows inclusion of user-defined extra information that can be used during the reading process, providing a way to pass additional context or instructions.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- **`documents`**
    - Outputs processed documents in a format compatible with the llama_index ecosystem, ready for further analysis or manipulation.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMXMLReader(XMLReader):
    """
    @NOTE: Reads XML files into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/xml/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.XMLReader
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

    def execute(self, path:str, extra_info:str):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, extra_info)
        return (data, )

```
