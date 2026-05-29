# Documentation
- Class name: IPAdapterCombineParams
- Category: ipadapter/params
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The main function of the IPAdapterCombineParams node is to combine parameters from multiple IP adapters into a unified parameter set.
Suitable for scenarios where multiple parameter sources need to be merged to simplify configuration and processing

# Input types

## Required
- params_1
    - The first parameter, used to specify parameters for generating images. This parameter can be used to control image generation parameters for better results.
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: torch.Tensor
- params_2
    - The second parameter, used to specify parameters for generating images. This parameter can be used to control image generation parameters for better results.
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: torch.Tensor

## Optional

- params_3
    - The third parameter, used to specify parameters for generating images
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: torch.Tensor
- params_4
    - The fourth parameter, used to specify parameters for generating images
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: torch.Tensor

# Output types
- IPADAPTER_PARAMS
    - A collection of image generation parameters, containing all input parameter contents

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
