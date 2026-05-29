# Documentation
- Class name: InjectNoise
- Category: latent/noise
- Output node: False
- Repo Ref: https://github.com/BlenderNeko/ComfyUI_Noise.git

The InjectNoise node introduces noise into a set of latent representations to simulate the effect of noise on the generation process. Its function is to enhance data through controlled variability, which can improve the robustness and diversity of generated outputs.

# Input types
## Required
- latents
    - The latents parameter is critical because it contains the original latent representations into which noise will be injected. It directly influences the result of the noise enhancement process.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- strength
    - The strength parameter determines the intensity of noise to inject into the latents. It is essential for controlling the degree of variation introduced to the data.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise
    - The optional noise parameter provides the noise source to apply to the latents. It is important because it allows customization of noise characteristics.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- mask
    - When a mask parameter is provided, it specifies which regions of the latents should be affected by noise. This is important for targeted noise application.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- latents
    - The output latents are the modified latent representations with noise injected, ready for further processing or generation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/BlenderNeko/ComfyUI_Noise)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
