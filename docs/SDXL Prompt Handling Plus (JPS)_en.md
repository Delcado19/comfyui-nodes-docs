
# Documentation
- Class name: SDXL Prompt Handling Plus (JPS)
- Category: JPS Nodes/Text
- Output node: False

This node enhances text prompt processing and optimization for generative models. It employs advanced techniques to manipulate and optimize prompts, improving clarity, creativity, or specificity. The goal is a nuanced prompt engineering approach, using extra parameters to fine-tune model interactions.

# Input types
## Required
- handling
    - Specifies methods for processing and combining positive and negative prompts, providing strategies to tailor prompt processing to specific needs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pos_g
    - Represents the global positive prompt input that the node will process, crucial for guiding the generative model to desired results.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - Acts as a local positive prompt input, providing additional context or emphasis to further refine the output.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pos_g
    - Processed global positive prompt, optimized for clarity and effectiveness in guiding the generative model.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - Optimized local positive prompt, specifically designed to add targeted context or emphasis to the generated output.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Prompt_Handling_Plus:
    handling = ["Copy to Both if Empty","Use Positive_G + Positive_L","Copy Positive_G to Both","Copy Positive_L to Both","Ignore Positive_G Input", "Ignore Positive_L Input", "Combine Positive_G + Positive_L", "Combine Positive_L + Positive_G",]

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "handling": (s.handling,),
                "pos_g": ("STRING", {"multiline": True, "placeholder": "Prompt Text pos_g", "dynamicPrompts": True}),
                "pos_l": ("STRING", {"multiline": True, "placeholder": "Prompt Text pos_l", "dynamicPrompts": True}),
            },
        }
    
    RETURN_TYPES = ("STRING","STRING",)
    RETURN_NAMES = ("pos_g","pos_l",)
    FUNCTION = "pick_handling"

    CATEGORY="JPS Nodes/Text"

    def pick_handling(self,handling,pos_g,pos_l):
        
        if(handling == "Copy Positive_G to Both"):
            pos_l = pos_g
        elif(handling == "Copy Positive_L to Both"):
            pos_g = pos_l
        elif(handling == "Ignore Positive_G Input"):
            pos_g = ''
        elif(handling == "Ignore Positive_L Input"):
            pos_l = ''
        elif(handling == "Combine Positive_G + Positive_L"):
            combine = pos_g + ' . ' + pos_l
            pos_g = combine
            pos_l = combine
        elif(handling == "Combine Positive_L + Positive_G"):
            combine = pos_l + ' . ' + pos_g
            pos_g = combine
            pos_l = combine
        elif(handling == "Copy to Both if Empty" and pos_l == ''):
            pos_l = pos_g
        elif(handling == "Copy to Both if Empty" and pos_g == ''):
            pos_g = pos_l

        return(pos_g,pos_l,)

```
