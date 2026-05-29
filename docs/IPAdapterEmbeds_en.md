# Documentation
- Class name: IPAdapterEmbeds
- Category: ipadapter/embeds
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterEmbeds node aims to integrate and apply IPAdapter modifications to a given model. By leveraging IPAdapter's capabilities, it customizes the model's embedding space, allowing fine-tuning of model behavior to adapt to specific input features. This node abstracts the complexity of embedding operations, providing a simplified interface for model enhancement.

# Input types
## Required
- model
    - The model parameter is required, as it represents the base model to be adapted by IPAdapter. It is the primary input parameter, determining the structure and behavior of the resulting adapted model.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter specifies the adapter used to modify the model. It is a key component that can customize the model's embedding capabilities.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]
- pos_embed
    - The pos_embed parameter provides positive embedding input used to guide the adaptation process. It plays an important role in shaping the adapted model's response to specific features.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- weight
    - The weight parameter determines the impact of IPAdapter modifications on the model. It is a key factor controlling the degree of adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type parameter defines how weights are applied across different layers of the model. It is important for directing the focus of adaptation to specific regions of the model.
    - Comfy dtype: WEIGHT_TYPES
    - Python dtype: str
- start_at
    - The start_at parameter establishes the starting point of the adaptation process. It is crucial for defining the initial conditions at which the model begins adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter marks the endpoint of the adaptation process. It is essential for specifying the conditions at which adaptation ends.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter determines how embeddings are scaled or combined within the model. This is a critical setting that can significantly affect the performance of the adapted model.
    - Comfy dtype: COMBO['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']
    - Python dtype: str
## Optional
- neg_embed
    - The neg_embed parameter provides negative embedding input, which can be used during adaptation to balance positive embeddings. It helps refine the model's focus on desired features.
    - Comfy dtype: EMBEDS
    - Python dtype: torch.Tensor
- attn_mask
    - The attn_mask parameter is used to apply masks to the attention mechanism during adaptation, which is important for controlling the flow of information within the model.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- clip_vision
    - The clip_vision parameter specifies the CLIP Vision model, which can be used in conjunction with IPAdapter to enhance feature extraction.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.nn.Module

# Output types
- model
    - The output model is an adapted version of the input model, modified according to the specifications provided by the IPAdapterEmbeds node. It represents the outcome of the adaptation process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterEmbeds:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'ipadapter': ('IPADAPTER',), 'pos_embed': ('EMBEDS',), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 3, 'step': 0.05}), 'weight_type': (WEIGHT_TYPES,), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'embeds_scaling': (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'],)}, 'optional': {'neg_embed': ('EMBEDS',), 'attn_mask': ('MASK',), 'clip_vision': ('CLIP_VISION',)}}
    RETURN_TYPES = ('MODEL',)
    FUNCTION = 'apply_ipadapter'
    CATEGORY = 'ipadapter/embeds'

    def apply_ipadapter(self, model, ipadapter, pos_embed, weight, weight_type, start_at, end_at, neg_embed=None, attn_mask=None, clip_vision=None, embeds_scaling='V only'):
        ipa_args = {'pos_embed': pos_embed, 'neg_embed': neg_embed, 'weight': weight, 'weight_type': weight_type, 'start_at': start_at, 'end_at': end_at, 'attn_mask': attn_mask, 'embeds_scaling': embeds_scaling}
        if 'ipadapter' in ipadapter:
            ipadapter_model = ipadapter['ipadapter']['model']
            clip_vision = clip_vision if clip_vision is not None else ipadapter['clipvision']['model']
        else:
            ipadapter_model = ipadapter
            clip_vision = clip_vision
        if clip_vision is None and neg_embed is None:
            raise Exception('Missing CLIPVision model.')
        del ipadapter
        return (ipadapter_execute(model.clone(), ipadapter_model, clip_vision, **ipa_args),)
```