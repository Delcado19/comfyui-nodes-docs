# Documentation
- Class name: DisableNoise
- Category: sampling/custom_sampling/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The DisableNoise node suppresses noise during the sampling process, ensuring the output contains no random elements. It serves as a critical component in scenarios requiring deterministic results, providing a noise-free path for generating latent representations.

# Input types
## Optional
- seed
    - The seed parameter initializes the noise generation process. While not required, it plays a key role in ensuring reproducibility, allowing consistent results across different runs.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- NOISE
    - The output of the DisableNoise node is an instance of the Noise_EmptyNoise class, representing a noise-free state. It signifies the absence of noise in the generated latent image, aligning with the node's purpose of providing deterministic output.
    - Comfy dtype: Noise_EmptyNoise
    - Python dtype: comfy.k_diffusion.sampling.DisableNoise.Noise_EmptyNoise

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
