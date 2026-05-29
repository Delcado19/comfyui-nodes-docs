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
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
