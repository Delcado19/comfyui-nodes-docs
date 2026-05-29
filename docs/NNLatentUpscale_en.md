# Documentation
- Class name: NNLatentUpscale
- Category: latent
- Output node: False
- Repo Ref: https://github.com/Ttl/ComfyUi_NNLatentUpscale

NNLatentUpscale is a class designed to upscale low-dimensional latent representations using neural networks, providing a method to generate high-fidelity images from compressed data.

# Input types
## Required
- latent
    - The latent parameter is critical, representing the compressed form of the data to be upscaled, serving as the primary input for the neural network to perform its enhancement.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- version
    - The version parameter determines the model used for the upscaling process, ensuring compatibility and accuracy of the neural network operations.
    - Comfy dtype: COMBO
    - Python dtype: Union[str, List[str]]
## Optional
- upscale
    - The upscale parameter fine-tunes the degree of enhancement applied to the latent data, affecting the resolution and quality of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples
    - The output 'samples' represents the upscaled latent representation, now at higher resolution and ready for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Ttl/ComfyUi_NNLatentUpscale)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
