
# Documentation
- Class name: OneButtonFlufferize
- Category: OneButtonPrompt
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The OneButtonFlufferize node enhances text prompts by adding "fluff" (extra words or phrases) to make them more detailed or elaborate. It allows users to customize the amount of fluff and can invert fluff polarity, potentially using antonyms or negative phrases depending on configuration.

# Input types
## Required
- prompt
    - The initial text prompt to which fluff should be added. This is the base content that will be elaborated upon.
    - Comfy dtype: STRING
    - Python dtype: str
- amount_of_fluff
    - Specifies the degree of fluff to add to the prompt, which can be dynamic or a fixed range, affecting the verbosity of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- reverse_polarity
    - When enabled, inverts fluff polarity to use potentially opposite or negative fluff, changing the tone of the prompt.
    - Comfy dtype: COMBO[BOOLEAN]
    - Python dtype: bool
## Optional
- seed
    - A seed for the random number generator to ensure reproducibility of the fluff added to the prompt.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- fluffed_prompt
    - The original prompt with added fluff to increase its level of detail or elaboration.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OneButtonFlufferize:

    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
               
        return {
            "required": {
                "prompt": ("STRING", {"default": '', "multiline": True}),
                "amount_of_fluff": (amountofflufflist, {"default": "dynamic"}),
                "reverse_polarity": (fluff_reverse_polarity, {"default": False}),
            },
            "optional": {                
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("fluffed_prompt",)

    FUNCTION = "Comfy_OBP_Flufferize"

    #OUTPUT_NODE = False

    CATEGORY = "OneButtonPrompt"
    
    def Comfy_OBP_Flufferize(self, prompt, amount_of_fluff, reverse_polarity, seed):
        # artify here
        fluffed_prompt = flufferizer(prompt=prompt, amountoffluff=amount_of_fluff, reverse_polarity=reverse_polarity, seed=seed)
        
        print("Fluffed prompt: " + fluffed_prompt)
        
        return (fluffed_prompt,)

```
