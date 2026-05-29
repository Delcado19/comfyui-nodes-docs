# Documentation
- Class name: GroundingDinoModelLoader
- Category: segment_anything
- Output node: False
- Repo Ref: https://github.com/storyicon/comfyui_segment_anything

This node aims to load and prepare a GroundingDino model for image segmentation and understanding. It encapsulates the process of selecting the model, loading its configuration, and initializing the model structure. The node ensures the model is ready for further processing by placing it on the appropriate device and setting it to evaluation mode.

# Input types
## Required
- model_name
    - The model name parameter is critical because it determines which GroundingDino model will be loaded for processing. It influences the entire operation by specifying the model architecture and its associated weights, which are essential for the model's performance in image segmentation tasks.
    - Comfy dtype: list
    - Python dtype: str

# Output types
- GROUNDING_DINO_MODEL
    - The output provides a fully initialized and ready-to-use GroundingDino model. It encapsulates the model's architecture, learned weights, and is prepared for deployment in image segmentation tasks, marking its importance in the pipeline.
    - Comfy dtype: model
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class GroundingDinoModelLoader:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model_name': (list_groundingdino_model(),)}}
    CATEGORY = 'segment_anything'
    FUNCTION = 'main'
    RETURN_TYPES = ('GROUNDING_DINO_MODEL',)

    def main(self, model_name):
        dino_model = load_groundingdino_model(model_name)
        return (dino_model,)
```