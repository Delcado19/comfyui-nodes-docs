
# Documentation
- Class name: SaltCLIPSegLoader
- Category: SALT/Loaders
- Output node: False

The SaltCLIPSegLoader node is designed to load and initialize a CLIPSeg model for image segmentation tasks. It simplifies the process of fetching the model and its processor from a specified source and caches them locally for improved reuse efficiency.

# Input types
## Required
- model
    - Specifies the identifier of the CLIPSeg model to load. This provides flexibility in selecting different CLIPSeg model versions or configurations.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- clipseg_model
    - Returns a tuple containing the CLIPSeg processor and CLIPSeg model, ready for direct use in image segmentation tasks.
    - Comfy dtype: CLIPSEG_MODEL
    - Python dtype: Tuple[CLIPSegProcessor, CLIPSegForImageSegmentation]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SaltCLIPSegLoader:
    def __init__(self):
        pass
        
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model": ("STRING", {"default": "CIDAS/clipseg-rd64-refined", "multiline": False}),
            },
        }

    RETURN_TYPES = ("CLIPSEG_MODEL",)
    RETURN_NAMES = ("clipseg_model",)
    FUNCTION = "clipseg_model"

    CATEGORY = f"{NAME}/Loaders"

    def clipseg_model(self, model):
        from transformers import CLIPSegProcessor, CLIPSegForImageSegmentation

        cache = os.path.join(models_dir, 'clipseg')

        inputs = CLIPSegProcessor.from_pretrained(model, cache_dir=cache)
        model = CLIPSegForImageSegmentation.from_pretrained(model, cache_dir=cache)

        return ( (inputs, model), ) 

```
