# Documentation
- Class name: SeargeHighResolution
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node class aims to improve image resolution by applying a series of high-resolution techniques, with the goal of enhancing the quality and detail of input data without losing important visual information.

# Input types
## Required
- hires_mode
    - This parameter determines the mode of high-resolution enhancement, which is crucial for determining the overall strategy used to improve image quality.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- hires_scale
    - The scale parameter is critical because it sets the degree of magnification, directly affecting the output resolution and level of detail.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- hires_denoise
    - This controls the denoising level, which is important for reducing noise while preserving image details, thereby ensuring a clearer output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_softness
    - Softness adjustment affects the sharpness of the image, striking a balance between enhancing detail and avoiding artifacts caused by over-sharpening.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_detail_boost
    - The detail enhancement parameter boosts the fine details of the image, helping to produce more vivid and realistic visual results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_contrast_factor
    - By adjusting the contrast factor, the node can manipulate the dynamic range of the image, improving overall visual impact and depth.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_saturation_factor
    - The saturation factor is crucial in adjusting the color intensity of the image, enhancing vividness and making the visual output more appealing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hires_latent_detailer
    - The latent detail extractor parameter is responsible for refining the latent features of the image, which is essential for achieving high-fidelity and detailed results.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- final_upscale_size
    - This parameter defines the final upscaled size, which is critical for determining the resolution and dimensions of the final output.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- data
    - The output data stream contains the processed high-resolution image, which is the result of applying various enhancement techniques.
    - Comfy dtype: SRG_DATA_STREAM
    - Python dtype: Any

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
