# Documentation
- Class name: IPAdapterTiled
- Category: ipadapter/tiled
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterTiled node is designed to process images through a tiling mechanism, which is particularly useful for handling large images that may not fit into memory when processed as a whole. It applies a series of transformations and adjustments to image tiles, leveraging the capabilities of IPAdapter and CLIPVision models to generate embeddings that can be used for further processing or model training.

# Input types
## Required
- model
    - The model parameter is required as it represents the deep learning model that will be used to process image data. It is a core component of the node's functionality, determining how the image tiles will ultimately be analyzed and transformed.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - The ipadapter parameter specifies the adapter model that will be used together with the main model to adapt image features. It plays a key role in the node's ability to modify and enhance image data to improve model performance.
    - Comfy dtype: IPADAPTER
    - Python dtype: Dict[str, Any]
- image
    - The image input is the node's primary data source. It is the raw image data that will be decomposed into tiles and processed by the node. The quality and format of the image data directly affect the node's output and subsequent analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- weight
    - The weight parameter allows adjusting the influence of the image tiles on the model output. It can fine-tune the contribution of each tile to achieve the desired effect or balance in the final result.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The output model represents the processed model after applying tiling and image processing techniques. It encapsulates the learned features and transformations that have been applied to the input image tiles.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tiles
    - The tile output contains the processed image tiles. Each tile has undergone the node's transformation process and can be used for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- masks
    - The mask output provides attention masks used during processing of the image tiles. These masks can be useful for focusing on specific areas of the image or excluding certain areas from analysis.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
