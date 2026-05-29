
# Documentation
- Class name: SaltScheduledShapeTransformation
- Category: SALT/Scheduling/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

SaltScheduledShapeTransformation node aims to perform scheduled shape transformations on images. It can dynamically adjust the shape of an image over a series of frames based on a schedule of various predefined parameters (such as size, position, and rotation). This function can be used to create complex animation effects or perform frame-by-frame image processing.

# Input types
## Required
- max_frames
    - Specifies the maximum number of frames in the shape transformation sequence. This determines the duration of the entire transformation process.
    - Comfy dtype: INT
    - Python dtype: int
- image_width
    - The width of the output image. This defines the horizontal resolution of the final generated image.
    - Comfy dtype: INT
    - Python dtype: int
- image_height
    - The height of the output image. This defines the vertical resolution of the final generated image.
    - Comfy dtype: INT
    - Python dtype: int
- initial_width
    - The initial width of the shape before the transformation begins. This is the starting point of the shape transformation.
    - Comfy dtype: INT
    - Python dtype: int
- initial_height
    - The initial height of the shape before the transformation begins. This is the starting point of the shape transformation.
    - Comfy dtype: INT
    - Python dtype: int
- initial_x_coord
    - The x-coordinate of the initial position of the shape. This determines the initial horizontal position of the shape in the frame.
    - Comfy dtype: INT
    - Python dtype: int
- initial_y_coord
    - The y-coordinate of the initial position of the shape. This determines the initial vertical position of the shape in the frame.
    - Comfy dtype: INT
    - Python dtype: int
- initial_rotation
    - The initial rotation angle of the shape, in degrees. This sets the initial orientation of the shape.
    - Comfy dtype: FLOAT
    - Python dtype: float
- shape_mode
    - Defines the mode or type of shape to transform, allowing various geometric shapes. This determines the basic shape used in the transformation process.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- shape
    - Optional. The specific shape to be transformed (if applicable). This allows using a custom shape for the transformation.
    - Comfy dtype: MASK
    - Python dtype: str
- width_schedule
    - Defines a schedule list for width transformation over time. This controls how the shape width changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- height_schedule
    - Defines a schedule list for height transformation over time. This controls how the shape height changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- x_schedule
    - Defines a schedule list for x-coordinate transformation over time. This controls how the horizontal position of the shape changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- y_schedule
    - Defines a schedule list for y-coordinate transformation over time. This controls how the vertical position of the shape changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]
- rotation_schedule
    - Defines a schedule list for rotation angle transformation over time. This controls how the shape rotation changes over time.
    - Comfy dtype: LIST
    - Python dtype: List[float]

# Output types
- images
    - The resulting image of the scheduled shape transformation. This is a series of image frames that have been transformed.
    - Comfy dtype: IMAGE
    - Python dtype: List[Image]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
