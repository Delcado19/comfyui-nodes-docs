# Documentation
- Class name: LatentPixelScale
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The LatentPixelScale node is designed to upsample the latent representation of an image to a higher resolution. It enhances the details and clarity of the latent image by applying various scaling methods and factors. This node plays a critical role in image processing workflows, enabling the creation of high-resolution images from low-resolution latent states.

# Input types
## Required
- samples
    - The 'samples' parameter is essential as it represents the latent representation of the image to be upsampled. It is the primary input that influences the node's operation and the quality of the upsampled output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- scale_method
    - The 'scale_method' parameter determines the algorithm used to upsample the latent image. This is a critical choice that affects the final appearance and performance of the upsampled image.
    - Comfy dtype: COMBO['nearest-exact', 'bilinear', 'lanczos', 'area']
    - Python dtype: str
- scale_factor
    - The 'scale_factor' parameter defines the degree to which the latent image is upsampled. It is a key factor controlling the magnification and final resolution of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vae
    - The 'vae' parameter is a variational autoencoder model used to decode and encode latent representations. It is crucial to the node's functionality, ensuring image integrity during the upsampling process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
## Optional
- use_tiled_vae
    - The 'use_tiled_vae' parameter indicates whether the node should use a tiled approach for decoding and encoding latent representations. This can improve efficiency for large images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- upscale_model_opt
    - The optional 'upscale_model_opt' parameter allows specifying a custom model to be used during the upsampling process. It provides flexibility for advanced users who wish to apply specific upsampling techniques.
    - Comfy dtype: UPSCALE_MODEL
    - Python dtype: torch.nn.Module

# Output types
- latent
    - The 'latent' output represents the upsampled latent representation of the input image. It is important as it preserves the enhanced details and resolution achieved through the upsampling process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- image
    - The 'image' output is the visual representation of the upsampled latent image. It is the final product of the node, presenting the results of the upsampling process in a human-readable format.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: CPU

# Source code
```
class LatentPixelScale:
    upscale_methods = ['nearest-exact', 'bilinear', 'lanczos', 'area']

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'samples': ('LATENT',), 'scale_method': (s.upscale_methods,), 'scale_factor': ('FLOAT', {'default': 1.5, 'min': 0.1, 'max': 10000, 'step': 0.1}), 'vae': ('VAE',), 'use_tiled_vae': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'})}, 'optional': {'upscale_model_opt': ('UPSCALE_MODEL',)}}
    RETURN_TYPES = ('LATENT', 'IMAGE')
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Upscale'

    def doit(self, samples, scale_method, scale_factor, vae, use_tiled_vae, upscale_model_opt=None):
        if upscale_model_opt is None:
            latimg = core.latent_upscale_on_pixel_space2(samples, scale_method, scale_factor, vae, use_tile=use_tiled_vae)
        else:
            latimg = core.latent_upscale_on_pixel_space_with_model2(samples, scale_method, upscale_model_opt, scale_factor, vae, use_tile=use_tiled_vae)
        return latimg
```