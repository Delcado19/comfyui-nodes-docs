
# Documentation
- Class name: ttN multiModelMerge
- Category: ttN
- Output node: False

The ttN multiModelMerge node is designed to merge multiple models and/or CLIP models based on specified configurations and interpolation ratios. It abstracts the complexities of model merging, allowing flexible integration and manipulation of model properties to achieve desired outcomes.

# Input types
## Required
- ckpt_A_name
    - Specifies the name of the first checkpoint file to merge. This is critical for identifying the primary model whose properties will be combined with another model. The checkpoint selection directly influences the fundamental characteristics of the merged model, thereby affecting its performance and functionality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- config_A_name
    - Specifies the configuration name associated with the first model. This plays a key role in determining how model properties are merged and manipulated. Configuration settings define the operational parameters of the model, influencing the outcome of the merge process by specifying how properties are integrated.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ckpt_B_name
    - Specifies the name of the second checkpoint file to merge. It serves as a secondary source of model properties to be integrated into the primary model. This checkpoint selection affects the additional features and characteristics added to the merged model, shaping its final form.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- config_B_name
    - Specifies the configuration name associated with the second model. This is critical for guiding the merge process and ensuring the desired outcome. Configuration details provide a blueprint for how the second model's properties are combined with the first model, influencing the merged model's functionality and performance.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- ckpt_C_name
    - If applicable, specifies the name of a third checkpoint file for merging additional model properties. Including a third model can introduce new features or functionalities, further enhancing the complexity and utility of the merged model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- config_C_name
    - Specifies the configuration name for the third model, guiding its integration into the merge process. The third model's configuration determines how its properties are merged, potentially introducing new features or enhancing existing ones in the merged model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- model_interpolation
    - Determines the interpolation ratio for merging model properties, allowing fine-grained control over the merge result. This ratio balances the influence of each model's properties in the final merged model, enabling precise customization of the resulting model's characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: float
- model_multiplier
    - A multiplier affecting the strength of the second model's properties in the merge. This parameter allows adjusting the dominance of the second model's features in the merged model, enabling a customized approach to model integration.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clip_interpolation
    - Specifies the interpolation ratio for merging CLIP model properties, enabling precise control over their integration. This ratio determines the balance of CLIP model features in the merged output, allowing customized adjustments to the final CLIP model's functionality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: float
- clip_multiplier
    - Affects the strength of the second CLIP model's properties in the merge. Adjusting this multiplier fine-tunes how the second CLIP model's features manifest in the merged model, providing control over the integration process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- save_model
    - A boolean value indicating whether the merged model is saved to disk. Choosing to save the model impacts the workflow, providing a concrete output usable for subsequent processing or further analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- save_prefix
    - The filename prefix when saving the merged model, providing a method for organizing and identifying saved models. This parameter affects the convenience of model management and retrieval, influencing how the merged model is categorized and accessed.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- model_A_override
    - Allows overriding specific properties of the first model, providing customization of the merge process. This capability enables modification of the base model's characteristics, allowing the creation of a customized merged model that better meets specific requirements.
    - Comfy dtype: MODEL
    - Python dtype: bool
- model_B_override
    - Enables overriding properties of the second model, further customizing the merge. This feature provides flexibility to alter the second model's contribution to the merged model, making it possible to adjust for desired outcomes.
    - Comfy dtype: MODEL
    - Python dtype: bool
- model_C_override
    - Allows overriding properties of the third model (if present), customizing the merge to specific needs. This option allows tailoring the third model's influence on the merged model, facilitating more precise integration of model properties.
    - Comfy dtype: MODEL
    - Python dtype: bool
- clip_A_override
    - Allows overriding specific properties of the first CLIP model, customizing the integration. This flexibility enables adjusting the first CLIP model's contribution to the merged CLIP model, allowing a customized approach to merging CLIP properties.
    - Comfy dtype: CLIP
    - Python dtype: bool
- clip_B_override
    - Enables overriding properties of the second CLIP model, allowing customized integration. This option provides the ability to modify how the second CLIP model's features are merged into the model, controlling the characteristics of the final CLIP model.
    - Comfy dtype: CLIP
    - Python dtype: bool
- clip_C_override
    - Allows overriding properties of the third CLIP model (if used), enabling customized integration. This feature allows precise adjustment of the third CLIP model's influence on the merged model, achieving a more customized CLIP model merging approach.
    - Comfy dtype: CLIP
    - Python dtype: bool
- optional_vae
    - Specifies whether an optional VAE model is included in the merge, adding flexibility to the process. Including a VAE model can introduce additional features or enhance the merged model's performance, providing more customization options.
    - Comfy dtype: VAE
    - Python dtype: bool

# Output types
- model
    - Comfy dtype: MODEL
    - The resulting model after merging the specified models with the given ratios. It embodies the combined characteristics and capabilities of the two input models.
    - Python dtype: comfy.model_base.Model
- clip
    - Comfy dtype: CLIP
    - The merged CLIP model result (if applicable). It represents the integrated features and functionalities from the input CLIP models.
    - Python dtype: comfy.model_base.CLIP
- vae
    - Comfy dtype: VAE
    - The merged VAE model result (if applicable). It represents the fusion of VAE model properties from the input models.
    - Python dtype: comfy.model_base.VAE


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
class ttN_multiModelMerge:
    version = '1.0.1'
    def __init__(self):
        pass
    
    @classmethod
    def INPUT_TYPES(s):
        return {"required": {
                    "ckpt_A_name": (folder_paths.get_filename_list("checkpoints"), ),
                    "config_A_name": (["Default",] + folder_paths.get_filename_list("configs"), {"default": "Default"} ),
                    "ckpt_B_name": (["None",] + folder_paths.get_filename_list("checkpoints"), ),
                    "config_B_name": (["Default",] + folder_paths.get_filename_list("configs"), {"default": "Default"} ),
                    "ckpt_C_name": (["None",] + folder_paths.get_filename_list("checkpoints"), ),
                    "config_C_name": (["Default",] + folder_paths.get_filename_list("configs"), {"default": "Default"} ),

                    "model_interpolation": (MODEL_INTERPOLATIONS,),
                    "model_multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),
                    
                    "clip_interpolation": (CLIP_INTERPOLATIONS,),
                    "clip_multiplier": ("FLOAT", {"default": 1.0, "min": 0.0, "max": 1.0, "step": 0.01}),

                    "save_model": (["True", "False"],{"default": "False"}),
                    "save_prefix": ("STRING", {"default": "checkpoints/ComfyUI"}),
                },
                "optional": {
                    "model_A_override": ("MODEL",),
                    "model_B_override": ("MODEL",),
                    "model_C_override": ("MODEL",),
                    "clip_A_override": ("CLIP",),
                    "clip_B_override": ("CLIP",),
                    "clip_C_override": ("CLIP",),
                    "optional_vae": ("VAE",),
                },
                "hidden": {"prompt": "PROMPT", "extra_pnginfo": "EXTRA_PNGINFO", "ttNnodeVersion": ttN_multiModelMerge.version, "my_unique_id": "UNIQUE_ID"},
        }
    
    RETURN_TYPES = ("MODEL", "CLIP", "VAE",)
    RETURN_NAMES = ("model", "clip", "vae",)
    FUNCTION = "mergificate"

    CATEGORY = "ttN"

    def mergificate(self, ckpt_A_name, config_A_name, ckpt_B_name, config_B_name, ckpt_C_name, config_C_name,
                model_interpolation, model_multiplier, clip_interpolation, clip_multiplier, save_model, save_prefix,
                model_A_override=None, model_B_override=None, model_C_override=None,
                clip_A_override=None, clip_B_override=None, clip_C_override=None,
                optional_vae=None, prompt=None, extra_pnginfo=None, my_unique_id=None):
        
        def required_assets(model_interpolation, clip_interpolation):
            required = set(["model_A"])
            
            if clip_interpolation in [A_ONLY, B_ONLY, C_ONLY]:
                required.add(f"clip_{clip_interpolation[0]}")
            elif clip_interpolation in [WEIGHTED_SUM, ADD_DIFFERENCE]:
                required.update([f"clip_{letter}" for letter in ABC if letter in clip_interpolation])
            elif clip_interpolation == FOLLOW:
                required.add("clip_A")
            
            if model_interpolation in [WEIGHTED_SUM, ADD_DIFFERENCE]:
                letters = [letter for letter in ABC if letter in model_interpolation]
                required.update([f"model_{letter}" for letter in letters])
                if clip_interpolation == FOLLOW:
                    required.update([f"clip_{letter}" for letter in letters])
            
            return sorted(list(required))

        def _collect_letter(letter, required_list, model_override, clip_override, ckpt_name, config_name = None):
            model, clip, loaded_clip = None, None, None
            config_name = config_name
            
            if f'model_{letter}' in required_list:
                if model_override not in [None, "None"]:
                    model = model_override
                else:
                    if ckpt_name not in [None, "None"]:
                        model, loaded_clip, _ = loader.load_checkpoint(ckpt_name, config_name)
                    else:
                        e = f"Checkpoint name or model override not provided for model_{letter}.\nUnable to merge models using the following interpolation: {model_interpolation}"
                        ttNl(e).t(f'multiModelMerge [{my_unique_id}]').error().p().interrupt(e)


            
            if f'clip_{letter}' in required_list:
                if clip_override is not None:
                    clip = clip_override
                elif loaded_clip is not None:
                    clip = loaded_clip
                elif ckpt_name not in [None, "None"]:
                    _, clip, _ = loader.load_checkpoint(ckpt_name, config_name)
                else:
                    e = f"Checkpoint name or clip override not provided for clip_{letter}.\nUnable to merge clips using the following interpolation: {clip_interpolation}"
                    ttNl(e).t(f'multiModelMerge [{my_unique_id}]').error().p().interrupt(e)
            
            return model, clip


        def merge(base_model, base_strength, patch_model, patch_strength):
            m = base_model.clone()
            kp = patch_model.get_key_patches("diffusion_model.")
            for k in kp:
                m.add_patches({k: kp[k]}, patch_strength, base_strength)
            return m
        
        def clip_merge(base_clip, base_strength, patch_clip, patch_strength):
            m = base_clip.clone()
            kp = patch_clip.get_key_patches()
            for k in kp:
                if k.endswith(".position_ids") or k.endswith(".logit_scale"):
                    continue
                m.add_patches({k: kp[k]}, patch_strength, base_strength)
            return m

        def _add_assets(a1, a2, is_clip=False, multiplier=1.0, weighted=False):
            if is_clip:
                if weighted:
                    return clip_merge(a1, (1.0 - multiplier), a2, multiplier)
                else:
                    return clip_merge(a1, 1.0, a2, multiplier)
            else:
                if weighted:
                    return merge(a1, (1.0 - multiplier), a2, multiplier)
                else:
                    return merge(a1, 1.0, a2, multiplier)
        
        def _subtract_assets(a1, a2, is_clip=False, multiplier=1.0):
            if is_clip:
                    return clip_merge(a1, 1.0, a2, -multiplier)
            else:
                    return merge(a1, 1.0, a2, -multiplier)
        
        required_list = required_assets(model_interpolation, clip_interpolation)
        model_A, clip_A = _collect_letter("A", required_list, model_A_override, clip_A_override, ckpt_A_name, config_A_name)
        model_B, clip_B = _collect_letter("B", required_list, model_B_override, clip_B_override, ckpt_B_name, config_B_name)
        model_C, clip_C = _collect_letter("C", required_list, model_C_override, clip_C_override, ckpt_C_name, config_C_name)
        
        if (model_interpolation == A_ONLY):
            model = model_A
        if (model_interpolation == WEIGHTED_SUM):
            model = _add_assets(model_A, model_B, False, model_multiplier, True)
        if (model_interpolation == ADD_DIFFERENCE):
            model = _add_assets(model_A, _subtract_assets(model_B, model_C), False, model_multiplier)
        
        if (clip_interpolation == FOLLOW):
            clip_interpolation = model_interpolation
        if (clip_interpolation == A_ONLY):
            clip = clip_A
        if (clip_interpolation == B_ONLY):
            clip = clip_B
        if (clip_interpolation == C_ONLY):
            clip = clip_C
        if (clip_interpolation == WEIGHTED_SUM):
            clip = _add_assets(clip_A, clip_B, True, clip_multiplier, True)
        if (clip_interpolation == ADD_DIFFERENCE):
            clip = _add_assets(clip_A, _subtract_assets(clip_B, clip_C, True), True, clip_multiplier)
        

        if optional_vae not in ["None", None]:
            vae_sd = optional_vae.get_sd()
            vae = optional_vae
        else:
            vae_sd = {}
            vae = None

        if save_model == "True":
            full_output_folder, filename, counter, subfolder, save_prefix = folder_paths.get_save_image_path(save_prefix, folder_paths.get_output_directory())

            prompt_info = ""
            if prompt is not None:
                prompt_info = json.dumps(prompt)

            metadata = {}

            enable_modelspec = True
            if isinstance(model.model, comfy.model_base.SDXL):
                metadata["modelspec.architecture"] = "stable-diffusion-xl-v1-base"
            elif isinstance(model.model, comfy.model_base.SDXLRefiner):
                metadata["modelspec.architecture"] = "stable-diffusion-xl-v1-refiner"
            else:
                enable_modelspec = False

            if enable_modelspec:
                metadata["modelspec.sai_model_spec"] = "1.0.0"
                metadata["modelspec.implementation"] = "sgm"
                metadata["modelspec.title"] = "{} {}".format(filename, counter)

            if model.model.model_type == comfy.model_base.ModelType.EPS:
                metadata["modelspec.predict_key"] = "epsilon"
            elif model.model.model_type == comfy.model_base.ModelType.V_PREDICTION:
                metadata["modelspec.predict_key"] = "v"

            if not args.disable_metadata:
                metadata["prompt"] = prompt_info
                if extra_pnginfo is not None:
                    for x in extra_pnginfo:
                        metadata[x] = json.dumps(extra_pnginfo[x])

            output_checkpoint = f"{filename}_{counter:05}_.safetensors"
            output_checkpoint = os.path.join(full_output_folder, output_checkpoint)

            comfy.model_management.load_models_gpu([model, clip.load_model()])
            sd = model.model.state_dict_for_saving(clip.get_sd(), vae_sd)
            comfy.utils.save_torch_file(sd, output_checkpoint, metadata=metadata)

        return (model, clip, vae)

```
