# Documentation
- Class name: PCSplitSampling
- Category: promptcontrol
- Output node: False
- Repo Ref: https://github.com/asagi4/comfyui-prompt-control.git

The PCSplitSampling node aims to modify a given model by enabling or disabling a specific sampling technique called prompt-controlled split sampling. This technique is crucial for controlling the model's generation process, allowing for finer and more targeted output. By applying this node, users can easily switch sampling methods to achieve the desired results without changing the underlying model architecture.

# Input types
## Required
- model
    - The 'model' parameter is critical because it represents the machine learning model that will undergo the sampling technique adjustment. It is the core component of the node's operation, and its modification will directly affect the model's generation capability.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- split_sampling
    - The 'split_sampling' parameter determines whether to enable the prompt-controlled split sampling technique for the model. This toggle directly affects the model's approach to data sampling and may be crucial for achieving specific results in model predictions or generation.
    - Comfy dtype: COMBO['enable', 'disable']
    - Python dtype: str

# Output types
- model
    - The output 'model' is a modified version of the input model with the user-selected prompt-controlled split sampling functionality applied. This allows the model to be used in subsequent tasks with the desired sampling behavior.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: CPU

# Source code
```
class PCSplitSampling:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'split_sampling': (['enable', 'disable'],)}}
    RETURN_TYPES = ('MODEL',)
    CATEGORY = 'promptcontrol'
    FUNCTION = 'apply'

    def apply(self, model, split_sampling):
        model = clone_model(model)
        model.model_options['pc_split_sampling'] = split_sampling == 'enable'
        return (model,)
```