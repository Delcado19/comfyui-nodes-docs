# Documentation
- Class name: MediaPipeFaceMeshToSEGS
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MediaPipeFaceMeshToSEGS node processes facial images and converts them into a structured segmentation format. It uses the MediaPipe FaceMesh model to detect facial landmarks, then generates segmentation masks for each specified facial feature. The node handles various facial parts such as face, mouth, eyes, eyebrows, and pupils, allowing detailed segmentation according to user needs.

# Input types
## Required
- image
- The input image is a key parameter for the MediaPipeFaceMeshToSEGS node because it underpins landmark detection and subsequent segmentation. The image quality and resolution directly affect the accuracy of facial feature segmentation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- crop_factor
- The crop_factor parameter adjusts the size of the segmentation output. It is optional, letting users control the detail level in the segmentation by resizing the output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_fill
- The bbox_fill parameter determines whether to fill the bounding box around segmented facial features. This boolean flag customizes the appearance of the segmentation mask.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop_min_size
- The crop_min_size parameter specifies the minimum size of the crop area around facial features. It ensures the segmentation output includes sufficient context around detected landmarks.
    - Comfy dtype: INT
    - Python dtype: int
- drop_size
- The drop_size parameter controls the spacing between segmentation points. It influences mask density by setting the interval between points.
    - Comfy dtype: INT
    - Python dtype: int
- dilation
- The dilation parameter applies to the segmentation mask to enlarge the segmented area. This is useful for refining small facial features.
    - Comfy dtype: INT
    - Python dtype: int
- face
- The face flag indicates whether the face region should be included in the segmentation. It allows selective segmentation of facial features based on user requirements.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mouth
- The mouth flag determines whether the mouth area should be included in the segmentation. It provides flexibility when segmenting specific facial features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eyebrow
- The left_eyebrow flag toggles inclusion of the left eyebrow in the segmentation output. It enables selective segmentation of individual facial features.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eye
- The left_eye flag controls whether the left eye region is part of the segmentation. It allows segmentation of specific facial areas upon request.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_pupil
- The left_pupil flag specifies whether the left pupil should be included in the segmentation. It is used for detailed eye region segmentation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eyebrow
- The right_eyebrow flag determines whether the right eyebrow should be included in the segmentation mask. It supports segmentation of facial features as requested.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eye
- The right_eye flag indicates whether the right eye region should be included in the segmentation. It facilitates segmentation of specific facial areas as needed.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_pupil
- The right_pupil flag controls whether the right pupil is included in the segmentation process. This is crucial for precise eye region segmentation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS
The SEGS output provides a structured representation of facial feature segmentation. It includes the size of the segmentation masks and a list of tuples containing labels and corresponding segmentation mask tensors.
    - Comfy dtype: COMBO[str, List[Tuple[int, torch.Tensor]]]
    - Python dtype: Tuple[int, List[Tuple[str, torch.Tensor]]]

# Usage tips
- Infra type: CPU

# Source code
```
class MediaPipeFaceMeshToSEGS:

    @classmethod
    def INPUT_TYPES(s):
        bool_true_widget = ('BOOLEAN', {'default': True, 'label_on': 'Enabled', 'label_off': 'Disabled'})
        bool_false_widget = ('BOOLEAN', {'default': False, 'label_on': 'Enabled', 'label_off': 'Disabled'})
        return {'required': {'image': ('IMAGE',), 'crop_factor': ('FLOAT', {'default': 3.0, 'min': 1.0, 'max': 100, 'step': 0.1}), 'bbox_fill': ('BOOLEAN', {'default': False, 'label_on': 'enabled', 'label_off': 'disabled'}), 'crop_min_size': ('INT', {'min': 10, 'max': MAX_RESOLUTION, 'step': 1, 'default': 50}), 'drop_size': ('INT', {'min': 1, 'max': MAX_RESOLUTION, 'step': 1, 'default': 1}), 'dilation': ('INT', {'default': 0, 'min': -512, 'max': 512, 'step': 1}), 'face': bool_true_widget, 'mouth': bool_false_widget, 'left_eyebrow': bool_false_widget, 'left_eye': bool_false_widget, 'left_pupil': bool_false_widget, 'right_eyebrow': bool_false_widget, 'right_eye': bool_false_widget, 'right_pupil': bool_false_widget}}
    RETURN_TYPES = ('SEGS',)
    FUNCTION = 'doit'
    CATEGORY = 'ImpactPack/Operation'

    def doit(self, image, crop_factor, bbox_fill, crop_min_size, drop_size, dilation, face, mouth, left_eyebrow, left_eye, left_pupil, right_eyebrow, right_eye, right_pupil):
        result = core.mediapipe_facemesh_to_segs(image, crop_factor, bbox_fill, crop_min_size, drop_size, dilation, face, mouth, left_eyebrow, left_eye, left_pupil, right_eyebrow, right_eye, right_pupil)
        return (result,)
```