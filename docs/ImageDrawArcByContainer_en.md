
# Documentation
- Class name: ImageDrawArcByContainer
- Category: image/draw
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

ImageDrawArcByContainer node draws an arc on a given image container. It uses the container's size and properties to accurately render the arc, customizing output via parameters such as size, start and end points, color, and drawing method.

# Input types
## Required
- container
- Container input specifies the image on which to draw the arc, providing basic size and property information required for the drawing operation.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
- size
- Defines the thickness of the arc to be drawn on the image.
    - Comfy dtype: INT
    - Python dtype: int
- start_x
- X coordinate of the arc's start point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- start_y
- Y coordinate of the arc's start point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- end_x
- X coordinate of the arc's end point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- end_y
- Y coordinate of the arc's end point.
    - Comfy dtype: FLOAT
    - Python dtype: int
- start
- Starting angle of the arc.
    - Comfy dtype: INT
    - Python dtype: float
- end
- Ending angle of the arc.
    - Comfy dtype: INT
    - Python dtype: float
- red
- Red component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- green
- Green component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- blue
- Blue component of the arc color.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
- Opacity of the arc color.
    - Comfy dtype: FLOAT
    - Python dtype: int
- SSAA
- Specifies the supersampling anti-aliasing (SSAA) level applied to the arc to improve visual quality.
    - Comfy dtype: INT
    - Python dtype: bool
- method
- Method used to draw the arc, affecting rendering technique.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
- Output is an image containing the specified arc, reflecting the input parameters and modifications.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
