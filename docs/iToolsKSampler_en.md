# Documentation
- Class name: iToolsKSampler
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Identical to the original KSampler, but additionally provides the settings used to generate the image and the execution time.

# Input types
## Required
- model
    - The model used for denoising the input latent.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- seed
    - The random seed used for creating the noise.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps used in the denoising process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The Classifier-Free Guidance scale balances creativity and adherence to the prompt. Higher values result in images more closely matching the prompt however too high values will negatively impact quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The algorithm used when sampling, this can affect the quality, speed, and style of the generated output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler controls how noise is gradually removed to form the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - The conditioning describing the attributes you want to include in the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- negative
    - The conditioning describing the attributes you want to exclude from the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: list
- latent_image
    - The latent image to denoise.
    - Comfy dtype: LATENT
    - Python dtype: dict
- denoise
    - The amount of denoising applied, lower values will maintain the structure of the initial image allowing for image to image sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- LATENT
    - The denoised latent.
    - Comfy dtype: LATENT
    - Python dtype: dict
- INFO
    - The INFO output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
