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
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
