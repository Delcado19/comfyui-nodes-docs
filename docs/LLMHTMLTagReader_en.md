
# Documentation
- Class name: LLMHTMLTagReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMHTMLTagReader node reads and parses HTML tags from a specified file, converting them into a structured document format. It uses BeautifulSoup to parse HTML content, focusing on specific tags and attributes to extract relevant information, while optional parameters allow customization of the processing.

# Input types
## Required
- path
    - Specifies the file path of the HTML file to read. This is a critical parameter as it determines the source of the HTML content to be processed.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- tag
    - Defines the specific HTML tags to focus on during parsing. This allows targeted extraction of information from the HTML file.
    - Comfy dtype: STRING
    - Python dtype: str
- ignore_no_id
    - A boolean flag that, when set, instructs the reader to ignore HTML elements without an ID attribute. This is useful for filtering out unnecessary elements.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
- extra_info
    - Allows including additional custom information as a string, which can be used to further customize parsing behavior.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Output in a structured document format, representing the parsed and interpreted HTML content.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMHTMLTagReader(HTMLTagReader):
    """
    @NOTE: Reads HTML tags into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/html/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.HTMLTagReader
    @Imports: from bs4 import BeautifulSoup
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
                "tag": ("STRING", {"default":"section"}),
                "ignore_no_id": ([False, True],),
                "extra_info": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "{}"}),
            }
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "execute"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def execute(self, path:str, tag:str="section", ignore_no_id:bool=False, extra_info:str="{}"):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        self._tag = tag
        self._ignore_no_id = ignore_no_id
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, extra_info)
        return (data, )

```
