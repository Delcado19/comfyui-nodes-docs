# Documentation
- Class name: WLSH_VAE_Encode_For_Inpaint_Padding
- Category: WLSH Nodes/inpainting
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

This node encodes image data using a Variational Autoencoder (VAE) model for image inpainting tasks, considering the mask. It processes input images and masks to generate latent representations usable for further image completion or generation.

# Input types
## Required
- pixels
- Input image pixels are essential for encoding, providing the raw data VAE needs to generate latent representations. Image size is resized to match the model’s input requirements.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
- The VAE model is the core component of this node, responsible for encoding input images into latent space. Its configuration and weights directly affect encoding quality.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- mask
- The mask parameter defines the region of interest that needs repair. It works with image pixels to guide the VAE’s encoding process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- mask_padding
- This parameter sets the padding size for erosion around the mask, refining the noise mask used during encoding. It indirectly influences latent representation quality.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- samples
- The output sample represents the encoded latent representation of the input image, the node’s primary output, usable for various repair or generation tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- noise_mask
- The noise mask is a secondary output providing information about masked areas in the image. It assists reconstruction or generation in repair tasks.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
