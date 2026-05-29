
# Documentation
- Class name: SDXL Prompt Handling (JPS)
- Category: JPS Nodes/Text
- Output node: False

This node processes and optimizes text prompts for image generation tasks, specifically tuned for the SDXL model. It focuses on refining and constructing input prompts to improve the clarity and quality of generated images.

# Input types
## Required
- handling
    - Specifies the combination or selection method for handling positive prompts, offering various strategies to optimize prompt effectiveness.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- pos_g
    - Represents the global positive prompt, providing a broad theme or main content direction for image generation.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - Represents the local positive prompt, offering more specific details or elements to include in the generated image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- pos_g
    - The processed global positive prompt, reflecting the chosen processing strategy, ready for direct use with the SDXL model.
    - Comfy dtype: STRING
    - Python dtype: str
- pos_l
    - The processed local positive prompt, adjusted according to the processing method, specifically optimized for image generation tasks.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class SDXL_Prompt_Handling:
    handling = ["Copy to Both if Empty","Use Positive_G + Positive_L","Copy Positive_G to Both","Copy Positive_L to Both","Ignore Positive_G Input", "Ignore Positive_L Input", "Combine Positive_G + Positive_L", "Combine Positive_L + Positive_G",]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "handling": (s.handling,),
                "pos_g": ("STRING", {"default": ""}),
                "pos_l": ("STRING", {"default": ""}),
            },
        }
    RETURN_TYPES = ("STRING","STRING",)
    RETURN_NAMES = ("pos_g","pos_l",)
    FUNCTION = "pick_handling"

    CATEGORY="JPS Nodes/Text"

    def pick_handling(self,handling,pos_g,pos_l,):
        
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
