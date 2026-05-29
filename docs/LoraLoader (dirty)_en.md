
# Documentation
- Class name: LoraLoader (dirty)
- Category: Bmad/api/dirty loaders
- Output node: False

The LoraLoader node dynamically loads and applies LoRA (Low-Rank Adaptation) adjustments to model and CLIP instances based on the specified parameters. It facilitates customization of model behavior and performance by integrating LoRA modifications, which can enhance or change the model's capabilities without retraining.

# Input types
## Required
- model
    - The model to which LoRA adjustments will be applied. It is the core of the node operation as it determines the base model that will be modified.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The CLIP instance to which LoRA adjustments will be applied. This parameter allows customization of the CLIP model together with the main model.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- lora_name
    - The name of the LoRA file containing the adjustments to be applied. This parameter specifies the LoRA modifications that will be integrated into the model and CLIP instances.
    - Comfy dtype: STRING
    - Python dtype: List[str]
- strength_model
    - The strength of the LoRA adjustments applied to the model. This parameter controls the intensity of the modifications, influencing the model's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float
- strength_clip
    - The strength of the LoRA adjustments applied to the CLIP instance. This parameter controls the intensity of the modifications, influencing the CLIP's behavior.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified model after applying LoRA adjustments. This output reflects the integration of LoRA modifications with the original model, enhancing or changing its capabilities.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- clip
    - The modified CLIP instance after applying LoRA adjustments. This output reflects the integration of LoRA modifications with the original CLIP, enhancing or changing its capabilities.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [LoraLoader](../../Comfy/Nodes/LoraLoader.md)
    - [CLIPTextEncode](../../Comfy/Nodes/CLIPTextEncode.md)
    - Reroute
    - [VideoLinearCFGGuidance](../../Comfy/Nodes/VideoLinearCFGGuidance.md)
    - [KSampler](../../Comfy/Nodes/KSampler.md)
    - [FaceDetailer](../../ComfyUI-Impact-Pack/Nodes/FaceDetailer.md)
    - [ModelSamplingDiscrete](../../Comfy/Nodes/ModelSamplingDiscrete.md)
    - [ADE_AnimateDiffLoaderWithContext](../../ComfyUI-AnimateDiff-Evolved/Nodes/ADE_AnimateDiffLoaderWithContext.md)
    - KSampler //Inspire
    - [ToBasicPipe](../../ComfyUI-Impact-Pack/Nodes/ToBasicPipe.md)



## Source code
```python
class DirtyLoraLoader:
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {"model": ("MODEL",),
                             "clip": ("CLIP",),
                             "lora_name": ("STRING", {"default": ""}),
                             "strength_model": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             "strength_clip": ("FLOAT", {"default": 1.0, "min": -10.0, "max": 10.0, "step": 0.01}),
                             }}

    RETURN_TYPES = ("MODEL", "CLIP")
    FUNCTION = "load_lora"

    CATEGORY = "Bmad/api/dirty loaders"

    def load_lora(self, model, clip, lora_name, strength_model, strength_clip):
        lora_name = DirtyLoaderUtils.find_matching_filename(
            lora_name, folder_paths.get_filename_list("loras"))

        loader = nodes.LoraLoader()
        return loader.load_lora(model, clip, lora_name, strength_model, strength_clip)

```
