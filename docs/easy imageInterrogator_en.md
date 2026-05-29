
# Documentation
- Class name: easy imageInterrogator
- Category: EasyUse/Image
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The easy imageInterrogator node aims to generate a descriptive prompt from the input image. It adjusts the analysis process through different modes to meet the desired level of detail or speed. This feature helps to create a textual representation of visual content, which can be used for further image generation or analysis tasks.

# Input types
## Required
- image
    - The image parameter is the visual content that the node will analyze to generate the descriptive prompt. It is central to the node's operation because the output depends on the interpretation of this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mode
    - The mode parameter allows the user to specify the level of detail or speed of the analysis process, providing options such as 'fast', 'classic', 'best', and 'negative'. This choice affects the quality of the prompt and the generation time.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_lowvram
    - The use_lowvram parameter enables the node to run in low VRAM mode, optimizing resource usage for systems with limited video memory. This may affect the efficiency and results of the analysis process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- prompt
    - The output prompt is a text description generated from the input image, reflecting the interpretation of visual content through the specified analysis mode.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class imageInterrogator:
    @classmethod
    def INPUT_TYPES(self):
        return {
          "required": {
              "image": ("IMAGE",),
              "mode": (['fast','classic','best','negative'],),
              "use_lowvram": ("BOOLEAN", {"default": True}),
          }
        }

    RETURN_TYPES = ("STRING",)
    RETURN_NAMES = ("prompt",)
    FUNCTION = "interrogate"
    CATEGORY = "EasyUse/Image"
    OUTPUT_NODE = True
    OUTPUT_IS_LIST = (True,)

    def interrogate(self, image, mode, use_lowvram=False):
      prompt = ci.image_to_prompt(image, mode, low_vram=use_lowvram)
      return {"ui":{"text":prompt},"result":(prompt,)}

```
