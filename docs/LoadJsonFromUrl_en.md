
# Documentation
- Class name: LoadJsonFromUrl
- Category: Art Venture/Utils
- Output node: False

The LoadJsonFromUrl node is designed to fetch JSON data from a specified URL, providing an easy way to integrate external data into the node workflow.

# Input types
## Required
- url
    - The URL used to retrieve JSON data. It is the primary source for the node to fetch data.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- print_to_console
    - A control flag that determines whether to print the fetched JSON content to the console, aiding debugging or verification.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- json
    - The JSON data retrieved from the specified URL can be further processed or used within the node workflow.
    - Comfy dtype: JSON
    - Python dtype: Dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class UtilLoadJsonFromUrl:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "url": ("STRING", {"default": ""}),
            },
            "optional": {
                "print_to_console": ("BOOLEAN", {"default": False}),
            },
        }

    RETURN_TYPES = ("JSON",)
    CATEGORY = "Art Venture/Utils"
    FUNCTION = "load_json"

    def load_json(self, url: str, print_to_console=False):
        response = requests.get(url, timeout=5)
        if response.status_code != 200:
            raise Exception(response.text)

        res = response.json()
        if print_to_console:
            print("JSON content:", json.dumps(res))

        return (res,)

```
