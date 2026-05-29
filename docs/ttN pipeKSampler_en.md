
# Documentation
- Class name: ttN pipeKSampler
- Category: ttN/legacy
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ttN_pipeKSampler node aims to simplify the application of advanced sampling techniques for image generation. It integrates model input, sampling configuration, and image processing parameters, providing users with a concise interface to generate images with specific attributes or modifications. By abstracting the configuration and execution of complex sampling processes, the node greatly simplifies the user's workflow.

# Input types
## Required
- pipe
    - A structured input containing various configuration settings and model parameters required for the sampling process.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- lora_name
    - Specifies the LoRA model to use, affecting the adaptability and fine-tuning of the generation model.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- lora_model_strength
    - Determines the strength of the LoRA model's influence on the generation model, adjusting the degree of adaptation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- lora_clip_strength
    - Controls the strength of the LoRA model's influence on the CLIP model, adjusting semantic understanding capability.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_method
    - Defines the method used to upscale the generated image, affecting image resolution and quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- factor
    - The image upscaling factor, directly affecting the final image size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop
    - Specifies the crop parameters for the generated image, affecting the final image composition.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: dict
- sampler_state
    - The sampler state used during the image generation process, affecting sampling behavior.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: dict
- steps
    - The number of steps to run the sampling process, affecting the detail and quality of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
    - Configures the guidance factor, affecting the coherence and quality of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sampler_name
    - The name of the sampler algorithm used, determining the sampling technique.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
    - Specifies the scheduler used to control the sampling process, affecting the image generation progression.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- denoise
    - The denoising factor applied during the image generation process, affecting image clarity and noise level.
    - Comfy dtype: FLOAT
    - Python dtype: float
- image_output
    - The output path for the generated image, determining where the image is saved.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- save_prefix
    - A prefix added before the saved image name, assisting in image organization and identification.
    - Comfy dtype: STRING
    - Python dtype: str

## Optional
- seed
    - The random seed used for the sampling process, ensuring reproducibility of generated images.
    - Comfy dtype: INT
    - Python dtype: int
- optional_model
    - Optional model parameters, allowing specification of an alternative generation model.
    - Comfy dtype: MODEL
    - Python dtype: str
- optional_positive
    - Optional positive prompt, guiding image generation toward specific themes or elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- optional_negative
    - Optional negative prompt, guiding image generation away from specific themes or elements.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- optional_latent
    - Optional initial latent space input, serving as the starting point for the image generation process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- optional_vae
    - Optional variational autoencoder, used to enhance the image generation process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- optional_clip
    - Optional CLIP model, used for semantic understanding of images and text, helping generated images align with provided prompts.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- xyPlot
    - Specifies parameters for generating XY plots, potentially used to visualize certain aspects of the sampling process.
    - Comfy dtype: XYPLOT
    - Python dtype: dict

# Output types
- pipe
    - Updated pipe structure containing the results of the sampling process, including configuration and generated images.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - Generative model used in the sampling process, possibly modified by LoRA or other parameters.
    - Comfy dtype: MODEL
    - Python dtype: str
- positive
    - List of positive prompts used to guide the image generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- negative
    - List of negative prompts used to refine the image generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[str]
- latent
    - Latent space representation produced by the sampling process.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- vae
    - Variational autoencoder involved in the image generation process.
    - Comfy dtype: VAE
    - Python dtype: torch.nn.Module
- clip
    - CLIP model used for semantic understanding during the sampling process.
    - Comfy dtype: CLIP
    - Python dtype: torch.nn.Module
- image
    - Final image or set of images generated by the sampling process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- seed
    - Seed value used in the sampling process, affecting the randomness and reproducibility of results.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [ImageUpscaleWithModel](../../Comfy/Nodes/ImageUpscaleWithModel.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
