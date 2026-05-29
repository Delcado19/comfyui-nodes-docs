# Documentation
- Class name: ImpactLatentInfo
- Category: ImpactPack/Logic/_for_test
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the ImpactLatentInfo node aims to process latent information by determining the dimensions of the given input sample. It operates abstractly on the latent space to derive spatial dimensions, which is crucial for further processing or visualization of image-related tasks.

# Input types
## Required
- value
    - The parameter 'value' is crucial because it contains the latent samples required for node operation. It directly affects the node's ability to compute the spatial dimensions of the input data.
    - Comfy dtype: Dict[str, torch.Tensor]
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- batch
    - The parameter 'batch' represents the number of samples in a batch, which is a fundamental aspect of batch processing in machine learning applications.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The parameter 'height' represents the vertical dimension of the processed image, which is a key factor in image resolution and spatial analysis.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The parameter 'width' represents the horizontal dimension of the image, which together with height determines the overall spatial extent of the image.
    - Comfy dtype: INT
    - Python dtype: int
- channel
    - The parameter 'channel' represents the number of color channels in the image, which is crucial for understanding the complexity and composition of the image data.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
