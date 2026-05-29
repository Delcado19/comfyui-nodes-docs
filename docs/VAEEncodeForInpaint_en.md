# Documentation
- Class name: VAEEncodeForInpaint
- Category: latent/inpaint
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The `encode` method of the VAEEncodeForInpaint node is designed to convert image pixels into latent space representations suitable for inpainting tasks. It uses a variational autoencoder (VAE) to encode the masked region of the image, allowing subsequent generation or modification of that region. This method is essential for applications such as image editing and restoration, where preserving the integrity of the original image outside the masked area is critical.

# Input types
## Required
- pixels
    - Parameter `pixels` is the input image data processed by the node. It is crucial to the encoding process because it is the raw material the VAE transforms into a latent representation. The quality and resolution of `pixels` directly affect the accuracy and detail of the resulting latent space representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - Parameter `vae` denotes the variational autoencoder model used by the node to encode the image data. It is a key component of the node because it determines the quality and characteristics of the latent space into which the image is encoded. The choice of VAE architecture can significantly impact the node's performance and the suitability of the encoded data for inpainting tasks.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- mask
    - Parameter `mask` defines the region of the image that needs to be inpainted. It is a binary tensor that identifies which parts of `pixels` should be masked during encoding. `mask` is essential for selective encoding of image regions and ensures that only the specified area is transformed into latent space.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- grow_mask_by
    - Parameter `grow_mask_by` allows the mask region to be expanded by a specified number of pixels. This is useful for ensuring a smooth and well‑defined transition between masked and unmasked areas. The parameter influences the connectivity and consistency of the inpainted region in the final image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - Output `samples` contains the latent space representation of the input image pixels. This is the core output of the node, used for further processing or generating the restored image. The quality of `samples` directly impacts the final result of the inpainting task.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_mask
    - Output `noise_mask` is a binary tensor indicating the areas of the image that have been masked and are ready for inpainting. It is derived from the input `mask` and is crucial for guiding the restoration process to ensure that only the intended regions are modified.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class VAEEncodeForInpaint:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pixels': ('IMAGE',), 'vae': ('VAE',), 'mask': ('MASK',), 'grow_mask_by': ('INT', {'default': 6, 'min': 0, 'max': 64, 'step': 1})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'encode'
    CATEGORY = 'latent/inpaint'

    def encode(self, vae, pixels, mask, grow_mask_by=6):
        x = pixels.shape[1] // vae.downscale_ratio * vae.downscale_ratio
        y = pixels.shape[2] // vae.downscale_ratio * vae.downscale_ratio
        mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(pixels.shape[1], pixels.shape[2]), mode='bilinear')
        pixels = pixels.clone()
        if pixels.shape[1] != x or pixels.shape[2] != y:
            x_offset = pixels.shape[1] % vae.downscale_ratio // 2
            y_offset = pixels.shape[2] % vae.downscale_ratio // 2
            pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]
            mask = mask[:, :, x_offset:x + x_offset, y_offset:y + y_offset]
        if grow_mask_by == 0:
            mask_erosion = mask
        else:
            kernel_tensor = torch.ones((1, 1, grow_mask_by, grow_mask_by))
            padding = math.ceil((grow_mask_by - 1) / 2)
            mask_erosion = torch.clamp(torch.nn.functional.conv2d(mask.round(), kernel_tensor, padding=padding), 0, 1)
        m = (1.0 - mask.round()).squeeze(1)
        for i in range(3):
            pixels[:, :, :, i] -= 0.5
            pixels[:, :, :, i] *= m
            pixels[:, :, :, i] += 0.5
        t = vae.encode(pixels)
        return ({'samples': t, 'noise_mask': mask_erosion[:, :, :x, :y].round()},)
```