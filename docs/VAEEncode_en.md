# Documentation
- Class name: VAEEncode
- Category: latent
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The VAEEncode node is designed to convert input data into a latent space representation using a Variational Autoencoder (VAE) model. It encapsulates the encoding process, which is essential for tasks such as dimensionality reduction, feature extraction, and generative modeling. The node abstracts the complexity of the encoding algorithm, providing users with a simplified interface to leverage the power of VAEs.

# Input types
## Required
- pixels
- The ‘pixels’ parameter is the raw image data processed by the VAEEncode node, used to generate the latent representation. It plays a central role in the node’s functionality because it is the direct input to the encoding process. The quality and characteristics of the ‘pixels’ data directly affect the generated latent space.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
- The ‘vae’ parameter represents the VAE model used by the node to encode input pixels into the latent space. It is a crucial component of the node because it defines the VAE’s architecture and parameters, which in turn influence the encoding outcome.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module

# Output types
- samples
- The ‘samples’ output of the VAEEncode node contains the latent space representation of the input pixels. This is a key output because it captures the essence of the input data in a compressed form, suitable for downstream tasks such as classification, clustering, or further generative processes.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
