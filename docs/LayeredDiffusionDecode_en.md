# Documentation
- Class name: LayeredDiffusionDecode
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

The LayeredDiffusionDecode class performs pixel value decoding to reconstruct images with an alpha channel, separating transparency information from RGB components. It supports multiple diffusion model versions and integrates with the system for seamless image generation.

# Input types
## Required
- samples
    - The “samples” parameter provides the latent representations required for decoding. It serves as the foundation for image reconstruction, ensuring outputs align with the intended generation model.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- images
    - The “images” parameter provides the raw pixel data for decoding. This data is the primary input for alpha channel extraction and image reconstruction.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- sd_version
    - The “sd_version” parameter specifies the Stable Diffusion model version used for decoding. This determines the specific features and capabilities applied to the process.
    - Comfy dtype: StableDiffusionVersion
    - Python dtype: Enum
- sub_batch_size
    - The “sub_batch_size” parameter defines the number of images processed per decoding iteration, balancing computational efficiency and memory usage. It affects decoding throughput and resource allocation.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The “image” output represents the reconstructed RGB image data, constituting the primary result of the decoding process. It reflects the generative capability of the applied diffusion model.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The “mask” output provides alpha channel information, defining the transparency of the reconstructed image. It is a key component for further image processing and manipulation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
