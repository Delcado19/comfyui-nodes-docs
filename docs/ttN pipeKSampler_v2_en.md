
# Documentation
- Class name: ttN pipeKSampler_v2
- Category: ttN/pipe
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is dedicated to advanced image sampling, utilizing various inputs such as model configuration, LoRA adjustments, and optional parameters to generate or modify images. It integrates sophisticated features such as noise management, denoising control, and optional model enhancements to customize the image generation process, aiming to provide flexible and customizable outputs based on given inputs.

# Input types
## Required
- pipe
    - Unknown
    - Comfy dtype: PIPE_LINE
    - Python dtype: unknown
- lora_name
    - Specifies the name of the LoRA (Low-Rank Adaptation) to apply, influencing the model's behavior and output by adjusting model parameters.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_strength
    - Determines the strength of the applied LoRA, affecting the intensity of model adjustments and the resulting image characteristics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_method
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- upscale_model_name
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- factor
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- rescale
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- percent
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- width
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- height
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- longer_side
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- crop
    - Unknown
    - Comfy dtype: COMBO[STRING]
    - Python dtype: unknown
- sampler_state
    - Represents the current state of the sampler, guiding the sampling process and influencing the generated results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
    - Defines the number of steps to take during the sampling process, directly impacting the detail and quality of the output image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Adjusts the configuration settings of the sampling process, allowing fine-tuning of generation parameters.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Determines the specific sampler to use, deciding the method and approach of image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler for the sampling process, orchestrating the order and timing of operations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - Unknown
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- image_output
    - Indicates the desired output format or destination for the generated image, guiding how results are saved or displayed.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - Provides a naming prefix for saved images, aiding in organization and retrieval of generated outputs.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - Unknown
    - Comfy dtype: INT
    - Python dtype: unknown
- optional_model
    - Unknown
    - Comfy dtype: MODEL
    - Python dtype: unknown
- optional_positive
    - Unknown
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- optional_negative
    - Unknown
    - Comfy dtype: CONDITIONING
    - Python dtype: unknown
- optional_latent
    - Unknown
    - Comfy dtype: LATENT
    - Python dtype: unknown
- optional_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- optional_clip
    - Unknown
    - Comfy dtype: CLIP
    - Python dtype: unknown
- input_image_override
    - Unknown
    - Comfy dtype: IMAGE
    - Python dtype: unknown
- adv_xyPlot
    - Unknown
    - Comfy dtype: ADV_XYPLOT
    - Python dtype: unknown

# Output types
- pipe
    - Comfy dtype: PIPE_LINE
    - Unknown
    - Python dtype: unknown
- model
    - Comfy dtype: MODEL
    - Unknown
    - Python dtype: unknown
- positive
    - Comfy dtype: CONDITIONING
    - Unknown
    - Python dtype: unknown
- negative
    - Comfy dtype: CONDITIONING
    - Unknown
    - Python dtype: unknown
- latent
    - Comfy dtype: LATENT
    - Unknown
    - Python dtype: unknown
- vae
    - Comfy dtype: VAE
    - Unknown
    - Python dtype: unknown
- clip
    - Comfy dtype: CLIP
    - Unknown
    - Python dtype: unknown
- image
    - Comfy dtype: IMAGE
    - Unknown
    - Python dtype: unknown
- seed
    - Comfy dtype: INT
    - Unknown
    - Python dtype: unknown


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
