# Documentation
- Class name: Quantize
- Category: image/postprocessing
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Quantize node aims to reduce the number of colors used in an image, a process known as color quantization. It achieves this by mapping the continuous color range in a given image to a specified palette of a finite number of colors. The node supports multiple dithering techniques to improve the visual quality of the quantized image, such as Floyd-Steinberg dithering and Bayer dithering of various orders. The node's functionality is essential for applications that wish to reduce color depth, such as when creating smaller image files or achieving compatibility with certain display technologies.

# Input types
## Required
- image
    - The image parameter is the input tensor representing the image to be quantized. It is a critical part of the entire process, as the whole workflow revolves around reducing the color palette of this image. The image tensor should be in RGB format and is expected to be a floating-point representation normalized between 0 and 1.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- colors
    - The colors parameter specifies the number of colors to reduce the image palette to. It plays an important role in determining the final quality and file size of the quantized image. A smaller number of colors will result in a noticeable reduction in file size but may also lead to a loss of image detail.
    - Comfy dtype: int
    - Python dtype: int
## Optional
- dither
    - The dither parameter determines the dithering technique to apply during the quantization process. Dithering can help create more visually pleasing results by diffusing quantization errors. Available options include 'none', 'floyd-steinberg', and 'bayer' dithering of various orders.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- quantized_image
    - The quantized image output is the result of the color quantization process. It is a tensor representing the image with a reduced color palette. This output tensor is essential for further processing or saving the image in formats that support reduced color depth.
    - Comfy dtype: torch.Tensor
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
        return {'required': {'image': ('IMAGE',), 'colors': ('INT', {'default': 256, 'min': 1, 'max': 256, 'step': 1}), 'dither': (['none', 'floyd-steinberg', 'bayer-2', 'bayer-4', 'bayer-8', 'bayer-16'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'quantize'
    CATEGORY = 'image/postprocessing'

    def bayer(im, pal_im, order):

        def normalized_bayer_matrix(n):
            if n == 0:
                return np.zeros((1, 1), 'float32')
            else:
                q = 4 ** n
                m = q * normalized_bayer_matrix(n - 1)
                return np.bmat(((m - 1.5, m + 0.5), (m + 1.5, m - 0.5))) / q
        num_colors = len(pal_im.getpalette()) // 3
        spread = 2 * 256 / num_colors
        bayer_n = int(math.log2(order))
        bayer_matrix = torch.from_numpy(spread * normalized_bayer_matrix(bayer_n) + 0.5)
        result = torch.from_numpy(np.array(im).astype(np.float32))
        tw = math.ceil(result.shape[0] / bayer_matrix.shape[0])
        th = math.ceil(result.shape[1] / bayer_matrix.shape[1])
        tiled_matrix = bayer_matrix.tile(tw, th).unsqueeze(-1)
        result.add_(tiled_matrix[:result.shape[0], :result.shape[1]]).clamp_(0, 255)
        result = result.to(dtype=torch.uint8)
        im = Image.fromarray(result.cpu().numpy())
        im = im.quantize(palette=pal_im, dither=Image.Dither.NONE)
        return im

    def quantize(self, image: torch.Tensor, colors: int, dither: str):
        (batch_size, height, width, _) = image.shape
        result = torch.zeros_like(image)
        for b in range(batch_size):
            im = Image.fromarray((image[b] * 255).to(torch.uint8).numpy(), mode='RGB')
            pal_im = im.quantize(colors=colors)
            if dither == 'none':
                quantized_image = im.quantize(palette=pal_im, dither=Image.Dither.NONE)
            elif dither == 'floyd-steinberg':
                quantized_image = im.quantize(palette=pal_im, dither=Image.Dither.FLOYDSTEINBERG)
            elif dither.startswith('bayer'):
                order = int(dither.split('-')[-1])
                quantized_image = Quantize.bayer(im, pal_im, order)
            quantized_array = torch.tensor(np.array(quantized_image.convert('RGB'))).float() / 255
            result[b] = quantized_array
        return (result,)
```