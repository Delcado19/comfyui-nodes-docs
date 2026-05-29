
# Documentation
- Class name: LLMScaleSERPSearch
- Category: SALT/Language Toolkit/Tools
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LLMScaleSERPSearch node aims to utilize the ScaleSERP API to search various web content and parse the results into structured documents. This node simplifies the complexity of interacting with the ScaleSERP API and provides a concise interface for efficiently retrieving and organizing search data.

# Input types
## Required
- api_key
    - API key for authenticating with the ScaleSERP API, allowing users to access its search functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- query
    - Search query input by the user, used to retrieve relevant search results from the ScaleSERP API.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- search_type
    - Specifies the type of search to perform, such as web, image, or news, to obtain more targeted search results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- location
    - Optional parameter to specify the geographic location for the search, affecting the relevance of search results.
    - Comfy dtype: STRING
    - Python dtype: str
- device
    - Optional parameter to specify the device type for the search, such as desktop or mobile, to simulate searches from different devices.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mobile_type
    - Optional parameter to specify the mobile device type when performing a search on a mobile platform.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- tablet_type
    - Optional parameter to specify the tablet type when performing a search on a tablet platform.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- documents
    - Structured documents parsed from search results, providing well-organized information for easy access and analysis.
    - Comfy dtype: DOCUMENT
    - Python dtype: list
- results_dict
    - A dictionary containing parsed search results, providing a structured overview of the data retrieved from the ScaleSERP API.
    - Comfy dtype: DICT
    - Python dtype: dict
- links_list
    - A list of links extracted from search results, providing direct access to information sources.
    - Comfy dtype: LIST
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class LLMScaleSERPSearch:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "api_key": ("STRING", {}),
                "query": ("STRING", {}),
            },
            "optional": {
                "search_type": (["none", "news", "videos", "scholar", "places", "shopping"],),
                "location": ("STRING", {}),
                "device": (["desktop", "tablet", "mobile"],),
                "mobile_type": (["iphone", "android"],),
                "tablet_type": (["ipad", "android"],),
            }
        }

    RETURN_TYPES = ("DOCUMENT", "DICT", "LIST")
    RETURN_NAMES = ("documents", "results_dict", "links_list")

    FUNCTION = "search"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Tools"

    def search(self, api_key, query, **kwargs):

        if kwargs.__contains__("search_type"):
            if kwargs["search_type"] == "none":
                kwargs.pop("search_type")

        if kwargs.__contains__("device"):
            if kwargs["device"] == "desktop" and kwargs.__contains__("mobile_type") and kwargs.__contains__("tablet_type"):
                kwargs.pop("mobile_type")
                kwargs.pop("tablet_type")
            if kwargs["device"] == "mobile":
                if kwargs.__contains__("tablet_type"):
                    kwargs.pop("tablet_type")
            if kwargs["device"] == "tablet":
                if kwargs.__contains__("mobile_type"):
                    kwargs.pop("mobile_type")

        client = ScaleSERP(api_key=api_key)
        results = client.search(query, hide_base64_images=True, **kwargs)

        documents = client.results_to_documents()
        for doc in documents:
            print(doc.text, doc.extra_info)
            print("\n==================\n")
        links = client.results_to_link_dict()

        return (documents, results, list(links.values()))

```
