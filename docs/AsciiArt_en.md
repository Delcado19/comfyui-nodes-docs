# Documentation
- Class name: AsciiArt
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The AsciiArt node applies an ASCII art effect to the input image, converting it into a stylized representation using a predefined character set. It leverages pixel intensity to select appropriate characters, creating a textual representation of the image content.

# Input types
## Required
- image
    - The input image to apply the ASCII art effect to. It should be a tensor representing image data.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- char_size
    - The character size used in the ASCII art representation. This parameter determines the granularity of the ASCII art effect.
    - Comfy dtype: int
    - Python dtype: int
- font_size
    - The font size for the ASCII art characters. This affects the appearance of the final ASCII art image.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- result
    - The resulting image after applying the ASCII art effect. It is a tensor representing the stylized ASCII art version of the input image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class AsciiArt:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'char_size': ('INT', {'default': 12, 'min': 0, 'max': 64, 'step': 2}), 'font_size': ('INT', {'default': 12, 'min': 0, 'max': 64, 'step': 2})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_ascii_art_effect'
    CATEGORY = 'postprocessing/Effects'

    def apply_ascii_art_effect(self, image: torch.Tensor, char_size: int, font_size: int):
        (batch_size, height, width, channels) = image.shape
        result = torch.zeros_like(image)
        for b in range(batch_size):
            img_b = image[b] * 255.0
            img_b = Image.fromarray(img_b.numpy().astype('uint8'), 'RGB')
            result_b = ascii_art_effect(img_b, char_size, font_size)
            result_b = torch.tensor(np.array(result_b)) / 255.0
            result[b] = result_b
        return (result,)
```