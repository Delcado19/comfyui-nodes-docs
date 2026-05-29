# Documentation
- Class name: BasicScheduler
- Category: sampling/custom_sampling/schedulers
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The BasicScheduler node is designed to manage and compute the schedule of sigma values used in the diffusion process for generating images. It abstractly handles the complexity of determining appropriate sigmas for each step, ensuring a smooth and coherent sampling process.

# Input types
## Required
- model
    - The model parameter is crucial because it represents the base model used for sampling. It affects how the scheduler calculates sigmas and is critical to the node's execution.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- scheduler
    - The scheduler parameter defines the type of schedule used for sigma calculation. It is a key determinant in the sampling process and directly affects the output sigmas.
    - Comfy dtype: STRING
    - Python dtype: str
- steps
    - The steps parameter specifies the number of steps to be taken in the sampling process. It is an important component controlling the granularity of sampling and affects the quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoise parameter adjusts the level of noise reduction applied during the sampling process. It plays an important role in final image quality by affecting the clarity and detail of the output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sigmas
    - The sigmas output provides the computed schedule sigma values for each step in the sampling process. These values are essential for the diffusion process and directly affect the quality of the final image.
    - Comfy dtype: FLOAT[1]
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
