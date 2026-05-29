# Documentation
- Class name: ipadapterApply
- Category: EasyUse/Adapter
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The ipadapterApply node aims to simplify the process of applying various image processing adapters to input images, using model and preset configurations to achieve desired transformations. It emphasizes adaptability and ease of use, providing users with a structured interface to experiment with different settings and achieve optimal results without deep knowledge of complex model-specific details.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying image processing model used to apply transformations to the input image. It is the foundation of the node's functionality, directly affecting the quality and nature of the output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- image
    - The image input is the object processed by the node. Its content and format are crucial in determining how the model interprets and transforms it, ultimately shaping the final result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- preset
    - The preset parameter determines the specific transformation preset to apply, guiding the model to process the image according to the selected style or effect. This is a key factor in achieving the desired visual outcome.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- lora_strength
    - The lora_strength parameter adjusts the intensity of the style transfer process, allowing fine-tuning of the visual output to match user preferences. It plays an important role in the artistic aspect of image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model represents the modified image processing model after the selected preset and other parameters have been applied. It is the crystallization of the node's processing and serves as the foundation for further image transformation or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tiles
    - The tiles output provides a segmented view of the processed image, allowing detailed inspection and potential use in further image manipulation. It is an additional layer of output, enhancing the node's utility in image analysis and editing.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image or torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class ipadapterApply(ipadapter):

    def __init__(self):
        super().__init__()
        pass

    @classmethod
    def INPUT_TYPES(cls):
        presets = cls().presets
        return {'required': {'model': ('MODEL',), 'image': ('IMAGE',), 'preset': (presets,), 'lora_strength': ('FLOAT', {'default': 0.6, 'min': 0, 'max': 1, 'step': 0.01}), 'provider': (['CPU', 'CUDA', 'ROCM', 'DirectML', 'OpenVINO', 'CoreML'],), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05}), 'weight_faceidv2': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 5.0, 'step': 0.05}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'cache_mode': (['insightface only', 'clip_vision only', 'all', 'none'], {'default': 'insightface only'}), 'use_tiled': ('BOOLEAN', {'default': False})}, 'optional': {'attn_mask': ('MASK',), 'optional_ipadapter': ('IPADAPTER',)}}
    RETURN_TYPES = ('MODEL', 'IMAGE', 'MASK', 'IPADAPTER')
    RETURN_NAMES = ('model', 'tiles', 'masks', 'ipadapter')
    CATEGORY = 'EasyUse/Adapter'
    FUNCTION = 'apply'

    def apply(self, model, image, preset, lora_strength, provider, weight, weight_faceidv2, start_at, end_at, cache_mode, use_tiled, attn_mask=None, optional_ipadapter=None):
        (tiles, masks) = (image, [None])
        (model, ipadapter) = self.load_model(model, preset, lora_strength, provider, clip_vision=None, optional_ipadapter=optional_ipadapter, cache_mode=cache_mode)
        if use_tiled and preset not in self.faceid_presets:
            if 'IPAdapterTiled' not in ALL_NODE_CLASS_MAPPINGS:
                self.error()
            cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterTiled']
            (model, tiles, masks) = cls().apply_tiled(model, ipadapter, image, weight, 'linear', start_at, end_at, sharpening=0.0, combine_embeds='concat', image_negative=None, attn_mask=attn_mask, clip_vision=None, embeds_scaling='V only')
        elif preset in ['FACEID PLUS V2', 'FACEID PORTRAIT (style transfer)']:
            if 'IPAdapterAdvanced' not in ALL_NODE_CLASS_MAPPINGS:
                self.error()
            cls = ALL_NODE_CLASS_MAPPINGS['IPAdapterAdvanced']
            (model,) = cls().apply_ipadapter(model, ipadapter, start_at=start_at, end_at=end_at, weight=weight, weight_type='linear', combine_embeds='concat', weight_faceidv2=weight_faceidv2, image=image, image_negative=None, clip_vision=None, attn_mask=attn_mask, insightface=None, embeds_scaling='V only')
        else:
            if 'IPAdapter' not in ALL_NODE_CLASS_MAPPINGS:
                self.error()
            cls = ALL_NODE_CLASS_MAPPINGS['IPAdapter']
            (model,) = cls().apply_ipadapter(model, ipadapter, image, weight, start_at, end_at, attn_mask)
        return (model, tiles, masks, ipadapter)
```