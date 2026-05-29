# Documentation
- Class name: RgbSparseCtrlPreprocessor
- Category: Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl/preprocess
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

The RgbSparseCtrlPreprocessor node is designed to prepare image data for processing in advanced control networks involving sparse control mechanisms. It upscales the input image to match the latent size, encodes the image into a latent space representation, and wraps the encoded data in a preprocessed format specific to downstream control network applications.

# Input types
## Required
- image
    - The image parameter is crucial for the preprocessing stage as it represents the raw input that will be upscaled and encoded. It is a fundamental element that affects the node output and subsequent processing in the control network.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The vae parameter specifies the variational autoencoder (VAE) model that will be used to encode the image into a latent representation. This model is essential for the node to convert the input image into a format suitable for advanced control network operations.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE
- latent_size
    - The latent_size parameter defines the dimensions of the latent space into which the image will be encoded. It is a key determinant of the quality of the node output and the subsequent applicability of the encoded data within the control network framework.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- proc_IMAGE
    - The proc_IMAGE output is a preprocessed version of the input image, encoded as a latent space representation. This output is specifically designed to be compatible with advanced control network nodes and is not intended for other types of image inputs.
    - Comfy dtype: IMAGE
    - Python dtype: PreprocSparseRGBWrapper

# Usage tips
- Infra type: GPU

# Source code
```
class RgbSparseCtrlPreprocessor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'vae': ('VAE',), 'latent_size': ('LATENT',)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('proc_IMAGE',)
    FUNCTION = 'preprocess_images'
    CATEGORY = 'Adv-ControlNet 🛂🅐🅒🅝/SparseCtrl/preprocess'

    def preprocess_images(self, vae: VAE, image: Tensor, latent_size: Tensor):
        image = image.movedim(-1, 1)
        image = comfy.utils.common_upscale(image, latent_size['samples'].shape[3] * 8, latent_size['samples'].shape[2] * 8, 'nearest-exact', 'center')
        image = image.movedim(1, -1)
        try:
            image = vae.vae_encode_crop_pixels(image)
        except Exception:
            image = VAEEncode.vae_encode_crop_pixels(image)
        encoded = vae.encode(image[:, :, :, :3])
        return (PreprocSparseRGBWrapper(condhint=encoded),)
```