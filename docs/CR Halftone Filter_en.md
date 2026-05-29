# Documentation
- Class name: CR_HalftoneFilter
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_HalftoneFilter node applies a halftone effect to an image, simulating the appearance of printed dots. It offers customization of dot shape, size, and resolution to create various halftone styles. The node is designed to enhance the visual impact of graphic design and artistic applications, enabling users to achieve a retro or stylized look.

# Input types
## Required
- image
    - The input image to which the halftone effect will be applied. It serves as the basis for the node's processing and determines the subject of the halftone conversion.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- dot_size
    - The size of the dots used in the halftone effect, affecting the granularity of the final image. A larger dot size results in a coarser appearance, while smaller sizes provide finer detail.
    - Comfy dtype: INT
    - Python dtype: int
- dot_shape
    - Determines the shape of the dots in the halftone pattern. The choice between ellipse and rectangle can alter the visual texture of the output image, providing a means to adjust the aesthetic of the halftone effect.
    - Comfy dtype: COMBO['ellipse', 'rectangle']
    - Python dtype: str
- resolution
    - Controls the resolution of the halftone effect. The 'hi-res' option doubles the output size, providing higher definition for the halftone pattern at the cost of increased processing time and resource usage.
    - Comfy dtype: COMBO['normal', 'hi-res (2x output size)']
    - Python dtype: str
- angle_c
    - Specifies the angle for the Cyan channel in the CMYK color space, affecting the orientation of cyan dots in the halftone pattern.
    - Comfy dtype: INT
    - Python dtype: int
- angle_m
    - Specifies the angle for the Magenta channel in the CMYK color space, affecting the orientation of magenta dots.
    - Comfy dtype: INT
    - Python dtype: int
- angle_y
    - Specifies the angle for the Yellow channel in the CMYK color space, determining the orientation of yellow dots.
    - Comfy dtype: INT
    - Python dtype: int
- angle_k
    - Specifies the angle for the Key (Black) channel in the CMYK color space, affecting the orientation of black dots.
    - Comfy dtype: INT
    - Python dtype: int
- greyscale
    - A flag indicating whether the input image should be processed in grayscale. When enabled, the halftone effect is applied only to the luminance channel, simplifying the output to monochrome tones.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- antialias
    - Enables or disables anti-aliasing, smoothing the edges of halftone dots and reducing visual artifacts. This can make the final image appear more natural and refined.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- antialias_scale
    - Controls the level of anti-aliasing applied to the halftone dots. Higher values result in a smoother appearance but may increase processing time.
    - Comfy dtype: INT
    - Python dtype: int
- border_blending
    - When enabled, border blending smooths the transitions between halftone dots near the edges of the image, preventing sharp dividing lines and promoting a more uniform appearance.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output image with the halftone effect applied, ready for further processing or display.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image or torch.Tensor
- show_help
    - Provides a link to documentation or a help page for further guidance on using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
