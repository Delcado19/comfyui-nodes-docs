
# Documentation
- Class name: HypernetworkLoader (dirty)
- Category: Bmad/api/dirty loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The HypernetworkLoader node aims to dynamically modify a given model by applying hypernetwork patches. This process enhances the model's capabilities by integrating additional computational paths, enabling more complex and nuanced behavior. The node focuses on customizing and enhancing the model through hypernetwork application, facilitating more flexible and adaptive model performance.

# Input types
## Required
- model
    - The model parameter represents the base model to which the hypernetwork patch will be applied. It is critical for defining the starting point of the enhancement process, as the hypernetwork modifications are built upon this model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- hypernetwork_name
    - The hypernetwork_name parameter specifies the name of the hypernetwork to be applied to the model. It determines the specific computational modifications that will be integrated into the model, influencing its behavior and performance.
    - Comfy dtype: STRING
    - Python dtype: str
- strength
    - The strength parameter controls the intensity of the hypernetwork's influence on the model. It adjusts the degree to which the hypernetwork's modifications affect the model's behavior, allowing fine-tuning of the enhancement process.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is an enhanced version of the input model, modified by the applied hypernetwork patch. It represents the final result of the node's processing, showcasing the model's improved capabilities and performance.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class DirtyHypernetworkLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"model": ("MODEL",),
                             "hypernetwork_name": ("STRING", {"default": ""}),
                             "strength": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             }}

    RETURN_TYPES = ("MODEL",)
    FUNCTION = "load_hypernetwork"

    CATEGORY = "Bmad/api/dirty loaders"

    def load_hypernetwork(self, model, hypernetwork_name, strength):
        hypernetwork_name = DirtyLoaderUtils.find_matching_filename(
            hypernetwork_name, folder_paths.get_filename_list("hypernetworks"))

        loader = hyper.HypernetworkLoader()
        return loader.load_hypernetwork(model, hypernetwork_name, strength)

```
