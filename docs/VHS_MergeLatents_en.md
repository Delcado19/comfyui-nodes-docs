# Documentation
- Class name: MergeLatents
- Category: Video Helper Suite 🎥🅥🅗🅢/latent
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite.git

The MergeLatents node aims to merge two sets of latent representations into a single coherent structure. It intelligently applies a specified merge strategy to ensure that the latent dimensions from both sets match, possibly scaling one set to match the other. This node plays a key role in integrating information from different sources into a unified format that can be further processed or analyzed.

# Input types
## Required
- latents_A
    - The parameter 'latents_A' represents the first set of latent representations to be merged. It is crucial because it constitutes half of the input required for the merging process. The dimensions and characteristics of these latent representations significantly affect the node's functionality.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latents_B
    - The parameter 'latents_B' contains the second set of latent representations for merging. It is equally important as 'latents_A', and together with 'latents_A', constitutes the complete input for the node's operation. The effectiveness of the node in merging depends on the compatibility and alignment of 'latents_A' and 'latents_B'.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- merge_strategy
    - The parameter 'merge_strategy' indicates how the latent representations should be merged. It is crucial for determining the resizing and alignment process that the node will follow in order to combine the latent representations into a harmonious structure.
    - Comfy dtype: str
    - Python dtype: str
- scale_method
    - The parameter 'scale_method' specifies the method used to scale the latent representations during the merging process. It is important because it affects the quality and resolution of the merged latent representations.
    - Comfy dtype: str
    - Python dtype: str
- crop
    - The parameter 'crop' defines how the latent representations should be cropped if needed during the merging process. It plays a crucial role in maintaining the integrity of the merged latent representations.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- LATENT
    - The output 'LATENT' contains the merged latent representations. It is the primary result of the node's operation and is of significant value for subsequent processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- count
    - The output 'count' provides the number of merged latent representations. It helps to understand the scope of the merge operation and can be used for further processing.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-VideoHelperSuite)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
