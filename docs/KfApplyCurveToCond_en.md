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
```
class KfApplyCurveToCond:
    CATEGORY = CATEGORY
    FUNCTION = 'main'
    RETURN_TYPES = ('CONDITIONING',)

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'curve': ('KEYFRAMED_CURVE', {'forceInput': True}), 'cond': ('CONDITIONING', {'forceInput': True})}, 'optional': {'latents': ('LATENT', {}), 'start_t': ('INT', {'default': 0}), 'n': ('INT', {})}}

    def main(self, curve, cond, latents=None, start_t=0, n=0):
        curve = deepcopy(curve)
        cond = deepcopy(cond)
        if isinstance(latents, dict):
            if 'samples' in latents:
                n = latents['samples'].shape[0]
        cond_out = []
        for (c_tensor, c_dict) in cond:
            m = c_tensor.shape[0]
            if c_tensor.shape[0] == 1:
                c_tensor = c_tensor.repeat(n, 1, 1)
                m = n
            weights = [curve[start_t + i] for i in range(m)]
            weights = torch.tensor(weights, device=c_tensor.device)
            c_tensor = c_tensor * weights.view(m, 1, 1)
            if 'pooled_output' in c_dict:
                c_dict = deepcopy(c_dict)
                pooled = c_dict['pooled_output']
                if pooled.shape[0] == 1:
                    pooled = pooled.repeat(m, 1)
                c_dict['pooled_output'] = pooled * weights.view(m, 1)
            cond_out.append((c_tensor, c_dict))
        return (cond_out,)
```