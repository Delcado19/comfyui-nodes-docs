
# Documentation
- Class name: LLMRssReaderNode
- Category: SALT/Language Toolkit/Readers
- Output node: False

LLMRssReaderNode is a node specifically designed to fetch and parse RSS feeds. It extracts news or blog content from a specified URL and converts it into a structured format for subsequent processing and analysis. This node plays a key role in information gathering and content aggregation, providing users with an efficient way to obtain and organize the latest information from various sources.

# Input types
## Required
- url_i
    - This is the primary URL for reading the RSS feed. It is a required input parameter to initiate the read process, determining which URL the node will fetch RSS information from.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- documents
    - The output documents are documents extracted from the RSS feed and structured for processing. These documents are ready for direct use in downstream processing or analysis tasks.
    - Comfy dtype: DOCUMENT
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMRssReaderNode:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "url_1": ("STRING", {}),
            },
            "optional": {
                "url_2": ("STRING", {}),
                "url_3": ("STRING", {}),
                "url_4": ("STRING", {}),
            },
        }

    RETURN_TYPES = ("DOCUMENT", )
    RETURN_NAMES = ("documents",)

    FUNCTION = "read_rss"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Readers"

    def read_rss(self, url_1, url_2=None, url_3=None, url_4=None):
        if not url_1.strip():
            raise ValueError("At least one URL must be provided to LLMSimpleWebPageReader")

        urls = [url_1.strip()]
        if url_2.strip():
            urls.append(url_2.strip())
        if url_3.strip():
            urls.append(url_3.strip())
        if url_4.strip():
            urls.append(url_4.strip())

        urls = [url for url in urls if valid_url(url)]

        print("Valided URLs:", urls)

        documents = RssReader().load_data(urls)
        return (documents,)

```
