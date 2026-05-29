# Documentation
- Class name: SeedVarianceEnhancer
- Category: advanced/conditioning
- Output node: False
- Repo Ref: https://github.com/ChangeTheConstants/SeedVarianceEnhancer

Adds controlled random noise to text embeddings within a conditioning input, with configurable strength, step timing, and prompt masking. Useful for introducing controlled variation in generated outputs based on seed-driven noise injection into the conditioning pipeline.

# Input types
## Required
- conditioning
    - The input conditioning data to which noise will be applied.
    - Comfy dtype: CONDITIONING
- randomize_percent
    - The percentage of embedding values to which random noise is added.
    - Comfy dtype: FLOAT
    - Default: `50`
- strength
    - The scale of the random noise.
    - Comfy dtype: FLOAT
    - Default: `20`
- noise_insert
    - On which steps of the generation process the noisy text embedding is used.
    - Comfy dtype: COMBO
    - Options: `noise on beginning steps`, `noise on ending steps`, `noise on all steps`, `disabled`
- steps_switchover_percent
    - The percentage of steps processed before the switch between noisy and original embeddings occurs. Use this formula: (100/TOTALSTEPS) * STEPS - 1
    - Comfy dtype: FLOAT
    - Default: `20`
- seed
    - The random seed used for embedding value selection and noise generation. Add 1 billion to strength to revert to v2.1 seed behavior.
    - Comfy dtype: INT
    - Default: `0`
- mask_starts_at
    - Which end of the prompt will be protected from noise. The mask that blocks noise will expand from the specified end a percentage of the way towards the opposite end.
    - Comfy dtype: COMBO
    - Options: `beginning`, `end`
- mask_percent
    - The percentage of the prompt that will be protected from noise. Settings of "beginning" and "50" results in the first half of the prompt being protected.
    - Comfy dtype: FLOAT
    - Default: `0`
- log_to_console
    - Print out useful information to the ComfyUI console, including suggested strength values. You are using version 2.2.
    - Comfy dtype: BOOLEAN
    - Default: `false`

# Output types
- CONDITIONING
    - The modified conditioning with selectively noised embeddings applied according to the specified parameters.
    - Comfy dtype: CONDITIONING

# Source code
[View source repository on GitHub](https://github.com/ChangeTheConstants/SeedVarianceEnhancer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
