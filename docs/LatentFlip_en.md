# Documentation
- Class name: LatentFlip
- Category: latent/transform
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The LatentFlip node is designed to transform latent space representations by applying a flip operation along a specified axis. This node plays a key role in manipulating latent features, which is essential for tasks such as data augmentation or exploring latent space structure.

# Input types
## Required
- samples
    - The "samples" parameter is critical as it contains the latent representations that the node will process. It directly affects the node's ability to perform the flip operation and, in turn, influences the output.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- flip_method
    - The "flip_method" parameter determines along which axis the latent samples will be flipped. It is a key component as it determines the nature of the transformation applied to the latent space.
    - Comfy dtype: COMBO['x-axis: vertically', 'y-axis: horizontally']
    - Python dtype: str

# Output types
- samples
    - The 'samples' output contains the flipped latent representations, which is the result of the node's operation. This output is important as it represents the transformed data that can be used for downstream tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
