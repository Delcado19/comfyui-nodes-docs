# Documentation
- Class name: StableSRColorFix
- Category: image
- Output node: False
- Repo Ref: https://github.com/Arthurzhangsheng/Comfyui-StableSR.git

The StableSRColorFix node aims to enhance the color quality of images by applying advanced color correction techniques. It leverages the capabilities of deep learning models to intelligently adjust the color palette of the input image to match the reference color mapping image, resulting in visually coherent and aesthetically pleasing output.

# Input types
## Required
- image
    - The input image is a critical parameter for the StableSRColorFix node, as it is the primary data that will undergo color correction. The node processes this image to align its color distribution with the color_map_image, ensuring the final output is visually consistent.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- color_map_image
    - The color_map_image serves as a reference for the node to perform color adjustments. It is essential for guiding the color correction process to achieve a harmonious color palette in the output image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- color_fix
    - The color_fix parameter determines the type of color correction algorithm the node will use. It can be 'Wavelet' or 'AdaIN', each method offering a different approach to color adjustment, which significantly impacts the final appearance of the corrected image.
    - Comfy dtype: COMBO['Wavelet', 'AdaIN']
    - Python dtype: str

# Output types
- refined_image
    - The refined_image is the output of the color correction process, representing an enhanced version of the input image with improved color fidelity. It is the culmination of the node's functionality, demonstrating the effectiveness of the selected color_fix algorithm.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class StableSRColorFix:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'image': ('IMAGE',), 'color_map_image': ('IMAGE',), 'color_fix': (['Wavelet', 'AdaIN'],)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'fix_color'
    CATEGORY = 'image'

    def fix_color(self, image, color_map_image, color_fix):
        print(f'[StableSR] fix_color')
        try:
            color_fix_func = wavelet_color_fix if color_fix == 'Wavelet' else adain_color_fix
            result_image = color_fix_func(tensor2pil(image), tensor2pil(color_map_image))
            refined_image = pil2tensor(result_image)
            return (refined_image,)
        except Exception as e:
            print(f'[StableSR] Error fix_color: {e}')
```