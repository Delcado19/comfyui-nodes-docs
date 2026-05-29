# Documentation
- Class name: dynamicCFGSettings
- Category: EasyUse/PreSampling
- Output node: True
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The dynamicCFGSettings node aims to dynamically adjust configuration settings for a given pipeline, optimizing the sampling process based on specified parameters. It allows fine-tuning the sampling procedure through inputs such as steps, cfg, and denoise, which collectively influence the output pipeline generation.

# Input types
## Required
- pipe
    - The pipe parameter represents the pipeline to be configured, crucial for the node's operation as it determines the context in which settings will be applied.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]
- steps
    - The steps parameter defines the number of steps to take during the sampling process, directly affecting the granularity and duration of sampling.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The cfg parameter is a floating-point value used to adjust the configuration of the sampling process, influencing the behavior and output quality of the entire process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_mode
    - The cfg_mode parameter determines the mode of configuration scaling, essential for controlling dynamic adjustment of sampling settings.
    - Comfy dtype: Enum
    - Python dtype: Enum
- cfg_scale_min
    - The cfg_scale_min parameter sets the minimum scaling value for configuration, ensuring dynamic adjustments do not fall below the specified threshold.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter selects the sampling method to be used, a key decision factor in shaping the output of the sampling process.
    - Comfy dtype: Enum
    - Python dtype: Enum
- scheduler
    - The scheduler parameter determines the scheduling strategy of the sampling process, affecting how steps are managed over time.
    - Comfy dtype: Enum
    - Python dtype: Enum
- denoise
    - The denoise parameter controls the level of noise reduction applied during sampling, improving clarity and quality of results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- seed
    - The seed parameter is used to initialize the random number generator, ensuring reproducibility of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- image_to_latent
    - When the image_to_latent parameter is provided, it is used to convert an image into a latent representation for further processing in the sampling pipeline.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- latent
    - If the latent parameter is specified, it indicates that latent space data will be used in the sampling process instead of deriving it from an image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- prompt
    - The prompt parameter is an optional text input that can be used to guide the sampling process to generate outputs consistent with certain textual descriptions.
    - Comfy dtype: PROMPT
    - Python dtype: str
- extra_pnginfo
    - If the extra_pnginfo parameter exists, it contains additional information related to the sampling process, enhancing contextual understanding of input data.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: str
- my_unique_id
    - The my_unique_id parameter is an optional identifier that can be used to track or label specific instances of the sampling process.
    - Comfy dtype: UNIQUE_ID
    - Python dtype: str

# Output types
- pipe
    - The output pipe is the modified pipeline with new settings applied, ready for subsequent sampling operations.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
