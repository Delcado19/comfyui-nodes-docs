
# Documentation
- Class name: Inference_Core_LayeredDiffusionDiffApply
- Category: layer_diffuse
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_LayeredDiffusionDiffApply node applies a layered diffusion process to a given model, using specific configurations and weights to modify the model's behavior. It aims to enhance or alter the model's output by integrating diffusion techniques, and can include attention sharing mechanisms if the model configuration supports it.

# Input types
## Required
- model
    - The model to which the layered diffusion process will be applied. This parameter is critical, as it determines the base model for the diffusion process, thereby affecting the final output.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- cond
    - The conditional input for the diffusion process, used to guide the direction and result of the diffusion.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.TensorType]]]
- uncond
    - The unconditional input for the diffusion process, providing a baseline for the diffusion effect.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.TensorType]]]
- blended_latent
    - A latent representation combining conditional and unconditional input features, used to influence the diffusion process.
    - Comfy dtype: LATENT
    - Python dtype: Optional[torch.TensorType]
- latent
    - The original latent representation of the model before applying the diffusion process.
    - Comfy dtype: LATENT
    - Python dtype: torch.TensorType
- config
    - A configuration string specifying the layered diffusion process to be applied. This configuration determines how the diffusion is applied, including any model-specific adjustments or optimizations.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- weight
    - A floating-point value affecting the strength of the diffusion process applied to the model. It adjusts the degree to which diffusion changes the model's behavior or output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified model after applying the layered diffusion process, reflecting changes in behavior or output.
    - Comfy dtype: MODEL
    - Python dtype: ModelPatcher
- conditioning
    - Conditional information used or generated during the diffusion process, potentially influencing the model's output.
    - Comfy dtype: CONDITIONING
    - Python dtype: Optional[List[List[torch.TensorType]]]


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
