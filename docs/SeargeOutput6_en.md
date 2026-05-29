# Documentation
- Class name: SeargeOutput6
- Category: Searge/_deprecated_/UI/Outputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

The SeargeOutput6 node is designed to facilitate the demultiplexing process, allowing extraction and organization of various parameters from a given input. It plays a key role in streamlining data processing, ensuring parameters are effectively separated and made available for subsequent processing stages.

# Input types
## Required
- parameters
    - The "parameters" input is the core of the SeargeOutput6 node, containing the essential data required for the demultiplexing operation. It is critical to the node's execution, as it determines subsequent steps and results.
    - Comfy dtype: Dict[str, Union[str, int, float, bool]]
    - Python dtype: Dict[str, Union[str, int, float, bool]]

# Output types
- parameters
    - The "parameters" output preserves the structured data format, providing a clear and organized data presentation for further use.
    - Comfy dtype: Dict[str, Union[str, int, float, bool]]
    - Python dtype: Dict[str, Union[str, int, float, bool]]
- hrf_steps
    - The "hrf_steps" output represents the number of steps involved in the high-resolution fix process, which is important for controlling the level of detail in the output.
    - Comfy dtype: int
    - Python dtype: int
- hrf_denoise
    - The "hrf_denoise" output represents the denoising level applied to the high-resolution fix, affecting the clarity and quality of the final result.
    - Comfy dtype: float
    - Python dtype: float
- hrf_upscale_factor
    - The "hrf_upscale_factor" output represents the scaling factor used in the upscaling process, which is critical for determining the resolution of the upscaled image.
    - Comfy dtype: float
    - Python dtype: float
- hrf_noise_offset
    - The "hrf_noise_offset" output represents the noise offset level, a key parameter for fine-tuning noise characteristics in image processing.
    - Comfy dtype: int
    - Python dtype: int
- hrf_seed
    - The "hrf_seed" output is the seed value used for random number generation, ensuring reproducibility and consistency in the processing pipeline.
    - Comfy dtype: int
    - Python dtype: int
- hires_fix
    - The "hires_fix" output is a boolean flag indicating whether the high-resolution fix process has been applied to improve image quality.
    - Comfy dtype: bool
    - Python dtype: bool
- hrf_smoothness
    - The "hrf_smoothness" output controls the smoothness of the high-resolution fix, playing a key role in the appearance of the final upscaled image.
    - Comfy dtype: float
    - Python dtype: float

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
