# Documentation
- Class name: LayeredDiffusionDiff
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/huchenlei/ComfyUI-layerdiffuse.git

LayeredDiffusionDiff node separates foreground and background from mixed images by applying diffusion, using conditions to extract components, enabling tasks that modify isolated parts without affecting others.

# Input types
## Required
- model
    - Model parameters are essential; they define the underlying model used for diffusion, enabling the node to interact with image data for separation.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond
    - cond parameter provides conditional input guiding diffusion to extract desired components, crucial for result determination.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- uncond
    - uncond parameter provides unconditional input supplementing diffusion, allowing generation without specific prerequisites.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- blended_latent
    - blended_latent parameter represents the latent of the mixed image; the node extracts foreground or background from it, a key diffusion input.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latent
    - latent parameter stores the image latent, used with blended_latent to guide diffusion.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- config
    - config parameter specifies diffusion model settings, ensuring operation according to predefined specs.
    - Comfy dtype: STRING
    - Python dtype: str
- weight
    - weight parameter tunes diffusion impact on separation, adjusting applied strength.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - model output is a modified version of the input after diffusion; depending on config, it contains separated foreground or background.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- cond
    - cond output provides updated conditional information reflecting changes made during diffusion.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}
- uncond
    - uncond output reflects updated unconditional input after diffusion processing.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[str, Dict[str, torch.Tensor]}}

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/huchenlei/ComfyUI-layerdiffuse)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
