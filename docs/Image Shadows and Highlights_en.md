# Documentation
- Class name: WAS_Shadow_And_Highlight_Adjustment
- Category: WAS Suite/Image/Adjustment
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Shadow_And_Highlight_Adjustment node is designed to modify the contrast and tonal range of an image by adjusting its shadows and highlights. The node allows for better visual definition and more balanced exposure by enhancing details in the darker and brighter areas of the image. It operates by applying different thresholds and factors to shadows and highlights respectively, and can optionally smooth these regions for a more natural appearance. This node is particularly useful for post-processing images where the dynamic range needs to be optimized for better visual appeal or to meet specific technical requirements.

# Input types
## Required
- image
    - The input image to which shadow and highlight adjustments will be applied. This parameter is critical as it determines the base visual content that the node will process. The execution and results of the node are heavily dependent on the quality and characteristics of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- shadow_threshold
    - The threshold at which pixel values are considered to be in the shadow region. Adjusting this parameter affects the degree to which shadows in the image are modified. This is an important parameter for controlling the intensity of shadows in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadow_factor
    - A multiplication factor used to increase the intensity of the shadow regions in the image. This is a critical parameter for enhancing details in the darker areas of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shadow_smoothing
    - The amount of smoothing to apply to the shadow mask. Higher values produce smoother transitions between shadow and non-shadow areas, which may be more suitable for a more natural appearance but may reduce contrast in the shadows.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_threshold
    - The threshold at which pixel values are considered to be in the highlight region. This parameter is crucial for determining which parts of the image will be treated as highlights and subsequently adjusted.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_factor
    - A multiplication factor used to reduce the intensity of the highlight regions in the image. This is a critical parameter for controlling the degree of highlight burn and preventing loss of detail in the brighter parts of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highlight_smoothing
    - The amount of smoothing to apply to the highlight mask. Similar to shadow smoothing, it helps achieve more gradual transitions between highlight and non-highlight areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- simplify_isolation
    - The amount of simplification to apply to the shadow and highlight mask isolation. It can be used to reduce the complexity of the masks, which may be helpful for performance reasons or to achieve specific visual effects.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- image
    - The final adjusted image with enhanced shadows and highlights. It represents the primary output of the node, showcasing the cumulative effect of all adjustments applied to the input image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- shadow_map
    - A shadow map generated as part of the adjustment process. It is a grayscale image where darker values indicate shadow regions that have been modified.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- highlight_map
    - A highlight map generated as part of the adjustment process. It is a grayscale image where brighter values indicate highlight regions that have been modified.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
```
class WAS_Shadow_And_Highlight_Adjustment:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'image': ('IMAGE',), 'shadow_threshold': ('FLOAT', {'default': 75, 'min': 0.0, 'max': 255.0, 'step': 0.1}), 'shadow_factor': ('FLOAT', {'default': 1.5, 'min': -12.0, 'max': 12.0, 'step': 0.1}), 'shadow_smoothing': ('FLOAT', {'default': 0.25, 'min': -255.0, 'max': 255.0, 'step': 0.1}), 'highlight_threshold': ('FLOAT', {'default': 175, 'min': 0.0, 'max': 255.0, 'step': 0.1}), 'highlight_factor': ('FLOAT', {'default': 0.5, 'min': -12.0, 'max': 12.0, 'step': 0.1}), 'highlight_smoothing': ('FLOAT', {'default': 0.25, 'min': -255.0, 'max': 255.0, 'step': 0.1}), 'simplify_isolation': ('FLOAT', {'default': 0, 'min': -255.0, 'max': 255.0, 'step': 0.1})}}
    RETURN_TYPES = ('IMAGE', 'IMAGE', 'IMAGE')
    RETURN_NAMES = ('image', 'shadow_map', 'highlight_map')
    FUNCTION = 'apply_shadow_and_highlight'
    CATEGORY = 'WAS Suite/Image/Adjustment'

    def apply_shadow_and_highlight(self, image, shadow_threshold=30, highlight_threshold=220, shadow_factor=1.5, highlight_factor=0.5, shadow_smoothing=0, highlight_smoothing=0, simplify_isolation=0):
        WTools = WAS_Tools_Class()
        (result, shadows, highlights) = WTools.shadows_and_highlights(tensor2pil(image), shadow_threshold, highlight_threshold, shadow_factor, highlight_factor, shadow_smoothing, highlight_smoothing, simplify_isolation)
        (result, shadows, highlights) = WTools.shadows_and_highlights(tensor2pil(image), shadow_threshold, highlight_threshold, shadow_factor, highlight_factor, shadow_smoothing, highlight_smoothing, simplify_isolation)
        return (pil2tensor(result), pil2tensor(shadows), pil2tensor(highlights))
```