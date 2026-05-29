# Documentation
- Class name: VAEEncodeInpaintConditioning
- Category: inpaint
- Output node: False
- Repo Ref: https://github.com/Acly/comfyui-inpaint-nodes

Use a Variational Autoencoder (VAE) to encode input images into latent representations, particularly suitable for inpainting tasks. This node plays a critical role in the generation process by conditioning on positive and negative samples, enabling the model to learn a more refined representation of the data.

# Input types
## Required
- positive
    - Positive samples are essential for guiding the encoding process toward the desired result. They provide the model with a reference for what constitutes a "positive" or correct state in the context of inpainting tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- negative
    - Negative samples contrast with positive samples, helping the model distinguish between correct and incorrect representations. This is critical for refining the model's understanding and improving the quality of inpainting results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- vae
    - The VAE model is the core component responsible for encoding input images into the latent space. It is a critical input as it directly affects the quality and accuracy of the encoding process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- pixels
    - Pixel data constitutes the input to the VAE model and is essential for the encoding process. It is through these pixels that the model learns to represent and reconstruct visual information.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The mask parameter is used to identify regions in the image that require inpainting. It is a critical component that guides the model to focus on specific regions of the image during encoding.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- positive
    - The positive output represents the conditional latent representation of positive samples, used for further processing or as a reference for inpainting tasks.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- negative
    - The negative output corresponds to the conditional latent representation of negative samples, contrasting with the positive output and helping to distinguish correct representations.
    - Comfy dtype: CONDITIONING
    - Python dtype: Dict[str, Any]
- latent_inpaint
    - The latent inpainting output is a specific type of latent representation that includes image samples and a noise mask, which is critical for the inpainting process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latent_samples
    - The latent sample output provides a set of random samples from the latent space, which can be used to generate new instances or further analyze the model's encoding capabilities.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Acly/comfyui-inpaint-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
