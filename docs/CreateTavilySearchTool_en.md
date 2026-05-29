
# Documentation
- Class name: CreateTavilySearchTool
- Category: SALT/Language Toolkit/Agents
- Output node: False

CreateTavilySearchTool node creates a customizable search tool via the Tavily API, supports detailed web searches, and offers various filter options such as search depth, domain inclusion/exclusion, and content type preferences. The node helps retrieve comprehensive, accurate, and trustworthy results and can be tailored to specific queries.

# Input types
## Required
- api_key
- API key for authenticating with the Tavily API, enabling access to its search functionality.
    - Comfy dtype: STRING
    - Python dtype: str
- function_name
- Name assigned to the created search tool, used to identify the tool within the system.
    - Comfy dtype: STRING
    - Python dtype: str
- search_depth
- Search depth specification, affecting how broadly and deeply the engine explores web content.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_results
- Maximum number of search results to return, controlling the scope of the output.
    - Comfy dtype: INT
    - Python dtype: int
- include_answer
- Option to include direct answers to the query in the results, improving relevance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- include_raw_content
- Option to include the raw content of search results, providing detailed source material.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional
- include_domains
- List of domains to include in the results, focusing the search on preferred sources.
    - Comfy dtype: STRING
    - Python dtype: str
- exclude_domains
- List of domains to exclude from the results, filtering out unwanted sources.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- tool
- Returns a configured, ready‑to‑use search tool object that encapsulates the specified parameters and functionality.
    - Comfy dtype: TOOL
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class CreateTavilySearchTool:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "api_key": ("STRING", {"multiline": False, "dynamicPrompts": False, "placeholder": "Tavily API key"}),
                "function_name": ("STRING", {"multiline": False, "dynamicPrompts": False, "default": "tavily_search_tool"}),
                "search_depth": (["basic", "advanced"],),
                "max_results": ("INT", {"default": 5}),
                "include_answer": ("BOOLEAN", {"default": False},),
                "include_raw_content": ("BOOLEAN", {"default": False},),
            },
            "optional": {
                "include_domains": ("STRING", {
                    "multiline": True,
                    "dynamicPrompts": False,
                    "placeholder": "A list of domains to specifically include in the search results. Default is None, which includes all domains. e.g. \"google.com, twitter.com\"",
                }),
                "exclude_domains": ("STRING", {
                    "multiline": True,
                    "dynamicPrompts": False,
                    "placeholder": "A list of domains to specifically exclude from the search results. Default is None, which doesn't exclude any domains. e.g. \"google.com, twitter.com\"",
                }),
            }
        }

    RETURN_TYPES = ("TOOL",)
    RETURN_NAMES = ("tool",)

    FUNCTION = "create_tool"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Agents"

    def create_tool(
        self,
        api_key,
        function_name,
        search_depth,
        max_results,
        include_answer,
        include_raw_content,
        include_domains=None,
        exclude_domains=None
    ):
        tavily = TavilyClient(api_key=api_key)

        def search(query: str):
            response = tavily.search(
                query=query,
                search_depth=search_depth,
                max_results=max_results,
                include_images=False,
                include_answer=include_answer,
                include_raw_content=include_raw_content,
                include_domains=include_domains.split(
                    ", ") if include_domains is not None and include_domains != "" else None,
                exclude_domains=exclude_domains.split(
                    ", ") if include_domains is not None and exclude_domains != "" else None,
            )
            context = [obj["content"] for obj in response['results']]
            return "/n".join(context)

        tool = {
            "name": function_name,
            "description": "A search engine optimized for comprehensive, accurate, and trusted results. Useful for when you need to answer questions about current events. Input should be a search query.",
            "function": search,
        }
        return (tool,)

```
