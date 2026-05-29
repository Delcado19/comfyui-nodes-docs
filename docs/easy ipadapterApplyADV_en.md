# Documentation
- Class name: ipadapterApplyAdvanced
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node facilitates advanced applications of image processing models, allowing users to seamlessly integrate various presets, weights, and other parameters to refine and customize the transformation process. It emphasizes adaptability and control, providing an advanced interface for users to achieve complex image manipulations without delving into the details of the underlying algorithms.

# Input types
## Required
- model
    - The model parameters are crucial as they define the core of the image processing framework. They determine the type of transformation and analysis to be performed on the input image, significantly influencing the quality and characteristics of the final output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image parameter is the main input for the node operation. Its content and format are critical in determining how the model processes and transforms it, ultimately shaping the outcome of the image operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- preset
    - The preset parameter allows users to select predefined settings to adjust the model's behavior for specific use cases. It simplifies the process by providing an optimized configuration, ensuring the node operates effectively for its intended purpose.
    - Comfy dtype: COMBO
    - Python dtype: str
- lora_strength
    - The lora_strength parameter fine-tunes the model's adaptability to the input image, allowing subtle adjustments to improve the fidelity and consistency of the final output. It plays a key role in achieving a balance between model generalization and customization.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model represents an enhanced or improved version of the input model after processing by the node. It contains the results of the image operation, reflecting the node's effectiveness in achieving the desired transformation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tiles
    - The tiles output consists of segmented parts of the input image, each processed through the application of the model and parameters. It provides a detailed view of the image operation at a granular level, demonstrating the node's ability to handle complex transformations.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image or torch.Tensor]
- masks
    - The masks output is a series of binary matrices corresponding to the processed tiles. It plays an important role in isolating and highlighting specific areas of the transformed image, demonstrating the node's precision and control in the editing process.
    - Comfy dtype: MASK
    - Python dtype: List[PIL.Image or torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class ipadapterApplyAdvanced(ipadapter):

    def __init__(self):
        super().__init__()
        pass

    @classmethod
    def INPUT_TYPES(cls):
        ipa_cls = cls()
        presets = ipa_cls.presets
        weight_types = ipa_cls.weight_types
        return {'required': {'model': ('MODEL',), 'image': ('IMAGE',), 'preset': (presets,), 'lora_strength': ('FLOAT', {'default': 0.6, 'min': 0, 'max': 1, 'step': 0.01}), 'provider': (['CPU', 'CUDA', 'ROCM', 'DirectML', 'OpenVINO', 'CoreML'],), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05}), 'weight_faceidv2': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 5.0, 'step': 0.05}), 'weight_type': (weight_types,), 'combine_embeds': (['concat', 'add', 'subtract', 'average', 'norm average'],), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'embeds_scaling': (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'],), 'cache_mode': (['insightface only', 'clip_vision only', 'all', 'none'], {'default': 'insightface only'}), 'use_tiled': ('BOOLEAN', {'default': False}), 'use_batch': ('BOOLEAN', {'default': False}), 'sharpening': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.05})}, 'optional': {'image_negative': ('IMAGE',), 'attn_mask': ('MASK',), 'clip_vision': ('CLIP_VISION',), 'optional_ipadapter': ('IPADAPTER',)}}
    RETURN_TYPES = ('MODEL', 'IMAGE', 'MASK', 'IPADAPTER')
    RETURN_NAMES = ('model', 'tiles', 'masks', 'ipadapter')
    CATEGORY = 'EasyUse/Adapter'
    FUNCTION = 'apply'

    def apply(self, model, image, preset, lora_strength, provider, weight, weight_faceidv2, weight_type, combine_embeds, start_at, end_at, embeds_scaling, cache_mode, use_tiled, use_batch, sharpening, image_negative=None, clip_vision=None, attn_mask=None, optional_ipadapter=None):
        (tiles, masks) = (image, [None])
        (model, ipadapter) = self.load_model(model, preset, lora_strength, provider, clip_vision=clip_vision, optional_ipadapter=optional_ipadapter, cache_mode=cache_mode)
        if use_tiled:
            if use_batch:
                if 'IPAdapterTiledBatch' not in ALL_NODE_CLASS_MAPPINGS:
                    self.error()
                cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterTiledBatch']
            else:
                if 'IPAdapterTiled' not in ALL_NODE_CLASS_MAPPINGS:
                    self.error()
                cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterTiled']
            (model, tiles, masks) = cls().apply_tiled(model, ipadapter, image, weight, weight_type, start_at, end_at, sharpening=sharpening, combine_embeds=combine_embeds, image_negative=image_negative, attn_mask=attn_mask, clip_vision=clip_vision, embeds_scaling=embeds_scaling)
        else:
            if use_batch:
                if 'IPAdapterBatch' not in ALL_NODE_CLASS_MAPPINGS:
                    self.error()
                cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterBatch']
            else:
                if 'IPAdapterAdvanced' not in ALL_NODE_CLASS_MAPPINGS:
                    self.error()
                cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterAdvanced']
            (model,) = cls().apply_ipadapter(model, ipadapter, weight=weight, weight_type=weight_type, start_at=start_at, end_at=end_at, combine_embeds=combine_embeds, weight_faceidv2=weight_faceidv2, image=image, image_negative=image_negative, clip_vision=clip_vision, attn_mask=attn_mask, insightface=None, embeds_scaling=embeds_scaling)
        return (model, tiles, masks, ipadapter)
```