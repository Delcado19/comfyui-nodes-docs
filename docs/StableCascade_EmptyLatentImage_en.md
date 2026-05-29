# Documentation
- Class name: StableCascade_EmptyLatentImage
- Category: latent/stable_cascade
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The StableCascade_EmptyLatentImage node is designed to generate latent representations of images for different stages of the cascade model. It operates by creating zero-filled tensors that correspond to dimensions specified by the input parameters, which is crucial for initializing the latent state in the stable cascade process.

# Input types
## Required
- width
    - The width parameter defines the width of the latent image, crucial for determining the dimensions of the generated tensor. It affects the structure of the latent space and consequently the quality of the cascade model's output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter specifies the height of the latent image, a key factor in the tensor shape. It plays an important role in the overall structure of the latent representation and affects the performance of the cascade model.
    - Comfy dtype: INT
    - Python dtype: int
- compression
    - The compression parameter controls the level of compression applied to the latent image dimensions. It is essential for managing the balance between model complexity and computational efficiency, as well as the fidelity of the cascade model's output.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- batch_size
    - The batch_size parameter represents the number of samples to be processed in one iteration. It is important for optimizing the execution of the node and can affect the throughput of the cascade model.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- stage_c
    - The stage_c output provides the latent representation of the coarse stage of the cascade, which is a key component in the initial phase of image generation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- stage_b
    - The stage_b output provides the latent representation of the base stage of the cascade, which is crucial for the subsequent stages of image refinement.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
