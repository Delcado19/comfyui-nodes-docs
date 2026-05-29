# Documentation
- Class name: WAS_Text_Random_Prompt
- Category: WAS Suite/Text
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `random_prompt` method of the `WAS_Text_Random_Prompt` class is designed to generate a random text prompt based on a given search seed, or use a set of default prompts if no search seed is provided. It uses an external API to fetch a list of images related to the query and returns a random prompt associated with one of the images in the list.

# Input types
## Required
- search_seed
    - The `search_seed` parameter is used to define the initial query for generating the random text prompt. It is critical, as it directly influences the type of prompt generated and the subsequent images retrieved from the external API.
    - Comfy dtype: STRING
    - Python dtype: Union[str, None]

# Output types
- prompt
    - The `prompt` parameter represents the output of the `random_prompt` method, which is a text prompt randomly selected based on the input query. It is important, as it forms the basis for any subsequent processing or analysis performed on the generated prompt.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Text_Random_Prompt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'search_seed': ('STRING', {'multiline': False})}}

    @classmethod
    def IS_CHANGED(cls, **kwargs):
        return float('NaN')
    RETURN_TYPES = (TEXT_TYPE,)
    FUNCTION = 'random_prompt'
    CATEGORY = 'WAS Suite/Text'

    def random_prompt(self, search_seed=None):
        if search_seed in ['', ' ']:
            search_seed = None
        return (self.search_lexica_art(search_seed),)

    def search_lexica_art(self, query=None):
        if not query:
            query = random.choice(['portrait', 'landscape', 'anime', 'superhero', 'animal', 'nature', 'scenery'])
        url = f'https://lexica.art/api/v1/search?q={query}'
        try:
            response = requests.get(url, proxies=config.get_proxies())
            data = response.json()
            images = data.get('images', [])
            if not images:
                return '404 not found error'
            random_image = random.choice(images)
            prompt = random_image.get('prompt')
        except Exception:
            cstr('Unable to establish connection to Lexica API.').error.print()
            prompt = '404 not found error'
        return prompt
```