# Documentation
- Class name: IPAdapterBatch
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

IPAdapterBatch node is designed to efficiently process image data in batches, leveraging the underlying IPAdapterAdvanced class. It focuses on adapting images to integrate with other models or processing pipelines, ensuring image data format and weights are correct for optimal performance.

# Input types
## Required
- model
- Model parameters are crucial for the node’s operation because they define the machine learning model used to process image data. They directly affect the node’s execution and the quality of the results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
- The ipadapter parameter is essential because it specifies the adapter used to integrate image data with the model. It plays a key role in how image data is processed and its subsequent outcomes.
    - Comfy dtype: IPADAPTER
    - Python dtype: Any
- image
- Image input is vital to the node’s functionality, providing the raw data that the model will process and transform. It is the primary information source for the node’s operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- weight
- The weight parameter allows adjustment of how image data influences the model output. It is especially important when fine‑tuning the node’s behavior for specific applications.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
- The weight_type parameter determines how weights are applied to image data, which is critical for controlling emphasis on different aspects of the data during processing.
    - Comfy dtype: WEIGHT_TYPES
    - Python dtype: str
- start_at
- The start_at parameter defines the starting point for processing image data, useful for focusing on specific regions or features within an image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
- The end_at parameter marks the endpoint of image data processing, allowing selection of a subset of the image data to consider.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
- The embeds_scaling parameter is important because it determines the scaling method for embeddings, affecting how image features are represented and used in the model.
    - Comfy dtype: COMBO['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']
    - Python dtype: str
## Optional
- image_negative
- The optional image_negative parameter provides an additional image for comparison or contrast, enhancing the node’s ability to distinguish similar images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- attn_mask
- When the attn_mask parameter is provided, it can specify which parts of the image data the model should focus on or ignore during processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- clip_vision
- The clip_vision parameter is used to integrate the CLIP vision model to enhance image feature extraction, which can improve the node’s performance in some applications.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Any

# Output types

# Usage tips
- Infra type: CPU

# Source code
```
class IPAdapterBatch(IPAdapterAdvanced):

    def __init__(self):
        self.unfold_batch = True

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'model': ('MODEL',), 'ipadapter': ('IPADAPTER',), 'image': ('IMAGE',), 'weight': ('FLOAT', {'default': 1.0, 'min': -1, 'max': 5, 'step': 0.05}), 'weight_type': (WEIGHT_TYPES,), 'start_at': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'end_at': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 1.0, 'step': 0.001}), 'embeds_scaling': (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'],)}, 'optional': {'image_negative': ('IMAGE',), 'attn_mask': ('MASK',), 'clip_vision': ('CLIP_VISION',)}}
```