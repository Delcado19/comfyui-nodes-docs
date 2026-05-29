# Documentation
- Class name: CR_ApplyModelMerge
- Category: Comfyroll/Model Merge
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ApplyModelMerge node facilitates merging multiple models into a single unified model. It intelligently combines model ratios and clip ratios, normalizes when necessary, and applies the specified merge method to create a harmonious blend of the selected models. This node is essential for advanced model management, enabling users to experiment with different model combinations and ratios to achieve desired results.

# Input types
## Required
- model_stack
- The model stack parameter is crucial because it defines the sequence of models to merge. It plays a central role in the node’s execution, determining which models contribute to the final merged model.
    - Comfy dtype: MODEL_STACK
    - Python dtype: List[Tuple[str, float, float]]
- merge_method
- The merge method parameter determines how models are combined. It is a key factor in the node’s functionality because it decides the algorithm used for merging, which can significantly affect the characteristics of the resulting model.
    - Comfy dtype: COMBO['Recursive', 'Weighted']
    - Python dtype: str
- normalise_ratios
- The normalise_ratios parameter is important because it indicates whether ratios should be normalized. This ensures that ratios accurately reflect each model’s intended contribution to the merge result.
    - Comfy dtype: COMBO['Yes', 'No']
    - Python dtype: str
- weight_factor
- The weight factor parameter influences the weight of models during merging. It is vital for fine‑tuning each model’s contribution to the final merged model, allowing precise control over the outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
- The MODEL output provides the merged model after applying the merge method and specified parameters. It represents the vertices processed by the node and is crucial to the user’s workflow.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- CLIP
- The CLIP output provides the CLIP model associated with the merged model. It is important because it enables further processing or analysis using the CLIP model framework.
    - Comfy dtype: CLIP
    - Python dtype: comfy.model_management.CLIP
- model_mix_info
- The model_mix_info output offers a detailed report of the merge process, including the names and ratios of the models used. This information is valuable for understanding the composition of the merged model and documenting the merge process.
    - Comfy dtype: STRING
    - Python dtype: str
- show_help
- The show_help output provides a link to documentation for additional help. It is a useful resource for users seeking more information on how to use the node effectively.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ApplyModelMerge:

    @classmethod
    def INPUT_TYPES(s):
        merge_methods = ['Recursive', 'Weighted']
        return {'required': {'model_stack': ('MODEL_STACK',), 'merge_method': (merge_methods,), 'normalise_ratios': (['Yes', 'No'],), 'weight_factor': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('MODEL', 'CLIP', 'STRING', 'STRING')
    RETURN_NAMES = ('MODEL', 'CLIP', 'model_mix_info', 'show_help')
    FUNCTION = 'merge'
    CATEGORY = icons.get('Comfyroll/Model Merge')

    def merge(self, model_stack, merge_method, normalise_ratios, weight_factor):
        sum_clip_ratio = 0
        sum_model_ratio = 0
        model_mix_info = str('Merge Info:\n')
        if len(model_stack) == 0:
            print(f'[Warning] Apply Model Merge: No active models selected in the model merge stack')
            return ()
        if len(model_stack) == 1:
            print(f'[Warning] Apply Model Merge: Only one active model found in the model merge stack. At least 2 models are normally needed for merging. The active model will be output.')
            (model_name, model_ratio, clip_ratio) = model_stack[0]
            ckpt_path = folder_paths.get_full_path('checkpoints', model_name)
            return comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
        for (i, model_tuple) in enumerate(model_stack):
            (model_name, model_ratio, clip_ratio) = model_tuple
            sum_model_ratio += model_ratio
            sum_clip_ratio += clip_ratio
        model_mix_info = model_mix_info + 'Ratios are applied using the Recursive method\n\n'
        for (i, model_tuple) in enumerate(model_stack):
            (model_name, model_ratio, clip_ratio) = model_tuple
            ckpt_path = folder_paths.get_full_path('checkpoints', model_name)
            merge_model = comfy.sd.load_checkpoint_guess_config(ckpt_path, output_vae=True, output_clip=True, embedding_directory=folder_paths.get_folder_paths('embeddings'))
            print(f'Apply Model Merge: Model Name {model_name}, Model Ratio {model_ratio}, CLIP Ratio {clip_ratio}')
            if sum_model_ratio != 1 and normalise_ratios == 'Yes':
                print(f'[Warning] Apply Model Merge: Sum of model ratios != 1. Ratios will be normalised')
                model_ratio = round(model_ratio / sum_model_ratio, 2)
                clip_ratio = round(clip_ratio / sum_clip_ratio, 2)
            if merge_method == 'Weighted':
                if i == 1:
                    model_ratio = 1 - weight_factor + weight_factor * model_ratio
                    clip_ratio = 1 - weight_factor + weight_factor * clip_ratio
            if i == 0:
                model1 = merge_model[0].clone()
                clip1 = merge_model[1].clone()
                model_mix_info = model_mix_info + 'Base Model Name: ' + model_name
            else:
                model2 = merge_model[0].clone()
                kp = model2.get_key_patches('diffusion_model.')
                for k in kp:
                    model1.add_patches({k: kp[k]}, model_ratio, 1.0 - model_ratio)
                clip2 = merge_model[1].clone()
                kp = clip2.get_key_patches()
                for k in kp:
                    if k.endswith('.position_ids') or k.endswith('.logit_scale'):
                        continue
                    clip1.add_patches({k: kp[k]}, clip_ratio, 1.0 - clip_ratio)
                model_mix_info = model_mix_info + '\nModel Name: ' + model_name + '\nModel Ratio: ' + str(model_ratio) + '\nCLIP Ratio: ' + str(clip_ratio) + '\n'
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Model-Merge-Nodes#cr-apply-model-merge'
        return (model1, clip1, model_mix_info, show_help)
```