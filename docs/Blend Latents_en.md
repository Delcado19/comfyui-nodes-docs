# Documentation
- Class name: WAS_Blend_Latents
- Category: WAS Suite/Latent
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The `latent_blend` method of the WAS_Blend_Latents class is designed to combine two latent representations using various blending operations. This method is essential for generating composite outputs from separate latent inputs, making it highly useful in diverse applications such as image synthesis and style transfer. It highlights the node's role in creating seamless blends between two latent spaces, emphasizing its flexibility and adaptability to different blending modes.

# Input types
## Required
- latent_a
    - The parameter `latent_a` represents the first latent vector to be blended. It plays a critical role in the blending process, as it forms the foundation of the composite latent output. The importance of this parameter lies in its contribution to the initial state of the blend, which significantly influences the final result.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- latent_b
    - The parameter `latent_b` is the second latent vector to be blended with `latent_a`. It is equally important in the blending process, as it introduces variation and additional features into the final blended latent representation. The interaction between `latent_a` and `latent_b` ultimately determines the outcome of the blend.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- operation
    - The parameter `operation` determines the blending mode applied when combining `latent_a` and `latent_b`. It is a key aspect of the node's functionality, as it dictates how the two latent vectors interact. The choice of operation can greatly alter the nature of the blended output, making this parameter highly influential in the overall execution of the node.
    - Comfy dtype: COMBO['add', 'multiply', 'divide', 'subtract', 'overlay', 'hard_light', 'soft_light', 'screen', 'linear_dodge', 'difference', 'exclusion', 'random']
    - Python dtype: str
## Optional
- blend
    - The parameter `blend` controls the degree of blending between the two latent vectors. It is an optional parameter that allows fine-tuning the balance between `latent_a` and `latent_b`. The `blend` parameter is important because it provides a means to adjust the intensity of the blend, offering a degree of control over the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- samples
    - The output parameter `samples` represents the blended latent representation obtained after applying the selected blending operation. It contains the combined features of the input latent vectors, providing a single output that reflects the essence of both inputs. This output is important as it is the culmination of the node's blending process, intended for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Blend_Latents:

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'latent_a': ('LATENT',), 'latent_b': ('LATENT',), 'operation': (['add', 'multiply', 'divide', 'subtract', 'overlay', 'hard_light', 'soft_light', 'screen', 'linear_dodge', 'difference', 'exclusion', 'random'],), 'blend': ('FLOAT', {'default': 0.5, 'min': 0.01, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('LATENT',)
    FUNCTION = 'latent_blend'
    CATEGORY = 'WAS Suite/Latent'

    def latent_blend(self, latent_a, latent_b, operation, blend):
        return ({'samples': self.blend_latents(latent_a['samples'], latent_b['samples'], operation, blend)},)

    def blend_latents(self, latent1, latent2, mode='add', blend_percentage=0.5):

        def overlay_blend(latent1, latent2, blend_factor):
            low = 2 * latent1 * latent2
            high = 1 - 2 * (1 - latent1) * (1 - latent2)
            blended_latent = latent1 * blend_factor * low + latent2 * blend_factor * high
            return blended_latent

        def screen_blend(latent1, latent2, blend_factor):
            inverted_latent1 = 1 - latent1
            inverted_latent2 = 1 - latent2
            blended_latent = 1 - inverted_latent1 * inverted_latent2 * (1 - blend_factor)
            return blended_latent

        def difference_blend(latent1, latent2, blend_factor):
            blended_latent = abs(latent1 - latent2) * blend_factor
            return blended_latent

        def exclusion_blend(latent1, latent2, blend_factor):
            blended_latent = (latent1 + latent2 - 2 * latent1 * latent2) * blend_factor
            return blended_latent

        def hard_light_blend(latent1, latent2, blend_factor):
            blended_latent = torch.where(latent2 < 0.5, 2 * latent1 * latent2, 1 - 2 * (1 - latent1) * (1 - latent2)) * blend_factor
            return blended_latent

        def linear_dodge_blend(latent1, latent2, blend_factor):
            blended_latent = torch.clamp(latent1 + latent2, 0, 1) * blend_factor
            return blended_latent

        def soft_light_blend(latent1, latent2, blend_factor):
            low = 2 * latent1 * latent2 + latent1 ** 2 - 2 * latent1 * latent2 * latent1
            high = 2 * latent1 * (1 - latent2) + torch.sqrt(latent1) * (2 * latent2 - 1)
            blended_latent = latent1 * blend_factor * low + latent2 * blend_factor * high
            return blended_latent

        def random_noise(latent1, latent2, blend_factor):
            noise1 = torch.randn_like(latent1)
            noise2 = torch.randn_like(latent2)
            noise1 = (noise1 - noise1.min()) / (noise1.max() - noise1.min())
            noise2 = (noise2 - noise2.min()) / (noise2.max() - noise2.min())
            blended_noise = latent1 * blend_factor * noise1 + latent2 * blend_factor * noise2
            blended_noise = torch.clamp(blended_noise, 0, 1)
            return blended_noise
        blend_factor1 = blend_percentage
        blend_factor2 = 1 - blend_percentage
        if mode == 'add':
            blended_latent = latent1 * blend_factor1 + latent2 * blend_factor2
        elif mode == 'multiply':
            blended_latent = latent1 * blend_factor1 * (latent2 * blend_factor2)
        elif mode == 'divide':
            blended_latent = latent1 * blend_factor1 / (latent2 * blend_factor2)
        elif mode == 'subtract':
            blended_latent = latent1 * blend_factor1 - latent2 * blend_factor2
        elif mode == 'overlay':
            blended_latent = overlay_blend(latent1, latent2, blend_factor1)
        elif mode == 'screen':
            blended_latent = screen_blend(latent1, latent2, blend_factor1)
        elif mode == 'difference':
            blended_latent = difference_blend(latent1, latent2, blend_factor1)
        elif mode == 'exclusion':
            blended_latent = exclusion_blend(latent1, latent2, blend_factor1)
        elif mode == 'hard_light':
            blended_latent = hard_light_blend(latent1, latent2, blend_factor1)
        elif mode == 'linear_dodge':
            blended_latent = linear_dodge_blend(latent1, latent2, blend_factor1)
        elif mode == 'soft_light':
            blended_latent = soft_light_blend(latent1, latent2, blend_factor1)
        elif mode == 'random':
            blended_latent = random_noise(latent1, latent2, blend_factor1)
        else:
            raise ValueError("Unsupported blending mode. Please choose from 'add', 'multiply', 'divide', 'subtract', 'overlay', 'screen', 'difference', 'exclusion', 'hard_light', 'linear_dodge', 'soft_light', 'custom_noise'.")
        blended_latent = self.normalize(blended_latent)
        return blended_latent

    def normalize(self, latent):
        return (latent - latent.min()) / (latent.max() - latent.min())
```