# Documentation
- Class name: IPAdapterTiledBatch
- Category: Image Processing
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterTiledBatch node aims to adapt and process image data in batch format, using tiled techniques for efficient computation. It is particularly suitable for processing large images or situations requiring batch processing. The node emphasizes flexibility and performance, allowing customization through various parameters that affect the image transformation process.

# Input types
## Required
- model
    - The model parameter is critical for the node, as it defines the base model used for image processing. It directly affects the execution of the node and the quality of the processed images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter is essential for the node's operation, as it specifies the adapter used for tiled image data. It plays a key role in the node's ability to effectively process large images.
    - Comfy dtype: IPADAPTER
    - Python dtype: Any
- image
    - The image parameter is fundamental to the node's functionality, as it represents the input image to be processed. The node's output heavily depends on the quality and characteristics of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- weight
    - The weight parameter allows adjusting the impact of image processing on the final output. It is important because it provides a method to control the intensity of image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- weight_type
    - The weight_type parameter determines the type of weighting to apply to image processing. It is important because it can significantly alter the node's processing method and the resulting image characteristics.
    - Comfy dtype: WEIGHT_TYPES
    - Python dtype: str
- start_at
    - The start_at parameter specifies the starting point for image processing. It is important because it determines the initial position from which the node begins its operation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_at
    - The end_at parameter defines the endpoint for image processing. It is critical because it sets the limits for the node's processing of image data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpening
    - The sharpen parameter is used to enhance the clarity of processed images. It is important because it can improve the visual quality of the output by increasing sharpness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- embeds_scaling
    - The embeds_scaling parameter is used to scale the embeddings generated during image processing. It is important because it can affect the dimensionality and quality of the embeddings, impacting the node's performance.
    - Comfy dtype: COMBO['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']
    - Python dtype: str
- image_negative
    - The image_negative parameter is used to provide negative examples for image processing. It may be important when applying contrastive learning.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- attn_mask
    - The attn_mask parameter is used to mask certain parts of the image during processing. It is important for focusing the node's attention on specific regions of the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- clip_vision
    - The clip_vision parameter is used to integrate the CLIP vision model into image processing. It may be important for tasks requiring understanding and generation of image features.
    - Comfy dtype: CLIP_VISION
    - Python dtype: Any

# Output types
- processed_images
    - The processed_images output contains the results of image processing performed by the node. It is important because it represents the final output of the node's operations.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
