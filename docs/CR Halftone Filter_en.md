# Documentation
- Class name: CR_HalftoneFilter
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_HalftoneFilter node applies a halftone effect to an image, simulating the appearance of printed dots. It offers customization of dot shape, size, and resolution to create various halftone styles. The node is designed to enhance the visual impact of graphic design and artistic applications, enabling users to achieve a retro or stylized look.

# Input types
## Required
- image
    - The input image to which the halftone effect will be applied. It serves as the basis for the node's processing and determines the subject of the halftone conversion.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- dot_size
    - The size of the dots used in the halftone effect, affecting the granularity of the final image. A larger dot size results in a coarser appearance, while smaller sizes provide finer detail.
    - Comfy dtype: INT
    - Python dtype: int
- dot_shape
    - Determines the shape of the dots in the halftone pattern. The choice between ellipse and rectangle can alter the visual texture of the output image, providing a means to adjust the aesthetic of the halftone effect.
    - Comfy dtype: COMBO['ellipse', 'rectangle']
    - Python dtype: str
- resolution
    - Controls the resolution of the halftone effect. The 'hi-res' option doubles the output size, providing higher definition for the halftone pattern at the cost of increased processing time and resource usage.
    - Comfy dtype: COMBO['normal', 'hi-res (2x output size)']
    - Python dtype: str
- angle_c
    - Specifies the angle for the Cyan channel in the CMYK color space, affecting the orientation of cyan dots in the halftone pattern.
    - Comfy dtype: INT
    - Python dtype: int
- angle_m
    - Specifies the angle for the Magenta channel in the CMYK color space, affecting the orientation of magenta dots.
    - Comfy dtype: INT
    - Python dtype: int
- angle_y
    - Specifies the angle for the Yellow channel in the CMYK color space, determining the orientation of yellow dots.
    - Comfy dtype: INT
    - Python dtype: int
- angle_k
    - Specifies the angle for the Key (Black) channel in the CMYK color space, affecting the orientation of black dots.
    - Comfy dtype: INT
    - Python dtype: int
- greyscale
    - A flag indicating whether the input image should be processed in grayscale. When enabled, the halftone effect is applied only to the luminance channel, simplifying the output to monochrome tones.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- antialias
    - Enables or disables anti-aliasing, smoothing the edges of halftone dots and reducing visual artifacts. This can make the final image appear more natural and refined.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- antialias_scale
    - Controls the level of anti-aliasing applied to the halftone dots. Higher values result in a smoother appearance but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- border_blending
    - When enabled, border blending smooths the transitions between halftone dots near the edges of the image, preventing sharp dividing lines and promoting a more uniform appearance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output image with the halftone effect applied, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- show_help
    - Provides a link to documentation or a help page for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class CR_HalftoneFilter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        shapes = ['ellipse', 'rectangle']
        rez = ['normal', 'hi-res (2x output size)']
        return {'required': {'image': ('IMAGE',), 'dot_size': ('INT', {'default': 5, 'min': 1, 'max': 30, 'step': 1}), 'dot_shape': (shapes, {'default': 'ellipse'}), 'resolution': (rez, {'default': 'normal'}), 'angle_c': ('INT', {'default': 75, 'min': 0, 'max': 360, 'step': 1}), 'angle_m': ('INT', {'default': 45, 'min': 0, 'max': 360, 'step': 1}), 'angle_y': ('INT', {'default': 15, 'min': 0, 'max': 360, 'step': 1}), 'angle_k': ('INT', {'default': 0, 'min': 0, 'max': 360, 'step': 1}), 'greyscale': ('BOOLEAN', {'default': True}), 'antialias': ('BOOLEAN', {'default': True}), 'antialias_scale': ('INT', {'default': 2, 'min': 1, 'max': 4, 'step': 1}), 'border_blending': ('BOOLEAN', {'default': False})}}
    RETURN_TYPES = ('IMAGE', 'STRING')
    RETURN_NAMES = ('IMAGE', 'show_help')
    FUNCTION = 'halftone_effect'
    CATEGORY = icons.get('Comfyroll/Graphics/Filter')

    def tensor_to_pil(self, tensor):
        if tensor.ndim == 4 and tensor.shape[0] == 1:
            tensor = tensor.squeeze(0)
        if tensor.dtype == torch.float32:
            tensor = tensor.mul(255).byte()
        elif tensor.dtype != torch.uint8:
            tensor = tensor.byte()
        numpy_image = tensor.cpu().numpy()
        if tensor.ndim == 3:
            if tensor.shape[2] == 1:
                mode = 'L'
            elif tensor.shape[2] == 3:
                mode = 'RGB'
            elif tensor.shape[2] == 4:
                mode = 'RGBA'
            else:
                raise ValueError(f'Unsupported channel number: {tensor.shape[2]}')
        else:
            raise ValueError(f'Unexpected tensor shape: {tensor.shape}')
        pil_image = Image.fromarray(numpy_image, mode)
        return pil_image

    def pil_to_tensor(self, pil_image):
        numpy_image = np.array(pil_image)
        tensor = torch.from_numpy(numpy_image).float().div(255)
        tensor = tensor.unsqueeze(0)
        return tensor

    def halftone_effect(self, image, dot_size, dot_shape, resolution, angle_c, angle_m, angle_y, angle_k, greyscale, antialias, border_blending, antialias_scale):
        sample = dot_size
        shape = dot_shape
        resolution_to_scale = {'normal': 1, 'hi-res (2x output size)': 2}
        scale = resolution_to_scale.get(resolution, 1)
        if isinstance(image, torch.Tensor):
            image = self.tensor_to_pil(image)
        if not isinstance(image, Image.Image):
            raise TypeError('The provided image is neither a PIL Image nor a PyTorch tensor.')
        pil_image = image
        if greyscale:
            pil_image = pil_image.convert('L')
            channel_images = [pil_image]
            angles = [angle_k]
        else:
            pil_image = pil_image.convert('CMYK')
            channel_images = list(pil_image.split())
            angles = [angle_c, angle_m, angle_y, angle_k]
        halftone_images = self._halftone_pil(pil_image, channel_images, sample, scale, angles, antialias, border_blending, antialias_scale, shape)
        if greyscale:
            new_image = halftone_images[0].convert('RGB')
        else:
            new_image = Image.merge('CMYK', halftone_images).convert('RGB')
        result_tensor = self.pil_to_tensor(new_image)
        print('Final tensor shape:', result_tensor.shape)
        return (result_tensor, show_help)

    def _halftone_pil(self, im, cmyk, sample, scale, angles, antialias, border_blending, antialias_scale, shape):
        antialias_res = antialias_scale if antialias else 1
        scale = scale * antialias_res
        dots = []
        for (channel_index, (channel, angle)) in enumerate(zip(cmyk, angles)):
            channel = channel.rotate(angle, expand=1)
            size = (channel.size[0] * scale, channel.size[1] * scale)
            half_tone = Image.new('L', size)
            draw = ImageDraw.Draw(half_tone)
            for x in range(0, channel.size[0], sample):
                for y in range(0, channel.size[1], sample):
                    if border_blending and angle % 90 != 0 and (x < sample or y < sample or x > channel.size[0] - sample or (y > channel.size[1] - sample)):
                        neighboring_pixels = channel.crop((max(x - 1, 0), max(y - 1, 0), min(x + 2, channel.size[0]), min(y + 2, channel.size[1])))
                        pixels = list(neighboring_pixels.getdata())
                        weights = [0.5 if i in [0, len(pixels) - 1] else 1 for i in range(len(pixels))]
                        weighted_mean = sum((p * w for (p, w) in zip(pixels, weights))) / sum(weights)
                        mean = weighted_mean
                    else:
                        box = channel.crop((x, y, x + sample, y + sample))
                        mean = ImageStat.Stat(box).mean[0]
                    size = (mean / 255) ** 0.5
                    box_size = sample * scale
                    draw_size = size * box_size
                    (box_x, box_y) = (x * scale, y * scale)
                    x1 = box_x + (box_size - draw_size) / 2
                    y1 = box_y + (box_size - draw_size) / 2
                    x2 = x1 + draw_size
                    y2 = y1 + draw_size
                    draw_method = getattr(draw, shape, None)
                    if draw_method:
                        draw_method([(x1, y1), (x2, y2)], fill=255)
            half_tone = half_tone.rotate(-angle, expand=1)
            (width_half, height_half) = half_tone.size
            xx1 = (width_half - im.size[0] * scale) / 2
            yy1 = (height_half - im.size[1] * scale) / 2
            xx2 = xx1 + im.size[0] * scale
            yy2 = yy1 + im.size[1] * scale
            half_tone = half_tone.crop((xx1, yy1, xx2, yy2))
            if antialias:
                w = int((xx2 - xx1) / antialias_scale)
                h = int((yy2 - yy1) / antialias_scale)
                half_tone = half_tone.resize((w, h), resample=Image.LANCZOS)
            dots.append(half_tone)
            show_help = 'https://github.com/Suzie1/ComfyUI_Comfyroll_CustomNodes/wiki/Filter-Nodes#cr-halftone-filter'
        return (dots, show_help)
```