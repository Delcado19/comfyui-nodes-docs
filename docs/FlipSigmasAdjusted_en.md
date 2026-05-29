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
```
class FlipSigmasAdjusted:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'sigmas': ('SIGMAS',), 'divide_by_last_sigma': ('BOOLEAN', {'default': False}), 'divide_by': ('FLOAT', {'default': 1, 'min': 1, 'max': 255, 'step': 0.01}), 'offset_by': ('INT', {'default': 1, 'min': -100, 'max': 100, 'step': 1})}}
    RETURN_TYPES = ('SIGMAS', 'STRING')
    RETURN_NAMES = ('SIGMAS', 'sigmas_string')
    CATEGORY = 'KJNodes/noise'
    FUNCTION = 'get_sigmas_adjusted'

    def get_sigmas_adjusted(self, sigmas, divide_by_last_sigma, divide_by, offset_by):
        sigmas = sigmas.flip(0)
        if sigmas[0] == 0:
            sigmas[0] = 0.0001
        adjusted_sigmas = sigmas.clone()
        for i in range(1, len(sigmas)):
            offset_index = i - offset_by
            if 0 <= offset_index < len(sigmas):
                adjusted_sigmas[i] = sigmas[offset_index]
            else:
                adjusted_sigmas[i] = 0.0001
        if adjusted_sigmas[0] == 0:
            adjusted_sigmas[0] = 0.0001
        if divide_by_last_sigma:
            adjusted_sigmas = adjusted_sigmas / adjusted_sigmas[-1]
        sigma_np_array = adjusted_sigmas.numpy()
        array_string = np.array2string(sigma_np_array, precision=2, separator=', ', threshold=np.inf)
        adjusted_sigmas = adjusted_sigmas / divide_by
        return (adjusted_sigmas, array_string)
```