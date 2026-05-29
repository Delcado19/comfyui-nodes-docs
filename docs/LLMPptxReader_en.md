
# Documentation
- Class name: LLMPptxReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

LLMPptxReader node aims to read Microsoft PowerPoint (PPTX) files and convert them into a format that can be processed by llama_index, possibly including interpretation of images in the document.

# Input types
## Required
- path
    - Specify the file path of the PowerPoint (PPTX) file to read. This is crucial for locating and accessing the file for processing.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- extra_info
    - Provide additional information or instructions in string format that can be used to influence how the document is read or processed.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Output the content of the PowerPoint file as a document in a format compatible with llama_index.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMPptxReader(PptxReader):
    """
    @NOTE: Reads MS Powerpoint files into a llama_index Document, not sure if images are interpreted
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/slides/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.PptxReader
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
