# Documentation
- Class name: IPAdapterSimple
- Category: ipadapter
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

IPAdapterSimple node aims to seamlessly integrate image processing adapters into the model workflow. It applies various transformations and weighting to the model based on the provided image and adapter configuration, enhancing the model’s ability to generate or process images according to specific styles or prompts.

# Input types
## Required
- model
    - Model parameters are essential because they represent the core structure that the IPAdapterSimple node will adapt or modify. They are the primary input that determines the node’s subsequent processing and output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter specifies the adapter configuration that will guide image processing within the node. It is a key component that enables the node to apply specific styles or transformations.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]
- image
    - The image parameter is a critical input for the IPAdapterSimple node because it is the visual data that will be processed and transformed according to the adapter settings. It directly affects the node’s final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - The weight parameter adjusts the influence of the image on the model output. It is a floating‑point value that can significantly alter the node’s processing based on its magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_at
    - The start_at parameter defines the starting point of the image’s influence on the model. It is a floating‑point value that helps control the initial intensity of the transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter marks the endpoint of the image’s influence on the model. It works with start_at to determine the range of the transformation effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type parameter indicates how the weight parameter affects the model. It can specify styles such as 'standard', 'prompt is more important', or 'style transfer', each influencing the node’s functionality differently.
    - Comfy dtype: COMBO[standard, prompt is more important, style transfer]
    - Python dtype: str
## Optional
- attn_mask
    - An optional attn_mask parameter specifies which parts of the input the model should focus on during processing. It is particularly useful for directing the model’s attention to specific regions of the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- model
    - The output model represents the adapted or modified version of the input model after applying the IPAdapterSimple node transformations. It encapsulates the new image processing capabilities granted by the node.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterSimple:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'ipadapter': ('IPADAPTER',), 'image': ('IMAGE',), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05}), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'weight_type': (['standard', 'prompt is more important', 'style transfer'],)}, 'optional': {'attn_mask': ('MASK',)}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply_ipadapter'
    CATEGORY = 'ipadapter'

    def apply_ipadapter(self, model, ipadapter, image, weight, start_at, end_at, weight_type, attn_mask=None):
        if weight_type.startswith('style'):
            weight_type = 'style transfer'
        elif weight_type == 'prompt is more important':
            weight_type = 'ease out'
        else:
            weight_type = 'linear'
        ipa_args = {'image': image, 'weight': weight, 'start_at': start_at, 'end_at': end_at, 'attn_mask': attn_mask, 'weight_type': weight_type, 'insightface': ipadapter['insightface']['model'] if 'insightface' in ipadapter else None}
        if 'ipadapter' not in ipadapter:
            raise Exception('IPAdapter model not present in the pipeline. Please load the models with the IPAdapterUnifiedLoader node.')
        if 'clipvision' not in ipadapter:
            raise Exception('CLIPVision model not present in the pipeline. Please load the models with the IPAdapterUnifiedLoader node.')
        return (ipadapter_execute(model.clone(), ipadapter['ipadapter']['model'], ipadapter['clipvision']['model'], **ipa_args),)
```