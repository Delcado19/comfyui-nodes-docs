# Documentation
- Class name: PoseEditor3D
- Category: image
- Output node: False
- Repo Ref: https://github.com/hinablue/ComfyUI_3dPoseEditor.git

The PoseEditor3D class facilitates manipulation and processing of 3D poses from images, enabling extraction and analysis of pose data for various applications.

# Input types
## Optional
- pose
- Pose parameters are essential for initializing 3D poses from images, allowing nodes to focus on specific character representations.
    - Comfy dtype: COMBO[sorted(os.listdir(temp_dir),)]
    - Python dtype: Union[str, None]
- depth
- Depth images provide critical information for the 3D reconstruction process, improving pose estimation accuracy.
    - Comfy dtype: COMBO[sorted(os.listdir(temp_dir),)]
    - Python dtype: Union[str, None]
- normal
- Normal images help understand the surface orientation of 3D models, enhancing the visual representation of poses.
    - Comfy dtype: COMBO[sorted(os.listdir(temp_dir),)]
    - Python dtype: Union[str, None]
- canny
- Canny images are used for edge detection, which is crucial for identifying the contours and boundaries of 3D poses.
    - Comfy dtype: COMBO[sorted(os.listdir(temp_dir),)]
    - Python dtype: Union[str, None]

# Output types
- OpenPose
- OpenPose output provides a detailed representation of 3D poses, essential for further analysis and processing.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- Depth
- Depth output contains processed depth information, vital for 3D reconstruction and understanding spatial relationships in the scene.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- Normal
- Normal output represents the surface orientation of 3D models, improving the visual accuracy of poses.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- Canny
- Canny output provides edge detection data, essential for identifying the contours and boundaries of 3D poses.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/hinablue/ComfyUI_3dPoseEditor)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
