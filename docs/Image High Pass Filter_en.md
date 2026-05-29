# Documentation
- Class name: WAS_Image_High_Pass_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_High_Pass_Filter node is designed to enhance high-frequency details in an image, effectively removing low-frequency noise or blur. It applies a high-pass filter to the input image, making details more prominent. The node allows adjusting strength and radius to control the intensity and scale of the filtering effect.

# Input types
## Required
- images
    - The input image to be processed by the high-pass filter. This parameter is critical as it defines the data on which the node operates to enhance high-frequency components.
    - Comfy dtype: IMAGE
    - Python dtype: List[PIL.Image.Image]
## Optional
- radius
    - The radius parameter determines the degree of blur the high-pass filter removes. It affects the scale of details preserved in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- strength
    - The strength parameter controls the intensity of the high-pass filter effect. Higher values result in more pronounced enhancement of high-frequency details.
    - Comfy dtype: FLOAT
    - Python dtype: float
- color_output
    - The color_output parameter specifies whether the output should be color (RGB) or grayscale (L). This affects the visual appearance of the filtered image.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: Union[str, Literal['true', 'false']]
- neutral_background
    - The neutral_background parameter determines whether a neutral color background should be added to the image. This can be helpful when a neutral background plate is needed for better visual contrast.
    - Comfy dtype: COMBO['true', 'false']
    - Python dtype: Union[str, Literal['true', 'false']]

# Output types
- images
    - The output parameter containing the processed image with enhanced high-frequency details. These images have had low-frequency components filtered out, emphasizing detail.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_High_Pass_Filter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'images': ('IMAGE',), 'radius': ('INT', {'default': 10, 'min': 1, 'max': 500, 'step': 1}), 'strength': ('FLOAT', {'default': 1.5, 'min': 0.0, 'max': 255.0, 'step': 0.1}), 'color_output': (['true', 'false'],), 'neutral_background': (['true', 'false'],)}}
    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('images',)
    FUNCTION = 'high_pass'
    CATEGORY = 'WAS Suite/Image/Filter'

    def high_pass(self, images, radius=10, strength=1.5, color_output='true', neutral_background='true'):
        batch_tensor = []
        for image in images:
            transformed_image = self.apply_hpf(tensor2pil(image), radius, strength, color_output, neutral_background)
            batch_tensor.append(pil2tensor(transformed_image))
        batch_tensor = torch.cat(batch_tensor, dim=0)
        return (batch_tensor,)

    def apply_hpf(self, img, radius=10, strength=1.5, color_output='true', neutral_background='true'):
        img_arr = np.array(img).astype('float')
        blurred_arr = np.array(img.filter(ImageFilter.GaussianBlur(radius=radius))).astype('float')
        hpf_arr = img_arr - blurred_arr
        hpf_arr = np.clip(hpf_arr * strength, 0, 255).astype('uint8')
        if color_output == 'true':
            high_pass = Image.fromarray(hpf_arr, mode='RGB')
        else:
            grayscale_arr = np.mean(hpf_arr, axis=2).astype('uint8')
            high_pass = Image.fromarray(grayscale_arr, mode='L')
        if neutral_background == 'true':
            neutral_color = (128, 128, 128) if high_pass.mode == 'RGB' else 128
            neutral_bg = Image.new(high_pass.mode, high_pass.size, neutral_color)
            high_pass = ImageChops.screen(neutral_bg, high_pass)
        return high_pass.convert('RGB')
```