# Documentation
- Class name: FaceKeypointsPreprocessor
- Category: InstantID
- Output node: False
- Repo Ref: https://github.com/cubiq/ComfyUI_InstantID.git

The FaceKeypointsPreprocessor node aims to extract and utilize facial keypoints through image preprocessing to enhance facial recognition tasks. It leverages advanced facial analysis techniques to identify and process facial features, which is critical for improving the accuracy and efficiency of subsequent facial recognition models. By focusing on extracting key facial points, this node facilitates a more detailed understanding of facial structure, thereby promoting more effective facial analysis.

# Input types
## Required
- faceanalysis
    - The faceanalysis parameter is required because it provides the facial analysis model and its associated features needed for image preprocessing. It plays a key role in detecting and extracting facial keypoints, directly affecting the effectiveness of preprocessing.
    - Comfy dtype: FACEANALYSIS
    - Python dtype: InsightFaceModel
- image
    - The image parameter is the input image processed by FaceKeypointsPreprocessor. It is the foundation of the node's operation and the source for extracting facial keypoints. The quality and resolution of the image directly affect the accuracy of facial feature detection.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Output types
- face_kps
    - The output of FaceKeypointsPreprocessor, face_kps, is a representation of facial keypoints extracted from the input image. These keypoints are very important because they provide the foundation for subsequent facial recognition and analysis tasks, enabling more precise identification and understanding of facial features.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
```
class FaceKeypointsPreprocessor:

    @classmethod
    def INPUT_TYPES(s):
        return {'required': {'faceanalysis': ('FACEANALYSIS',), 'image': ('IMAGE',)}}
    RETURN_TYPES = ('IMAGE',)
    FUNCTION = 'preprocess_image'
    CATEGORY = 'InstantID'

    def preprocess_image(self, faceanalysis, image):
        face_kps = extractFeatures(faceanalysis, image, extract_kps=True)
        if face_kps is None:
            face_kps = torch.zeros_like(image)
            print(f'\x1b[33mWARNING: no face detected, unable to extract the keypoints!\x1b[0m')
        return (face_kps,)
```