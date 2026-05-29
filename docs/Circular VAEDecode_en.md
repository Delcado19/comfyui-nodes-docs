# Documentation
- Class name: CircularVAEDecode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/FlyingFireCo/tiled_ksampler.git

The CircularVAEDecode node decodes latent representations back into images using a variational autoencoder (VAE). It modifies the convolutional layer padding mode in the VAE to 'circular', which mitigates edge effects and is especially suitable for image generation tasks. The node's primary function is to convert latent space data into a visual format for interpreting and visualizing encoded information.

# Input types
## Required
- samples
    - The 'samles' parameter is critical because it holds the latent representations that the node will decode into images. This mandatory input directly influences the node's output, determining the quality and characteristics of the generated images.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - The 'vae' parameter represents the variational autoencoder model; the node uses this model to decode latent samples. This required input defines the structural and functional aspects of the decoding process.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Output types
- image
    - The 'image' output is the node's main result, representing the decoded image generated from latent samples. It indicates successful conversion of latent space data into a human-interpretable visual format.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/FlyingFireCo/tiled_ksampler)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
