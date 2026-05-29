# Documentation
- Class name: KSamplerWithNAG
- Category: sampling
- Output node: False
- Repo Ref: https://github.com/Delcado19/ComfyUI-NAG

Uses the provided model, positive and negative conditioning to denoise the latent image.

# Input types
## Required
- model
    - The model used for denoising the input latent.
    - Comfy dtype: MODEL
- seed
    - The random seed used for creating the noise.
    - Comfy dtype: INT
    - Default: `0`
- steps
    - The number of steps used in the denoising process.
    - Comfy dtype: INT
    - Default: `20`
- cfg
    - The Classifier-Free Guidance scale balances creativity and adherence to the prompt. Higher values result in images more closely matching the prompt however too high values will negatively impact quality.
    - Comfy dtype: FLOAT
    - Default: `8`
- nag_scale
    - Attention feature extrapolation strength. Valid range: 0.0 to 100.0; default: 5.0. NAG guidance is only applied when this is greater than 1.0.
    - Comfy dtype: FLOAT
    - Default: `5`
- nag_tau
    - Normalization threshold. Valid range: 1.0 to 10.0; default: 2.5. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Default: `2.5`
- nag_alpha
    - Blend between original and extrapolated attention. Valid range: 0.0 to 1.0; default: 0.25. Higher values produce stronger negative guidance.
    - Comfy dtype: FLOAT
    - Default: `0.25`
- nag_sigma_end
    - Stop applying NAG once sampling reaches this sigma. Valid range: 0.0 to 20.0; default: 0.0. Flow models such as Flux often work well around 0.75.
    - Comfy dtype: FLOAT
    - Default: `0`
- sampler_name
    - The algorithm used when sampling, this can affect the quality, speed, and style of the generated output.
    - Comfy dtype: COMBO
    - Options: `euler`, `euler_cfg_pp`, `euler_ancestral`, `euler_ancestral_cfg_pp`, `heun`, `heunpp2`, `exp_heun_2_x0`, `exp_heun_2_x0_sde`, `dpm_2`, `dpm_2_ancestral`, `lms`, `dpm_fast`, `dpm_adaptive`, `dpmpp_2s_ancestral`, `dpmpp_2s_ancestral_cfg_pp`, `dpmpp_sde`, `dpmpp_sde_gpu`, `dpmpp_2m`, `dpmpp_2m_cfg_pp`, `dpmpp_2m_sde`, `dpmpp_2m_sde_gpu`, `dpmpp_2m_sde_heun`, `dpmpp_2m_sde_heun_gpu`, `dpmpp_3m_sde`, `dpmpp_3m_sde_gpu`, `ddpm`, `lcm`, `ipndm`, `ipndm_v`, `deis`, `res_multistep`, `res_multistep_cfg_pp`, `res_multistep_ancestral`, `res_multistep_ancestral_cfg_pp`, `gradient_estimation`, `gradient_estimation_cfg_pp`, `er_sde`, `seeds_2`, `seeds_3`, `sa_solver`, `sa_solver_pece`, `ddim`, `uni_pc`, `uni_pc_bh2`, `legacy_rk`, `rk`, `rk_beta`, `deis_3m_ode`, `deis_2m_ode`, `deis_3m`, `deis_2m`, `res_6s_ode`, `res_5s_ode`, `res_3s_ode`, `res_2s_ode`, `res_3m_ode`, `res_2m_ode`, `res_6s`, `res_5s`, `res_3s`, `res_2s`, `res_3m`, `res_2m`
- scheduler
    - The scheduler controls how noise is gradually removed to form the image.
    - Comfy dtype: COMBO
    - Options: `simple`, `sgm_uniform`, `karras`, `exponential`, `ddim_uniform`, `beta`, `normal`, `linear_quadratic`, `kl_optimal`, `bong_tangent`, `beta57`
- positive
    - The conditioning describing the attributes you want to include in the image.
    - Comfy dtype: CONDITIONING
- negative
    - The conditioning describing the attributes you want to exclude from the image.
    - Comfy dtype: CONDITIONING
- nag_negative
    - The conditioning describing the attributes you want to exclude from the image for NAG.
    - Comfy dtype: CONDITIONING
- latent_image
    - The latent image to denoise.
    - Comfy dtype: LATENT
- denoise
    - The amount of denoising applied, lower values will maintain the structure of the initial image allowing for image to image sampling.
    - Comfy dtype: FLOAT
    - Default: `1`

# Output types
- LATENT
    - The denoised latent.
    - Comfy dtype: LATENT

# Source code
[View source repository on GitHub](https://github.com/Delcado19/ComfyUI-NAG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
