
# Documentation
- Class name: Fooocus_KSampler
- Category: Art Venture/Sampling
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Fooocus_KSampler node enhances the sampling process in art generation by introducing an adjustable sharpness parameter, improving upon traditional KSampler functionality. This allows users to control the sharpness of generated images more precisely, meeting specific needs of artistic creation.

# Input types
## Required
- model
    - Specifies the model used for the sampling process, serving as the foundation for image generation.
    - Comfy dtype: MODEL
    - Python dtype: str
- seed
    - Determines the initial seed for randomness in the sampling process, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Defines the number of steps to execute during sampling, affecting the detail and quality of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the unconditional guidance scale, influencing the degree of adherence to specified conditions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Selects the specific sampler algorithm to use, affecting sampling behavior and output quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects the scheduler used to control the sampling process, influencing the progression of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Sets positive condition guidance to steer sampling toward desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Applies negative condition guidance to steer sampling away from unwanted attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Provides an initial latent image to be refined or altered through the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: str
- denoise
    - Adjusts the denoising level applied to generated images, affecting clarity and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- sharpness
    - The sharpness parameter allows users to adjust the sharpness level of generated images, providing a method to fine-tune visual output according to artistic preferences.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- latent
    - Outputs the latent representation of the generated image, which can be used for further processing or conversion to a visual format.
    - Comfy dtype: LATENT
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
