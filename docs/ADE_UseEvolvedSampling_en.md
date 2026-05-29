# Use Evolved Sampling 🎭🅐🅓②
## Documentation
- Class name: ADE_UseEvolvedSampling
- Category: Animate Diff 🎭🅐🅓/② Gen2 nodes ②
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The ADE_UseEvolvedSampling node integrates advanced sampling techniques into the animation diffusion process, using evolutionary model sampling configurations to enhance the quality and efficiency of generated animations. It adjusts the sampling process based on model configurations and dynamic conditions, aiming to optimize visual fidelity and computational performance of the animation output.

## Input types
### Required
- model
    - Specifies the model used for the animation diffusion process, affecting the overall quality and characteristics of the generated animation.
    - Comfy dtype: MODEL
    - Python dtype: Model
- beta_schedule
    - Determines the beta schedule applied during sampling, influencing the smoothness and quality of animation transitions.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: BetaSchedules.ALIAS_LIST

### Optional
- m_models
    - Optional. Provides an additional model for the animation process, which may enhance the diversity and richness of the output.
    - Comfy dtype: M_MODELS
    - Python dtype: list
- context_options
    - Optional. Defines context‑specific options that can modify the behavior of the sampling process, customizing it to meet particular needs or preferences.
    - Comfy dtype: CONTEXT_OPTIONS
    - Python dtype: dict
- sample_settings
    - Optional. Specifies settings related to the sampling process, such as resolution and temporal adjustments, directly affecting the visual quality of the animation.
    - Comfy dtype: SAMPLE_SETTINGS
    - Python dtype: dict

## Output types
- model
    - Comfy dtype: MODEL
    - An enhanced model instance equipped with evolutionary sampling configurations to improve animation diffusion.
    - Python dtype: Model

## Usage tips
- Infra type: CPU
<!-- - Common nodes:
    - [KSampler](../../Comfy/Nodes/KSampler.md)
    - [ToBasicPipe](../../ComfyUI-Impact-Pack/Nodes/ToBasicPipe.md)
    - [SamplerCustom](../../Comfy/Nodes/SamplerCustom.md)
    - [LCMScheduler](../../ComfyUI-sampler-lcm-alternative/Nodes/LCMScheduler.md) -->

## Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
