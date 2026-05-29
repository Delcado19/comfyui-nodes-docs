# Documentation
- Class name: DynamicThresholdingComfyNode
- Category: advanced/mcmonkey
- Output node: False
- Repo Ref: https://github.com/mcmonkeyprojects/sd-dynamic-thresholding

This node dynamically adjusts the model's thresholding process to achieve the desired level of mimicry and control the generated output. It refines the model's response by interpreting scale and variability measures, optimizing the generation process according to specified parameters.

# Input types
## Required
- model
    - Model parameters are essential, defining the foundation of node operations. They serve as the basis for applying the dynamic thresholding process, and their characteristics directly influence the output results.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module
- mimic_scale
    - The mimic_scale parameter is critical for controlling the degree of mimicry in the output. It adjusts the intensity of the thresholding process, thereby affecting the final quality and similarity of the generated content.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_percentile
    - The threshold_percentile parameter plays an important role in determining the variability of the generated content. It sets a threshold based on percentile values, used to control dynamic scaling of features.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mimic_mode
    - The mimic_mode parameter specifies the scaling mode during the thresholding process. It plays a key role in defining how the model adapts to input and adjusts its output accordingly.
    - Comfy dtype: ENUM
    - Python dtype: str
- cfg_mode
    - The cfg_mode parameter specifies the configuration mode for dynamic thresholds. It is critical in guiding how the node interprets and applies scaling factors for feature adjustments.
    - Comfy dtype: ENUM
    - Python dtype: str

# Output types
- model
    - The output model is the result of the dynamic thresholding process. It has been optimized and adjusted based on input parameters, providing optimized and controlled output that meets the desired mimicry and quality standards.
    - Comfy dtype: MODEL
    - Python dtype: torch.nn.Module

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/mcmonkeyprojects/sd-dynamic-thresholding)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
