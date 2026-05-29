# Documentation
- Class name: SeargeInput6
- Category: Searge/_deprecated_/UI/Inputs
- Output node: False
- Repo Ref: https://github.com/jobunk/SeargeSDXL.git

This node serves as an interface for configuring and combining various parameters related to high-resolution image processing. It is designed to simplify the process of setting up high-resolution restoration tasks by allowing users to input and adjust multiple parameters at once. The primary function of the node is to facilitate the preparation and management of image processing tasks, ensuring that the necessary settings are correctly applied and organized.

# Input types
## Required
- hires_fix
    - This parameter is critical for defining the state of the high-resolution restoration process. It specifies the initial conditions under which image processing begins, significantly influencing the outcome of the task.
    - Comfy dtype: SeargeParameterProcessor.STATES
    - Python dtype: SeargeParameterProcessor.STATES
- hrf_steps
    - The number of high-resolution restoration steps is essential for controlling the iterative process of image refinement. It affects the level of detail and overall quality of the final output.
    - Comfy dtype: INT
    - Python dtype: int
- hrf_denoise
    - The denoising parameter plays a key role in reducing image noise and artifacts, thereby improving the clarity and visual appeal of the processed image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hrf_upscale_factor
    - The upscale factor determines the degree to which the image will be enlarged, directly impacting the resolution and amount of detail in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- hrf_intensity
    - The strength parameter affects the intensity of image processing effects, such as sharpening and contrast enhancement, which is crucial for achieving the desired visual results.
    - Comfy dtype: SeargeParameterProcessor.REFINER_INTENSITY
    - Python dtype: SeargeParameterProcessor.REFINER_INTENSITY
- hrf_seed_offset
    - The seed offset is important for ensuring randomness and diversity in image processing results, particularly useful when processing multiple images or batches.
    - Comfy dtype: SeargeParameterProcessor.HRF_SEED_OFFSET
    - Python dtype: SeargeParameterProcessor.HRF_SEED_OFFSET
- hrf_smoothness
    - The smoothness parameter helps control the sharpness and texture of the processed image, contributing to the overall aesthetics and quality of the final product.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- inputs
    - This parameter allows for the inclusion of additional inputs, which can be used to further customize the high-resolution image processing workflow.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: dict

# Output types
- inputs
    - The output is an ordered set of parameters configured through the node. These parameters are critical for subsequent steps in the high-resolution image processing pipeline.
    - Comfy dtype: PARAMETER_INPUTS
    - Python dtype: dict

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/jobunk/SeargeSDXL)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
