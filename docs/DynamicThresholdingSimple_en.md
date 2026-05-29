# Documentation
- Class name: DynamicThresholdingSimpleComfyNode
- Category: advanced/mcmonkey
- Output node: False
- Repo Ref: https://github.com/mcmonkeyprojects/sd-dynamic-thresholding

This node dynamically adjusts the model's threshold settings based on the specified percentile and scaling factor, enabling the model output to conform to the desired characteristics.

# Input types
## Required
- model
    - The model parameter is critical because it defines the underlying architecture and parameters of the neural network whose output will undergo dynamic thresholding.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- mimic_scale
    - This parameter adjusts the degree to which the model output is modified to match the target characteristics, significantly impacting the overall effectiveness of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_percentile
    - The threshold percentile determines the relative threshold used to adjust the model output, which is essential for achieving the desired output distribution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- model
    - The output model is a modified version of the input model, now featuring threshold parameters adjusted according to the specified target characteristics.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/mcmonkeyprojects/sd-dynamic-thresholding)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
