# Documentation
- Class name: samplerSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The samplerSettings class encapsulates the configuration process of the sampling pipeline, providing a structured way to define parameters that affect the sampling process. It is designed to simplify the setup of complex sampling tasks and ensure that necessary settings are applied correctly to achieve desired results.

# Input types
## Required
- pipe
    - pipe parameter is required because it contains the core data and settings needed during the sampling process. It includes the model, image, and other information that the samplerSettings class uses to configure the sampling environment.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- steps
    - steps parameter specifies the number of iterations to be executed during the sampling process. It is crucial for controlling the duration and granularity of sampling, directly affecting the quality and diversity of the results.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - cfg parameter is a floating-point value used to adjust the configuration of the sampling process. It plays an important role in fine-tuning the behavior of the sampler to achieve optimal results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - sampler_name parameter specifies the type of sampler to be used during the sampling process. It is critical in determining the method and strategy that the samplerSettings class uses to generate samples.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - scheduler parameter defines the scheduling strategy for the sampling process. It is important for managing the dynamics of sampling, ensuring that the process adapts and evolves over time to produce the best possible results.
    - Comfy dtype: COMBO
    - Python dtype: str
- denoise
    - denoise parameter is used to control the level of denoising applied during the sampling process. It significantly affects the clarity and quality of the generated samples.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - seed parameter is crucial for ensuring the reproducibility of the sampling process. It initializes the random number generator, allowing consistent results across different runs.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- image_to_latent
    - image_to_latent parameter provides a method for converting an image to a latent representation. It is an optional input that, when used, shifts the focus of the sampling process to generate samples based on image data.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - latent parameter allows direct manipulation of the latent space during the sampling process. It is an optional input that, when provided, allows generating samples from a specific latent state.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - prompt parameter introduces text guidance into the sampling process, influencing the direction and style of generated samples. It is an optional input that adds an additional layer of control over the output.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - extra_pnginfo parameter contains additional information related to PNG images that can be used to refine the sampling process. It is an optional input that provides more context for generating samples.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - my_unique_id parameter is used to track and identify unique sampling sessions. It is an optional input that helps maintain the integrity and traceability of the sampling process.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - Output pipe is a comprehensive structure containing updated settings and data needed for subsequent stages of the sampling process. It is a crucial output as it paves the way for generating high-quality samples.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
