# Documentation
- Class name: CreateMagicMask
- Category: KJNodes/masking/generate
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The CreateMagicMask node generates a pair of masks with varying complexity and detail. It leverages procedural generation principles to produce visually compelling patterns suitable for applications ranging from visual effects to artwork. The node operates using a set of parameters that define the characteristics of the generated masks, such as frame count, transitions, depth, distortion, seed, and frame dimensions. The result is dynamic, customizable masks that can be inverted to produce diverse effects.

# Input types
## Required
- frames
    - The 'frames' parameter determines the total number of frames generated for the mask sequence. It is a key factor in defining the animation length and complexity. More frames yield smoother transitions and more intricate patterns, but increase computational load.
    - Comfy dtype: INT
    - Python dtype: int
- transitions
    - The 'transitions' parameter specifies the number of transitions within the mask sequence. Each transition introduces variation in the pattern, contributing to the overall visual dynamics. It affects the diversity and speed at which the mask appearance evolves over time.
    - Comfy dtype: INT
    - Python dtype: int
- depth
    - The 'depth' parameter controls the level of detail in the generated mask by specifying the number of transformations applied to the base coordinates. Greater depth values enhance pattern complexity, creating more nested and intricate structures.
    - Comfy dtype: INT
    - Python dtype: int
- distortion
    - The 'distortion' parameter influences the degree of irregularity in the mask pattern. It introduces variability into the generated shapes and forms, allowing a wide range of visual effects. Higher distortion values can lead to more abstract and unpredictable patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The 'seed' parameter initializes the random number generator, ensuring reproducibility of the mask generation process. It is essential for obtaining consistent results when re-running the node with the same settings.
    - Comfy dtype: INT
    - Python dtype: int
- frame_width
    - The 'frame_width' parameter defines the width of each frame in the mask sequence. It plays a significant role in determining the resolution and scale of the visual output. Larger frame widths accommodate more detail but may require more memory and processing power.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The 'frame_height' parameter sets the height of each frame in the mask sequence, complementing frame_width to establish the overall dimensions of the visual canvas. It is a key factor in presenting and framing the generated content.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The 'mask' output provides the generated mask sequence as a stack of frames, with each frame representing a stage in the mask evolution. It is a critical component for further processing or direct use in visual applications.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor
- mask_inverted
    - The 'mask_inverted' output presents the inversion of the generated mask sequence, offering an alternative visual effect that can be used to create contrast or highlight different aspects of the content.
    - Comfy dtype: TORCH_TENSOR
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
