# Documentation
- Class name: CR_HalfDropPanel
- Category: Comfyroll/Graphics/Layout
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_HalfDropPanel is a node that operates on and transforms images according to a specified mode, creating a drop effect with customizable percentage values. It enhances visual presentation by applying half-drop, quarter-drop, or custom drop modes, offering users a flexible way to adjust image layout and aesthetics for various design purposes.

# Input types
## Required
- image
- The image parameter is required because it is the fundamental input for the node. It determines the source material for the drop panel effect and is critical to the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- pattern
- The mode parameter determines the type of drop effect to apply to the image. It is essential for defining the specific visual transformation the node will perform.
    - Comfy dtype: COMBO['none', 'half drop', 'quarter drop', 'custom drop %']
    - Python dtype: str
## Optional
- drop_percentage
- The drop_percentage parameter is optional but crucial when selecting a custom drop mode. It allows users to control the extent of the drop effect, providing a degree of customization for the image transformation.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
- The transformed image output is the primary result of the node's operation. It represents the image with the drop mode applied, serving as the visual output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - The show_help output provides a link to the documentation for further assistance. It is a useful resource for users seeking how to use the node or troubleshoot issues.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_HalfDropPanel:

    @classmethod
    def INPUT_TYPES(s):
        patterns = ['none', 'half drop', 'quarter drop', 'custom drop %']
        return {'required': {'image': ('IMAGE',), 'pattern': (patterns,)}, 'optional': {'drop_percentage': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 1.0, 'step': 0.01})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('image', 'show_help')
    FUNCTION = 'make_panel'
    CATEGORY = icons.get('Comfyroll/Graphics/Layout')

    def make_panel(self, image, pattern, drop_percentage=0.5):
        show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Layout-Nodes#cr-half-drop-panel'
        if pattern == 'none':
            return (image, show_help)
        pil_img = tensor2pil(image)
        pil_img = pil_img.convert('RGBA')
        (x, y) = pil_img.size
        aspect_ratio = x / y
        d = int(drop_percentage * 100)
        panel_image = Image.new('RGBA', (x * 2, y * 2))
        if pattern == 'half drop':
            panel_image.paste(pil_img, (0, 0))
            panel_image.paste(pil_img, (0, y))
            panel_image.paste(pil_img, (x, -y // 2))
            panel_image.paste(pil_img, (x, y // 2))
            panel_image.paste(pil_img, (x, 3 * y // 2))
        elif pattern == 'quarter drop':
            panel_image.paste(pil_img, (0, 0))
            panel_image.paste(pil_img, (0, y))
            panel_image.paste(pil_img, (x, -3 * y // 4))
            panel_image.paste(pil_img, (x, y // 4))
            panel_image.paste(pil_img, (x, 5 * y // 4))
        elif pattern == 'custom drop %':
            panel_image.paste(pil_img, (0, 0))
            panel_image.paste(pil_img, (0, y))
            panel_image.paste(pil_img, (x, (d - 100) * y // 100))
            panel_image.paste(pil_img, (x, d * y // 100))
            panel_image.paste(pil_img, (x, y + d * y // 100))
        image_out = pil2tensor(panel_image.convert('RGB'))
        return (image_out, show_help)
```