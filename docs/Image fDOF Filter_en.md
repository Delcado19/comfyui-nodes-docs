# Documentation
- Class name: WAS_Image_fDOF
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The fdof_composite function of the WAS_Image_fDOF node aims to apply a depth of field effect to an image, enhancing the visual focus on the subject by blurring the background. It achieves this by combining different image processing techniques that are applicable to different modes, such as simulation, Gaussian, or box blur, and is customizable via parameters such as radius and number of samples.

# Input types
## Required
- image
    - The image parameter is crucial for the operation of the node, as it is the input image to which the depth of field effect will be applied. It significantly affects the final result of the node execution by determining the visual content to be processed.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- depth
    - The depth parameter provides a depth map used to determine which areas of the image should be in focus or blurred. It plays a key role in the execution of the node by guiding the application of the depth of field effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- mode
    - The mode parameter determines the type of blur to be applied to the image. It is important because it decides the style of the depth of field effect, offering options such as simulation, Gaussian, or box blur.
    - Comfy dtype: COMBO['mock', 'gaussian', 'box']
    - Python dtype: str
- radius
    - The radius parameter defines the scope of the blur effect and is important for controlling the intensity of the depth of field. It directly affects the appearance of the blurred areas in the output image.
    - Comfy dtype: INT
    - Python dtype: int
- samples
    - The sample parameter specifies the number of times the blur effect is applied, which can increase the smoothness of the blur. It affects the execution of the node by determining the level of detail in the final composite image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- output_image
    - The output image parameter represents the final processed image with the depth of field effect applied. It is important because it is the direct result of the node operation and reflects the creative intent of the applied filter.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Image_fDOF:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'depth': ('IMAGE',), 'mode': (['mock', 'gaussian', 'box'],), 'radius': ('INT', {'default': 8, 'min': 1, 'max': 128, 'step': 1}), 'samples': ('INT', {'default': 1, 'min': 1, 'max': 3, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'fdof_composite'
    CATEGORY = 'WAS Suite/Image/Filter'

    def fdof_composite(self, image, depth, radius, samples, mode):
        import cv2 as cv
        tensor_images = []
        for i in range(len(image)):
            if i <= len(image):
                img = tensor2pil(image[i])
            else:
                img = tensor2pil(image[-1])
            if i <= len(depth):
                dpth = tensor2pil(depth[i])
            else:
                dpth = tensor2pil(depth[-1])
            tensor_images.append(pil2tensor(self.portraitBlur(img, dpth, radius, samples, mode)))
        tensor_images = torch.cat(tensor_images, dim=0)
        return (tensor_images,)

    def portraitBlur(self, img, mask, radius, samples, mode='mock'):
        mask = mask.resize(img.size).convert('L')
        bimg: Optional[Image.Image] = None
        if mode == 'mock':
            bimg = medianFilter(img, radius, radius * 1500, 75)
        elif mode == 'gaussian':
            bimg = img.filter(ImageFilter.GaussianBlur(radius=radius))
        elif mode == 'box':
            bimg = img.filter(ImageFilter.BoxBlur(radius))
        else:
            return
        bimg.convert(img.mode)
        rimg: Optional[Image.Image] = None
        if samples > 1:
            for i in range(samples):
                if not rimg:
                    rimg = Image.composite(img, bimg, mask)
                else:
                    rimg = Image.composite(rimg, bimg, mask)
        else:
            rimg = Image.composite(img, bimg, mask).convert('RGB')
        return rimg
```