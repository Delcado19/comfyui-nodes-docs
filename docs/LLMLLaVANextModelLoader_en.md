
# Documentation
- Class name: LLMLLaVANextModelLoader
- Category: SALT/Language Toolkit/Loaders
- Output node: False

This node aims to load and initialize the LLAVA Next V1 model, optionally enabling quantization and flash attention functions to optimize performance.

# Input types
## Required
- model
    - Specify the identifier of the LLAVA Next V1 model to load. This provides flexibility to choose different model versions or configurations.
    - Comfy dtype: STRING
    - Python dtype: str
- device
    - Determine which computing device ('cuda' or 'cpu') the model will be loaded on, enabling hardware-specific optimizations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- use_bitsandbytes_quantize
    - Enable or disable quantization of the model using the bitsandbytes library, which may improve performance at the cost of slight precision loss.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- lnv1_model
    - Return the loaded LLAVA Next V1 model, which can be used for evaluation or further processing.
    - Comfy dtype: LLAVA_NEXT_V1_MODEL
    - Python dtype: LlavaNextV1


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LLMLLaVANextModelLoader:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": ("STRING", {"default": "llava-hf/llava-v1.6-mistral-7b-hf"}),
                "device": (["cuda", "cpu"],),
                "use_bitsandbytes_quantize": ("BOOLEAN", {"default": True}),
                #"use_flash_attention": ("BOOLEAN", {"default": False}),
            }
        }
    
    RETURN_TYPES = ("LLAVA_NEXT_V1_MODEL",)
    RETURN_NAMES = ("lnv1_model",)

    FUNCTION = "load"
    CATEGORY = f"{MENU_NAME}/{SUB_MENU_NAME}/Loaders"

    def load(self, model: str, device: str = "cuda", use_bitsandbytes_quantize: bool = True, use_flash_attention: bool = False):
        evaluator = LlavaNextV1(
            model_name="llava-hf/llava-v1.6-mistral-7b-hf", 
            quantize=use_bitsandbytes_quantize, 
            use_flash_attention=use_flash_attention
        )
        return (evaluator, )

```
