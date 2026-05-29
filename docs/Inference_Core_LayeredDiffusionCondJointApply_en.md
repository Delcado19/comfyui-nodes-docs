
# Documentation
- Class name: Inference_Core_LayeredDiffusionCondJointApply
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node is specifically designed for applying conditioned and joint hierarchical diffusion processes to generate or manipulate images based on a set of conditions and joint configurations. It integrates multiple diffusion models to achieve complex image synthesis or transformation tasks, leveraging conditioned inputs and joint model dynamics.

# Input types
## Required
- model
    - Model patcher for applying hierarchical diffusion techniques, essential for integration with the diffusion process.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- image
    - Target image for the diffusion process, serving as the basis for transformation or synthesis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- config
    - Configuration string that determines the specific hierarchical diffusion model and settings to use.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- cond
    - Optional condition input for the diffusion process, allowing targeted image manipulation or generation.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- blended_cond
    - Optional blended condition input, enabling more complex image synthesis by combining conditions.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]

# Output types
- model
    - Output model after applying the hierarchical diffusion process, equipped with modifications for image synthesis or transformation.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
