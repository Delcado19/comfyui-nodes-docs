
# Documentation
- Class name: LLMTrafilaturaWebReaderAdv
- Category: SALT/Language Toolkit/Readers
- Output node: False
- Repo Ref: https://github.com/jbikker/ComfyUI-SALT

The LLMTrafilaturaWebReaderAdv node is an advanced web content extraction tool. It uses the Trafilatura library to efficiently parse and retrieve documents from a list of URLs. This node primarily focuses on validating URLs and extracting web content into a structured document format for subsequent processing or analysis.

# Input types
## Required
- urls
    - The urls parameter is a list of URLs from which the node will attempt to extract web content. This parameter is crucial for defining the information sources the node will process.
    - Comfy dtype: LIST
    - Python dtype: List[str]

# Output types
- documents
    - The documents output is the extracted web content structured as documents. This output is crucial for users who need to obtain processed and accessible information from the provided URLs.
    - Comfy dtype: DOCUMENT
    - Python dtype: Tuple[List[Dict[str, Any]],]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMTrafilaturaWebReaderAdv:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "urls": ("LIST", {}),
            },
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "read_web_trafilatura"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def read_web_trafilatura(self, urls):

        if not urls:
            raise ValueError("At least one URL must be provided to LLMTrafilaturaWebReaderAdv")

        valid_urls = []
        for url in urls:
            if not valid_url(url):
                print("Skipping invalid URL", url)
                continue
            valid_urls.append(url)

        print("Valided URLs:", valid_urls)

        documents = TrafilaturaWebReader().load_data(valid_urls)
        return (documents,)

```
