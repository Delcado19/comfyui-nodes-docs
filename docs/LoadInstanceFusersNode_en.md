
# Documentation
- Class name: LoadInstanceFusersNode
- Category: instance/loaders
- Output node: False

This node loads and prepares instance fusion models from a specified directory and adjusts their scale based on provided parameters. It enables dynamic integration of fusion models in the instance diffusion process for enhanced control over instance-specific feature fusion.

# Input types
## Required
- model_filename
    - Specifies the model filename to load. This parameter is critical for identifying and retrieving the correct fusion model from the specified directory.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- fusers_scale
    - Determines the scaling factor applied to fusion models, affecting their role in the instance fusion process. This allows fine-tuning of the fusion models' influence on the generated instance.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- fusers
    - Provides a list of loaded and scaled fusion models that can be directly integrated into the instance diffusion process.
    - Comfy dtype: FUSERS
    - Python dtype: Dict[str, List[torch.nn.Module]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class LoadInstanceFusersNode:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
            "model_filename": (get_model_list(constants.INSTANCE_FUSERS_DIR),),
            "fusers_scale": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 10.0, "step": 0.01}),
        }}

    RETURN_TYPES = ("FUSERS",)
    FUNCTION = "load_model"

    CATEGORY = "instance/loaders"

    def load_model(self, model_filename: str, fusers_scale: float):
        checkpoint = load_checkpoint(
            constants.INSTANCE_FUSERS_DIR, model_filename)
        fusers_list = prepare_fusers(checkpoint, fusers_scale)
        fusers = {
            'model_list': fusers_list
        }
        return (fusers,)

```
