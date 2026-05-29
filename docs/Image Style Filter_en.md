# Documentation
- Class name: WAS_Image_Style_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Style_Filter node applies multiple predefined styles to input images, simulating various filters that mimic the look of popular photography apps. It enhances images by adjusting color tones, contrast, and other visual aspects based on the selected style, enabling a wide range of creative effects without requiring detailed knowledge of image processing techniques.

# Input types
## Required
- image
    - The input image to which the style will be applied. It serves as the foundation for the node's stylization operations. The content and properties of the image influence the final stylized result, making it an essential parameter for the node's execution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or list[PIL.Image.Image]
- style
    - The style to be applied to the input image. Each style corresponds to a specific set of visual adjustments that transform the image according to the chosen aesthetic standard. The choice of style is critical, as it determines the overall look and feel of the output image.
    - Comfy dtype: COMBO['1977', 'aden', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'fairy tale', 'gingham', 'hudson', 'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua', 'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2']
    - Python dtype: str

# Output types
- styled_image
    - The resulting image after the style has been applied. It reflects the creative transformation made by the node, embodying the visual effects of the chosen style. This output is important as it represents the final product of the node's functionality.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Style_Filter:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'style': (['1977', 'aden', 'brannan', 'brooklyn', 'clarendon', 'earlybird', 'fairy tale', 'gingham', 'hudson', 'inkwell', 'kelvin', 'lark', 'lofi', 'maven', 'mayfair', 'moon', 'nashville', 'perpetua', 'reyes', 'rise', 'slumber', 'stinson', 'toaster', 'valencia', 'walden', 'willow', 'xpro2'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_style_filter'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_style_filter(self, image, style):
        if 'pilgram' not in packages():
            install_package('pilgram')
        import pilgram
        WTools = WAS_Tools_Class()
        tensors = []
        for img in image:
            if style == '1977':
                tensors.append(pil2tensor(pilgram._1977(tensor2pil(img))))
            elif style == 'aden':
                tensors.append(pil2tensor(pilgram.aden(tensor2pil(img))))
            elif style == 'brannan':
                tensors.append(pil2tensor(pilgram.brannan(tensor2pil(img))))
            elif style == 'brooklyn':
                tensors.append(pil2tensor(pilgram.brooklyn(tensor2pil(img))))
            elif style == 'clarendon':
                tensors.append(pil2tensor(pilgram.clarendon(tensor2pil(img))))
            elif style == 'earlybird':
                tensors.append(pil2tensor(pilgram.earlybird(tensor2pil(img))))
            elif style == 'fairy tale':
                tensors.append(pil2tensor(WTools.sparkle(tensor2pil(img))))
            elif style == 'gingham':
                tensors.append(pil2tensor(pilgram.gingham(tensor2pil(img))))
            elif style == 'hudson':
                tensors.append(pil2tensor(pilgram.hudson(tensor2pil(img))))
            elif style == 'inkwell':
                tensors.append(pil2tensor(pilgram.inkwell(tensor2pil(img))))
            elif style == 'kelvin':
                tensors.append(pil2tensor(pilgram.kelvin(tensor2pil(img))))
            elif style == 'lark':
                tensors.append(pil2tensor(pilgram.lark(tensor2pil(img))))
            elif style == 'lofi':
                tensors.append(pil2tensor(pilgram.lofi(tensor2pil(img))))
            elif style == 'maven':
                tensors.append(pil2tensor(pilgram.maven(tensor2pil(img))))
            elif style == 'mayfair':
                tensors.append(pil2tensor(pilgram.mayfair(tensor2pil(img))))
            elif style == 'moon':
                tensors.append(pil2tensor(pilgram.moon(tensor2pil(img))))
            elif style == 'nashville':
                tensors.append(pil2tensor(pilgram.nashville(tensor2pil(img))))
            elif style == 'perpetua':
                tensors.append(pil2tensor(pilgram.perpetua(tensor2pil(img))))
            elif style == 'reyes':
                tensors.append(pil2tensor(pilgram.reyes(tensor2pil(img))))
            elif style == 'rise':
                tensors.append(pil2tensor(pilgram.rise(tensor2pil(img))))
            elif style == 'slumber':
                tensors.append(pil2tensor(pilgram.slumber(tensor2pil(img))))
            elif style == 'stinson':
                tensors.append(pil2tensor(pilgram.stinson(tensor2pil(img))))
            elif style == 'toaster':
                tensors.append(pil2tensor(pilgram.toaster(tensor2pil(img))))
            elif style == 'valencia':
                tensors.append(pil2tensor(pilgram.valencia(tensor2pil(img))))
            elif style == 'walden':
                tensors.append(pil2tensor(pilgram.walden(tensor2pil(img))))
            elif style == 'willow':
                tensors.append(pil2tensor(pilgram.willow(tensor2pil(img))))
            elif style == 'xpro2':
                tensors.append(pil2tensor(pilgram.xpro2(tensor2pil(img))))
            else:
                tensors.append(img)
        tensors = torch.cat(tensors, dim=0)
        return (tensors,)
```