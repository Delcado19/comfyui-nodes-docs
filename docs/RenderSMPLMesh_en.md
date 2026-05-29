
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
```python
class RenderSMPLMesh:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "smpl": ("SMPL", ),
                "draw_platform": ("BOOLEAN", {"default": False}),
                "depth_only": ("BOOLEAN", {"default": False}),
                "yfov": ("FLOAT", {"default": 0.6, "min": 0.1, "max": 10, "step": 0.01}),
                "move_x": ("FLOAT", {"default": 0,"min": -500, "max": 500, "step": 0.01}),
                "move_y": ("FLOAT", {"default": -0.1,"min": -500, "max": 500, "step": 0.01}),
                "move_z": ("FLOAT", {"default": 0,"min": -500, "max": 500, "step": 0.01}),
                "rotate_x": ("FLOAT", {"default": 0,"min": -180, "max": 180, "step": 0.1}),
                "rotate_y": ("FLOAT", {"default": 0,"min": -180, "max": 180, "step": 0.1}),
                "rotate_z": ("FLOAT", {"default": 0,"min": -180, "max": 180, "step": 0.1}),
                "background_hex_color": ("STRING", {"default": "#000000", "mutiline": False}),
                "frame_width": ("INT", {"default": 512, "min": 64, "max": 4096, "step": 8}),
                "frame_height": ("INT", {"default": 512, "min": 64, "max": 4096, "step": 8}),
            },
            "optional": {
                "normals": ("BOOLEAN", {"default": False}),
            }
        }

    RETURN_TYPES = ("IMAGE", "IMAGE", "MASK")
    RETURN_NAMES = ("IMAGE", "DEPTH_MAP")
    CATEGORY = "MotionDiff/smpl"
    FUNCTION = "render"
    def render(self, smpl, yfov, move_x, move_y, move_z, rotate_x, rotate_y, rotate_z, frame_width, frame_height, draw_platform, depth_only, background_hex_color, normals=False):
        smpl_model_path, thetas, meta = smpl
        color_frames, depth_frames = render_from_smpl(
            thetas.to(get_torch_device()),
            yfov, move_x, move_y, move_z, rotate_x, rotate_y, rotate_z, frame_width, frame_height, draw_platform,depth_only, normals,
            smpl_model_path=smpl_model_path, shape_parameters=smpl[2].get("shape_parameters", None),
            normalized_to_vertices=meta.get("normalized_to_vertices", False)
        )
        bg_color = ImageColor.getcolor(background_hex_color, "RGB")
        color_frames = torch.from_numpy(color_frames[..., :3].astype(np.float32) / 255.)
        white_mask = [
            (color_frames[..., 0] == 1.) & 
            (color_frames[..., 1] == 1.) & 
            (color_frames[..., 2] == 1.)
        ]
        color_frames[..., :3][white_mask] = torch.Tensor(bg_color)
        white_mask_tensor = torch.stack(white_mask, dim=0)
        white_mask_tensor = white_mask_tensor.float() / white_mask_tensor.max()
        white_mask_tensor = 1.0 - white_mask_tensor.permute(1, 2, 3, 0).squeeze(dim=-1)
        #Normalize to [0, 1]
        normalized_depth = (depth_frames - depth_frames.min()) / (depth_frames.max() - depth_frames.min())
        #Pyrender's depths are the distance in meters to the camera, which is the inverse of depths in normal context
        #Ref: https://github.com/mmatl/pyrender/issues/10#issuecomment-468995891
        normalized_depth[normalized_depth != 0] = 1 - normalized_depth[normalized_depth != 0]
        #https://github.com/Fannovel16/comfyui_controlnet_aux/blob/main/src/controlnet_aux/util.py#L24
        depth_frames = [torch.from_numpy(np.concatenate([x, x, x], axis=2)) for x in normalized_depth[..., None]]
        depth_frames = torch.stack(depth_frames, dim=0)
        return (color_frames, depth_frames, white_mask_tensor,)

```
