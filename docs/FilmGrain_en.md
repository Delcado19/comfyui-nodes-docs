# Documentation
- Class name: FilmGrain
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The FilmGrain node introduces a random noise pattern into the image, simulating the texture of film grain. This process enhances visual aesthetics by adding depth and texture, commonly used in artistic and stylized post-processing.

# Input types
## Required
- image
    - The image parameter is critical because it is the base media to which the film grain effect will be applied. It determines the visual quality of the output and serves as the foundation for the entire operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- intensity
    - Intensity controls the size of the noise applied to the image. It affects the prominence of the grain effect, with higher values resulting in more noticeable grain patterns.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - Scale adjusts the size of the noise pattern relative to the image. A larger scale results in more pronounced noise features, which can add a more dramatic effect to the film grain appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- temperature
    - Temperature adjusts the color balance of the image, adding a sense of warmth or coolness to the final output. This parameter can subtly alter the mood and overall feel of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- vignette
    - Vignette controls the intensity of the fade at the edges of the image, creating a more focused and dramatic visual effect. It can guide the viewer's attention toward the center of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - The output image is the result after applying the film grain effect, including the adjusted intensity, scale, temperature, and vignette parameters. It represents the final creative output of the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
