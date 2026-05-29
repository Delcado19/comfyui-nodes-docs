# Documentation
- Class name: MixingMaskGeneratorNode
- Category: mask/generation
- Output node: False
- Repo Ref: https://github.com/ttulttul/ComfyUI-Iterative-Mixer

This node aims to generate noise masks for the iterative blending process, providing a flexible mechanism for creating various types of masks that can improve blending quality and results.

# Input types
## Required
- mask_type
    - The mask type parameter determines the type of noise mask to generate, such as Perlin or random. It fundamentally affects the nature of the output mask and its suitability for different blending scenarios.
    - Comfy dtype: COMBO[perlin,random]
    - Python dtype: str
- seed
    - The seed parameter ensures reproducibility of the noise generation process. It is essential for obtaining consistent results across different runs, which is particularly important for experimental and testing purposes.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width parameter defines the horizontal dimension of the noise mask. It affects the spatial resolution of the mask, thereby influencing its ability to capture details in the blended output.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Similar to the width parameter, the height parameter defines the vertical dimension of the noise mask, affecting its spatial resolution and the level of detail it can represent.
    - Comfy dtype: INT
    - Python dtype: int
- batch_size
    - The batch size parameter determines the number of noise masks generated in a single operation. It is important for processing efficiency and can affect the throughput of nodes in the pipeline.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- perlin_scale
    - When generating Perlin noise masks, this parameter adjusts the scale of the noise, which affects the level of detail and overall appearance of the mask. It is crucial for tuning the mask to fit specific blending requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- masks
    - The output masks are essential to the iterative blending process, serving as the medium for blending and combining different elements. They play a critical role in determining the final result of the blend.
    - Comfy dtype: TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ttulttul/ComfyUI-Iterative-Mixer)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
