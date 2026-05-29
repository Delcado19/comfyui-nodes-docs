# Documentation
- Class name: RandomNoise
- Category: Noise Generation
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RandomNoise node is designed to generate random noise patterns, which can serve as a source of randomness in various generative models. It acts as a fundamental component for creating synthetic data, ensuring diversity and unpredictability in the generated samples.

# Input types
## Required
- noise_seed
    - The noise_seed parameter is crucial for the RandomNoise node because it determines the initial state for generating random noise. This ensures that the generated noise patterns are reproducible, which is essential for consistent results across different runs of generative models.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- noise
    - The output of the RandomNoise node is a tensor containing the generated noise. This tensor is very important because it forms the basis for further processing in generative models, influencing the diversity and quality of the final output.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
