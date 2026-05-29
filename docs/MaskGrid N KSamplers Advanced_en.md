
# Documentation
- Class name: `MaskGrid N KSamplers Advanced`
- Category: `Bmad/experimental`
- Output node: `False`
- Repo Ref: https://github.com/Suzie1/ComfyUI_Bmad_nodes

This node is specifically designed to apply advanced sampling techniques in a grid format to generate or modify latent space. It utilizes multiple samplers and masking strategies to create or alter latent variables, enabling complex operations on regions within the grid, such as forking and merging. The functionality of this node is crucial for tasks that require precise control over the distribution of feature space in generated images or patterns.

# Input types
## Required
- model
    - Specifies the model for sampling. It is essential for defining the generative model architecture that will be used during the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- add_noise
    - Indicates whether noise should be added during the sampling process. This parameter can significantly affect the diversity and quality of the generated latent variables.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- noise_seed
    - Sets the seed for noise generation, ensuring reproducibility when adding noise to the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Defines the number of steps to be executed during the sampling process. This parameter controls the depth of the sampling operation, affecting the detail and quality of the generated latent variables.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Specifies the conditioning factor of the generative model, affecting the strength of conditioning during the sampling process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determines the specific sampler algorithm to use. Different samplers can have different effects on the generated latent variables.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Selects the scheduler for the sampling process, which can affect the progress and outcome of the sampling operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- positive
    - Provides positive conditioning input to guide sampling towards desired attributes or features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- negative
    - Provides negative conditioning input to guide sampling away from certain attributes or features.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- latent_image
    - Represents the initial latent image to be modified through sampling and masking operations. This parameter is the starting point of the node's complex operations.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- start_at_step
    - Defines the starting step of the sampling process, allowing more control over the sampling progression.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - Defines the ending step of the sampling process, providing a boundary for the sampling operation.
    - Comfy dtype: INT
    - Python dtype: int
- return_with_leftover_noise
    - Indicates whether the output should include residual noise from the sampling process. This can be useful for further operations or analysis.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: bool
- mask
    - Specifies the mask to be applied to the latent image, enabling targeted modifications within the grid.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- rows
    - Determines the number of rows in the grid format. This parameter affects the spatial organization of latent variables within the grid.
    - Comfy dtype: INT
    - Python dtype: int
- columns
    - Determines the number of columns in the grid format. This parameter affects the spatial organization of latent variables within the grid.
    - Comfy dtype: INT
    - Python dtype: int
- mode
    - Specifies the operation mode, such as forking before or after sampling. This choice can significantly affect the outcome of the operation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- latent
    - The latent image modified after applying advanced sampling and masking techniques. This output is important for downstream tasks that rely on spatially manipulated features within the latent variables.
    - Comfy dtype: LATENT
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/Suzie1/ComfyUI_Bmad_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
