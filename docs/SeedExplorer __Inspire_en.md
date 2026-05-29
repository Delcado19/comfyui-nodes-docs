
# Documentation
- Class name: SeedExplorer __Inspire
- Category: InspirePack/Prompt
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inspire node in SeedExplorer is designed to facilitate the exploration and management of seed values during the generation process. It dynamically adjusts and applies seed values to influence the generation process, providing a method to explore variations and ensure consistency in generated outputs. By manipulating seed values, this node enhances the controllability and diversity of generation results, making it an important tool in creative workflows.

# Input types
## Required
- latent
    - Represents the initial latent space or image data that the node will operate on using the provided seed value. It serves as the starting point for the seed exploration process, laying the foundation for subsequent variations.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- seed_prompt
    - A string input containing the seed value and possibly other instructions for generating variations. It guides the generation process by specifying the seed value and its intended effects, providing more precise control over the creative process.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - A boolean flag to enable or disable the application of additional seed and strength parameters to further manipulate the generation process. This provides users with more fine-grained control options.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- additional_seed
    - An integer representing an additional seed value to be applied alongside the main seed prompt. It provides finer control over generation results, increasing the diversity of outputs.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - A floating-point value specifying the strength of the additional seed's influence on the generation process. It allows fine-tuning of the additional seed's impact, providing more precise adjustment capabilities for creative work.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - Specifies whether noise generation should be performed on GPU or CPU, affecting the performance and efficiency of the generation process. This provides flexibility for users with different hardware configurations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- initial_batch_seed_mode
    - Determines the seed application mode for the initial batch, influencing how seeds are applied and varied across multiple generation processes. This helps achieve the desired consistency or variability in batch generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- noise
    - The processed noise tensor produced after applying the seed values and additional parameters. It represents the direct output of the seed exploration process, providing a foundation for subsequent image generation or processing.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
