# Documentation
- Class name: WAS_Image_Filters
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Filters node is designed to apply a comprehensive set of image processing filters to an input image to enhance or modify its visual characteristics. It provides functionality including adjusting brightness, contrast, and saturation, as well as applying sharpening, blurring, edge enhancement, and detail enhancement effects. The purpose of this node is to offer a versatile image processing tool that can be used for a wide range of applications, from simple adjustments to more complex visual transformations.

# Input types
## Required
- image
    - The 'image' parameter is the primary input to the node, representing the image data that will undergo filtering. It is critical because it determines the base content upon which all subsequent enhancements and modifications will be applied. The quality and format of the input image directly affect the execution of the node and the appearance of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- brightness
    - The 'brightness' parameter allows the user to adjust the overall brightness of the image. It is important because it can enhance visibility in low-light conditions or create stylized effects. The value of this parameter directly affects the node's output, with higher values increasing brightness and lower values decreasing it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - The 'contrast' parameter is used to modify the color or tonal differences between parts of the image. It plays a significant role in making images look more vivid or reducing color intensity for a softer appearance. This adjustment can significantly alter the visual impact of the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The 'saturation' parameter controls the intensity of colors in the image. It is essential for creating more colorful and rich images or producing more desaturated, vintage visual effects. The level of saturation can greatly influence the emotional response to the image and its overall aesthetic appeal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpness
    - The 'sharpness' parameter is responsible for enhancing edges within the image, making them more defined. It is important for improving image clarity, especially useful when an image appears blurry or out of focus. Increasing sharpness can make details more prominent.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur
    - The 'blur' parameter applies a blur effect to the image, which can be used to create a sense of depth or intentionally soften the image. It is important in scenes where a less sharp appearance is desired, such as for aesthetic purposes or to reduce image noise.
    - Comfy dtype: INT
    - Python dtype: int
- gaussian_blur
    - The 'gaussian_blur' parameter applies a Gaussian blur to the image, a smoothing technique that reduces detail and noise. It is particularly useful for creating a smooth, blurred appearance, controlled by the radius of the blur effect.
    - Comfy dtype: FLOAT
    - Python dtype: float
- edge_enhance
    - The 'edge_enhancement' parameter is used to emphasize edges within the image, making them more prominent. It plays a significant role in highlighting details and can be used creatively to alter the visual style of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- detail_enhance
    - The 'detail_enhancement' parameter, when set to true, applies a detail enhancement filter to the image. This can make subtle details more visible, particularly useful for images requiring higher clarity and definition.
    - Comfy dtype: COMBO['false', 'true']
    - Python dtype: Union[str, Literal['false', 'true']]

# Output types
- output_image
    - The 'output_image' parameter represents the processed image after all specified filters have been applied. It is the highest expression of the node's functionality, containing the results of the image processing pipeline. This output is important because it is the primary deliverable of the node, reflecting the collective impact of all adjustments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_Filters:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'brightness': ('FLOAT', {'default': 0.0, 'min': -1.0, 'max': 1.0, 'step': 0.01}), 'contrast': ('FLOAT', {'default': 1.0, 'min': -1.0, 'max': 2.0, 'step': 0.01}), 'saturation': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 5.0, 'step': 0.01}), 'sharpness': ('FLOAT', {'default': 1.0, 'min': -5.0, 'max': 5.0, 'step': 0.01}), 'blur': ('INT', {'default': 0, 'min': 0, 'max': 16, 'step': 1}), 'gaussian_blur': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1024.0, 'step': 0.1}), 'edge_enhance': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}), 'detail_enhance': (['false', 'true'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'image_filters'
    CATEGORY = 'WAS Suite/Image/Filter'

    def image_filters(self, image, brightness, contrast, saturation, sharpness, blur, gaussian_blur, edge_enhance, detail_enhance):
        tensors = []
        if len(image) > 1:
            for img in image:
                pil_image = None
                if brightness > 0.0 or brightness < 0.0:
                    img = np.clip(img + brightness, 0.0, 1.0)
                if contrast > 1.0 or contrast < 1.0:
                    img = np.clip(img * contrast, 0.0, 1.0)
                if saturation > 1.0 or saturation < 1.0:
                    pil_image = tensor2pil(img)
                    pil_image = ImageEnhance.Color(pil_image).enhance(saturation)
                if sharpness > 1.0 or sharpness < 1.0:
                    pil_image = pil_image if pil_image else tensor2pil(img)
                    pil_image = ImageEnhance.Sharpness(pil_image).enhance(sharpness)
                if blur > 0:
                    pil_image = pil_image if pil_image else tensor2pil(img)
                    for _ in range(blur):
                        pil_image = pil_image.filter(ImageFilter.BLUR)
                if gaussian_blur > 0.0:
                    pil_image = pil_image if pil_image else tensor2pil(img)
                    pil_image = pil_image.filter(ImageFilter.GaussianBlur(radius=gaussian_blur))
                if edge_enhance > 0.0:
                    pil_image = pil_image if pil_image else tensor2pil(img)
                    edge_enhanced_img = pil_image.filter(ImageFilter.EDGE_ENHANCE_MORE)
                    blend_mask = Image.new(mode='L', size=pil_image.size, color=round(edge_enhance * 255))
                    pil_image = Image.composite(edge_enhanced_img, pil_image, blend_mask)
                    del blend_mask, edge_enhanced_img
                if detail_enhance == 'true':
                    pil_image = pil_image if pil_image else tensor2pil(img)
                    pil_image = pil_image.filter(ImageFilter.DETAIL)
                out_image = pil2tensor(pil_image) if pil_image else img
                tensors.append(out_image)
            tensors = torch.cat(tensors, dim=0)
        else:
            pil_image = None
            img = image
            if brightness > 0.0 or brightness < 0.0:
                img = np.clip(img + brightness, 0.0, 1.0)
            if contrast > 1.0 or contrast < 1.0:
                img = np.clip(img * contrast, 0.0, 1.0)
            if saturation > 1.0 or saturation < 1.0:
                pil_image = tensor2pil(img)
                pil_image = ImageEnhance.Color(pil_image).enhance(saturation)
            if sharpness > 1.0 or sharpness < 1.0:
                pil_image = pil_image if pil_image else tensor2pil(img)
                pil_image = ImageEnhance.Sharpness(pil_image).enhance(sharpness)
            if blur > 0:
                pil_image = pil_image if pil_image else tensor2pil(img)
                for _ in range(blur):
                    pil_image = pil_image.filter(ImageFilter.BLUR)
            if gaussian_blur > 0.0:
                pil_image = pil_image if pil_image else tensor2pil(img)
                pil_image = pil_image.filter(ImageFilter.GaussianBlur(radius=gaussian_blur))
            if edge_enhance > 0.0:
                pil_image = pil_image if pil_image else tensor2pil(img)
                edge_enhanced_img = pil_image.filter(ImageFilter.EDGE_ENHANCE_MORE)
                blend_mask = Image.new(mode='L', size=pil_image.size, color=round(edge_enhance * 255))
                pil_image = Image.composite(edge_enhanced_img, pil_image, blend_mask)
                del blend_mask, edge_enhanced_img
            if detail_enhance == 'true':
                pil_image = pil_image if pil_image else tensor2pil(img)
                pil_image = pil_image.filter(ImageFilter.DETAIL)
            out_image = pil2tensor(pil_image) if pil_image else img
            tensors = out_image
        return (tensors,)
```