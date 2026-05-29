# Documentation
- Class name: IterativeMixingSamplerNode
- Category: sampling/custom_sampling/samplers
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

The node enhances diversity and quality of generated samples by iteratively mixing latent variables. It finely controls output by gradually adjusting each latent variable's influence during sampling.

# Input types
## Required
- model
- Model parameters are critical because they define the generation network used by the sampler. They determine the architecture and learned outcomes the node will leverage to create new samples.
    - Comfy dtype: MODEL
    - Python dtype: comfy.model_management.Model
- sampler
- Sampler parameters are essential for defining the sampling strategy. They affect how latent variables are mixed and interact, influencing sample diversity and consistency.
    - Comfy dtype: COMBO
    - Python dtype: str
- alpha_1
- Alpha_1 controls the initial influence of the primary latent variable in the mixing process. Adjusting this parameter can markedly change the characteristics of the generated content, making it a key factor for achieving desired results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blending_schedule
- Mix progress defines the temporal advancement of the mixing process. It ensures smooth transitions between different latent influences, aiding natural evolution of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- blending_function
- This function determines how latent variables are combined during mixing. It plays a crucial role in shaping the final features of generated samples by controlling their overall composition.
    - Comfy dtype: COMBO
    - Python dtype: str
- normalize_on_mean
- Enabling this parameter normalizes latent variables by their means. This promotes a more balanced and predictable mixing process, essential for maintaining output consistency.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- start_blending_at_pct
- This parameter sets the starting point of the mixing process as a percentage of total sampling steps. It is important for timing the introduction of mixing, affecting overall sample quality and diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- stop_blending_at_pct
- This parameter defines the stopping point of the mixing process, helping control its duration and thus influencing the final characteristics of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_blending_at_pct
- This parameter limits mixing influence to a specified percentage, ensuring mixing does not overwhelm base latent variables and maintains balance during generation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_min
- The blend_min parameter sets the minimum mixing value, ensuring the contribution of mixed latent variables is not too subtle and remains effective in shaping output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blend_max
- By setting an upper bound, blend_max ensures the influence of mixed latent variables does not exceed a threshold, preserving diversity without compromising the base model's integrity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- perlin_mode
- The perlin_mode parameter introduces a noise pattern during mixing, adding randomness that can enhance creativity and variability of generated samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- perlin_strength
- Perlin intensity determines the strength of the noise pattern, directly affecting the degree of variation during mixing and thus output diversity.
    - Comfy dtype: FLOAT
    - Python dtype: float
- perlin_scale
- The scale of Perlin noise influences the granularity of the pattern, affecting fine details and texture of generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rewind
- Enabling replay allows the node to revisit previous steps in the sampling process, providing greater control over iterative mixing and potentially yielding finer results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- rewind_min
- rewind_min sets the lower bound of the replay process, preventing the node from rewinding too far in sampling steps, which could undo progress.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rewind_max
- rewind_max defines the upper bound of the replay process, avoiding excessive backtracking that might cause loss of desired features in generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- sampler
- The output sampler is a configured sampling strategy instance that combines various parameters to produce diverse, high‑quality samples, reflecting fine‑grained mixing of latent variables.
    - Comfy dtype: SAMPLER
    - Python dtype: comfy.samplers.KSampler

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
