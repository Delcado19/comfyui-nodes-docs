# Documentation
- Class name: Unsampler
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

The Unsampler class facilitates the generation of high-fidelity samples from a given model by iteratively refining the latent space. It aims to improve the quality of generated images through a controlled sampling process and allows the use of conditional inputs to guide generation. This node is critical for applications requiring detailed control over the sampling process and the ability to integrate various conditioning factors.

# Input types
## Required
- model
    - The model parameter is crucial, as it defines the generative foundation for the Unsampler operation. It is the core component determining the type and quality of output samples.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- steps
    - The steps parameter is essential for the sampling process, determining the number of iterations the Unsampler will perform to refine the latent space and generate the final sample.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter affects the Unsampler's configuration, adjusting model parameters during sampling to achieve desired output characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter plays a key role in defining the sampling strategy used by the Unsampler. It determines the method for traversing the latent space, directly impacting the diversity and quality of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- positive
    - The positive parameter serves as the positive conditional input for the Unsampler, guiding the generation process toward desired features or characteristics in the output sample.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - The negative parameter acts as a negative conditional input, helping the Unsampler avoid undesired features or characteristics in the generated sample.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - The latent_image parameter is crucial, as it provides the initial point in the latent space from which the Unsampler begins its refinement process, significantly influencing the final output.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- samples
    - The samples output represents the final refined latent space points, resulting from the Unsampler's iterative process. These points are essential for generating high-quality images that meet the desired conditions.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_Noise)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
