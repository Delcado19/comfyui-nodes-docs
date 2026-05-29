
# Documentation
- Class name: KSamplerAdvancedProgress __Inspire
- Category: InspirePack/analysis
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is designed to progressively sample images using the advanced KSampler algorithm, tailored specifically for the Inspire package. It meticulously adjusts and enhances the image generation process at each iteration through a series of input parameters and conditions, enabling step-by-step image optimization.

# Input types
## Required
- model
    - Specifies the generation model used for sampling, playing a crucial role in the quality and style of the generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - Determines whether to add noise at the beginning of the sampling process, affecting the initial state and potentially increasing the diversity of generated images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_seed
    - Provides a seed for noise generation, ensuring reproducibility and consistency in generated images when noise is added.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Specifies the number of steps to perform during the sampling process, directly affecting the refinement and detail of the generated images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration settings for the sampling process, allowing customization of the generation process according to specific requirements.
    - Comfy dtype: FLOAT
    - Python dtype: dict
- sampler_name
    - Identifies the specific sampler algorithm to be used, enabling selection of different sampling strategies within the advanced KSampler framework.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Defines the scheduling algorithm that controls the sampling process, influencing the progression and quality of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Positive prompts or conditions used to guide image generation toward desired attributes or themes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Negative prompts or conditions used to guide image generation away from certain attributes or themes, used for optimizing the output.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - The initial latent image from which sampling begins, setting the baseline for the progressive optimization process.
    - Comfy dtype: LATENT
    - Python dtype: dict
- start_at_step
    - The step at which the sampling process begins, allowing optimization to start from a specific point in the generation process.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - The final step at which the sampling process ends, defining the scope of progressive optimization.
    - Comfy dtype: INT
    - Python dtype: int
- noise_mode
    - Specifies the mode of noise application during the sampling process, affecting the texture and detail of the generated images.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- return_with_leftover_noise
    - Indicates whether to include remaining noise in the returned samples, potentially increasing the diversity and realism of the images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- interval
    - The interval at which intermediate samples are captured and returned, allowing observation of the progression throughout the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- omit_start_latent
    - If set to true, omits the initial latent image from the results, focusing the output on the progress made during the sampling process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- prev_progress_latent_opt
    - Optional previous progress latent images that can be concatenated with the current sampling results, enabling continuous progression across multiple sampling sessions.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- latent
    - The final latent image after the sampling process is complete, representing the ultimate result of progressive optimization.
    - Comfy dtype: LATENT
    - Python dtype: dict
- progress_latent
    - A collection of latent images captured at specified intervals during the sampling process, showcasing the progression and evolution of image generation.
    - Comfy dtype: LATENT
    - Python dtype: dict


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
