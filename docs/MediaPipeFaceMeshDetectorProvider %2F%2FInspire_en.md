# Documentation
- Class name: MediaPipeFaceMeshDetectorProvider
- Category: InspirePack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

The MediaPipeFaceMeshDetectorProvider node is designed to detect and segment faces in images using the MediaPipe FaceMesh model. It provides functionality to identify and isolate facial features such as face contours, eyes, eyebrows, and mouth. The main goal of this node is to enhance facial details in images, which is particularly useful for applications involving face recognition, animation, or enhancing low-resolution face images.

# Input types
## Required
- max_faces
    - The 'max_faces' parameter defines the maximum number of faces the detector should recognize in the input image. It plays a key role in controlling the scope of the detection process and is directly related to the performance and accuracy of face detection.
    - Comfy dtype: INT
    - Python dtype: int
- face
    - The 'face' parameter instructs the detector whether to include the entire face region during detection. Enabling this option ensures that the face area is captured, which is essential for tasks requiring comprehensive facial details.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- mouth
    - When the 'mouth' parameter is enabled, it instructs the detector to specifically identify the mouth area in the detected faces. This is important for applications that need to focus on mouth movements or expressions.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eyebrow
    - The 'left_eyebrow' parameter allows the inclusion of the left eyebrow in facial feature detection. This is particularly useful for applications that require detailed analysis of facial expressions or reconstruction of facial features in images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_eye
    - The 'left_eye' parameter enables detection of the left eye, which is important for applications involving detailed analysis of eye movements or generating accurate facial feature segmentation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- left_pupil
    - The 'left_pupil' parameter is used to detect the left pupil in the face region. This is crucial for applications that require precise eye tracking or enhancing iris clarity in facial images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eyebrow
    - The 'right_eyebrow' parameter specifies whether the right eyebrow should be included in the detection. It helps capture the full range of facial expressions and is particularly useful for applications analyzing or simulating detailed facial movements.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_eye
    - The 'right_eye' parameter activates detection of the right eye, which is essential for a comprehensive face detection setup, allowing detailed eye movement analysis or facial feature reconstruction.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- right_pupil
    - The 'right_pupil' parameter is responsible for detecting the right pupil, playing a key role in applications that require high precision in eye tracking or enhancing iris details in facial images.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- bbox_detector
    - The 'bbox_detector' output provides the bounding box coordinates of the detected faces, which is essential for locating and further processing face regions in the image.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: List[Tuple[int, int, int, int]]
- segm_detector
    - The 'segm_detector' output provides the segmentation mask of the detected faces, allowing isolation and manipulation of facial features with high precision.
    - Comfy dtype: SEGM_DETECTOR
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
