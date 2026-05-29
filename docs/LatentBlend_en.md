# Documentation
- Class name: LatentBlend
- Category: _for_testing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentBlend node is designed to seamlessly fuse and blend two sets of latent samples through a specified blend factor. It operates by adjusting the contribution of each sample set, allowing the creation of composite representations that can be used for further processing or visualization.

# Input types
## Required
- samples1
    - The first set of latent samples to be blended with the other set. It plays a crucial role in determining the initial state of the blended output.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- samples2
    - The second set of latent samples to be blended with the first set. It is equally important in influencing the final blended result.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- blend_factor
    - A float that determines the degree to which the second set of samples is blended with the first set. It is critical for controlling the balance between the two sets of samples in the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- blend_mode
    - Specifies the blending mode used when combining samples. Currently, the only supported option is 'normal'.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- samples_out
    - The output is a set of blended latent samples, formed by combining the input samples with the specified blend factor.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
