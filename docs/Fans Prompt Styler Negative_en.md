
# Documentation
- Class name: Fans Prompt Styler Negative
- Category: utils
- Output node: False

The Fans Prompt Styler Negative node is specifically designed for style transfer of prompt words, based on predefined styles and structural positioning, enhancing the expressiveness and specificity of negative prompt words.

# Input types
## Required
- style
    - Specifies the style transformation applied to the prompt words, selected from a predefined style list. It determines the theme or style overlay that will modify the original prompt words.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- structure
    - Determines the position of the style transformation relative to the original prompt words, either at the beginning or the end, affecting the overall structure and emphasis of the prompt words.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prompt
    - The original text prompt words to which the style and structural transformation will be applied, serving as the base content for modification.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- result
    - The transformed prompt words, incorporating the selected style and structural positioning, to convey negative emotions or themes.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class FansPromptStylerNegative:
    styles = None

    def __init__(self):
        pass
    
    def handle_prompt_change(self, value):
        print("New prompt value:", value)
    
    @classmethod
    def INPUT_TYPES(cls):
        if not os.path.exists(csv_file_path):
            cls.styles = [["No Styles.csv", "", ""]]
        else:
            with open(csv_file_path, "r") as f:
                reader = csv.reader(f, dialect='excel')
                cls.styles = [row for row in reader if len(row) == 2 and row[1] != "prompt" and row[0] != "None"]

        cls.styles.insert(0, ["None", "", ""])
        style_names = [row[0] for row in cls.styles]

        return {
            "required": {
                "style": (style_names, {"default": style_names[0]}),
                "structure": (["Beginning", "End"],{"default":"Beginning"}),               
                "prompt": ("STRING", {"multiline": True, "default": "Input Your Negative Prompt Here"}),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("result",)
    FUNCTION = "func"
    OUTPUT_NODE = False
    CATEGORY = "utils"

    def func(self, style, structure, prompt):
        result=""

        if style=="None":
            result=prompt
        else:
            for row in self.styles:
                if row[0] == style:
                    result += row[1]              

            if structure == 'Beginning':
                result =  prompt + ", " + result
            else:
                result =  result + ", " + prompt

        return result,

```
