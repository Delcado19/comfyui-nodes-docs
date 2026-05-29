# Documentation
- Class name: SeargeUpscaleModels
- Category: UI_INPUTS
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node coordinates the selection and configuration of image enhancement upscaling models, focusing on integrating various upscalers to achieve the desired output quality.

# Input types
## Required
- detail_processor
    - The detail processor is essential for improving image quality, playing a key role throughout the overall upscaling process.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- high_res_upscaler
    - High-resolution upscalers are crucial for increasing image resolution, significantly contributing to the final visual effect.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- primary_upscaler
    - The primary upscaler is critical during the initial scaling stage, setting the foundation for further enhancement.
    - Comfy dtype: COMBO[str]
    - Python dtype: str
- secondary_upscaler
    - The secondary upscaler further refines the image after the primary scaling, improving detail and clarity.
    - Comfy dtype: COMBO[str]
    - Python dtype: str

# Output types
- data
    - The output data encapsulates the configuration of the upscaling model, essential for subsequent processing and final image output.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
