# Documentation
- Class name: ChromaticAberration
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node simulates chromatic aberration in images by shifting color channels horizontally or vertically to alter perceived colors, creating realistic distortion effects.

# Input types
## Required
- image
    - The image parameter is required as it serves as the basis for applying the chromatic aberration effect. It is the primary input that determines the visual output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- red_shift
    - red_shift parameter adjusts the horizontal or vertical position of the red channel, contributing to the overall chromatic aberration effect.
    - Comfy dtype: INT
    - Python dtype: int
- green_shift
    - green_shift parameter affects the position of the green channel, enhancing or modifying the chromatic aberration effect to achieve the desired visual impact.
    - Comfy dtype: INT
    - Python dtype: int
- blue_shift
    - blue_shift parameter controls the displacement of the blue channel, which is crucial for creating a convincing chromatic aberration effect.
    - Comfy dtype: INT
    - Python dtype: int
- red_direction
    - red_direction parameter specifies the direction of movement for the red channel, horizontal or vertical, to achieve the intended chromatic aberration effect.
    - Comfy dtype: COMBO
    - Python dtype: str
- green_direction
    - green_direction parameter determines the direction of movement for the green channel, which is essential for accurately simulating chromatic aberration.
    - Comfy dtype: COMBO
    - Python dtype: str
- blue_direction
    - blue_direction parameter specifies the direction of movement for the blue channel, contributing to the overall chromatic aberration effect.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- output
    - The output parameter represents the final image with the chromatic aberration effect applied, showcasing the visual impact of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ChromaticAberration:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'red_shift': ('INT', {'default': 0, 'min': -20, 'max': 20, 'step': 1}), 'red_direction': (['horizontal', 'vertical'],), 'green_shift': ('INT', {'default': 0, 'min': -20, 'max': 20, 'step': 1}), 'green_direction': (['horizontal', 'vertical'],), 'blue_shift': ('INT', {'default': 0, 'min': -20, 'max': 20, 'step': 1}), 'blue_direction': (['horizontal', 'vertical'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'chromatic_aberration'
    CATEGORY = 'postprocessing/Effects'

    def chromatic_aberration(self, image: torch.Tensor, red_shift: int, green_shift: int, blue_shift: int, red_direction: str, green_direction: str, blue_direction: str):

        def get_shift(direction, shift):
            shift = -shift if direction == 'vertical' else shift
            return (shift, 0) if direction == 'vertical' else (0, shift)
        x = image.permute(0, 3, 1, 2)
        shifts = [get_shift(direction, shift) for (direction, shift) in zip([red_direction, green_direction, blue_direction], [red_shift, green_shift, blue_shift])]
        channels = [torch.roll(x[:, i, :, :], shifts=shifts[i], dims=(1, 2)) for i in range(3)]
        output = torch.stack(channels, dim=1)
        output = output.permute(0, 2, 3, 1)
        return (output,)
```