# Documentation
- Class name: ColorTint
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The ColorTint node is designed to adjust the color tone of an image, enhancing or altering its visual appeal. It applies color tinting based on the selected mode, effectively changing the mood and style of the image. This node is suitable for post-processing tasks requiring color adjustments to match desired aesthetics or correct color imbalances.

# Input types
## Required
- image
    - The image parameter is the primary input to the ColorTint node. It is the source image that will undergo color adjustment. The quality and characteristics of the image directly affect the final output, making it a critical component for achieving the desired visual effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- strength
    - The intensity parameter controls the strength of the color tinting effect applied to the image. It is a float value that determines the prominence of the color change. Higher values increase the effect, while lower values make it more subtle.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- mode
    - The mode parameter determines the specific color tinting to be applied to the image. It offers multiple preset options, each creating a unique visual style. The choice of mode significantly impacts the overall mood and aesthetics of the processed image.
    - Comfy dtype: COMBO
    - Python dtype: str

# Output types
- result
    - The result parameter is the output of the ColorTint node. It is the image modified by color tinting, reflecting the input settings. This output is essential for further processing or final presentation, containing the creative adjustments made by the node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class ColorTint:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'strength': ('FLOAT', {'default': 1.0, 'min': 0.1, 'max': 1.0, 'step': 0.1}), 'mode': (['sepia', 'red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'purple', 'orange', 'warm', 'cool', 'lime', 'navy', 'vintage', 'rose', 'teal', 'maroon', 'peach', 'lavender', 'olive'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'color_tint'
    CATEGORY = 'postprocessing/Color Adjustments'

    def color_tint(self, image: torch.Tensor, strength: float, mode: str='sepia'):
        if strength == 0:
            return (image,)
        sepia_weights = torch.tensor([0.2989, 0.587, 0.114]).view(1, 1, 1, 3).to(image.device)
        mode_filters = {'sepia': torch.tensor([1.0, 0.8, 0.6]), 'red': torch.tensor([1.0, 0.6, 0.6]), 'green': torch.tensor([0.6, 1.0, 0.6]), 'blue': torch.tensor([0.6, 0.8, 1.0]), 'cyan': torch.tensor([0.6, 1.0, 1.0]), 'magenta': torch.tensor([1.0, 0.6, 1.0]), 'yellow': torch.tensor([1.0, 1.0, 0.6]), 'purple': torch.tensor([0.8, 0.6, 1.0]), 'orange': torch.tensor([1.0, 0.7, 0.3]), 'warm': torch.tensor([1.0, 0.9, 0.7]), 'cool': torch.tensor([0.7, 0.9, 1.0]), 'lime': torch.tensor([0.7, 1.0, 0.3]), 'navy': torch.tensor([0.3, 0.4, 0.7]), 'vintage': torch.tensor([0.9, 0.85, 0.7]), 'rose': torch.tensor([1.0, 0.8, 0.9]), 'teal': torch.tensor([0.3, 0.8, 0.8]), 'maroon': torch.tensor([0.7, 0.3, 0.5]), 'peach': torch.tensor([1.0, 0.8, 0.6]), 'lavender': torch.tensor([0.8, 0.6, 1.0]), 'olive': torch.tensor([0.6, 0.7, 0.4])}
        scale_filter = mode_filters[mode].view(1, 1, 1, 3).to(image.device)
        grayscale = torch.sum(image * sepia_weights, dim=-1, keepdim=True)
        tinted = grayscale * scale_filter
        result = tinted * strength + image * (1 - strength)
        return (result,)
```