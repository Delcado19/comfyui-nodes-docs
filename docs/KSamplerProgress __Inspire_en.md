
# Documentation
- Class name: KSamplerProgress __Inspire
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-Inspire-Pack

KSamplerProgress __Inspire node is designed to iteratively sample and optimize latent images through multiple steps, enabling progressive visualization of the sampling process. It leverages advanced sampling techniques to enhance the quality and diversity of generated images, making it suitable for applications requiring detailed image progression analysis.

# Input types
## Required
- model
    - Specifies the model used for sampling, which is the core determinant of the characteristics and quality of generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - Defines the seed for noise generation, ensuring reproducibility and consistency of sampling results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Determines the number of steps in the sampling process, directly affecting the optimization and progression of latent images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration settings for the sampling process, used to adjust the sampler's behavior and parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Identifies the specific sampler to be used, influencing the sampling strategy and resulting image characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler controlling the sampling process, affecting the progression and quality of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Positive prompt, guiding the sampling toward desired image attributes, improving relevance and specificity.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative prompt, used to steer sampling away from undesired image attributes, enhancing output quality.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Initial latent image, serving as the starting point for progression, optimized through the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise
    - Specifies the denoising factor applied during the sampling process, affecting the clarity and detail of generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - The mode of noise application during the sampling process, influencing the texture and detail of generated images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- interval
    - The time interval for capturing and returning latent images, facilitating progressive visualization.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - Indicates whether to exclude the starting latent image from the results, providing flexibility for progression output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latent
    - The final latent image after the sampling process is complete, representing the end result of progressive optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict
- progress_latent
    - A collection of latent images captured at specified intervals during the sampling process, demonstrating the progression of image optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
