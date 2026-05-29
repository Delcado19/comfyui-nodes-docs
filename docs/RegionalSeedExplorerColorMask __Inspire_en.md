
# Documentation
- Class name: RegionalSeedExplorerColorMask __Inspire
- Category: InspirePack/Regional
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

RegionalSeedExplorerColorMask __Inspire node is specifically used to explore seed variations within a specific region defined by a color mask. It modifies the noise pattern based on seed prompts and additional seed information, allowing targeted adjustments during generation.

# Input types
## Required
- color_mask
    - Color mask used to define the region of interest for seed exploration. It determines where seed variations will be applied.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask_color
    - Specific color in the mask used to identify the target region where seed variations will be applied.
    - Comfy dtype: STRING
    - Python dtype: str
- noise
    - Initial noise pattern to which seed variations will be applied. It serves as the basis for generating targeted adjustments.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- seed_prompt
    - A comma-separated list of seed prompts that guide the variations applied within the defined region.
    - Comfy dtype: STRING
    - Python dtype: str
- enable_additional
    - A flag indicating whether additional seed information should be considered during the exploration process.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- additional_seed
    - Additional seed values to include in the exploration process, providing further customization.
    - Comfy dtype: INT
    - Python dtype: int
- additional_strength
    - Strength of the influence of the additional seeds on the exploration process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_mode
    - Specifies whether noise processing should be done on CPU or GPU, impacting performance and resource utilization.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- noise
    - Modified noise pattern after applying seed variations and additional seed information.
    - Comfy dtype: NOISE
    - Python dtype: torch.Tensor
- mask
    - Original color mask used to define the target region, returned for reference or further processing.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
