# Documentation
- Class name: WAS_Image_Pixelate
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Pixelate node is designed to convert images into a pixel art style. It achieves this by reducing the number of colors used in the image and applying various pixelation techniques. The node can process a range of parameters to customize the pixelation process, including size, color count, and dithering options, providing a high degree of creative control over the final output.

# Input types
## Required
- images
    - The input images will be processed by the node. These images will undergo a pixelation transformation to create stylized pixelated versions.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or List[PIL.Image.Image]
## Optional
- pixelation_size
    - The target size for the pixelation effect. Larger values result in more pronounced pixelation, while smaller values create a finer, less pixelated appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- num_colors
    - The number of colors to reduce the image to. This parameter directly affects the complexity of the pixelated result, with lower values leading to a more abstract representation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- init_mode
    - The initialization mode for the k-means clustering algorithm used to determine the colors of the pixelated image.
    - Comfy dtype: COMBO['k-means++', 'random', 'none']
    - Python dtype: str
- max_iterations
    - The maximum number of iterations for the k-means clustering algorithm. More iterations can lead to better color clustering but may increase processing time.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dither
    - A boolean flag that determines whether dithering is applied to the pixelated image. Dithering can help create smoother transitions between colors but may sacrifice some detail.
    - Comfy dtype: COMBO['False', 'True']
    - Python dtype: bool
- dither_mode
    - If dithering is enabled, the dithering pattern to apply. Different patterns can produce different visual effects in the final image.
    - Comfy dtype: COMBO['FloydSteinberg', 'Ordered']
    - Python dtype: str
- color_palettes
    - An optional custom palette for pixelation. Each palette should be a list of hexadecimal color strings.
    - Comfy dtype: LIST
    - Python dtype: List[str]
- color_palette_mode
    - The mode used when mapping colors from the palette to the pixelated image.
    - Comfy dtype: COMBO['Brightness', 'BrightnessAndTonal', 'Linear', 'Tonal']
    - Python dtype: str
- reverse_palette
    - A flag indicating whether to reverse the order of colors in the palette when applied to the pixelated image.
    - Comfy dtype: COMBO['False', 'True']
    - Python dtype: bool

# Output types
- images
    - The resulting pixelated image after processing with the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or List[PIL.Image.Image]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
