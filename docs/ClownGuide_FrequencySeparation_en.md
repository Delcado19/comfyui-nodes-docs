# Documentation
- Class name: ClownGuide_FrequencySeparation
- Category: RES4LYF/sampler_extensions
- Output node: False
- Repo Ref: https://github.com/ClownsharkBatwing/RES4LYF

ClownGuide_FrequencySeparation is a ComfyUI node registered by `custom_nodes.RES4LYF`. The live metadata did not provide a longer description.

# Input types
## Required
- apply_to
    - The apply_to input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- method
    - The method input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sigma
    - Low values produce results closer to the guide image. No effect with median.
    - Comfy dtype: FLOAT
    - Python dtype: float
- kernel_size
    - Primary control with median. Set the Re___Patcher node to float32 or lower precision if you have OOMs. You may have them regardless at higher kernel sizes with median.
    - Comfy dtype: INT
    - Python dtype: int
- inner_kernel_size
    - Should be equal to, or less than, kernel_size.
    - Comfy dtype: INT
    - Python dtype: int
- stride
    - Should be equal to, or less than, inner_kernel_size.
    - Comfy dtype: INT
    - Python dtype: int
- lowpass_weight
    - Typically should be set to 1.0. Lower values may sharpen the image, higher values may blur the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highpass_weight
    - Typically should be set to 1.0. Higher values may sharpen the image, lower values may blur the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- guides
    - The guides input is used by this node during execution.
    - Comfy dtype: GUIDES
    - Python dtype: object
## Optional
- mask
    - The mask input is used by this node during execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- guides
    - The guides output is produced by this node.
    - Comfy dtype: GUIDES
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/ClownsharkBatwing/RES4LYF)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
