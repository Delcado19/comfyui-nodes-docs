
# Documentation
- Class name: AV_LoraListStacker
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_LoraListStacker node aims to manage and stack Lora model configurations, facilitating the dynamic integration and application of multiple Lora models into the processing pipeline. It abstracts the complexity of handling Lora model parameters, ensuring that the application order of the models respects the expected layering and strength adjustments.

# Input types
## Required
- data
    - The 'data' input contains a list of Lora models and their configurations in JSON format, specifying how each Lora model should be applied to the base model.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- base_url
    - The optional 'base_url' input provides a default URL prefix for fetching Lora models that are not available locally, facilitating remote model retrieval.
    - Comfy dtype: STRING
    - Python dtype: str
- lora_stack
    - The 'lora_stack' input allows including an existing stack of Lora models for further processing or integration with new Lora configurations.
    - Comfy dtype: LORA_STACK
    - Python dtype: list

# Output types
- lora_stack
    - Returns the updated Lora model stack after integrating the specified Lora model adjustments.
    - Comfy dtype: LORA_STACK
    - Python dtype: list


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class AVLoraListStacker:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "data": ("STRING", {"default": "", "multiline": True, "dynamicPrompts": False}),
            },
            "optional": {"base_url": ("STRING", {"default": lora_cloud_front_url}), "lora_stack": ("LORA_STACK",)},
        }

    RETURN_TYPES = ("LORA_STACK",)
    FUNCTION = "load_list_lora"
    CATEGORY = "Art Venture/Loaders"

    def parse_lora_list(self, data: str, base_url: str):
        # data is a list of lora model (lora_name, strength_model, strength_clip, url) in json format
        # trim data
        data = data.strip()
        if data == "" or data == "[]" or data is None:
            return []

        print(f"Loading lora list: {data}")

        lora_list = json.loads(data)
        if len(lora_list) == 0:
            return []

        available_loras = folder_paths.get_filename_list("loras")
        model_path = os.path.join(folder_paths.models_dir, "loras")

        lora_params = []
        for lora in lora_list:
            lora_name = lora["name"]
            strength_model = lora["strength"]
            strength_clip = lora["strength"]
            lora_url = lora.get("url", None)

            if strength_model == 0 and strength_clip == 0:
                continue

            if lora_name not in available_loras:
                lora_url = lora_url or f"{base_url}/models/loras/{lora_name}"
                load_file_from_url(lora_url, model_dir=model_path, file_name=lora_name)

            lora_params.append((lora_name, strength_model, strength_clip))

        return lora_params

    def load_list_lora(self, data, base_url=lora_cloud_front_url, lora_stack=None):
        loras = self.parse_lora_list(data, base_url=base_url)

        if lora_stack is not None:
            loras.extend([l for l in lora_stack if l[0] != "None"])

        return (loras,)

```
