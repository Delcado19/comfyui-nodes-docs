# Documentation
- Class name: PPFNKSamplerAdvanced
- Category: Power Noise Suite/Sampling
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

PPFNKSamplerAdvanced class encapsulates a complex power-law noise model sampling method, providing enhanced control over the generation process and the ability to mix multiple noise types. It is designed to integrate with existing sampling frameworks, offering a versatile solution for obtaining high-quality noise patterns that conform to specific power-law distributions.

# Input types
## Required
- model
    - The model parameter is crucial as it defines the underlying power-law noise model on which the sampler will operate. It determines the type of noise distribution and the overall characteristics of the generated noise patterns.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The seed parameter is critical for the reproducibility of the noise generation process. It initializes the random number generator, ensuring that the same noise pattern is produced each time the sampler is run with the same seed.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter determines the number of iterations the sampling process will undergo. It directly affects the quality and detail of the generated noise pattern, with more steps typically resulting in finer noise.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter serves as a configuration value to adjust the behavior of the sampler. It can affect various aspects of noise generation, such as the level of detail or the smoothness of the pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter specifies the type of sampler to be used during the sampling process. Different samplers may offer various advantages in terms of speed, quality, or compatibility with specific noise models.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter is used to provide conditional data to the sampler. It can be used to guide the noise generation process, ensuring that the generated patterns conform to certain desired characteristics.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative parameter, similar to the positive parameter, provides additional conditional data to the sampler. It can help further refine noise generation by excluding unwanted features or patterns.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor

# Output types
- latents
    - The latents output contains the generated noise pattern in a latent space representation. These can be used as input for further processing or transformation to other domains.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/PowerNoiseSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
