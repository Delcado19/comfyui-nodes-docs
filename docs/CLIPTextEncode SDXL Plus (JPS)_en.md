
# Documentation
- Class name: CLIPTextEncode SDXL Plus (JPS)
- Category: JPS Nodes/Conditioning
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node aims to encode text inputs using a CLIP model customized for the SDXL architecture, thereby enhancing the text input for subsequent processing or generation tasks. It focuses on optimizing and conditioning the input text to meet aesthetic or specific size requirements, leveraging the advanced capabilities of the CLIP model to interpret and encode text information to optimize the synthesis and manipulation of high-resolution images.

# Input types
## Required
- width
    - Specifies the width of the output image, affecting the spatial dimensions of the conditional output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the height of the output image, affecting the spatial dimensions of the conditional output.
    - Comfy dtype: INT
    - Python dtype: int
- res_factor
    - Specifies the adjustment factor for output resolution, affecting the overall quality and detail of the conditional output.
    - Comfy dtype: INT
    - Python dtype: float
- text_pos
    - The positive text input to be encoded, serving as a key component of the conditioning process to promote certain traits or themes.
    - Comfy dtype: STRING
    - Python dtype: str
- text_neg
    - The negative text input to be encoded, used to reduce or diminish the presence of certain traits or themes during the conditioning process.
    - Comfy dtype: STRING
    - Python dtype: str
- clip
    - The CLIP model instance used for text tokenization and encoding, which is core to the node's functionality.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module

# Output types
- cond_pos
    - The conditioned positive output, including the encoded text information, intended to promote the specified traits or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: list[dict]
- cond_neg
    - The conditioned negative output, including the encoded text information, intended to reduce or diminish the specified traits or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: list[dict]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class CLIPTextEncodeSDXL_Plus:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "width": ("INT", {"default": 1024.0, "min": 0, "max": 12288}),
            "height": ("INT", {"default": 1024.0, "min": 0, "max": 12288}),
            "res_factor": ("INT", {"default": 4, "min": 1, "max": 8}),
            "text_pos": ("STRING", {"multiline": True, "default": "", "dynamicPrompts": True}),
            "text_neg": ("STRING", {"multiline": True, "default": "", "dynamicPrompts": True}),
            "clip": ("CLIP", ),
            }}
    RETURN_TYPES = ("CONDITIONING","CONDITIONING",)
    RETURN_NAMES = ("cond_pos", "cond_neg",)
    FUNCTION = "execute"
    CATEGORY = "JPS Nodes/Conditioning"

    def execute(self, clip, width, height, res_factor, text_pos, text_neg):
        crop_w = 0
        crop_h = 0
        width = width*res_factor
        height = height*res_factor
        target_width = width
        target_height = height
        text_g_pos = text_l_pos = text_pos
        text_g_neg = text_l_neg = text_neg

        tokens_pos = clip.tokenize(text_g_pos)
        tokens_pos["l"] = clip.tokenize(text_l_pos)["l"]
        if len(tokens_pos["l"]) != len(tokens_pos["g"]):
            empty_pos = clip.tokenize("")
            while len(tokens_pos["l"]) < len(tokens_pos["g"]):
                tokens_pos["l"] += empty_pos["l"]
            while len(tokens_pos["l"]) > len(tokens_pos["g"]):
                tokens_pos["g"] += empty_pos["g"]
        cond_pos, pooled_pos = clip.encode_from_tokens(tokens_pos, return_pooled=True)

        tokens_neg = clip.tokenize(text_g_neg)
        tokens_neg["l"] = clip.tokenize(text_l_neg)["l"]
        if len(tokens_neg["l"]) != len(tokens_neg["g"]):
            empty_neg = clip.tokenize("")
            while len(tokens_neg["l"]) < len(tokens_neg["g"]):
                tokens_neg["l"] += empty_neg["l"]
            while len(tokens_pos["l"]) > len(tokens_pos["g"]):
                tokens_neg["g"] += empty_neg["g"]
        cond_neg, pooled_neg = clip.encode_from_tokens(tokens_neg, return_pooled=True)

        return ([[cond_pos, {"pooled_output": pooled_pos, "width": width, "height": height, "crop_w": crop_w, "crop_h": crop_h, "target_width": target_width, "target_height": target_height}]], [[cond_neg, {"pooled_output": pooled_neg, "width": width, "height": height, "crop_w": crop_w, "crop_h": crop_h, "target_width": target_width, "target_height": target_height}]])

```
