# Documentation
- Class name: MergeLayers
- Category: ♾️Mixlab/Layer
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The MergeLayers node is designed to integrate multiple layers onto a base image. It processes a series of images and corresponding layers, applying each layer to the base image at a specified position, optionally scaling it, and produces a composite image and a mask that delineates the layered regions.

# Input types
## Required
- layers
    - The 'layers' parameter is a list of dictionaries, each dictionary representing a layer to merge onto the base image. Each dictionary contains the layer's image, mask, and position attributes, which are essential for determining the final composition of the layered image.
    - Comfy dtype: COMBO[str]
    - Python dtype: List[Dict[str, Union[str, torch.Tensor]]]
- images
    - The 'images' parameter is a list of base images onto which layers are merged. Each image should be in tensor format, representing the raw pixel data that serves as the canvas for the layering process.
    - Comfy dtype: COMBO[torch.Tensor]
    - Python dtype: List[torch.Tensor]

# Output types
- IMAGE
    - The 'IMAGE' output is a tensor representing the final composite image formed by merging the input layers onto the base image. It contains the visual result of the layering process.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- MASK
    - The 'MASK' output is a tensor representing the mask applied during the layering process. It is used to identify the layered regions of the image, clearly distinguishing different layers.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
