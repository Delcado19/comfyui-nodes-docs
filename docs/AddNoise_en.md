# Documentation
- Class name: AddNoise
- Category: _for_testing/custom_sampling/noise
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AddNoise node is designed to introduce random noise into latent images, a critical step in the process of generating synthetic images. It scales the noise according to the specified sigmas and then combines the noise with the latent image to produce a noisy output. This node is essential for simulating the noise characteristics inherent in image data, thereby enhancing the diversity and realism of the generated images.

# Input types
## Required
- model
    - The model parameter is crucial for the AddNoise node, as it determines the model used for sampling and processing latent images. It is the foundation upon which the node executes, directly influencing the quality and characteristics of the generated noisy images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- noise
    - The noise parameter is essential for the AddNoise node, as it provides the source of randomness that will be integrated into the latent image. The type and properties of the noise can significantly affect the diversity and unpredictability of the output image.
    - Comfy dtype: NOISE
    - Python dtype: Callable[..., torch.Tensor]
- sigmas
    - The sigmas parameter determines the scale of the noise to be added to the latent image. It plays a critical role in controlling the noise level and the visual appearance of the synthetic image.
    - Comfy dtype: SIGMAS
    - Python dtype: List[float]
- latent_image
    - The latent_image parameter is the core input of the AddNoise node, representing the image data that will be modified by adding noise. Its structure and content are vital to the node's functionality and the final outcome of the image synthesis process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Output types
- latent
    - The output latent parameter represents the noisy image obtained after applying the AddNoise node. It encapsulates the synthetic data carrying the desired noise characteristics, ready for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
