# Documentation
- Class name: ApplyStableSRUpscaler
- Category: image/upscaling
- Output node: False
- Repo Ref: https://github.com/Arthurzhangsheng/Comfyui-StableSR.git

This node leverages the capabilities of the StableSR model to increase the resolution of the input image while maintaining its visual integrity. It focuses on applying advanced upscaling techniques to produce high-quality, detailed images without compromising the original content.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying structure and functionality that the node will operate on. Having a valid model is essential for ensuring the correct application of StableSR techniques in the upscaling process.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- stablesr_model
    - The stablesr_model parameter is critical because it specifies the path to the StableSR model checkpoint, which contains the pre-trained weights required for the upscaling process. Without a correct and accessible model path, the node cannot perform its intended function.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('stablesr')]
    - Python dtype: str
## Optional
- latent_image
    - When the latent_image parameter is provided, it allows the node to incorporate additional information into the upscaling process. This can refine the output by considering the latent features of the input, potentially leading to better visual results.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Output types
- model_sr
    - The output model model_sr is the result of applying StableSR upscaling techniques to the input model. It represents an enhanced version of the original model with higher resolution and detail, ready for further use or analysis.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/Arthurzhangsheng/Comfyui-StableSR)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
