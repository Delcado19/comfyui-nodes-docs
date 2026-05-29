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
[View source repository on GitHub](https://github.com/WASasquatch/WAS_Extras)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
