
# Documentation
- Class name: RenderSMPLMesh
- Category: MotionDiff/smpl
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The RenderSMPLMesh node is specifically used to render 3D human body meshes based on the SMPL model. Its main function is to generate visual representations from SMPL parameters, enabling visualization of human poses and shapes in a 3D environment.

# Input types
## Required
- smpl
    - SMPL model parameters used for rendering the 3D mesh. This input is critical for determining the human pose and shape to be visualized.
    - Comfy dtype: SMPL
    - Python dtype: torch.Tensor
- draw_platform
    - Specifies whether to draw the platform in the rendered image, affecting the visual environment of the 3D mesh.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- depth_only
    - Determines whether to render only the depth map, omitting the visual representation of the 3D mesh.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- yfov
    - The camera's field of view on the y-axis, affecting the perspective of the mesh rendering.
    - Comfy dtype: FLOAT
    - Python dtype: float
- move_x
    - The camera's horizontal movement, allowing adjustment of the lateral position of the rendered view.
    - Comfy dtype: FLOAT
    - Python dtype: float
- move_y
    - The camera's vertical movement, allowing adjustment of the longitudinal position of the rendered view.
    - Comfy dtype: FLOAT
    - Python dtype: float
- move_z
    - The camera's depth movement, affecting the distance between the camera and the 3D mesh.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotate_x
    - Camera rotation around the x-axis, changing the pitch angle of the rendered image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotate_y
    - Camera rotation around the y-axis, changing the yaw angle of the rendered view.
    - Comfy dtype: FLOAT
    - Python dtype: float
- rotate_z
    - Camera rotation around the z-axis, modifying the roll angle of the rendered view.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background_hex_color
    - The background color of the rendered image, specified as a hex color code.
    - Comfy dtype: STRING
    - Python dtype: str
- frame_width
    - The frame width of the rendered image, defining the horizontal resolution.
    - Comfy dtype: INT
    - Python dtype: int
- frame_height
    - The frame height of the rendered image, defining the vertical resolution.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- normals
    - Indicates whether normals should be included in the rendering, affecting the visual texture and lighting effects of the 3D mesh.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- IMAGE
    - The output is the visual representation (image) of the 3D mesh rendered according to the SMPL parameters. This image displays human figures in various poses and shapes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- DEPTH_MAP
    - The depth map of the rendered 3D mesh, providing spatial depth information for each pixel in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
