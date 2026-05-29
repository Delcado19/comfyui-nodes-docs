
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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
