
# Documentation
- Class name: AV_LoraListLoader
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_LoraListLoader node is designed to load and stack a list of LoRA models based on the provided data and configuration. It facilitates dynamic enhancement of models and clips by sequentially applying multiple LoRA adjustments, enabling complex modifications to model behavior through LoRA parameters.

# Input types
## Required
- model
    - The 'model' parameter represents the initial model to which LoRA adjustments will be applied. It is essential for defining the starting point of the LoRA stacking process.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - The 'clip' parameter represents the initial clip model that will be modified alongside the main model through LoRA adjustments. It plays a critical role in the stacking process, as it will be subject to modifications.
    - Comfy dtype: CLIP
    - Python dtype: str
- data
    - The 'data' parameter contains the list of LoRA models to be loaded and applied, presented in JSON format. It is crucial for specifying which LoRA models and their respective strengths will influence the model and clip.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- base_url
    - The 'base_url' parameter provides the base URL for fetching LoRA models not found locally. It facilitates dynamic loading of LoRA models from external sources.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- model
    - Returns the modified model after applying the specified LoRA adjustments.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - Returns the modified clip model after applying the LoRA adjustments.
    - Comfy dtype: CLIP
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVLoraListLoader(AVLoraListStacker):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model": ("MODEL",),
                "clip": ("CLIP",),
                "data": ("STRING", {"default": "", "multiline": True, "dynamicPrompts": False}),
            },
            "optional": {"base_url": ("STRING", {"default": lora_cloud_front_url})},
        }

    RETURN_TYPES = ("MODEL", "CLIP")

    def load_list_lora(self, model, clip, data, base_url=lora_cloud_front_url):
        lora_params = self.parse_lora_list(data, base_url=base_url)

        if len(lora_params) == 0:
            return (model, clip)

        def recursive_load_lora(lora_params, model, clip, id, folder_paths):
            if len(lora_params) == 0:
                return model, clip

            lora_name, strength_model, strength_clip = lora_params[0]

            lora_path = folder_paths.get_full_path("loras", lora_name)
            lora_model, lora_clip = comfy.sd.load_lora_for_models(
                model, clip, comfy.utils.load_torch_file(lora_path), strength_model, strength_clip
            )

            # Call the function again with the new lora_model and lora_clip and the remaining tuples
            return recursive_load_lora(lora_params[1:], lora_model, lora_clip, id, folder_paths)

        lora_model, lora_clip = recursive_load_lora(lora_params, model, clip, id, folder_paths)

        return (lora_model, lora_clip)

```
