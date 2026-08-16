# Documentation
- Class name: Input Parameters (Image Saver)
- Category: ImageSaver/utils
- Output node: False
- Repo Ref: https://github.com/alexopus/ComfyUI-Image-Saver

Combined node for seed, steps, cfg, sampler, scheduler and denoise.

# Input types
## Required
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
- sampler
    - The algorithm used when sampling, this can affect the quality, speed, and style of the generated output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - The scheduler controls how noise is gradually removed to form the image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - The amount of denoising applied, lower values will maintain the structure of the initial image allowing for image to image sampling.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- seed
    - seed (INT)
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - steps (INT)
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - cfg (FLOAT)
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler
    - sampler (SAMPLERS)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- scheduler
    - scheduler (SCHEDULERS)
    - Comfy dtype: COMBO[STRING]
    - Python dtype: object
- denoise
    - denoise (FLOAT)
    - Comfy dtype: FLOAT
    - Python dtype: float

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/alexopus/ComfyUI-Image-Saver)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
