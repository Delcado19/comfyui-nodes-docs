# Documentation
- Class name: NoiseLayerReplaceNode
- Category: Animate Diff 🎭🅐🅓/noise layers
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

NoiseLayerReplaceNode is designed to manipulate and generate noise layers in a model for animation purposes. It replaces existing noise with new noise according to specified parameters, allowing for dynamic and diverse animation effects.

# Input types
## Required
- batch_offset
    - The batch offset parameter is crucial for managing sequences of noise layers in animations. It determines the starting point in the data batch, which is critical for ensuring proper layer manipulation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The noise type parameter determines the type of noise layer that will be created. It is a key factor in the overall noise generation process, affecting the characteristics of the noise and the final animation effect.
    - Comfy dtype: NoiseLayerType.LIST
    - Python dtype: str
- seed_gen_override
    - The seed generation override parameter allows customization of the seed generation process for noise layers. This can be particularly important when the goal is to achieve specific noise patterns or effects in animations.
    - Comfy dtype: SeedNoiseGeneration.LIST_WITH_OVERRIDE
    - Python dtype: str
- seed_offset
    - The seed offset parameter is used to adjust the seed value used for noise generation. This can significantly influence the generated noise patterns, providing a way to introduce variation in animations.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- prev_noise_layers
    - The previous noise layer parameter is used to specify the existing noise layer that will be replaced or modified. It plays a critical role in the continuity and evolution of noise in animations.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: NoiseLayerGroup
- mask_optional
    - The mask optional parameter provides a way to selectively apply noise layers to certain parts of the animation. It can be used to introduce targeted effects or protect certain areas from noise application.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- seed_override
    - The seed override parameter allows manual control over the seed value used for noise generation. This can be particularly useful for fine-tuning specific aspects of noise in animations.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- noise_layers
    - The noise layer output contains the noise layers that have been created or modified and added to the animation. These layers are critical to the visual appearance and behavior of the animation sequence.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: NoiseLayerGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
