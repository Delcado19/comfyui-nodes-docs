
# Documentation
- Class name: LLMSimpleWebPageReaderAdv
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMSimpleWebPageReaderAdv node fetches and processes web pages from a list of URLs, converting them into a structured document format. It can optionally convert HTML content to plain text, facilitating the extraction of readable content from web pages for further analysis or processing.

# Input types
## Required
- urls
    - A list of URLs for fetching web page content. This is the primary input that drives the node's operation, determining which web pages to process.
    - Comfy dtype: LIST
    - Python dtype: List[str]
## Optional
- html_to_text
    - A boolean flag indicating whether to convert HTML content to plain text. This affects the web page processing, removing HTML tags and retaining only readable text.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- documents
    - Output in a structured document format, containing content processed from the fetched web pages.
    - Comfy dtype: DOCUMENT
    - Python dtype: Tuple[Document]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMSimpleWebPageReaderAdv:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "urls": ("LIST", {}),
            },
            "optional": {
                "html_to_text": ("BOOLEAN", {"default": True}),
            },
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "read_web"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def read_web(self, urls, html_to_text=True):

        if not urls:
            raise ValueError("At least one URL must be provided to LLMSimpleWebPageReaderAdv")

        valid_urls = []
        for url in urls:
            if not valid_url(url):
                print("Skipping invalid URL", url)
                continue
            valid_urls.append(url)

        print("Valided URLs:", valid_urls)

        documents = SimpleWebPageReader(html_to_text=html_to_text).load_data(valid_urls)
        return (documents,)

```
