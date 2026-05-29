# Documentation
- Class name: unsampler
- Category: EasyUse/Sampler
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

The unsampler class generates high-quality images from latent vectors through the sampling process. It is designed to be user-friendly and efficient, allowing customization of various parameters to achieve desired results.

# Input types
## Required
- steps
    - Steps determine the progress of the sampling process, with more steps usually leading to improved image quality. This is a key parameter as it directly affects the output.
    - Comfy dtype: INT
    - Python dtype: int
- end_at_step
    - This parameter specifies at which step the sampling process should terminate. It is important for controlling the duration and computational cost of the sampling process.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - The configuration parameter 'cfg' affects the behavior of the sampling process, such as the level of detail and denoising in the generated images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The sampler_name parameter determines the sampling method used, which can significantly alter the characteristics of the generated image.
    - Comfy dtype: COMBO
    - Python dtype: str
- scheduler
    - The scheduler parameter defines the sampling strategy adjusted over time, affecting the quality and consistency of the final output.
    - Comfy dtype: COMBO
    - Python dtype: str
- normalize
    - Normalization is a preprocessing step that can improve the stability and performance of the sampling process by ensuring the input data is standardized.
    - Comfy dtype: COMBO
    - Python dtype: str
## Optional
- pipe
    - The “pipe” parameter is an optional input that, when provided, includes additional context and resources required for the sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- optional_model
    - The “optional_model” parameter allows users to specify a custom model for the sampling process, thereby generating images with unique characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- optional_positive
    - The “optional_positive” parameter provides positive conditioning data that can guide the sampling process towards the desired result.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- optional_negative
    - The “optional_negative” parameter provides negative conditioning data that helps avoid undesirable features in the generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: torch.Tensor
- optional_latent
    - The “optional_latent” parameter is used to provide initial latent vectors, which can be refined during the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Output types
- pipe
    - The “pipe” output contains the results of the sampling process, including the generated image and any additional context or resources used during the process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- latent
    - The “latent” output provides the final latent vectors representing the generated image, which can be further analyzed or used as input for other processes.
    - Comfy dtype: LATENT
    - Python dtype: dict

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
