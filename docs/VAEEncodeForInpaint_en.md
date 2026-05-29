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
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
