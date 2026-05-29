# Create Raw Sigma Schedule 🎭🅐🅓
## Documentation
- Class name: ADE_RawSigmaSchedule
- Category: Animate Diff 🎭🅐🅓/sample settings/sigma schedule
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

This node is designed to generate a sigma schedule from a given beta schedule. It converts the beta schedule into a sigma schedule, which is crucial for controlling the noise level in diffusion models, especially in the context of animation and image synthesis.

## Input types
### Required
- raw_beta_schedule
    - Specify the beta schedule to be converted into a sigma schedule. This parameter is essential for determining the progression and intensity of the noise level throughout the diffusion process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- linear_start
    - Define the starting point for the linear interpolation used in sigma schedule generation. It affects the initial noise level in the diffusion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- linear_end
    - Set the endpoint for the linear interpolation in the sigma schedule, influencing the final noise level in the diffusion process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampling
    - Determine the sampling method used in the sigma schedule, affecting how the noise level is interpolated and applied. The type "ModelSamplingType" should be understood as a placeholder for the actual chosen sampling method.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lcm_original_timesteps
    - Specify the original number of time steps to consider when using LCM sampling, affecting the granularity of the sigma schedule.
    - Comfy dtype: INT
    - Python dtype: int
- lcm_zsnr
    - A boolean flag indicating whether to apply zero signal-to-noise ratio (zSNR) adjustment to the sigma schedule, enhancing compatibility with certain diffusion processes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Output types
- sigma_schedule
    - Comfy dtype: SIGMA_SCHEDULE
    - The generated sigma schedule, outlining the specific noise levels to be applied at each step of the diffusion process.
    - Python dtype: SigmaSchedule

## Usage tips
- Infra type: CPU
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
