# Documentation
- Class name: RegionalSeedExplorerMask
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The RegionalSeedExplorerMask node aims to enhance the creative process by introducing variations in the noise field based on specified seed prompts and additional parameters. It manipulates noise to generate diverse visual elements that can be used in various artistic and design applications.

# Input types
## Required
- mask
    - The mask parameter is crucial as it defines the region in the noise field that will be affected by the seed exploration process. It serves as a guide for the node to understand where to apply variations.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- noise
    - The noise parameter is the base noise field that the node will operate on. It is essential for generating the varied output, as it forms the foundation upon which seed exploration is applied.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- seed_prompt
    - The seed prompt is a string containing variation seeds. It is a critical input as it directly influences the type of variations that will be introduced into the noise field.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - This parameter controls whether to use additional seed prompts. It is important as it determines the complexity and diversity of variations applied to the noise field.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_mode
    - The noise mode parameter determines the computational device used for processing the noise. It is important for determining the degree and efficiency of variation application.
    - Comfy dtype: COMBO[GPU(=A1111), CPU]
    - Python dtype: str
## Optional
- additional_seed
    - The additional seed parameter, when used, provides an additional level of control over the variation process. It allows for more specific variations based on the provided seeds.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - The additional intensity parameter adjusts the strength of the additional variations. It is important as it allows fine-tuning of the variation effects on the noise field.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- noise
    - The output noise is the result of the seed exploration process. It represents the noise field with applied variations and can be used further in downstream applications.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
