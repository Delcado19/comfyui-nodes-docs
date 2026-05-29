# Documentation
- Class name: MikeySamplerBaseOnlyAdvanced
- Category: Mikey/Sampling
- Output node: False
- Repo Ref: https://github.com/bash-j/mikey_nodes

The MikeySamplerBaseOnlyAdvanced node is designed to perform advanced sampling techniques for generative models. It combines multiple components such as image upscaling, model upscaling, and latent space manipulation to produce high-quality samples. The node's functionality focuses on generating upscaled and denoised samples, leveraging complex algorithms to enhance the output.

# Input types
## Required
- seed
    - The seed parameter is critical for the reproducibility of the sampling process, ensuring that generated samples are consistent across different runs. It plays an important role in determining the initial state of the random number generator, which in turn influences the entire sampling process.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- upscale_model
    - The upscale_model parameter determines the method or model used for image upscaling. It can be a string representing a scaling method, or a PyTorch module for more complex models. This parameter significantly affects the quality and resolution of upscaled images during the sampling process.
    - Comfy dtype: COMBO[str, torch.nn.Module]
    - Python dtype: Union[str, torch.nn.Module]

# Output types
- latent
    - The latent parameter represents the encoded version of the upscaled image and is a key output of the sampling process. It captures the underlying structure of the image in a compressed form, allowing further manipulation or analysis in the latent space.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/bash-j/mikey_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
