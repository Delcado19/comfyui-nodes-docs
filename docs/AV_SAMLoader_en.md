
# Documentation
- Class name: AV_SAMLoader
- Category: Art Venture/Segmentation
- Output node: False

The AV_SAMLoader node is designed specifically for loading SAM (Segmentation-Aware Models) customized for Art Venture's segmentation tasks. It dynamically loads the SAM model based on the model name, ensuring the appropriate segmentation model is used in image processing tasks.

# Input types
## Required
- model_name
    - Specify the name of the SAM model to load. This parameter is crucial for identifying and loading the correct segmentation model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- sam_model
    - Returns the loaded SAM model, ready for direct use in segmentation tasks.
    - Comfy dtype: AV_SAM_MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class SAMLoader:
    @classmethod
    def INPUT_TYPES(cls):
        return {
            "required": {
                "model_name": (folder_paths.get_filename_list("sams"),),
            }
        }

    RETURN_TYPES = ("AV_SAM_MODEL",)
    RETURN_NAMES = ("sam_model",)
    FUNCTION = "load_model"
    CATEGORY = "Art Venture/Segmentation"

    def load_model(self, model_name):
        modelname = folder_paths.get_full_path("sams", model_name)

        state_dict = comfy.utils.load_torch_file(modelname)
        encoder_size = state_dict["image_encoder.patch_embed.proj.bias"].shape[0]

        if encoder_size == 1280:
            model_kind = "vit_h"
        elif encoder_size == 1024:
            model_kind = "vit_l"
        else:
            model_kind = "vit_b"

        sam = sam_model_registry[model_kind]()
        sam.load_state_dict(state_dict)

        return (sam,)

```
