
# Documentation
- Class name: LLMPyMuPDFReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMPyMuPDFReader node is designed to read PDF files and convert them into llama_index Document format, leveraging the PyMuPDF library for efficient processing. This node extracts text and potential metadata from PDF documents, making them available for further analysis or processing within the llama_index ecosystem.

# Input types
## Required
- path
    - Specifies the file path of the PDF document to be read. This path is critical for locating and accessing the file to be processed.
    - Comfy dtype: STRING
    - Python dtype: str
- metadata
    - A boolean flag indicating whether metadata should be extracted from the PDF document along with the text. This option allows for more comprehensive document analysis by including additional information.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
## Optional
- extra_info
    - A JSON-formatted string containing additional configuration or information that can be used to customize the reading process. This parameter allows flexibility to adapt to specific requirements.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output is a Document object containing the text (and optionally metadata) extracted from the PDF file, ready for direct integration into the llama_index ecosystem.
    - Comfy dtype: DOCUMENT
    - Python dtype: Document


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMPyMuPDFReader(PyMuPDFReader):
    """
    @NOTE: Reads PDF files into a llama_index Document using Pymu
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/pymu_pdf/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.PyMuPDFReader
    """

    def __init__(self):
        super().__init__()

    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "path": ("STRING", {"default": ""}),
                "metadata": ([False, True], {"default": True}),
            },
            "optional": {
                "extra_info": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "{}"}),
            }
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "execute"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def execute(self, path:str, metadata:bool, extra_info:str):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, metadata, extra_info)
        return (data, )

```
