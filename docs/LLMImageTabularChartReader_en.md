
# Documentation
- Class name: LLMImageTabularChartReader
- Category: SALT/Language Toolkit/Readers
- Output node: False

The LLMImageTabularChartReader node is specifically designed to interpret image-based charts into tabular data, converting visual information into a structured document format. This process enables extraction and analysis of data from images representing charts, facilitating integration into data processing workflows.

# Input types
## Required
- path
    - Specify the file path of the image chart to be read. This is essential for locating and accessing the image for data extraction.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- max_output_tokens
    - Determine the maximum number of tokens generated for the output, affecting the detail and length of the extracted data.
    - Comfy dtype: INT
    - Python dtype: int
- prompt
    - Provide an optional text prompt to guide the interpretation of the image chart, potentially influencing the focus or context of the extracted data.
    - Comfy dtype: STRING
    - Python dtype: str
- extra_info
    - Allow inclusion of additional information in string format, which can be used to pass extra parameters or context for the data extraction process.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - Return the tabular data extracted from the image chart in a structured document format, facilitating further analysis or processing.
    - Comfy dtype: DOCUMENT
    - Python dtype: Document


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMImageTabularChartReader(ImageTabularChartReader):
    """
    @NOTE: Reads an Image chart as if it were tabular data into a llama_index Document
    @Source: https://github.com/run-llama/llama_index/blob/main/llama-index-integrations/readers/llama-index-readers-file/llama_index/readers/file/image_deplot/base.py
    @Documentation: https://docs.llamaindex.ai/en/latest/api_reference/readers/file/#llama_index.readers.file.ImageTabularChartReader
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
    #			"keep_image": ([False, True], {"default": False}),
                "max_output_tokens": ("INT", {"default": 512}),
                "prompt": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": ""}),
                "extra_info": ("STRING", {"multiline": True, "dynamicPrompts": False, "default": "{}"}),
            }
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "execute"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def execute(self, path:str, max_output_tokens:int=512, prompt:str=None, extra_info:str="{}"):
        get_full_path(1, path)
        if not os.path.exists(path):
            raise FileNotFoundError(f"No file available at: {path}")
        path = Path(path)
        self._max_output_tokens = max_output_tokens
        if prompt and len(prompt) > 2:
            self._prompt = prompt
        extra_info = read_extra_info(extra_info)
        data = self.load_data(path, extra_info)
        return (data, )

```
