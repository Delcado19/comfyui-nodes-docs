# Documentation
- Class name: IPAdapterFromParams
- Category: ipadapter/params
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The main function of the IPAdapterFromParams node is to create an IP adapter object from user-provided parameters

# Input types

## Required
- model
    - model, used to specify the model for generating images. This parameter can be used to control the model for generating images to achieve better results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- ipadapter
    - IP adapter, used to specify the IP adapter for generating images. This parameter can be used to control the IP adapter for generating images to achieve better results.
    - Comfy dtype: IPADAPTER
    - Python dtype: torch.nn.Module
- ipadapter_params
    - IP adapter parameters, used to specify the IP adapter parameters for generating images. This parameter can be used to control the IP adapter parameters for generating images to achieve better results.
    - Comfy dtype: IPADAPTER_PARAMS
    - Python dtype: torch.Tensor
- combine_embeds
    - The combine_embeds parameter determines how embeddings are combined. It is critical because it determines the mathematical operations applied to the embedding input, significantly affecting the node's functionality and the nature of the output.
    - Comfy dtype: ['concat', 'add', 'subtract', 'average', 'norm average']
    - Python dtype: str
- embeds_scaling
    - The embeds_scaling parameter determines how embeddings are scaled. It is critical because it determines the mathematical operations applied to the embedding input, significantly affecting the node's functionality and the nature of the output.
    - Comfy dtype: ['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty']
    - Python dtype: str

## Optional

- image_negative
    - image_negative, used to specify the negative for generating images. This parameter can be used to control the negative for generating images to achieve better results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- clip_vision
    - Used to specify the clip_vision for generating images. This parameter can be used to control the clip_vision for generating images to achieve better results.
    - Comfy dtype: CLIP_VISION
    - Python dtype: torch.Tensor


# Output types
- model
    - The model for generating images, containing the content of all input parameters

# Usage tips
- Infra type: GPU

# Source code
```
class IPAdapterFromParams(IPAdapterAdvanced):
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "model": ("MODEL", ),
                "ipadapter": ("IPADAPTER", ),
                "ipadapter_params": ("IPADAPTER_PARAMS", ),
                "combine_embeds": (["concat", "add", "subtract", "average", "norm average"],),
                "embeds_scaling": (['V only', 'K+V', 'K+V w/ C penalty', 'K+mean(V) w/ C penalty'], ),
            },
            "optional": {
                "image_negative": ("IMAGE",),
                "clip_vision": ("CLIP_VISION",),
            }
        }

    CATEGORY = "ipadapter/params"
```