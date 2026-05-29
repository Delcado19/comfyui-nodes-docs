
# Documentation
- Class name: HDR Effects (SuperBeasts.AI)
- Category: SuperBeastsAI/Image
- Output node: False

The HDR Effects node enhances images by applying high dynamic range (HDR) effects, improving visual quality through adjustments to contrast, color saturation, and brightness. It uses advanced image processing techniques to simulate HDR photography, making images look more vivid and realistic.

# Input types
## Required
- image
    - Input image that requires HDR effect enhancement. It serves as the basis for all subsequent HDR-related adjustments, including enhancements to contrast, color saturation, and brightness.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- hdr_intensity
    - Controls the overall intensity of the HDR effect applied to the image, affecting the depth and strength of adjustments to shadows, highlights, and midtones.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadow_intensity
    - Determines the intensity of shadows in the image, enhancing the depth and details in dark areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_intensity
    - Adjusts the brightness of highlights, enhancing details and visibility in bright areas of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- gamma_intensity
    - Modifies the gamma level of the image, affecting midtone brightness and overall visual contrast.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Adjusts the contrast level of the image, making dark areas darker and bright areas brighter to enhance the overall dynamic range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- enhance_color
    - Increases the color saturation of the image, making colors more vivid and enhancing overall visual appeal.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- result_img
    - The enhanced image after applying the HDR effect, including improved contrast, color saturation, and brightness.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class HDREffects:
    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE', {'default': None}),
                             'hdr_intensity': ('FLOAT', {'default': 0.5, 'min': 0.0, 'max': 5.0, 'step': 0.01}),
                             'shadow_intensity': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.01}),
                             'highlight_intensity': ('FLOAT', {'default': 0.75, 'min': 0.0, 'max': 1.0, 'step': 0.01}),
                             'gamma_intensity': ('FLOAT', {'default': 0.0, 'min': 0.0, 'max': 1.0, 'step': 0.01}),
                             'contrast': ('FLOAT', {'default': 0.1, 'min': 0.0, 'max': 1.0, 'step': 0.01}),
                             'enhance_color': ('FLOAT', {'default': 0.25, 'min': 0.0, 'max': 1.0, 'step': 0.01})
                             }}

    RETURN_TYPES = ('IMAGE',)
    RETURN_NAMES = ('result_img',)
    FUNCTION = 'apply_hdr2'
    CATEGORY = 'SuperBeastsAI/Image'
    
    @apply_to_batch
    def apply_hdr2(self, image, hdr_intensity=0.5, shadow_intensity=0.25, highlight_intensity=0.75, gamma_intensity=0.25, contrast=0.1, enhance_color=0.25):
        # Load the image
        img = tensor2pil(image)
        
        # Step 1: Convert RGB to LAB for better color preservation
        img_lab = ImageCms.profileToProfile(img, sRGB_profile, Lab_profile, outputMode='LAB')

        # Extract L, A, and B channels
        luminance, a, b = img_lab.split()
        
        # Convert luminance to a NumPy array for processing
        lum_array = np.array(luminance, dtype=np.float32)

        # Preparing adjustment layers (shadows, midtones, highlights)
        # This example assumes you have methods to extract or calculate these adjustments
        shadows_adjusted = adjust_shadows_non_linear(luminance, shadow_intensity)
        highlights_adjusted = adjust_highlights_non_linear(luminance, highlight_intensity)


        merged_adjustments = merge_adjustments_with_blend_modes(lum_array, shadows_adjusted, highlights_adjusted, hdr_intensity, shadow_intensity, highlight_intensity)

        # Apply gamma correction with a base_gamma value (define based on desired effect)
        gamma_corrected = apply_gamma_correction(np.array(merged_adjustments), gamma_intensity)
        gamma_corrected = Image.fromarray(gamma_corrected).resize(a.size)


        # Merge L channel back with original A and B channels
        adjusted_lab = Image.merge('LAB', (gamma_corrected, a, b))

        # Step 3: Convert LAB back to RGB
        img_adjusted = ImageCms.profileToProfile(adjusted_lab, Lab_profile, sRGB_profile, outputMode='RGB')
        
        
        # Enhance contrast
        enhancer = ImageEnhance.Contrast(img_adjusted)
        contrast_adjusted = enhancer.enhance(1 + contrast)

        
        # Enhance color saturation
        enhancer = ImageEnhance.Color(contrast_adjusted)
        color_adjusted = enhancer.enhance(1 + enhance_color * 0.2)
         
        return pil2tensor(color_adjusted)

```
