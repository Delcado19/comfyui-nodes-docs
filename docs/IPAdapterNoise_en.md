# Documentation
- Class name: IPAdapterNoise
- Category: ipadapter/utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterNoise node is designed to introduce controlled noise into images for purposes such as data augmentation or enhancing model robustness. It offers a selection of noise types and allows adjustment of noise strength, providing a flexible solution for different use cases.

# Input types
## Required
- type
    - The "type" parameter determines the type of noise to generate, which significantly affects the result of noise application. This is a critical decision point, as different noise types have different characteristics and affect images in different ways.
    - Comfy dtype: COMBO[fade, dissolve, gaussian, shuffle]
    - Python dtype: str
- strength
    - The "strength" parameter adjusts the intensity of the noise, directly affecting the degree of image alteration. This is an important parameter that allows users to tune the noise effect to meet their specific needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- blur
    - The "blur" parameter applies Gaussian blur to the noise, which can help smooth the noise in certain applications. It plays a role in the final visual result of the noise, providing a means to further refine the noise texture.
    - Comfy dtype: INT
    - Python dtype: int
- image_optional
    - The "image_optional" parameter allows providing an optional image as the basis for noise generation. This parameter is important because it enables noise to be applied to a specific image rather than a default blank image, offering greater flexibility and customization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- noise
    - The "noise" output is the primary result of the IPAdapterNoise node, representing the image with introduced noise. It is a key component as it carries the applied noise effect, ready for use in subsequent processes or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/cubiq/ComfyUI_IPAdapter_plus)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
