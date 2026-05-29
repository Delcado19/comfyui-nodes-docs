
# Documentation
- Class name: OneButtonArtify
- Category: OneButtonPrompt
- Output node: False

The OneButtonArtify node transforms text prompts into artistic versions by incorporating artistic styles and elements. Users can specify artists, the number of artists influencing the output, and the artification mode, providing a creative and customizable approach to generating art-themed text prompts.

# Input types
## Required
- prompt
    - The primary text input to be transformed into an artistic version. It serves as the base content for the artification process.
    - Comfy dtype: STRING
    - Python dtype: str
- artist
    - Specifies the artist or art style to apply to the prompt, allowing a wide range of artistic influences in the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- amount_of_artists
    - Determines how many artists' styles will influence the artified prompt, providing control over the diversity of artistic expression.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- artify_mode
    - Defines the artification mode, such as standard mode or other specified modes, affecting how the artistic transformation is applied.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- seed
    - An optional parameter to set the seed for random elements in the artification process, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- artified_prompt
    - The result of the artification process, a text prompt transformed with the specified artistic styles and elements.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class OneButtonArtify:

    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
               
        return {
            "required": {
                "prompt": ("STRING", {"default": '', "multiline": True}),
                "artist": (artifyartists, {"default": "all"}),
                "amount_of_artists": (artifyamountofartistslist, {"default": "1"}),
                "artify_mode": (artifymodeslist, {"default": "standard"})
            },
            "optional": {                
                "seed": ("INT", {"default": 0, "min": 0, "max": 0xFFFFFFFFFFFFFFFF}),
            },
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("artified_prompt",)

    FUNCTION = "Comfy_OBP_Artify"

    #OUTPUT_NODE = False

    CATEGORY = "OneButtonPrompt"
    
    def Comfy_OBP_Artify(self, prompt, artist, amount_of_artists,artify_mode, seed):
        # artify here
        artified_prompt = artify_prompt(prompt=prompt, artists=artist, amountofartists=amount_of_artists, mode=artify_mode, seed=seed)
        
        print("Artified prompt: " + artified_prompt)
        
        return (artified_prompt,)

```
