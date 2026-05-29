# Documentation
- Class name: SetLatentNoiseMask
- Category: latent/inpaint
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SetLatentNoiseMask node is designed to apply a noise mask to a set of latent samples. It plays a key role in the inpainting process by allowing selective manipulation of latent space representations. This node ensures that masked regions are appropriately modified according to the provided mask, which is crucial for generating coherent and accurate visual outputs.

# Input types
## Required
- samples
    - “samples” parameter is a collection of latent representations that will be modified by the noise mask. It is essential for the node's operation because it determines the data that will undergo the masking process. This parameter directly affects the node's execution and the final visual result.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- mask
    - “mask” parameter defines the region of latent samples that needs to be masked. It is critical to the node because it determines which parts of the latent space will be altered. The shape of the mask must be compatible with the latent samples for the node to work correctly.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- modified_samples
    - “modified_samples” output consists of latent samples that have had the noise mask applied. This output is important because it represents the primary result of the node and will be used in subsequent stages of the inpainting workflow.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
