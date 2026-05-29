
# Documentation
- Class name: GenerateNoise
- Category: KJNodes/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The GenerateNoise node is used to create synthetic noise data. It can generate noise patterns based on specified dimensions, seed, and scaling factor, and provides normalization options and the ability to generate constant noise across batches. This function is essential for tasks that require injecting noise into latent space or as a basis for generative models, where the noise acts as a seed for further transformations.

# Input types
## Required
- width
    - Determines the width of the generated noise pattern, affecting the spatial dimensions of the output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Sets the height of the generated noise pattern, affecting the spatial dimensions of the noise output.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - Specifies the number of noise samples to generate, allowing batch processing of noise generation.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - The seed value for the random number generator, ensuring reproducibility of noise patterns.
    - Comfy dtype: INT
    - Python dtype: int
- multiplier
    - Scaling factor applied to the noise, adjusting its intensity or magnitude.
    - Comfy dtype: FLOAT
    - Python dtype: float
- constant_batch_noise
    - Boolean flag; when true, makes the entire batch use the same noise pattern, enhancing consistency of generated samples.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- normalize
    - When enabled, normalizes the noise pattern to have a standard deviation of 1, standardizing the output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- model
    - Model parameters are optional, allowing adjustments to noise generation based on model characteristics, especially when providing sigma values.
    - Comfy dtype: MODEL
    - Python dtype: object
- sigmas
    - Optional parameter; when provided, adjusts noise intensity based on sigma values, which may be crucial for specific generation tasks.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]

# Output types
- latent
    - Outputs a dictionary containing the generated noise pattern, which can be used for further processing or as input to generative models.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
