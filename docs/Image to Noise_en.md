# Documentation
- Class name: WAS_Image_To_Noise
- Category: WAS Suite/Image/Generate/Noise
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_To_Noise node is designed to convert input images into noise patterns. It achieves a noisy aesthetic by quantizing colors, randomizing pixel data, and optionally blending with Gaussian blur. This node serves as a creative tool for generating noise-based images, applicable to artistic expression, data augmentation, and other uses.

# Input types
## Required
- images
    - The 'images' parameter is critical, as it defines the input images the node will process into noise patterns. This conversion significantly impacts the final output, making this parameter essential to the node's execution and the quality of generated images.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- num_colors
    - The 'num_colors' parameter determines the number of colors used to quantize the image, affecting the complexity of the noise pattern. It plays a key role in the node's operation by controlling color depth and the resulting visual noise effect.
    - Comfy dtype: INT
    - Python dtype: int
- black_mix
    - The 'black_mix' parameter controls the amount of black noise blended into the image, adding a layer of complexity to the noise pattern. It is important for achieving the desired noise level in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- gaussian_mix
    - The 'gaussian_mix' parameter specifies the degree of Gaussian blur to apply, which can smooth the noise and create a more subtle noise effect. It is an important factor in fine-tuning the visual appearance of the noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - The 'brightness' parameter adjusts the brightness of the noise image, enhancing or reducing the contrast of the noise pattern. It is an important factor in controlling the overall appearance of the noise effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- output_mode
    - The 'output_mode' parameter determines the format of the output. Selecting 'batch' merges images into a single tensor, while 'list' keeps them as a list of separate images. This affects how results are structured for downstream tasks.
    - Comfy dtype: COMBO['batch', 'list']
    - Python dtype: Literal['batch', 'list']
- seed
    - The 'seed' parameter initializes the random number generator, ensuring reproducibility of the noise pattern. It is important for generating consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The 'image' output parameter represents the converted noise image. It is the primary result of the node's functionality, containing the noise pattern generated from the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
