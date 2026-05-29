
# Documentation
- Class name: Inference_Core_TonemapNoiseWithRescaleCFG
- Category: custom_node_experiments
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

This node applies tone mapping and noise rescaling configurations to a given model, enhancing the model's ability to process conditional and unconditional inputs by adjusting their scale and contrast. It combines tone mapping techniques and rescaling factors to modify the model's sampling behavior, aiming to improve the quality and consistency of generated outputs.

# Input types
## Required
- model
    - The model to which tone mapping and noise rescaling configurations will be applied. These configurations adjust how the model processes inputs to improve output quality.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- tonemap_multiplier
    - A multiplier that adjusts the strength of the tone mapping effect, affecting the contrast and brightness of noise in the model output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rescale_multiplier
    - A multiplier that adjusts the scale of conditional generation, influencing the balance between the original noise prediction and the modified noise prediction in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The modified model with updated sampling behavior, incorporating the specified tone mapping and noise rescaling configurations.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
