# Documentation
- Class name: ReferencePreprocessorNode
- Category: Adv-ControlNet 🛂🅐🅒🅝/Reference/preprocess
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet.git

ReferencePreprocessorNode aims to convert input images into latent space representations using a Variational Autoencoder (VAE). It plays a critical role in preparing images for advanced control network operations by encoding visual content into a format that can be further processed by downstream nodes.

# Input types
## Required
- image
    - The image parameter is essential for the node's operation, as it is the raw visual input that needs to be preprocessed. It is the primary data that the node will convert into a latent representation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The VAE parameter specifies the Variational Autoencoder model that the node will use to encode the image into the latent space. This model is core to the node's functionality, as it defines how the image will be transformed.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE
- latent_size
    - The latent_size parameter defines the dimensionality of the latent space into which the image will be encoded. It is a critical component, as it determines the scale and structure of the encoded representation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, Any]

# Output types
- proc_IMAGE
    - The proc_IMAGE output is the processed image in latent representation form. It is important because it serves as input for subsequent nodes in the control network, enabling more advanced processing.
    - Comfy dtype: IMAGE
    - Python dtype: comfy.utils.ReferencePreprocWrapper

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-Advanced-ControlNet)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
