
# Documentation
- Class name: ImageDrawEllipse
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageDrawEllipse node is used to draw an ellipse on an image. It allows users to customize the appearance of the ellipse, including outline and fill colors, as well as the size and position of the ellipse on the canvas. This node utilizes supersampling anti-aliasing (SSAA) technology to achieve higher quality rendering effects.

# Input types
## Required
- width
    - Specifies the canvas width for drawing the ellipse, affecting the overall size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - Specifies the canvas height, affecting the vertical dimension of the image and the potential size of the ellipse.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
    - Specifies the starting x coordinate of the ellipse on the image, crucial for defining the ellipse's position.
    - Comfy dtype: FLOAT
    - Python dtype: float
- start_y
    - Specifies the starting y coordinate of the ellipse, crucial for positioning the ellipse on the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_x
    - Defines the ending x coordinate of the ellipse, determining its width and affecting its overall shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- end_y
    - Defines the ending y coordinate of the ellipse, determining its height and affecting its overall shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- outline_size
    - Determines the thickness of the ellipse outline, affecting the visual prominence of the ellipse on the image.
    - Comfy dtype: INT
    - Python dtype: float
- outline_red
    - Specifies the red component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_green
    - Specifies the green component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_blue
    - Specifies the blue component of the ellipse outline color, used for color customization.
    - Comfy dtype: INT
    - Python dtype: int
- outline_alpha
    - Determines the opacity of the ellipse outline, allowing transparent effects to be set.
    - Comfy dtype: FLOAT
    - Python dtype: float
- fill_red
    - Specifies the red component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_green
    - Specifies the green component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_blue
    - Specifies the blue component of the ellipse fill color, used for fill color customization.
    - Comfy dtype: INT
    - Python dtype: int
- fill_alpha
    - Determines the opacity of the ellipse fill, allowing transparent effects in the fill color.
    - Comfy dtype: FLOAT
    - Python dtype: float
- SSAA
    - Specifies the applied supersampling anti-aliasing (SSAA) level, improving the quality of the ellipse rendering.
    - Comfy dtype: INT
    - Python dtype: int
- method
    - Defines the method for resizing the image after drawing the ellipse, affecting the final image quality.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - Returns an image tensor with the drawn ellipse, displaying the customized appearance based on the input parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
