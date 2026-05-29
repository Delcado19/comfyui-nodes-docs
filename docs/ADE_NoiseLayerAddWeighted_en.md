# Documentation
- Class name: NoiseLayerAddWeightedNode
- Category: Animate Diff 🎭🅐🅓/noise layers
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

The NoiseLayerAddWeightedNode class is designed to operate and introduce noise into the system in a weighted manner. It is a key component in the animation process, allowing fine-tuning of noise characteristics. The main function of this node is to add noise layers to existing groups, ensuring a balanced integration of new noise elements with existing ones, thereby enhancing the overall diversity and complexity of the animation.

# Input types
## Required
- batch_offset
    - The batch_offset parameter is crucial for managing the processing order of noise layers. It affects the overall structure and organization of noise layers in the animation, ensuring that each layer is correctly positioned in the sequence.
    - Comfy dtype: INT
    - Python dtype: int
- noise_type
    - The noise_type parameter defines the type of noise to be added to the animation. It plays an important role in determining the visual and structural aspects of the noise, thereby influencing the final output of the animation.
    - Comfy dtype: NoiseLayerType.LIST
    - Python dtype: str
- seed_gen_override
    - The seed_gen_override parameter allows customization of the noise generation process. It is important for creating unique noise patterns and ensuring the desired randomness in the random elements of the animation.
    - Comfy dtype: SeedNoiseGeneration.LIST_WITH_OVERRIDE
    - Python dtype: str
- seed_offset
    - The seed_offset parameter is crucial for controlling randomness in noise generation. It ensures that each noise layer has a unique and unpredictable quality, contributing to the diversity of the animation.
    - Comfy dtype: INT
    - Python dtype: int
- noise_weight
    - The noise_weight parameter adjusts the intensity of the noise added to the animation. It is a key factor in achieving the desired visual effect and ensuring that the noise remains balanced with the fundamental elements of the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- balance_multiplier
    - The balance_multiplier parameter is used to fine-tune the balance between existing noise and newly added noise. It ensures that the overall noise effect is harmonious and integrated into the animation.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- prev_noise_layers
    - The prev_noise_layers parameter is an optional group of previously generated noise layers. It allows continuation and building upon the existing noise structure, maintaining consistency and coherence in the animation.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: Optional[NoiseLayerGroup]
- mask_optional
    - The mask_optional parameter is an optional tensor that can be used to selectively apply noise to specific areas of the animation. It provides control over where the noise effect is most prominent.
    - Comfy dtype: MASK
    - Python dtype: Optional[torch.Tensor]
- seed_override
    - The seed_override parameter provides an optional override for the seed used in noise generation. It can be used to ensure reproducibility or introduce specific noise patterns into the animation.
    - Comfy dtype: INT
    - Python dtype: Optional[int]

# Output types
- noise_layers
    - The output of NoiseLayerAddWeightedNode is a modified group of noise layers, including the newly added weighted noise layer. This output is important as it forms the foundation for further processing and animation development.
    - Comfy dtype: NOISE_LAYERS
    - Python dtype: NoiseLayerGroup

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
