# Documentation
- Class name: dynamiCrafterLoader
- Category: EasyUse/Loaders
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node class encapsulates the functionality for loading and preparing various models and data required for the dynamiCrafter pipeline. It simplifies the process of model selection, initialization, and conditioning, ensuring that the necessary components for subsequent generation tasks are ready.

# Input types
## Required
- model_name
    - The model name parameter is critical for specifying which model will be used in dynamiCrafterLoader. It determines the underlying architecture and associated parameters that guide the generation process.
    - Comfy dtype: COMBO
    - Python dtype: str
- clip_skip
    - The clip_skip parameter affects the selection of layers used for text conditioning in the CLIP model. It is essential for fine-tuning the generation process to align with the desired creative direction.
    - Comfy dtype: INT
    - Python dtype: int
- init_image
    - The init_image parameter serves as the visual input for initializing the latent space of the generation process. It is a key factor in setting the initial conditions that shape the final output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- resolution
    - The resolution parameter defines the dimensions of the generated output. It is important for matching the desired quality and level of detail with the capabilities of the underlying model.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- pipe
    - The pipe output is a comprehensive structure that encapsulates all components required for the dynamiCrafter pipeline. It is designed to facilitate seamless integration with downstream generation tasks.
    - Comfy dtype: PIPE_LINE
    - Python dtype: dict
- model
    - The model output represents the loaded and prepared generative model. It is the core element driving the generation process, transforming inputs into the desired creative output.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- vae
    - The vae output is the variational autoencoder component used for latent space manipulation and image conditioning. It plays a crucial role in generating diverse and coherent visual content.
    - Comfy dtype: VAE
    - Python dtype: comfy.sd.VAE

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
