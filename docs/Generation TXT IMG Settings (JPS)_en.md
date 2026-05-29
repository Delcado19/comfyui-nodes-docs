
# Documentation
- Class name: Generation TXT IMG Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False

This node configures and determines the generation mode and image intensity based on the selected mode and image percentage. It supports switching between text-to-image and image-to-image modes, adjusting output according to mode-specific requirements.

# Input types
## Required
- mode
    - Specifies the generation mode, either 'Txt2Img' or 'Img2Img', affecting the generation process and output characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Tuple[str]
- img_percentage
    - Determines the intensity or strength of image processing, affecting the final image output in 'Img2Img' mode.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- gen_mode
    - Represents the generation mode as an integer value, distinguishing between text-to-image and image-to-image modes.
    - Comfy dtype: INT
    - Python dtype: int
- img_strength
    - Represents the calculated image processing intensity or strength based on the provided image percentage.
    - Comfy dtype: FLOAT
    - Python dtype: float


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class Generation_TXT_IMG_Settings:
    mode = ["Txt2Img","Img2Img"]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "mode": (s.mode,),
                "img_percentage": ("INT", {"default": 50, "min": 0, "max": 100, "step": 5}),
            }
        }
    RETURN_TYPES = ("INT","FLOAT",)
    RETURN_NAMES = ("gen_mode", "img_strength")
    FUNCTION = "get_genmode"

    CATEGORY="JPS Nodes/Settings"

    def get_genmode(self,mode,img_percentage):
        gen_mode = 1
        img_strength = 0
        if(mode == "Txt2Img"):
            gen_mode = int(1)
            img_strength = 0.001
        if(mode == "Img2Img"):
            gen_mode = int(2)
            img_strength = img_percentage / 100
            
        return(int(gen_mode),float(img_strength))

```
