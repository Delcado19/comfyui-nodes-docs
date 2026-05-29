
# Documentation
- Class name: BLIPLoader
- Category: Art Venture/Captioning
- Output node: False

The BLIPLoader node is designed to load and initialize the BLIP model for performing image processing tasks. It encapsulates the complex process of setting up the BLIP model, including loading pre-trained weights, configuring the model for inference, and ensuring the model is ready to process images.

# Input types
## Required
- model_name
    - Specifies the name of the BLIP model to load. This parameter determines which pre-trained model weights are loaded, affecting the node's performance and the quality of image processing.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- blip_model
    - Returns a fully configured, ready-to-use BLIP model instance that can be used to perform various image understanding and manipulation tasks.
    - Comfy dtype: BLIP_MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [BLIPCaption](../../comfyui-art-venture/Nodes/BLIPCaption.md)



## Source code
```python
class BlipLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model_name": (folder_paths.get_filename_list("blip"),),
            },
        }

    RETURN_TYPES = ("BLIP_MODEL",)
    FUNCTION = "load_blip"
    CATEGORY = "Art Venture/Captioning"

    def load_blip(self, model_name):
        model = load_blip(model_name)
        return (model,)

```
