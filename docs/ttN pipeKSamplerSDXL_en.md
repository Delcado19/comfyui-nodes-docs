
# Documentation
- Class name: ttN pipeKSamplerSDXL
- Category: ttN/legacy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_pipeKSamplerSDXL node is designed for advanced image sampling, utilizing complex pipelines to enhance image generation with specific configurations and improvements. The node integrates various components such as LoRA adjustments, noise control, and optional model inputs to customize the image generation process, aiming to produce high-quality images with finely tuned characteristics.

# Input types
## Required
- sdxl_pipe
    - Represents the current state of the sampling pipeline, including configurations and intermediate results, which is crucial for continuing or adjusting the image generation process.
    - Comfy dtype: PIPE_LINE_SDXL
    - Python dtype: dict
- upscale_method
    - Specifies the method used for image upscaling, affecting the resolution and quality of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - Determines the scaling factor for upscaling, directly impacting the final image size and level of detail.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Defines the cropping parameters applied to the generated image, adjusting composition and focal areas.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_state
    - Indicates the current state of the sampler, guiding the flow of the sampling process and determining the next steps.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- base_steps
    - Specifies the number of steps for the basic sampling process, affecting the detail and quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- refiner_steps
    - Determines the number of steps for the refinement process, enhancing the final image quality through additional adjustments.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Controls the CFG (Classifier-Free Guidance) scale, influencing adherence to input prompts and overall image quality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - Identifies the specific sampler algorithm to be used, affecting sampling behavior and output characteristics.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler that controls the sampling process, influencing progression and adjustments during image generation.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- image_output
    - Determines the output format and handling of generated images, including saving and display options.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - Sets the prefix for saved image files, used for organizing and identifying outputs.
    - Comfy dtype: STRING
    - Python dtype: str
## Optional
- seed
    - Provides a seed for the random number generator, ensuring reproducibility of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- optional_model
    - Allows specifying an alternative model for image generation, providing flexibility in the sampling process.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_positive
    - Allows using alternative positive prompts, adjusting the thematic direction of generated images.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_negative
    - Allows specifying alternative negative prompts, refining avoidance criteria in image generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_vae
    - Provides the option to use an alternative VAE model, affecting image encoding and decoding.
    - Comfy dtype: VAE
    - Python dtype: str
- optional_refiner_model
    - Allows using a different model to refine the generated image, enhancing the final output quality.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_refiner_positive
    - Allows using alternative positive prompts during the refinement process, further guiding image enhancement.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_refiner_negative
    - Allows specifying alternative negative prompts during the refinement process, fine-tuning avoidance criteria.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- optional_refiner_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- optional_latent
    - Provides the option to specify an alternative latent representation, affecting the starting point of the generation process.
    - Comfy dtype: LATENT
    - Python dtype: str
- optional_clip
    - Allows using an alternative CLIP model, influencing alignment between text prompts and generated images.
    - Comfy dtype: CLIP
    - Python dtype: str

# Output types
- sdxl_pipe
    - Outputs the updated sampling pipeline state, including any changes or results from the current sampling operation.
    - Comfy dtype: PIPE_LINE_SDXL
    - Python dtype: dict
- model
    - Returns the model used in the sampling process, possibly updated or changed based on optional inputs.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - Provides the positive prompt used in image generation, reflecting any optional adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- negative
    - Returns the negative prompt guiding image generation to avoid the default.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- vae
    - Outputs the VAE model involved in encoding and decoding images during the sampling process.
    - Comfy dtype: VAE
    - Python dtype: str
- refiner_model
    - Provides the model used for refining the generated image, possibly updated or changed based on optional inputs.
    - Comfy dtype: MODEL
    - Python dtype: str
- refiner_positive
    - Returns the positive prompt used in the refinement process, reflecting any optional adjustments.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_negative
    - Provides the negative prompt used in the refinement process, guiding avoidance of the default.
    - Comfy dtype: CONDITIONING
    - Python dtype: str
- refiner_vae
    - Unknown
    - Comfy dtype: VAE
    - Python dtype: unknown
- latent
    - Outputs the latent representation of the generated image, which is central to the image generation and refinement process.
    - Comfy dtype: LATENT
    - Python dtype: str
- clip
    - Returns the CLIP model used for aligning text prompts with generated images, possibly updated based on optional inputs.
    - Comfy dtype: CLIP
    - Python dtype: str
- image
    - Provides the final generated image, showing the results of the sampling and refinement process.
    - Comfy dtype: IMAGE
    - Python dtype: str
- seed
    - Outputs the seed used in the random number generator, ensuring reproducibility of the generated image.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
