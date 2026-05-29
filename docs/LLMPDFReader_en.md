
# Documentation
- Class name: LLMPDFReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMPDFReader node is intended to read PDF files and convert them into llama_index Document format, excluding embedded images. This feature enables the extraction and processing of text data from PDF documents for further analysis or processing.

# Input types
## Required
- path
    - Specify the path of the PDF file to be read in the file system. This is crucial for locating and accessing the file to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provide additional optional information in string format, which can be used to influence the reading process or address specific requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Return the content of the PDF file as a llama_index Document, facilitating further data processing or analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMPDFReader(PDFReader):
    """
    @NOTE: Reads PDF files into a llama_index Document, currently doesn't support embedded images
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/docs/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.PDFReader
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
