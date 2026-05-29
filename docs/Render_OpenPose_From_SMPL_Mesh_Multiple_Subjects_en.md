
# Documentation
- Class name: Render_OpenPose_From_SMPL_Mesh_Multiple_Subjects
- Category: MotionDiff/smpl
- Output node: False

This node renders OpenPose keypoints from multiple SMPL mesh subjects, facilitating visualization of human poses and motions in a standardized format. It emphasizes converting 3D mesh data into 2D pose representations, enabling more intuitive understanding of complex human interactions captured by SMPL models.

# Input types
## Required
- smpl_multi_subjects
    - Represents multiple SMPL model subjects, serving as input for generating OpenPose visualizations. This parameter is critical for processing and rendering poses of multiple individuals simultaneously.
    - Comfy dtype: SMPL_MULTIPLE_SUBJECTS
    - Python dtype: List[Dict[str, Any]]

# Output types
- image
    - The output is an image representation of OpenPose keypoints, providing a visual summary of human poses extracted from the input SMPL meshes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
class Render_OpenPose_From_SMPL_Mesh_Multiple_Subjects:
    @classmethod
    def INPUT_TYPES(s):
        return {
            "required": {
                "smpl_multi_subjects": ("SMPL_MULTIPLE_SUBJECTS", )
            },
        }
    RETURN_TYPES = ("IMAGE",)
    CATEGORY = "MotionDiff/smpl"
    FUNCTION = "render"
    def render(self, smpl_multi_subjects):
        render_openpose = smpl_multi_subjects[1].get("render_openpose", None)
        if render_openpose is None:
            raise NotImplementedError("render_openpose")
        return (render_openpose().float() / 255., )

```
