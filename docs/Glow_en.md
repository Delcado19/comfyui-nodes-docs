# Documentation
- Class name: Glow
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

This node applies a glow effect to an image by adding a blurred version of the image with adjustable intensity to enhance its visual appeal. It is designed to improve the aesthetics of the image during post-processing, providing a thematic glow that can draw attention to certain features or create a dreamy atmosphere.

# Input types
## Required
- image
    - The image parameter is crucial as it is the base input for applying the glow effect. It determines the content and structure of the final output, with the glow effect being directly influenced by the image's features and quality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- intensity
    - The intensity parameter controls the prominence of the glow effect, with higher values resulting in a more pronounced glow. It is essential for adjusting the visual impact of the effect, allowing fine-tuning of the glow intensity to achieve the desired aesthetic.
    - Comfy dtype: FLOAT
    - Python dtype: float
- blur_radius
    - The blur radius parameter specifies the degree of blur applied to the image for the glow effect. It affects the diffusion and smoothness of the glow, with larger radii resulting in a more dispersed and extensive brightness.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- glowing_image
    - The resulting glowed image is the primary output of this node, representing the original image enhanced with the glow effect. It incorporates the combined visual modifications from the input parameters, providing a visually captivating presentation of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class Glow:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'intensity': ('FLOAT', {'default': 1.0, 'min': 0.0, 'max': 5.0, 'step': 0.01}), 'blur_radius': ('INT', {'default': 5, 'min': 1, 'max': 50, 'step': 1})}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'apply_glow'
    CATEGORY = 'postprocessing/Effects'

    def apply_glow(self, image: torch.Tensor, intensity: float, blur_radius: int):
        blurred_image = self.gaussian_blur(image, 2 * blur_radius + 1)
        glowing_image = self.add_glow(image, blurred_image, intensity)
        glowing_image = torch.clamp(glowing_image, 0, 1)
        return (glowing_image,)

    def gaussian_blur(self, image: torch.Tensor, kernel_size: int):
        (batch_size, height, width, channels) = image.shape
        sigma = (kernel_size - 1) / 6
        kernel = gaussian_kernel(kernel_size, sigma).repeat(channels, 1, 1).unsqueeze(1)
        image = image.permute(0, 3, 1, 2)
        blurred = F.conv2d(image, kernel, padding=kernel_size // 2, groups=channels)
        blurred = blurred.permute(0, 2, 3, 1)
        return blurred

    def add_glow(self, img, blurred_img, intensity):
        return img + blurred_img * intensity
```