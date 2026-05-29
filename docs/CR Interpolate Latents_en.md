# Documentation
- Class name: CR_InterpolateLatents
- Category: Comfyroll/Animation/Interpolate
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_InterpolateLatents is a node for performing interpolation between two latent representations, providing smooth transitions between states. This node is essential for creating seamless animations or transformations within a given data space.

# Input types
## Required
- latent1
    - The first latent representation used as the starting point of the interpolation process. It is crucial for defining the initial state of the animation or transformation.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- latent2
    - The second latent representation serving as the endpoint of the interpolation. It defines the final state that the interpolation aims to achieve.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- weight
    - The weight parameter influences the degree of interpolation between the two latent states. It is essential for controlling the speed and range of the transition.
    - Comfy dtype: FLOAT
    - Python dtype: float
- method
    - The interpolation method determines the algorithm used to transition between latent states. It is a key factor in the type of interpolation performed.
    - Comfy dtype: COMBO['lerp']
    - Python dtype: str

# Output types
- LATENT
    - The output latent state produced by the interpolation process, representing a blend of the input latent states.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - A URL linking to documentation for further assistance and understanding of the interpolation process.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_InterpolateLatents:

    @classmethod
    def INPUT_TYPES(cls):
        interpolation_methods = ['lerp']
        return {'required': {'latent1': ('LATENT',), 'latent2': ('LATENT',), 'weight': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'method': (interpolation_methods,)}}
    RETURN_TYPES = ('LATENT', 'STRING')
    RETURN_NAMES = ('LATENT', 'show_help')
    FUNCTION = 'interpolate'
    CATEGORY = icons.get('Comfyroll/Animation/Interpolate')

    def interpolate(self, latent1, latent2, weight, method):
        a = latent1.copy()
        b = latent2.copy()
        c = {}
        if method == 'lerp':
            torch.lerp(a['samples'], b['samples'], weight, out=a['samples'])
        elif method == 'slerp':
            dot_products = torch.sum(latent1['samples'] * latent2['samples'], dim=(2, 3))
            dot_products = torch.clamp(dot_products, -1, 1)
            angles = torch.acos(dot_products)
            sin_angles = torch.sin(angles)
            weight1 = torch.sin((1 - weight) * angles) / sin_angles
            weight2 = torch.sin(weight * angles) / sin_angles
            weight1 = weight1.unsqueeze(-1).unsqueeze(-1)
            weight2 = weight2.unsqueeze(-1).unsqueeze(-1)
            interpolated_samples = weight1 * latent1['samples'] + weight2 * latent2['samples']
            a['samples'] = interpolated_samples
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Interpolation-Nodes#cr-interpolate-latents'
        return (a, show_help)
```