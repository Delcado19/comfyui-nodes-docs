# Documentation
- Class name: PPFNLatentAdjustment
- Category: Power Noise Suite/Latent/Adjustements
- Output node: False
- Repo Ref: https://github.com/WASasquatch/PowerNoiseSuite

This node class aims to adjust and enhance the visual features of images represented by latent vectors. It manipulates various image attributes such as brightness, contrast, saturation, and sharpness to achieve desired visual outcomes. The node operates based on modifying the latent representation of the image, allowing extensive creative control over the image without directly altering pixel data. It is particularly suitable for generating imagery that conforms to specific aesthetic standards or fine-tuning the quality of generated images.

# Input types
## Required
- latents
    - The latents parameter is the input tensor representing the latent space encoding of the image. It is crucial because it forms the foundation upon which the node performs all image adjustments and enhancements. Manipulation of this parameter directly affects the final visual output, enabling a wide range of modifications from subtle to drastic.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- brightness
    - The brightness parameter controls the overall brightness of the image. By adjusting this parameter, users can make the image brighter or darker, which can significantly alter the mood and appearance of the visual content. It plays a key role in setting the tone and overall look of the generated image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Contrast adjustment affects the difference between the brightest and darkest parts of the image. It helps enhance visual depth and detail, making the image more vivid and engaging. This parameter is essential for creating images with dynamic range and realism.
    - Comfy dtype: FLOAT
    - Python dtype: float
- saturation
    - The saturation parameter adjusts the intensity of colors in the image. Increasing saturation makes colors more vibrant, while decreasing saturation makes colors more muted. This parameter is important for achieving the desired aesthetic and emotional impact through the use of color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- exposure
    - Exposure control affects the overall brightness of the image, similar to adjusting the ISO setting on a camera. It is an important parameter for simulating different lighting conditions and achieving desired visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float
- alpha_sharpen
    - The alpha_sharpen parameter is used to apply a sharpening effect to the image. It enhances edges and details, making the image appear clearer and more defined. This parameter is crucial for achieving a high level of detail and clarity in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_pass_radius
    - The high_pass_radius parameter applies a high-pass filter to the image, emphasizing high-frequency details and making the image sharper. It helps enhance local contrast and improve the texture of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- high_pass_strength
    - The high_pass_strength parameter controls the intensity of the high-pass filter effect. Adjusting this parameter allows fine-tuning of the filter's impact on the image, ensuring the desired level of detail and clarity is achieved.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_min
    - The clamp_min parameter ensures that adjusted latent values do not fall below a certain threshold, preventing any unwanted artifacts or negative values. This is important for maintaining the integrity and quality of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- clamp_max
    - The clamp_max parameter limits the maximum value of the latent to a specified range, ensuring values stay within the desired bounds and do not exceed them. This is crucial for preventing overexposure or color saturation in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
## Optional
- latent2rgb_preview
    - The latent2rgb_preview parameter is an optional toggle that, when enabled, generates an RGB image preview of the adjusted latent vector. This feature aids in real-time visualization of the effects of adjustments.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- latents
    - The adjusted latent vector is the output tensor representing the modified latent space encoding of the image. This parameter contains all changes made through node adjustments and serves as the basis for generating the final image.
    - Comfy dtype: LATENT
    - Python dtype: torch.Tensor
- previews
    - The preview parameter provides a visual representation of the adjusted latent vector as an RGB image. This output is important for immediate feedback and evaluation of the node's performance and the effectiveness of the adjustments made.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
```
class PPFNLatentAdjustment:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'latents': ('LATENT',), 'brightness': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': -1.0, 'step': 0.001}), 'contrast': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': -1.0, 'step': 0.001}), 'saturation': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': 0.0, 'step': 0.001}), 'exposure': ('FLOAT', {'default': 0.0, 'max': 2.0, 'min': -1.0, 'step': 0.001}), 'alpha_sharpen': ('FLOAT', {'default': 0.0, 'max': 10.0, 'min': 0.0, 'step': 0.01}), 'high_pass_radius': ('FLOAT', {'default': 0.0, 'max': 1024, 'min': 0.0, 'step': 0.01}), 'high_pass_strength': ('FLOAT', {'default': 1.0, 'max': 2.0, 'min': 0.0, 'step': 0.01}), 'clamp_min': ('FLOAT', {'default': 0.0, 'max': 10.0, 'min': -10.0, 'step': 0.01}), 'clamp_max': ('FLOAT', {'default': 1.0, 'max': 10.0, 'min': -10.0, 'step': 0.01})}, 'optional': {'latent2rgb_preview': (['false', 'true'],)}}
    RETURN_TYPES = ('LATENT', 'IMAGE')
    RETURN_NAMES = ('latents', 'previews')
    FUNCTION = 'adjust_latent'
    CATEGORY = 'Power Noise Suite/Latent/Adjustements'

    def adjust_latent(self, latents, brightness, contrast, saturation, exposure, alpha_sharpen, high_pass_radius, high_pass_strength, clamp_min, clamp_max, latent2rgb_preview=False):
        original_latents = latents['samples']
        (r, g, b, a) = (original_latents[:, 0:1], original_latents[:, 1:2], original_latents[:, 2:3], original_latents[:, 3:4])
        r = (r - 0.5) * contrast + 0.5 + (brightness - 1.0)
        g = (g - 0.5) * contrast + 0.5 + (brightness - 1.0)
        b = (b - 0.5) * contrast + 0.5 + (brightness - 1.0)
        gray = 0.299 * r + 0.587 * g + 0.114 * b
        r = (r - gray) * saturation + gray
        g = (g - gray) * saturation + gray
        b = (b - gray) * saturation + gray
        r = r * 2 ** exposure
        g = g * 2 ** exposure
        b = b * 2 ** exposure
        latents = torch.cat((r, g, b, a), dim=1)
        if alpha_sharpen > 0:
            latents = sharpen_latents(latents, alpha_sharpen)
        if high_pass_radius > 0:
            latents = high_pass_latents(latents, high_pass_radius, high_pass_strength)
        if clamp_min != 0:
            latents = normalize(latents, target_min=clamp_min)
        if clamp_max != 1:
            latents = normalize(latents, target_max=clamp_max)
        if clamp_min != 0 and clamp_max != 1.0:
            latents = normalize(latents, target_min=clamp_min, target_max=clamp_max)
        tensors = latents_to_images(latents, True if latent2rgb_preview and latent2rgb_preview == 'true' else False)
        return ({'samples': latents}, tensors)
```