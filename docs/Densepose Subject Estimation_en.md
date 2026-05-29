# Documentation
- Class name: DenseposeSubjectEstimation
- Category: util
- Output node: False
- Repo Ref: https://github.com/esheep/esheep_custom_nodes.git

The DenseposeSubjectEstimation node aims to process and analyze poses in input images, selecting the most relevant poses based on specified criteria through a series of filters. It contributes to advanced pose estimation tasks by refining input data into a more focused set of poses that meet the required subject and physique requirements.

# Input types
## Required
- openpose_image
    - The openpose_image parameter is critical as it serves as the visual input for pose detection. It is the foundation for the node's analysis, determining the presence and visibility of body parts, which subsequently influences pose selection.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- subject
    - The parameter defines specific subject criteria used to filter poses. It plays a key role in narrowing down poses relevant to the subject of interest, thereby enhancing the node's ability to provide targeted results.
    - Comfy dtype: STRING
    - Python dtype: str
- densepose_select_every_nth
    - The densepose_select_every_nth parameter is an optional integer that determines the frequency of selecting poses from the filtered set. It provides a mechanism to control output pose density, allowing a balance between detail and computational efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- DENSEPOSE
    - The DENSEPOSE output represents the final selected poses in the input image after refinement through a series of subject and physique-based filters. It marks the culmination of the node's analysis and is the primary output for further use or display.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- DENSEPOSE_NAME
    - The DENSEPOSE_NAME output provides identifiers or names for the selected poses, offering a text reference that can be used for documentation, labeling, or additional processing outside the node's primary functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
```
class DenseposeSubjectEstimation:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'openpose_image': ('IMAGE',), 'subject': (['科目三'],), 'densepose_select_every_nth': ('INT', {'default': 1, 'min': 1, 'step': 1})}}
    RETURN_TYPES = ['IMAGE', 'STRING']
    RETURN_NAMES = ['DENSEPOSE', 'DENSEPOSE_NAME']
    FUNCTION = 'main'
    CATEGORY = 'util'

    def apply_physique_filter(self, poses):
        return poses

    def apply_region_filter(self, openpose_image, poses):
        batch_size = openpose_image.shape[0]
        if batch_size != 1:
            raise ValueError('Batch size must be 1')
        limb_colors = {'left_foot': (85, 0, 255), 'left_lower_leg': (0, 51, 153), 'left_knee': (0, 0, 255), 'left_upper_leg': (0, 102, 153), 'right_foot': (0, 170, 255), 'right_lower_leg': (0, 153, 102), 'right_knee': (0, 255, 255), 'right_upper_leg': (0, 153, 51)}
        image_tensor = (openpose_image * 255).to(torch.uint8)
        limb_pixel_count = {}
        for (limb, color) in limb_colors.items():
            count = count_color_pixels(image_tensor, color)
            limb_pixel_count[limb] = count
        foot_visible = limb_pixel_count['left_foot'] > 0 and limb_pixel_count['right_foot'] > 0
        upper_leg_visible = limb_pixel_count['left_upper_leg'] > 0 and limb_pixel_count['right_upper_leg'] > 0
        lower_leg_visible = limb_pixel_count['left_lower_leg'] > 0 and limb_pixel_count['right_lower_leg'] > 0
        knee_visible = limb_pixel_count['left_knee'] > 0 and limb_pixel_count['right_knee'] > 0
        if foot_visible and upper_leg_visible and lower_leg_visible:
            return self.filter_poses(poses, 'full_body')
        if upper_leg_visible:
            return self.filter_poses(poses, 'knee_body')
        return self.filter_poses(poses, 'upper_body')

    @staticmethod
    def filter_poses(poses, positive_tag=None):
        res = []
        for (i, pose) in enumerate(poses):
            if positive_tag is not None and positive_tag not in pose['tags']:
                continue
            res.append(pose)
        return res

    def main(self, openpose_image, subject, densepose_select_every_nth=1):
        all_poses = self.filter_poses(densepose_subject_presets, subject)
        poses = self.filter_poses(all_poses)
        poses = self.apply_region_filter(openpose_image, poses)
        poses = self.apply_physique_filter(poses)
        print('filtered densepose tags', list(set((tag for pose in poses for tag in pose['tags']))))
        if len(poses) == 0:
            poses = self.filter_poses(all_poses, 'fallback')
        pose = random.choice(poses)
        densepose_name = pose.get('name')
        densepose = load_densepose(densepose_name, densepose_select_every_nth=densepose_select_every_nth)
        print(f'selected densepose is {densepose_name}')
        return (densepose, densepose_name)
```