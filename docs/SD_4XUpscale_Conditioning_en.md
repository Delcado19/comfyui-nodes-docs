# Documentation
- Class name: SD_4XUpscale_Conditioning
- Category: conditioning/upscale_diffusion
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The SD_4XUpscale_Conditioning node is designed to enhance image quality by applying a 4x upscale transformation. It leverages the capabilities of diffusion models for conditional image upscaling, providing positive and negative conditioning inputs to guide the upscaling process. This node is particularly suitable for generating high-resolution images from low-resolution inputs without compromising detail.

# Input types
## Required
- images
    - The images parameter is the input that the node will upscale. It is crucial for the operation of the node, as it defines the content to be transformed. The quality and resolution of the input image directly affect the node's output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- positive
    - The positive conditioning input is used to guide the upscaling process towards the desired outcome. It helps the node focus on enhancing specific features or aspects of the image.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The negative conditioning input is used to suppress unwanted features or artifacts during the upscaling process. It plays a crucial role in maintaining the integrity of the original image content.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
## Optional
- scale_ratio
    - The scale_ratio parameter determines the degree of upscaling applied to the input image. It is a key factor in controlling the final resolution of the output image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- noise_augmentation
    - Noise enhancement is an optional parameter that introduces random noise into the upscaling process, which can help generate more diverse outputs.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- positive
    - The positive output provides a conditionally upscaled image enhanced according to the positive conditioning input.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- negative
    - The negative output contains a conditionally upscaled image optimized to suppress the unwanted features indicated by the negative conditioning input.
    - Comfy dtype: CONDITIONING
    - Python dtype: List[Tuple[Any, Dict[str, Any]]]
- latent
    - The latent output represents the latent space representation of the upscaled image, which can be used for further processing or analysis.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
```
class SD_4XUpscale_Conditioning:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'images': ('IMAGE',), 'positive': ('CONDITIONING',), 'negative': ('CONDITIONING',), 'scale_ratio': ('FLOAT', {'default': 4.0, 'min': 0.0, 'max': 10.0, 'step': 0.01}), 'noise_augmentation': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.001})}}
    RETURN_TYPES = ('CONDITIONING', 'CONDITIONING', 'LATENT')
    RETURN_NAMES = ('positive', 'negative', 'latent')
    FUNCTION = 'encode'
    CATEGORY = 'conditioning/upscale_diffusion'

    def encode(self, images, positive, negative, scale_ratio, noise_augmentation):
        width = max(1, round(images.shape[-2] * scale_ratio))
        height = max(1, round(images.shape[-3] * scale_ratio))
        pixels = comfy.utils.common_upscale(images.movedim(-1, 1) * 2.0 - 1.0, width // 4, height // 4, 'bilinear', 'center')
        out_cp = []
        out_cn = []
        for t in positive:
            n = [t[0], t[1].copy()]
            n[1]['concat_image'] = pixels
            n[1]['noise_augmentation'] = noise_augmentation
            out_cp.append(n)
        for t in negative:
            n = [t[0], t[1].copy()]
            n[1]['concat_image'] = pixels
            n[1]['noise_augmentation'] = noise_augmentation
            out_cn.append(n)
        latent = torch.zeros([images.shape[0], 4, height // 4, width // 4])
        return (out_cp, out_cn, {'samples': latent})
```