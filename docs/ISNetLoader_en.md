
# Documentation
- Class name: ISNetLoader
- Category: Art Venture/Segmentation
- Output node: False
- Repo Ref: https://github.com/ArtVentureX/comfyui-art-venture

The ISNetLoader node loads ISNet models, allowing selection of a specific model by name or overriding with a specified alternative model. This feature supports dynamic loading of image segmentation task models in the Art Venture/Segmentation category, enhancing flexibility in model management and deployment.

# Input types
## Required
- model_name
    - Specify the name of the ISNet model to load. This parameter allows selection from a predefined list of available ISNet models, facilitating targeted model loading based on specific needs.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_override
    - Allow specifying an alternative ISNet model to load, overriding the default model selection. This parameter provides flexibility in model usage without changing core configuration, accommodating changes or updates in model preferences.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- isnet_model
    - Return the loaded ISNet model, ready for direct use in image segmentation tasks. This output enables the model to be applied directly to related image processing workflows.
    - Comfy dtype: ISNET_MODEL
    - Python dtype: ISNetBase or ISNetDIS


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class ISNetLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model_name": (folder_paths.get_filename_list("isnet"),),
                "model_override": ("STRING", {"default": "None"}),
            },
        }

    RETURN_TYPES = ("ISNET_MODEL",)
    FUNCTION = "load_isnet"
    CATEGORY = "Art Venture/Segmentation"

    def load_isnet(self, model_name, model_override="None"):
        if model_override != "None":
            if model_override not in folder_paths.get_filename_list("isnet"):
                logger.warning(f"Model override {model_override} not found. Use {model_name} instead.")
            else:
                model_name = model_override

        model = load_isnet_model(model_name)
        return (model,)

```
