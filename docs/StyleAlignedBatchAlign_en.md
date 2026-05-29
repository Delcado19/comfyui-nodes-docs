# Documentation
- Class name: StyleAlignedBatchAlign
- Category: style_aligned
- Output node: False
- Repo Ref: https://github.com/brianfitzgerald/style_aligned_comfy

StyleAlignedBatchAlign class aims to modify a given model by aligning its style features across batches, enhancing the model's ability to process and generate style-aligned outputs. This node focuses on concept integration of style elements, ensuring that the model's attention and normalization layers are optimized for style consistency.

# Input types
## Required
- model
    - Model parameters are crucial because they define the architecture to be modified for cross-batch style alignment. They are the main input determining the subsequent behavior and functionality of the StyleAlignedBatchAlign node.
    - Comfy dtype: ModelPatcher
    - Python dtype: comfy.model_patcher.ModelPatcher
- share_norm
    - The share_norm parameter is essential for determining how the model's internal normalization layers should be shared or modified. It affects the efficiency and effectiveness of style feature alignment within the model.
    - Comfy dtype: str
    - Python dtype: str
- share_attn
    - The share_attn parameter specifies which attention mechanisms should be shared or modified to achieve style alignment. It plays a significant role in the model's overall style handling capability.
    - Comfy dtype: str
    - Python dtype: str
## Optional
- scale
    - The scale parameter adjusts the degree of style alignment applied to attention and normalization layers. It subtly influences the model's ability to generate cross-batch style-consistent outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The output model is the result of the StyleAlignedBatchAlign node's operation, representing a modified version of the input model optimized for style alignment processing. It crystallizes the node's efforts to integrate and align style features within the model architecture.
    - Comfy dtype: ModelPatcher
    - Python dtype: comfy.model_patcher.ModelPatcher

# Usage tips
- Infra type: CPU

# Source code
```
class StyleAlignedBatchAlign:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'model': ('MODEL',), 'share_norm': (SHARE_NORM_OPTIONS,), 'share_attn': (SHARE_ATTN_OPTIONS,), 'scale': ('FLOAT', {'default': 1, 'min': 0, 'max': 1.0, 'step': 0.1})}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'patch'
    CATEGORY = 'style_aligned'

    def patch(self, model: ModelPatcher, share_norm: str, share_attn: str, scale: float):
        m = model.clone()
        share_group_norm = share_norm in ['group', 'both']
        share_layer_norm = share_norm in ['layer', 'both']
        register_shared_norm(model, share_group_norm, share_layer_norm)
        args = StyleAlignedArgs(share_attn)
        m.set_model_attn1_patch(SharedAttentionProcessor(args, scale))
        return (m,)
```