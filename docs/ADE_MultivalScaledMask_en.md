# Documentation
- Class name: MultivalScaledMaskNode
- Category: Animate Diff 🎭🅐🅓/multival
- Output node: False
- Repo Ref: https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved.git

MultivalScaledMaskNode class aims to transform a given mask tensor by scaling it within a specified range. It applies either a linear transformation or normalization based on the selected scaling type, ensuring that the output mask is suitable for further processing in animation or visualization applications.

# Input types
## Required
- min_float_val
    - The minimum float value parameter defines the lower bound of the mask tensor scaling range. It plays a crucial role in setting the scaling factor for the mask, ensuring that the scaled minimum matches the specified value.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_float_val
    - The maximum float value parameter sets the upper bound of the mask tensor scaling. It is critical for determining the scaling factor, ensuring that the scaled maximum aligns with the desired maximum.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mask
    - The mask parameter is a tensor that will be scaled according to the specified minimum and maximum float values. It is the core element of the node operation, as scaling is directly applied to this tensor to achieve the desired multival effect.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- scaling
    - The scaling parameter determines the type of scaling to be applied to the mask tensor. It can be absolute or relative, affecting how values are adjusted within the specified range.
    - Comfy dtype: ScaleType.LIST
    - Python dtype: str

# Output types
- multival
    - The output of MultivalScaledMaskNode is a multivalued tensor representing the scaled mask. It is essential as it is the direct result of the node operation and can be used for subsequent animation or visualization tasks.
    - Comfy dtype: MULTIVAL
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Kosinkadink/ComfyUI-AnimateDiff-Evolved)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
