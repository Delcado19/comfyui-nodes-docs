# Documentation
- Class name: WAS_VAEEncodeForInpaint
- Category: latent/inpaint
- Output node: False
- Repo Ref: https://github.com/WASasquatch/WAS_Extras

The WAS_VAEEncodeForInpaint node is designed to encode image pixel data into a latent space representation suitable for image inpainting tasks. It leverages a pre-trained VAE (Variational Autoencoder) to perform this transformation, while also accounting for a mask that defines the inpainting region in the image. The node's functionality centers on preparing input data for the VAE and generating a latent representation that can be used in subsequent inpainting processes.

# Input types
## Required
- pixels
    - The 'pixels' parameter is the raw image data processed by the node. It is critical to the encoding process as it serves as the input to the VAE. The quality and resolution of the image data directly affect the generated latent representation, which in turn influences the inpainting results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter represents the pre-trained Variational Autoencoder model used by the node to encode image data into the latent space. The choice of VAE model has a significant impact on the encoding process and the quality of the latent representation.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- mask
    - The 'mask' parameter is a binary mask used to identify regions in the image that require inpainting. It is essential for guiding the encoding process to focus on relevant parts of the image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_offset
    - The 'mask_offset' parameter allows modification of the mask boundaries, which is useful for controlling the extent of inpainting. Positive values expand the mask, while negative values shrink it. This parameter indirectly influences the regions considered by the VAE during encoding.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
    - The 'samples' output represents the encoded latent space representation of the input image. It is the core result of the encoding process and serves as input for subsequent inpainting tasks. This latent representation captures the essential features of the image, discards unnecessary details, and is optimized for reconstruction of the inpainted regions.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_mask
    - The 'noise_mask' output is a binary mask indicating the regions of the image targeted for inpainting. It is derived from the original mask and ensures that the inpainting process focuses only on the specified areas. This mask is critical for guiding the generation of inpainted content.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class WAS_VAEEncodeForInpaint:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'pixels': ('IMAGE',), 'vae': ('VAE',), 'mask': ('MASK',), 'mask_offset': ('INT', {'default': 6, 'min': -128, 'max': 128, 'step': 1})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'encode'
    CATEGORY = 'latent/inpaint'

    def encode(self, vae, pixels, mask, mask_offset=6):
        x = pixels.shape[1] // 8 * 8
        y = pixels.shape[2] // 8 * 8
        mask = torch.nn.functional.interpolate(mask.reshape((-1, 1, mask.shape[-2], mask.shape[-1])), size=(pixels.shape[1], pixels.shape[2]), mode='bilinear')
        pixels = pixels.clone()
        if pixels.shape[1] != x or pixels.shape[2] != y:
            x_offset = pixels.shape[1] % 8 // 2
            y_offset = pixels.shape[2] % 8 // 2
            pixels = pixels[:, x_offset:x + x_offset, y_offset:y + y_offset, :]
            mask = mask[:, :, x_offset:x + x_offset, y_offset:y + y_offset]
        mask_erosion = self.modify_mask(mask, mask_offset)
        m = (1.0 - mask_erosion.round()).squeeze(1)
        for i in range(3):
            pixels[:, :, :, i] -= 0.5
            pixels[:, :, :, i] *= m
            pixels[:, :, :, i] += 0.5
        t = vae.encode(pixels)
        return ({'samples': t, 'noise_mask': mask_erosion[:, :, :x, :y].round()},)

    def modify_mask(self, mask, modify_by):
        if modify_by == 0:
            return mask
        if modify_by > 0:
            kernel_size = 2 * modify_by + 1
            kernel_tensor = torch.ones((1, 1, kernel_size, kernel_size))
            padding = modify_by
            modified_mask = torch.clamp(torch.nn.functional.conv2d(mask.round(), kernel_tensor, padding=padding), 0, 1)
        else:
            kernel_size = 2 * abs(modify_by) + 1
            kernel_tensor = torch.ones((1, 1, kernel_size, kernel_size))
            padding = abs(modify_by)
            eroded_mask = torch.nn.functional.conv2d(1 - mask.round(), kernel_tensor, padding=padding)
            modified_mask = torch.clamp(1 - eroded_mask, 0, 1)
        return modified_mask
```