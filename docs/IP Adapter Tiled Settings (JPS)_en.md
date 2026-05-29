
# Documentation
- Class name: IP Adapter Tiled Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/jps326/ComfyUI_JPS_Nodes

This node aims to configure and adjust image processing settings for tiled image generation, allowing detailed customization of the image processing pipeline. It facilitates adjusting various parameters such as model selection, weight type, noise level, and interpolation method to tailor the image generation process to specific needs.

# Input types
## Required
- ipa_model
    - Specifies the model used for image processing operations, affecting the overall quality and characteristics of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_wtype
    - Determines the weight type for image processing, influencing how weights are applied during the generation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ipa_weight
    - Sets the weight for image processing, adjusting the degree to which certain parameters affect the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_noise
    - Defines the noise level to be added to the image processing, affecting the texture and detail of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_start
    - Marks the starting point of the image processing operation, setting initial conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ipa_end
    - Indicates the ending point of the image processing operation, determining the final conditions of image generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_short
    - Specifies the shortest side of the tile, affecting the overall tiling strategy and output size.
    - Comfy dtype: INT
    - Python dtype: int
- tile_weight
    - Determines the weight applied to tiles during image processing, influencing the balance between different tiles.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zoom
    - Sets the scaling level for image processing, changing the focus and proportion of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- offset_w
    - Adjusts the horizontal offset for image processing, shifting the focus of image generation horizontally.
    - Comfy dtype: INT
    - Python dtype: int
- offset_h
    - Adjusts the vertical offset for image processing, shifting the focus of image generation vertically.
    - Comfy dtype: INT
    - Python dtype: int
- prepare_type
    - Defines the preparation type for image processing, setting the method by which the image is prepared before processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prepare_intpol
    - Specifies the interpolation method used in image processing, affecting the smoothness and quality of the generated image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- prepare_sharpening
    - Sets the sharpening level applied during image processing, enhancing the clarity and detail of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- ip_adapter_tiled_settings
    - Returns a comprehensive set of settings optimized for tiled image processing, including model details, weight adjustments, noise levels, etc., to optimize the image generation pipeline.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[int, str, float, float, float, float, int, float, int, int, int, int, str, float]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class IP_Adapter_Tiled_Settings:
    
    preparetypes = ["Target AR + Target Res", "Target AR + Tile Res", "Tile AR + Target Res", "Source AR + Source Res", "Source AR + Tile Res", "Tile AR + Source Res", "Square AR + Target Res", "Square AR + Tile Res", "Direct Source" ]
    
    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "ipa_model": (["SDXL ViT-H", "SDXL Plus ViT-H", "SDXL Plus Face ViT-H"],),
                "ipa_wtype": (["linear", "ease in", "ease out", "ease in-out", "reverse in-out", "weak input", "weak output", "weak middle", "strong middle"],),
                "ipa_weight": ("FLOAT", {"default": 0.5, "min": 0, "max": 3, "step": 0.01}),
                "ipa_noise": ("FLOAT", {"default": 0.0, "min": 0, "max": 1, "step": 0.05}),
                "ipa_start": ("FLOAT", {"default": 0.00, "min": 0, "max": 1, "step": 0.05}),
                "ipa_end": ("FLOAT", {"default": 1.00, "min": 0, "max": 1, "step": 0.05}),
                "tile_short": ("INT", { "default": 2, "min": 1, "max": 5, "step": 1, "display": "number" }),
                "tile_weight": ("FLOAT", {"default": 0.55, "min": 0, "max": 1, "step": 0.05}),
                "zoom": ("INT", {"default": 100, "min": 1, "max": 500, "step": 1}),
                "offset_w": ("INT", { "default": 0, "min": -4096, "max": 4096, "step": 1, "display": "number" }),
                "offset_h": ("INT", { "default": 0, "min": -4096, "max": 4096, "step": 1, "display": "number" }),
                "prepare_type": (s.preparetypes,),
                "prepare_intpol": (["lanczos", "nearest", "bilinear", "bicubic", "area", "nearest-exact"],),
                "prepare_sharpening": ("FLOAT", { "default": 0.0, "min": 0, "max": 1, "step": 0.05, "display": "number" }),
            }
        }
    RETURN_TYPES = ("BASIC_PIPE",)
    RETURN_NAMES = ("ip_adapter_tiled_settings",)
    FUNCTION = "get_ipatiled"

    CATEGORY="JPS Nodes/Settings"

    def get_ipatiled(self,ipa_model,ipa_wtype,ipa_weight,ipa_noise,ipa_start,ipa_end,tile_short,tile_weight,zoom,offset_w,offset_h,prepare_type,prepare_intpol,prepare_sharpening,):

        ipamodel = int (0)
        if(ipa_model == "SDXL ViT-H"):
            ipamodel = int(1)
        elif(ipa_model == "SDXL Plus ViT-H"):
            ipamodel = int(2)
        elif(ipa_model == "SDXL Plus Face ViT-H"):
            ipamodel = int(3)

        preparetype = int (0)
        if(prepare_type == "Target AR + Target Res"):
            preparetype = int(1)
        elif(prepare_type == "Target AR + Tile Res"):
            preparetype = int(2)
        elif(prepare_type == "Tile AR + Target Res"):
            preparetype = int(3)
        elif(prepare_type == "Source AR + Source Res"):
            preparetype = int(4)
        elif(prepare_type == "Source AR + Tile Res"):
            preparetype = int(5)
        elif(prepare_type == "Tile AR + Source Res"):
            preparetype = int(6)
        elif(prepare_type == "Square AR + Target Res"):
            preparetype = int(7)
        elif(prepare_type == "Square AR + Tile Res"):
            preparetype = int(8)
        elif(prepare_type == "Direct Source"):
            preparetype = int(9)
        
        ip_adapter_settings = ipamodel,ipa_wtype,ipa_weight,ipa_noise,ipa_start,ipa_end,tile_short,tile_weight,zoom,offset_w,offset_h,preparetype,prepare_intpol,prepare_sharpening

        return(ip_adapter_settings,)

```
