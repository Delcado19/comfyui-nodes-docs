
# Documentation
- Class name: SDXL Basic Settings (JPS)
- Category: JPS Nodes/Settings
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SDXL Basic Settings (JPS) node configures the basic settings for SDXL image generation, including resolution, sampler, scheduler, and various parameters related to image optimization and generation steps. It simplifies the setup process, providing a concise interface for users to adjust core settings that affect image quality and characteristics.

# Input types
## Required
- resolution
    - Select the desired image generation resolution from a predefined list. This setting directly affects the output image size.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_name
    - Determine the sampler used for image generation, affecting the sampling process and image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specify the scheduler that manages the sampling process, influencing how generation steps are executed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps_total
    - Total number of steps used during image generation, affecting output detail and quality.
    - Comfy dtype: INT
    - Python dtype: int
- base_percentage
    - Define the percentage of the image generated in the initial steps, influencing the evolution of image detail.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Control configuration parameters that govern the generation process, affecting image coherence and quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_rescale
    - Parameter for rescaling configuration values, allowing fine‑tuning of the generation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- cfg_refiner
    - Adjust configuration for optimizing the generation process, improving final image quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- ascore_refiner
    - Optimize ascore to adjust the quality of the generated image, affecting its aesthetic outcome.
    - Comfy dtype: FLOAT
    - Python dtype: float
- res_factor
    - Factor used to adjust the resolution of the generated image, influencing overall image quality.
    - Comfy dtype: INT
    - Python dtype: int
- clip_skip
    - Determine the number of cropping steps to skip during generation, affecting final image output.
    - Comfy dtype: INT
    - Python dtype: int
- filename
    - Filename for the generated image, used for saving and identifying the output file.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- sdxl_basic_settings
    - Encapsulates the basic configuration settings for SDXL image generation, including resolution, sampler, scheduler, and various image optimization and generation parameters.
    - Comfy dtype: BASIC_PIPE
    - Python dtype: tuple


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
