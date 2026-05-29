
# Documentation
- Class name: AV_LoraLoader
- Category: Art Venture/Loaders
- Output node: False

The AV_LoraLoader node is used to load and apply LoRA (Low-Rank Adaptation) models to a given model and CLIP instance. It can selectively override the default model with a specified LoRA model and can enable or disable the loading process. This feature enhances model customizability and processing flexibility, allowing dynamic adjustments and optimizations based on specific needs or preferences.

# Input types
## Required
- model
    - The **model** parameter represents the neural network model to which LoRA adjustments will be applied, serving as the basis for modification.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The **clip** parameter denotes the CLIP model that will be adjusted together with the main model, enabling synchronized enhancement of processing capabilities.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- lora_name
    - Specify the name of the LoRA model to load and apply, enabling targeted modifications to the base model and CLIP instance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- strength_model
    - Specify the LoRA adjustment strength to apply to the model, allowing fine‑grained control over the adaptation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - Specify the LoRA adjustment strength to apply to the CLIP model, achieving precise customization of the enhancement.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- lora_override
    - Allows specifying an alternative LoRA model to override the default model, providing flexibility in model customization.
    - Comfy dtype: STRING
    - Python dtype: str
- enabled
    - A boolean flag that determines whether to execute the LoRA loading and application process, giving control over the modification workflow.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- model
    - Returns the modified neural network model with LoRA adjustments applied, reflecting the enhancements or customizations made.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - Returns the modified CLIP model with LoRA adjustments applied, showcasing the enhancements or customizations to its processing capabilities.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [Lora Loader](../../was-node-suite-comfyui/Nodes/Lora Loader.md)
    - [CLIPTextEncode (BlenderNeko Advanced + NSP)](../../was-node-suite-comfyui/Nodes/CLIPTextEncode (BlenderNeko Advanced + NSP).md)
    - [KSamplerAdvanced](../../Comfy/Nodes/KSamplerAdvanced.md)



## Source code
```python
class AVLoraLoader(LoraLoader):
    @classmethod
    def INPUT_TYPES(s):
        inputs = LoraLoader.INPUT_TYPES()
        inputs["optional"] = {
            "lora_override": ("STRING", {"default": "None"}),
            "enabled": ("BOOLEAN", {"default": True}),
        }
        return inputs

    CATEGORY = "Art Venture/Loaders"

    def load_lora(self, model, clip, lora_name, *args, lora_override="None", enabled=True, **kwargs):
        if not enabled:
            return (model, clip)

        if lora_override != "None":
            if lora_override not in folder_paths.get_filename_list("loras"):
                print(f"Warning: Not found Lora model {lora_override}. Use {lora_name} instead.")
            else:
                lora_name = lora_override

        return super().load_lora(model, clip, lora_name, *args, **kwargs)

```
