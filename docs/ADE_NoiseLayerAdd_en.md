# Documentation
- Class name: NoiseLayerAddNode
- Category: Animate Diff 🎭🅐🅓/noise layers
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The NoiseLayerAddNode class is designed to manage the addition of noise layers to animations. It is responsible for creating and organizing noise layers based on specified parameters, ensuring seamless integration of noise into the animation process to enhance diversity and detail.

# Input types
## Required
- batch_offset
    - The batch offset parameter is crucial for managing the sequence of noise layers in an animation. It determines the starting point of noise application, influencing the distribution and pattern of noise throughout the entire animation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The noise type parameter defines the category of noise to be added to the animation. It is a key determinant in shaping the visual characteristics of the noise, affecting the final aesthetic appeal of the animation output.
    - Comfy dtype: NoiseLayerType.LIST
    - Python dtype: str
- seed_gen_override
    - The seed generation override parameter allows customization of the noise generation process. It provides a method to control the randomness and uniqueness of noise patterns, offering a layer of fine-tuning for the animation's noise characteristics.
    - Comfy dtype: SeedNoiseGeneration.LIST_WITH_OVERRIDE
    - Python dtype: str
- seed_offset
    - The seed offset parameter plays an important role in adjusting the starting point of noise patterns. It can significantly alter the initial noise configuration, leading to variations in how noise is presented in the animation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_weight
    - The noise weight parameter adjusts the intensity of noise added to the animation. It is a key factor in controlling the prominence of the noise effect, allowing noise to be balancedly integrated into the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_noise_layers
    - The previous noise layers parameter refers to the existing set of noise layers. It is important because it provides context for integrating new noise layers, ensuring continuity and consistency within the animation's noise structure.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: Optional[NoiseLayerGroup]
- mask_optional
    - The optional mask parameter is used to define an optional mask for the noise layer. It can be used to selectively apply noise to specific areas of the animation, providing a degree of control over noise distribution.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]
- seed_override
    - The seed override parameter allows manual specification of the seed for noise generation. It is particularly suitable for replicating or customizing specific noise patterns in the animation.
    - Comfy dtype: INT
    - Python dtype: Optional[int]

# Output types
- noise_layers
    - The output noise layers represent the updated set of noise layers after adding a new noise layer. This output is important as it reflects the current state of the animation's noise structure, providing a foundation for further processing or analysis.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: NoiseLayerGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
