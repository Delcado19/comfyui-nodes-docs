
# Documentation
- Class name: Inference_Core_LayeredDiffusionJointApply
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_LayeredDiffusionJointApply node aims to apply the layered diffusion process to the joint model, integrating multiple diffusion models or layers to generate or manipulate images in a coordinated manner. It leverages the advantages of each individual model layer to produce enhanced, high-quality outputs.

# Input types
## Required
- model
    - The model parameter represents the diffusion model to be applied. It is crucial for defining the specific diffusion process and its configuration, directly affecting the quality and characteristics of the output.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- config
    - The config defines the configuration settings for the layered diffusion process, including model details and operation parameters, and is essential for customizing the diffusion process according to the desired results.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- fg_cond
    - The foreground condition specifies the conditional input for the foreground of the diffusion process, guiding the generation or transformation of the output in the foreground area.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- bg_cond
    - The background condition specifies the conditional input for the background of the diffusion process, influencing the generation or transformation of the output in the background area.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]
- blended_cond
    - The mixed condition combines the foreground and background conditions, providing a unified conditional input for the diffusion process across both areas.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.Tensor]]]

# Output types
- model
    - The output is a modified version of the input model, enhanced through the layered diffusion process to generate or transform images according to the provided conditions and configuration.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
