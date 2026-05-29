
# Documentation
- Class name: CameraPoseVisualizer
- Category: KJNodes/misc
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The CameraPoseVisualizer node is used to visualize camera poses in a 3D chart. It can read data from a specified file containing camera intrinsic parameters and coordinates, or directly use the provided camera control poses. This node supports adjusting the visualization scale, base values, and optionally whether to use precise focal length or relative camera-to-world coordinate transformations, enhancing the understanding of camera positions and orientations in a given space.

# Input types
## Required
- pose_file_path
    - Specifies the file path containing camera poses, or an empty string if camera control poses are provided directly. This parameter is crucial for determining the source of camera poses to be visualized.
    - Comfy dtype: STRING
    - Python dtype: str
- base_xval
    - Determines the base x value for the camera pyramid visualization, affecting the positioning of the camera representation in the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- zval
    - Sets the z value for the camera pyramid visualization, affecting the depth positioning of the camera representation in the chart.
    - Comfy dtype: FLOAT
    - Python dtype: float
- scale
    - Adjusts the scale of the entire visualization, allowing zooming in or out of the scene.
    - Comfy dtype: FLOAT
    - Python dtype: float
- use_exact_fx
    - Boolean flag that determines whether to use the precise focal length from the camera poses or a default value, affecting the accuracy of the visualization.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- relative_c2w
    - Determines whether the camera-to-world coordinate transformation is relative, affecting the orientation and positioning of the camera representation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- use_viewer
    - Boolean flag indicating whether to use an external viewer for visualization, providing an alternative display method.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- cameractrl_poses
    - Directly provides camera control poses for visualization, as an alternative to specifying a pose file path.
    - Comfy dtype: CAMERACTRL_POSES
    - Python dtype: list

# Output types
- image
    - The output is a visual representation of camera poses in a 3D chart, showing the spatial arrangement and orientation of the cameras.
    - Comfy dtype: IMAGE
    - Python dtype: matplotlib.figure.Figure
- ui
    - The output is a visual representation of camera poses in a 3D chart, showing the spatial arrangement and orientation of the cameras.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
