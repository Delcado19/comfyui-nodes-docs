# Documentation
- Class name: SeedExplorer
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

SeedExplorer is a node designed to manipulate and generate noise patterns based on provided seeds and additional parameters, aiming to stimulate and facilitate creative processes in noise generation tasks.

# Input types
## Required
- latent
    - Latent variables are essential for the SeedExplorer node, as they provide the foundational structure for noise generation, influencing the overall quality and characteristics of the output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- seed_prompt
    - Seed prompts are critical for guiding the noise generation process, allowing users to inject specific patterns or styles into the output.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - The enable_additional parameter determines whether additional seed variations are applied, which can introduce diversity and complexity into the generated noise.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_mode
    - The noise_mode parameter determines the computational resources used for noise generation, with GPU recommended for intensive tasks and CPU for less demanding operations.
    - Comfy dtype: COMBO
    - Python dtype: str
- initial_batch_seed_mode
    - This parameter controls the seed pattern of the initial noise batch, potentially affecting the overall consistency and coherence of the generated noise patterns.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- additional_seed
    - The additional seed parameter, when used, introduces an additional layer of variation to the noise, contributing to the diversity of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - The additional strength parameter adjusts the impact of the additional seed, allowing fine-tuning of the intensity of noise variations.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- noise
    - The output noise represents the final result of the noise generation process, incorporating the applied creative inputs and parameters.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
