# Documentation
- Class name: KfApplyCurveToCond
- Category: CONDITIONING
- Output node: False
- Repo Ref: https://github.com/dmarx/ComfyUI-Keyframed

This node dynamically adjusts the intensity of conditioning data according to a specified curve, allowing fine-grained control over the influence of conditioning variables during the generation process.

# Input types
## Required
- curve
    - The curve input is a series of values that will be used to modulate the conditioning data, representing a desired adjustment to the conditioning intensity over time or other variables.
    - Comfy dtype: KEYFRAMED_CURVE
    - Python dtype: List[float]
- cond
    - The conditioning data to be adjusted by the curve input, typically including tensors and their associated metadata, providing context for the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict]]
## Optional
- latents
    - Optional latent data that can be used to further refine the application of the curve to the conditioning data, enhancing the node's adaptability to different use cases.
    - Comfy dtype: LATENT
    - Python dtype: Dict
- start_t
    - The starting index of the curve to be applied, which can be used to control the portion of the curve that influences the conditioning data.
    - Comfy dtype: INT
    - Python dtype: int
- n
    - The number of samples to generate, which can be inferred from the latent data if provided, determining the length of the curve segment applied to the conditioning data.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- cond_out
    - The output is the modified conditioning data, with its intensity adjusted according to the input curve, providing a more tailored influence during the generation process.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[torch.Tensor, Dict]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/dmarx/ComfyUI-Keyframed)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
