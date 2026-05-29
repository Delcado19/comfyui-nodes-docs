
# Documentation
- Class name: Fooocus_KSamplerEfficient
- Category: Art Venture/Sampling
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Fooocus_KSamplerEfficient node enhances the sampling process in artistic generation by introducing a sharpness parameter, enabling more precise control over the texture and detail levels of generated images. Building on foundational sampling capabilities, this node provides an advanced, efficiency-focused approach to artistic creation.

# Input types
## Required
- model
    - Specifies the model used for the sampling process, which is critical for determining the fundamental style and characteristics of the artistic generation.
    - Comfy dtype: MODEL
    - Python dtype: str
- seed
    - The seed parameter ensures reproducibility of the artistic generation process by initializing the random number generator to a specific state.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Defines the number of steps in the sampling process, affecting the detail and quality of the generated art.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configures the conditioning factor for the sampling process, influencing the creativity and coherence of the generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determines the specific sampling algorithm to be used, affecting the texture and detail of the generated art.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler used to control the sampling process, influencing the progression and quality of artistic generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Defines positive conditions that guide artistic generation toward desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Sets negative conditions to avoid certain attributes in the generated art.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Provides an initial latent image for the sampling process to transform.
    - Comfy dtype: LATENT
    - Python dtype: object
- denoise
    - Adjusts the denoising level applied to the generated art, affecting clarity and detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preview_method
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- vae_decode
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
## Optional
- optional_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- script
    - Unknown
    - Comfy dtype: SCRIPT
    - Python dtype: unknown
- sharpness
    - The sharpness parameter allows users to adjust the level of detail and texture in the generated art, providing a method to fine-tune visual output for more precise artistic control.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - Comfy dtype: MODEL
    - Unknown
    - Python dtype: unknown
- CONDITIONING+
    - Comfy dtype: CONDITIONING
    - Unknown
    - Python dtype: unknown
- CONDITIONING-
    - Comfy dtype: CONDITIONING
    - Unknown
    - Python dtype: unknown
- LATENT
    - Comfy dtype: LATENT
    - The output latent image represents the final generated art, containing the visual features specified through the input parameters.
    - Python dtype: object
- VAE
    - Comfy dtype: VAE
    - Unknown
    - Python dtype: unknown
- IMAGE
    - Comfy dtype: IMAGE
    - Unknown
    - Python dtype: unknown


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
