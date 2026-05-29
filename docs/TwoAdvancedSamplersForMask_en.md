# Documentation
- Class name: TwoAdvancedSamplersForMask
- Category: ImpactPack/Sampler
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The TwoAdvancedSamplersForMask node is designed to perform advanced sampling operations on latent images using two distinct advanced samplers. It applies mask erosion techniques to refine the mask and processes the masked and unmasked regions of the image using two independent advanced samplers. This node aims to improve the quality of generated images by leveraging the strengths of both samplers.

# Input types
## Required
- seed
    - The seed parameter is crucial for the random number generation process, ensuring reproducibility of sampling. It influences the initial state of the sampling algorithm, thereby affecting the generated latent image.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The steps parameter defines the number of iterations the sampling process will undergo. It is a key factor in determining the level of detail and final image quality.
    - Comfy dtype: INT
    - Python dtype: int
- denoise
    - The denoising parameter controls the level of noise reduction applied during the sampling process. It plays an important role in the clarity and sharpness of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- samples
    - The samples parameter holds the initial latent image data to be processed by the sampler. It is an important part of the input as it serves as the starting point for the sampling operation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- base_sampler
    - The base sampler parameter specifies the advanced sampler that will be used to process the unmasked regions of the image. It is a key component for achieving the desired sampling results.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper
- mask_sampler
    - The mask sampler parameter identifies the advanced sampler dedicated to processing the masked regions of the image. It is essential for applying specific sampling techniques to the masked areas.
    - Comfy dtype: KSAMPLER_ADVANCED
    - Python dtype: KSamplerAdvancedWrapper
- mask
    - The mask parameter provides the mask to be applied to the latent image to distinguish between masked and unmasked regions. It is important for guiding the sampling process.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- overlap_factor
    - The overlap factor parameter determines the extent of mask erosion, used to create a buffer between masked and unmasked regions. It helps with the smoothness of transitions in the final image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- latent_image
    - The latent image output contains the processed latent image after applying advanced sampling techniques. It represents the final result of the sampling operation.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
