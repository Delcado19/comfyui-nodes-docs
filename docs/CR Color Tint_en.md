# Documentation
- Class name: CR_ColorTint
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ColorTint node applies a color tint to images, enhancing visual appeal by overlaying the selected color. It offers a versatile color manipulation method, allowing users to choose from predefined colors or enter custom hexadecimal values. It is optimized for custom color application and batch processing, ensuring efficiency and consistency across multiple images.

# Input types
## Required
- image
- The image parameter is required because it is the input the node will process. It is the basis for applying the color tint effect and a key component of the node's operation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- strength
- The intensity parameter controls the strength of the color tint applied to the image. It allows fine‑tuning of the effect to achieve the desired visual result and is an important aspect of the node's functionality.
    - Comfy dtype: FLOAT
    - Python dtype: float
- mode
- The mode parameter determines the type of color tint to apply. It provides a range of preset options so users can select a specific color tone that fits their creative vision.
    - Comfy dtype: COMBO['custom', 'white', 'black', 'sepia', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'warm', 'cool', 'lime', 'navy', 'vintage', 'rose', 'teal', 'maroon', 'peach', 'lavender', 'olive']
    - Python dtype: str
- tint_color_hex
- When a custom color is selected, use the tint_color_hex parameter. It lets users specify the exact hexadecimal color for the tint, offering high customization for the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
- The IMAGE output is the processed image with the color tint applied. It represents the final result of the node's operation and is the primary output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
- The show_help output provides a URL to the node documentation. It is a useful resource for users seeking effective use of the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_ColorTint:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        tints = ['custom', 'white', 'black', 'sepia', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'warm', 'cool', 'lime', 'navy', 'vintage', 'rose', 'teal', 'maroon', 'peach', 'lavender', 'olive']
        return {'required': {'image': ('IMAGE',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 1.0, 'step': 0.1}), 'mode': (tints,)}, 'optional': {'tint_color_hex': ('STRING', {'multiline': False, 'default': '#000000'})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'color_tint'
    CATEGORY = icons.get('Comfyroll/Graphics/Filter')

    def color_tint(self, image: torch.Tensor, strength, mode: str='sepia', tint_color_hex='#000000'):
        if strength == 0:
            return (image,)
        tint_color = get_color_values(mode, tint_color_hex, color_mapping)
        color_rgb = tuple([value / 255 for value in tint_color])
        sepia_weights = torch.tensor([0.2989, 0.587, 0.114]).view(1, 1, 1, 3).to(image.device)
        mode_filters = {'custom': torch.tensor([color_rgb[0], color_rgb[1], color_rgb[2]]), 'white': torch.tensor([1, 1, 1]), 'black': torch.tensor([0, 0, 0]), 'sepia': torch.tensor([1.0, 0.8, 0.6]), 'red': torch.tensor([1.0, 0.6, 0.6]), 'green': torch.tensor([0.6, 1.0, 0.6]), 'blue': torch.tensor([0.6, 0.8, 1.0]), 'cyan': torch.tensor([0.6, 1.0, 1.0]), 'magenta': torch.tensor([1.0, 0.6, 1.0]), 'yellow': torch.tensor([1.0, 1.0, 0.6]), 'purple': torch.tensor([0.8, 0.6, 1.0]), 'orange': torch.tensor([1.0, 0.7, 0.3]), 'warm': torch.tensor([1.0, 0.9, 0.7]), 'cool': torch.tensor([0.7, 0.9, 1.0]), 'lime': torch.tensor([0.7, 1.0, 0.3]), 'navy': torch.tensor([0.3, 0.4, 0.7]), 'vintage': torch.tensor([0.9, 0.85, 0.7]), 'rose': torch.tensor([1.0, 0.8, 0.9]), 'teal': torch.tensor([0.3, 0.8, 0.8]), 'maroon': torch.tensor([0.7, 0.3, 0.5]), 'peach': torch.tensor([1.0, 0.8, 0.6]), 'lavender': torch.tensor([0.8, 0.6, 1.0]), 'olive': torch.tensor([0.6, 0.7, 0.4])}
        scale_filter = mode_filters[mode].view(1, 1, 1, 3).to(image.device)
        grayscale = torch.sum(image * sepia_weights, dim=-1, keepdim=True)
        tinted = grayscale * scale_filter
        result = tinted * strength + image * (1 - strength)
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Filter-Nodes#cr-color-tint'
        return (result, show_help)
```