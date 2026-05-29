
# Documentation
- Class name: LLMDocxReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMDocxReader node is specifically designed to read Microsoft Word (.docx) files and convert them into a format suitable for further processing or analysis within the llama_index ecosystem. It leverages the capabilities of the DocxReader class to parse and extract document content, facilitating the integration of Word documents into data pipelines.

# Input types
## Required
- path
    - Specifies the path to the .docx file to be read in the file system. This path is critical for locating and accessing the file to extract its content.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provides additional optional information in string format, which can be used to influence the reading process or attach extra metadata to the generated document.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output is a document object that encapsulates the content and structure of the read .docx file, ready for further processing within the llama_index ecosystem.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMDocxReader(DocxReader):
    """
    @NOTE: Reads MS Word files into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/docs/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.DocxReader
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
