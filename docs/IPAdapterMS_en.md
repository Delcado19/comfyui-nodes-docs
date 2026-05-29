# Documentation
- Class name: IPAdapterMS
- Category: ipadapter/dev
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterMS node aims to integrate various image processing models into a unified framework. It facilitates the manipulation and enhancement of image data through a set of configurable parameters, designed to optimize the performance of the integrated models.

# Input types
## Required
- model
    - The model parameter is critical to the node's operation, as it defines the core image processing model to be used. It directly affects the node's ability to process and analyze image data.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is essential to the node, as it specifies the adapter to be used to interface with the model. It plays a crucial role in the node's interaction with the model and in enhancing the model's functionality.
    - Comfy dtype: IPADAPTER
    - Python dtype: str
- image
    - The image parameter is fundamental to the node's functionality, providing input data for image processing. It is the primary source of visual content that the node will operate on and analyze.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
    - The weight parameter allows adjusting the influence of certain aspects of image processing on the final output. It is a key factor in fine-tuning the node's operation to achieve desired results.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- weight_faceidv2
    - The weight_faceidv2 parameter is used to adjust the emphasis on facial feature recognition in image processing. It is an optional but important factor when dealing with facial recognition tasks.
    - Comfy dtype: FLOAT
    - Python dtype: float
- combine_embeds
    - The combine_embeds parameter determines the method of combining different embeddings within the node. This is a critical decision point, affecting the integration and consistency of the node's output.
    - Comfy dtype: COMBO[concat, add, subtract, average, norm average]
    - Python dtype: str
- start_at
    - The start_at parameter defines the starting point of image processing operations. It is used to specify the initial stage at which the node begins analyzing and manipulating image data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter sets the endpoint of image processing operations. It determines the final stage at which the node analyzes and manipulates image data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter is used to scale embeddings within the node. It is an important factor in controlling the size and influence of embeddings on the node's output.
    - Comfy dtype: COMBO[V only, K+V, K+V w/ C penalty, K+mean(V) w/ C penalty]
    - Python dtype: str
- layer_weights
    - The layer_weights parameter allows specifying weights for different layers within the model. It is an optional but powerful tool for customizing the node's behavior according to specific needs.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- processed_image
    - The processed_image output represents the result of image processing performed by the node. It contains the node's operations and analysis, providing the final visual content after all operations are completed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterMS(IPAdapterAdvanced):

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'ipadapter': ('IPADAPTER',), 'image': ('IMAGE',), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 5, 'step': 0.05}), 'weight_faceidv2': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 5.0, 'step': 0.05}), 'weight_type': (WEIGHT_TYPES,), 'combine_embeds': (['concat', 'add', 'subtract', 'average', 'norm average'],), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'embeds_scaling': (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'],), 'layer_weights': ('STRING', {'default': '', 'multiline': True})}, 'optional': {'image_negative': ('IMAGE',), 'attn_mask': ('MASK',), 'clip_vision': ('CLIP_VISION',), 'insightface': ('INSIGHTFACE',)}}
    CATEGORY = 'ipadapter/dev'
```