# Documentation
- Class name: Quantize
- Category: postprocessing/Color Adjustments
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Quantize node aims to reduce the number of colors in an image, a process called color quantization. It achieves this by mapping the image’s colors to a specified number of colors, which is useful for creating a more stylized or retro look. The node also offers an option to apply dithering, which helps smooth transitions between colors and reduce the appearance of color banding.

# Input types
## Required
- image
- The image parameter represents the input tensor of the image to be quantized. It plays a crucial role in the node’s operation, as the entire quantization process is applied to this image. The quality and characteristics of the quantized image largely depend on the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- colors
- The color parameter specifies the number of colors to reduce the image to. This is an important setting because it directly affects the level of detail and appearance of the quantized image. More colors preserve more detail but increase file size.
    - Comfy dtype: INT
    - Python dtype: int
- dither
- The dithering parameter determines whether a dithering algorithm is applied during quantization. Dithering can help create a more visually appealing result by reducing the visibility of color banding. Choosing between 'none' and 'floyd-steinberg' affects the final image quality.
    - Comfy dtype: COMBO[none, floyd-steinberg]
    - Python dtype: str

# Output types
- quantized_image
- The quantized image output is the result of the color quantization process. It is a tensor representing the image with reduced color count. This output is important because it is the direct result of the node’s operation and can be used for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class Quantize:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'colors': ('INT', {'default': 256, 'min': 1, 'max': 256, 'step': 1}), 'dither': (['none', 'floyd-steinberg'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'quantize'
    CATEGORY = 'postprocessing/Color Adjustments'

    def quantize(self, image: torch.Tensor, colors: int=256, dither: str='FLOYDSTEINBERG'):
        (batch_size, height, width, _) = image.shape
        result = torch.zeros_like(image)
        dither_option = Image.Dither.FLOYDSTEINBERG if dither == 'floyd-steinberg' else Image.Dither.NONE
        for b in range(batch_size):
            tensor_image = image[b]
            img = (tensor_image * 255).to(torch.uint8).numpy()
            pil_image = Image.fromarray(img, mode='RGB')
            palette = pil_image.quantize(colors=colors)
            quantized_image = pil_image.quantize(colors=colors, palette=palette, dither=dither_option)
            quantized_array = torch.tensor(np.array(quantized_image.convert('RGB'))).float() / 255
            result[b] = quantized_array
        return (result,)
```