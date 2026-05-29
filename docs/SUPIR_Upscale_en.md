# Documentation
- Class name: SUPIR_Upscale
- Category: SUPIR
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-SUPIR.git

The SUPIR_Upscale node aims to increase the resolution of input images through a complex process that includes upscaling, color correction, and denoising. It uses advanced deep‑learning models to perform these tasks, ensuring high image quality and rich detail in the output.

# Input types
## Required
- supir_model
    - The path to the SUPIR model checkpoint, which is critical for the upscaling process because it contains the pretrained weights required for the model to run correctly.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The input image to be upscaled, which is the primary subject of the enhancement process. The quality and resolution of the output image depend heavily on this input.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- steps
    - The number of steps used during the diffusion process. More steps usually yield better results but increase computation time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- upscaled_image
    - The node's final output, the upscaled image. It represents the culmination of the upscaling process and is the main result of the SUPIR_Upscale node's function.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-SUPIR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
