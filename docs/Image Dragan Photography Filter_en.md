# Documentation
- Class name: WAS_Dragon_Filter
- Category: WAS Suite/Image/Filter
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Dragon_Filter node applies a series of image processing techniques to simulate a stylized dragon appearance. It enhances visual appeal by adjusting saturation, contrast, sharpness, and brightness, while applying a high-pass filter to add texture detail. The node can colorize the final output, giving the processed image a rich and vivid look.

# Input types
## Required
- image
    - Input image to be processed by the node. It serves as the foundation for all subsequent image operations and enhancements performed by the node.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- saturation
    - Saturation adjustment factor for the image. It controls the intensity of colors within the image; higher values increase saturation, lower values decrease it.
    - Comfy dtype: FLOAT
    - Python dtype: float
- contrast
    - Contrast adjustment factor for the image. It affects the difference between the darkest and brightest areas of the image, creating a more or less pronounced tonal range.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sharpness
    - Sharpness adjustment factor for the image. It controls the clarity and definition of edges in the image; higher values produce a sharper image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- brightness
    - Brightness adjustment factor for the image. It controls the overall lightness or luminosity of the image, making it brighter or darker as needed.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highpass_radius
    - Radius parameter for the high-pass filter. It determines the range of texture details preserved in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- highpass_samples
    - Number of times the high-pass filter is applied to the image. Applying the filter multiple times increases texture detail.
    - Comfy dtype: INT
    - Python dtype: int
- highpass_strength
    - Intensity of the high-pass filter effect. It controls the strength of texture details in the final image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- colorize
    - A boolean flag that determines whether the final image should be colorized. When set to true, it applies a color blending effect to enhance visual appeal.
    - Comfy dtype: COMBO[true, false]
    - Python dtype: bool

# Output types
- output_image
    - The resulting image after applying the dragon filter effect. It is a stylized representation combining various image processing techniques, creating a unique and visually appealing result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
