# Documentation
- Class name: SamplerSelfRefineVideo
- Category: KJNodes/samplers
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Attempt to implement https://github.com/agwmon/self-refine-video, for testing only, MAY NOT WORK AS INTENDED.

# Input types
## Required
- input_mode
    - How to configure the step plan
    - Comfy dtype: COMFY_DYNAMICCOMBO_V3
    - Python dtype: object
- certain_percentage
    - Percentage of certain pixels to consider the frame as certain and skip further refinement
    - Comfy dtype: FLOAT
    - Python dtype: float
- uncertainty_threshold
    - Threshold of uncertainty to consider a pixel uncertain
    - Comfy dtype: FLOAT
    - Python dtype: float
- verbose
    - Enable verbose logging during sampling
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- seed
    - Seed for stochastic sampling
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- latent
    - Optional latent input to get input shape for LTX2 audio/video separation
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- SAMPLER
    - The SAMPLER output is produced by this node.
    - Comfy dtype: SAMPLER
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
