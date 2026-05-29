# Documentation
- Class name: IPAdapterNoise
- Category: ipadapter/utils
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_IPAdapter_plus.git

The IPAdapterNoise node is designed to introduce controlled noise into images for purposes such as data augmentation or enhancing model robustness. It offers a selection of noise types and allows adjustment of noise strength, providing a flexible solution for different use cases.

# Input types
## Required
- type
    - The "type" parameter determines the type of noise to generate, which significantly affects the result of noise application. This is a critical decision point, as different noise types have different characteristics and affect images in different ways.
    - Comfy dtype: COMBO[fade, dissolve, gaussian, shuffle]
    - Python dtype: str
- strength
    - The "strength" parameter adjusts the intensity of the noise, directly affecting the degree of image alteration. This is an important parameter that allows users to tune the noise effect to meet their specific needs.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- blur
    - The "blur" parameter applies Gaussian blur to the noise, which can help smooth the noise in certain applications. It plays a role in the final visual result of the noise, providing a means to further refine the noise texture.
    - Comfy dtype: INT
    - Python dtype: int
- image_optional
    - The "image_optional" parameter allows providing an optional image as the basis for noise generation. This parameter is important because it enables noise to be applied to a specific image rather than a default blank image, offering greater flexibility and customization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- noise
    - The "noise" output is the primary result of the IPAdapterNoise node, representing the image with introduced noise. It is a key component as it carries the applied noise effect, ready for use in subsequent processes or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class IPAdapterNoise:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'type': (['fade', 'dissolve', 'gaussian', 'shuffle'],), 'strength': ('FLOAT', {'default': 1.0, 'min': 0, 'max': 1, 'step': 0.05}), 'blur': ('INT', {'default': 0, 'min': 0, 'max': 32, 'step': 1})}, 'optional': {'image_optional': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'make_noise'
    CATEGORY = 'ipadapter/utils'

    def make_noise(self, type, strength, blur, image_optional=None):
        if image_optional is None:
            image = torch.zeros([1, 224, 224, 3])
        else:
            transforms = T.Compose([T.CenterCrop(min(image_optional.shape[1], image_optional.shape[2])), T.Resize((224, 224), interpolation=T.InterpolationMode.BICUBIC, antialias=True)])
            image = transforms(image_optional.permute([0, 3, 1, 2])).permute([0, 2, 3, 1])
        seed = int(torch.sum(image).item()) % 1000000007
        torch.manual_seed(seed)
        if type == 'fade':
            noise = torch.rand_like(image)
            noise = image * (1 - strength) + noise * strength
        elif type == 'dissolve':
            mask = (torch.rand_like(image) < strength).float()
            noise = torch.rand_like(image)
            noise = image * (1 - mask) + noise * mask
        elif type == 'gaussian':
            noise = torch.randn_like(image) * strength
            noise = image + noise
        elif type == 'shuffle':
            transforms = T.Compose([T.ElasticTransform(alpha=75.0, sigma=(1 - strength) * 3.5), T.RandomVerticalFlip(p=1.0), T.RandomHorizontalFlip(p=1.0)])
            image = transforms(image.permute([0, 3, 1, 2])).permute([0, 2, 3, 1])
            noise = torch.randn_like(image) * (strength * 0.75)
            noise = image * (1 - noise) + noise
        del image
        noise = torch.clamp(noise, 0, 1)
        if blur > 0:
            if blur % 2 == 0:
                blur += 1
            noise = T.functional.gaussian_blur(noise.permute([0, 3, 1, 2]), blur).permute([0, 2, 3, 1])
        return (noise,)
```