# Documentation
- Class name: PixelTiledKSampleUpscalerProvider
- Category: ImpactPack/Upscale
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

PixelTiledKSampleUpscalerProvider is a node designed to improve image quality through a complex upscaling process. It uses various scaling methods and integrates advanced models to denoise image tiles, optimizing the clarity and detail of the final output.

# Input types
## Required
- scale_method
    - Scaling methods define the algorithms used to enlarge images. They are crucial for determining the quality and style of the upscaling process, affecting the final appearance of the image.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- model
    - Model parameters are essential because they specify the machine‑learning model used for the upscaling task. Model selection significantly impacts node performance and the quality of generated images.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - VAE (variational auto‑encoder) is a key component in the upscaling process, encoding and decoding image data. It plays a critical role in the quality of the denoised output.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- seed
    - The seed provides a consistent starting point for random number generation, ensuring reproducibility of the upscaling process, which is vital for maintaining result integrity across runs.
    - Comfy dtype: INT
    - Python dtype: int
- steps
    - Steps determine the extent of the upscaling process. More steps allow finer results but increase computational complexity.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configuration parameters, usually denoted as 'cfg', control the balance between detail and noise during upscaling, affecting overall image sharpness.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler name determines the sampling strategy used in denoising steps. It is a key factor shaping the noise characteristics of the final image.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- scheduler
    - The scheduler defines the speed of parameter updates during upscaling, which can affect efficiency and final image quality.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- positive
    - Positive conditioning guides the model on which features to enhance or preserve during upscaling, essential for achieving the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- negative
    - Negative conditioning directs the model to avoid certain features or artifacts during upscaling, ensuring the final image meets specified quality standards.
    - Comfy dtype: CONDITIONING
    - Python dtype: Any
- denoise
    - Denoising parameters control the strength of denoising applied to each tile. They are key to balancing image detail with the removal of unwanted noise.
    - Comfy dtype: FLOAT
    - Python dtype: float
- tile_width
    - Tile width specifies the horizontal size of each tile used in the upscaling process. It influences the tiling strategy and may affect the final image resolution.
    - Comfy dtype: INT
    - Python dtype: int
- tile_height
    - Tile height specifies the vertical size of each tile used in the upscaling process. It works with tile width to define the tiling pattern.
    - Comfy dtype: INT
    - Python dtype: int
- tiling_strategy
    - Tile strategy determines how the image is divided into tiles for processing. It is crucial for managing seams and ensuring consistent upscaling across the entire image.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- upscaler
    - Upscaler output provides the processed image after upscaling. It represents the pinnacle of the node’s functionality, delivering an enhanced image with improved resolution and reduced noise.
    - Comfy dtype: UPSCALER
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
