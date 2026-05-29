
# Documentation
- Class name: SUPIR_model_loader_v2
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SUPIR_model_loader_v2 node initializes and prepares the SUPIR model for use, primarily by loading the model state from a specified path, and optionally adjusting its precision to improve memory efficiency. This node plays a crucial role in setting up the SUPIR model for subsequent image processing tasks, ensuring the model is correctly loaded and ready.

# Input types
## Required
- model
    - Specifies the main model configuration for the SUPIR model loader, integrating various components such as CLIP and VAE to enhance image processing capabilities.
    - Comfy dtype: MODEL
    - Python dtype: str
- clip
    - Specifies the CLIP model used with the SUPIR model to enhance its functionality, especially in tasks involving image and text processing.
    - Comfy dtype: CLIP
    - Python dtype: str
- vae
    - Specifies the VAE model used with the SUPIR model, contributing to the overall image processing and generation capabilities.
    - Comfy dtype: VAE
    - Python dtype: str
- supir_model
    - Specifies the file path to the SUPIR model checkpoint, which is essential for loading the model state for image processing tasks.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: List[str]
- fp8_unet
    - A boolean flag that, when set, converts model weights to a lower precision format (torch.float8_e4m3fn) to save VRAM, with a slight impact on quality.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- diffusion_dtype
    - Determines the data type for diffusion operations, offering options such as fp16, bf16, fp32, or auto, where auto automatically selects based on the execution environment.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- high_vram
    - A boolean flag that, when enabled, loads model weights using high VRAM mode, potentially improving model loading speed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SUPIR_model
    - The loaded SUPIR model, ready for immediate use in image processing tasks.
    - Comfy dtype: SUPIRMODEL
    - Python dtype: torch.nn.Module
- SUPIR_VAE
    - The loaded SUPIR VAE component, an important part of the model's image processing capabilities.
    - Comfy dtype: SUPIRVAE
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
