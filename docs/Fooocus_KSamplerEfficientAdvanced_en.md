
# Documentation
- Class name: `Fooocus_KSamplerEfficientAdvanced`
- Category: `Art Venture/Sampling`
- Output node: `True`
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is an advanced sampler designed for efficient sampling in artistic creation. It adds a sharpness parameter to the functionality of the basic KSampler, aiming to improve the precision and detail of the sampling output, thereby achieving higher refinement in the generated art.

# Input types
## Required
- model
    - Specifies the model used for sampling, which is the basis for generating art.
    - Comfy dtype: MODEL
    - Python dtype: str
- seed
    - Determines the random seed for sampling, ensuring reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Defines the number of steps in the sampling process, affecting the detail and quality of the output.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the condition factor, affecting the guidance and coherence of the generated art.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Selects a specific sampling algorithm, affecting the texture and characteristics of the generated art.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects a scheduler to control the sampling process, affecting the progress and variation of the output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Sets the positive condition, guiding the sampling toward desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Sets the negative condition, guiding the sampling away from undesired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- latent_image
    - Provides an initial latent image as the starting point for sampling, providing a basis for further modifications.
    - Comfy dtype: LATENT
    - Python dtype: str
- denoise
    - Adjusts the denoising level applied to the sampling output, enhancing clarity and sharpness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- preview_method
    - Specifies the method for previewing the sampling result, enhancing the user's ability to evaluate and adjust the process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- vae_decode
    - Determines whether to use a VAE model to decode the latent representation, affecting the final image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool

## Optional
- optional_vae
    - Optionally specifies the VAE model used for decoding, providing flexibility in model selection.
    - Comfy dtype: VAE
    - Python dtype: str
- script
    - Allows custom scripts to be executed during the sampling process, providing extended customization and control capabilities.
    - Comfy dtype: SCRIPT
    - Python dtype: str
- sharpness
    - The sharpness parameter allows fine-tuning the level of sharpness in the sampling output, enhancing detail and clarity in the generated art. It plays a key role in achieving the desired level of detail and texture in the artwork.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- MODEL
    - The model used for the sampling process, encapsulating the computational framework.
    - Comfy dtype: MODEL
    - Python dtype: str
- CONDITIONING+
    - The positive condition applied during the sampling process, guiding the generation towards desired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- CONDITIONING-
    - The negative condition applied during the sampling process, guiding the generation away from undesired attributes.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- LATENT
    - The final latent representation of the sampled art, encapsulating the visual content and style.
    - Comfy dtype: LATENT
    - Python dtype: str
- VAE
    - The VAE model used for decoding the latent representation (if applicable), affecting the final image quality.
    - Comfy dtype: VAE
    - Python dtype: str
- IMAGE
    - The final image output of the sampling process, representing the generated artwork.
    - Comfy dtype: IMAGE
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
