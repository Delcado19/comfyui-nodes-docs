# Documentation
- Class name: SEGSUpscalerPipe
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

SEGSUpscalerPipe is a node for improving image resolution, employing advanced upscaling techniques. It leverages the capability of deep learning models to enlarge images while maintaining the integrity of semantic segmentation (SEGS). This node is particularly suitable for applications requiring high-quality image upscaling, such as graphic design, photography, and video processing.

# Input types
## Required
- image
    - The input image to be upscaled. It is the main data source for the upscaling process and is crucial for achieving the desired output resolution and quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Semantic segmentation maps that provide pixel-level understanding of image content. These are used to guide the upscaling process to maintain the semantic integrity of the original image.
    - Comfy dtype: SEGS
    - Python dtype: torch.Tensor
- basic_pipe
    - A collection of models and configurations that form the basis of the upscaling process. It includes essential components such as model, CLIP, VAE, and additional settings that affect the upscaling result.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: Tuple[torch.nn.Module, torch.nn.Module, torch.nn.Module, Any, Any]
- rescale_factor
    - The factor by which the input image will be enlarged. It directly affects the final resolution of the output image; higher factors result in larger images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resampling_method
    - The resampling method determines the algorithm used for upscaling the image. Different methods may result in varying levels of detail and image quality.
    - Comfy dtype: COMBO[lanczos, nearest, bilinear, bicubic]
    - Python dtype: str
- supersample
    - A flag indicating whether to use supersampling techniques for upscaling. Supersampling can improve the sharpness and clarity of the enlarged image.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool
- rounding_modulus
    - A modulus value used to constrain the dimensions of the enlarged image. It ensures consistent output image sizes suitable for further processing.
    - Comfy dtype: INT
    - Python dtype: int
- seed
    - A random seed to ensure reproducibility of the upscaling process. It is important for obtaining consistent results when running the node multiple times.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - The number of steps to run the upscaling algorithm. More steps can lead to better results but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - A configuration parameter that adjusts the balance between detail preservation and noise reduction during upscaling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The name of the sampler used in the upscaling process. Different samplers can affect sample distribution and final image quality.
    - Comfy dtype: KSampler.SAMPLERS
    - Python dtype: str
- scheduler
    - A scheduler used to control the learning rate during the upscaling process. It can affect the convergence and stability of the upscaling algorithm.
    - Comfy dtype: KSampler.SCHEDULERS
    - Python dtype: str
- denoise
    - The degree of denoising to apply during upscaling. Higher values can reduce noise in the image but may also remove some detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- feather
    - A feathering value used to soften the edges of the enlarged image. It can create smoother transitions between different areas of the image.
    - Comfy dtype: INT
    - Python dtype: int
- inpaint_model
    - A boolean flag indicating whether to use an inpainting model during upscaling to fill in missing or damaged areas of the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- noise_mask_feather
    - A feathering value applied to the noise mask to soften its edges. This helps create a more natural appearance for the enlarged image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaled_image
    - The output of the SEGSUpscalerPipe node is an enlarged image that has been processed to achieve a higher resolution while preserving the details from semantic segmentation. It is the final result of the upscaling process, ready for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
