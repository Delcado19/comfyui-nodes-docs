# Documentation
- Class name: CR_VignetteFilter
- Category: Comfyroll/Graphics/Filter
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_VignetteFilter is a node used to apply a vignette visual effect to images. This effect gradually darkens the corners of the image, creating a soft focus transition from the center to the edges. It enhances visual depth and draws attention to the image center, commonly used in photography and film.

# Input types
## Required
- image
    - The input image to which the vignette effect is applied. This is the primary data the node processes; the final output quality largely depends on the characteristics of this input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- vignette_shape
    - Determines the shape of the vignette applied to the image. The choice of shape significantly affects the aesthetic appeal and emotional response of the final image.
    - Comfy dtype: COMBO['circle', 'oval', 'square', 'diamond']
    - Python dtype: str
- feather_amount
    - Controls the softness of the vignette edge. A higher feather value results in a more gradual transition from the darkened corners to the image center, while a lower value creates a more abrupt transition.
    - Comfy dtype: INT
    - Python dtype: int
- x_offset
    - Allows horizontal adjustment of the vignette center. This shifts the focal area within the image, creating subtle compositional variations.
    - Comfy dtype: INT
    - Python dtype: int
- y_offset
    - Allows vertical adjustment of the vignette center. Similar to x_offset, it fine-tunes the visual focus within the image.
    - Comfy dtype: INT
    - Python dtype: int
- zoom
    - Adjusts the size of the vignette effect. A higher scale value increases the vignette size, making it more pronounced, while a lower value reduces its size.
    - Comfy dtype: FLOAT
    - Python dtype: float
- reverse
    - If set to 'yes', inverts the vignette effect. Instead of darkening the edges, it darkens the image center, creating a contrasting visual style.
    - Comfy dtype: COMBO['no', 'yes']
    - Python dtype: str

# Output types
- IMAGE
    - The resulting image after applying the vignette effect. This is the main output, reflecting creative adjustments made via node parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - An alpha mask representing vignette transparency. It can be used for further image processing or as a selection tool in post-production.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - Provides a documentation link for further guidance on using the node. Useful for users seeking more information about the node’s features and options.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
