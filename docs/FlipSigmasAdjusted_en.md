# Documentation
- Class name: FlipSigmasAdjusted
- Category: KJNodes/noise
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes.git

The 'FlipSigmasAdjusted' node processes and adjusts a set of sigma values. It reverses the order of input sigmas, optionally divides by the last sigma, and adjusts each sigma based on an offset and a specified divisor. The node also ensures no sigma becomes zero, replacing it with a minimal positive value if necessary. The result is a set of transformed sigma values and a string representation for visualization.

# Input types
## Required
- sigmas
- The 'sigmas' parameter is a sequence of values representing the standard deviation of a noise distribution. It is essential to the node's operation because it determines the base data to be manipulated. The reversal and adjustment process directly affects the node's output.
    - Comfy dtype: FLOAT
    - Python dtype: torch.Tensor
## Optional
- divide_by_last_sigma
- The 'divide_by_last_sigma' parameter is a boolean flag that, when true, causes the node to divide each sigma in the sequence by the last sigma. This operation normalizes the sigma values, which may be important in some noise reduction or image processing tasks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- divide_by
- The 'divide_by' parameter is a floating-point number used to scale the adjusted sigma values. It plays a key role in controlling the magnitude of sigma adjustment, especially when fine-tuning the node's output for a specific application.
    - Comfy dtype: FLOAT
    - Python dtype: float
- offset_by
- The 'offset_by' parameter is an integer that shifts each sigma's index by a given amount. This introduces a transformation or distortion to the sigma sequence, which can be useful for certain types of data analysis or signal processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- SIGMAS
- The 'SIGMAS' output provides the adjusted sigma values after all operations have been applied. This output is critical for subsequent processing steps that depend on these transformed values.
    - Comfy dtype: FLOAT
    - Python dtype: torch.Tensor
- sigmas_string
- The 'sigmas_string' output is a string representation of the adjusted sigma values. It is useful for visualization or logging purposes, providing a human-readable format of the data.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
