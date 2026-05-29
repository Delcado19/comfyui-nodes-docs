# Documentation
- Class name: CropFace
- Category: facerestore_cf
- Output node: False
- Repo Ref: https://github.com/mav-rik/facerestore_cf

The CropFace node extracts and processes facial regions from input images. It uses a detection model to identify faces, then crops and aligns them according to predefined templates. The node’s main function is to prepare facial images for further processing (e.g., restoration or recognition) by isolating faces and normalizing them to size and orientation standards.

# Input types
## Required
- image
- The input image is essential for the node to perform face detection and cropping. It is the source from which facial regions are extracted and processed. Without a valid image, the node cannot perform its intended function.
    - Comfy dtype: IMAGE
    - Python dtype: numpy.ndarray
## Optional
- facedetection
- The facedetection parameter specifies the detection model used to identify faces in the input image. It affects the accuracy and efficiency of the face detection process, thereby influencing the quality of the cropped face images.
    - Comfy dtype: COMBO[retinaface_resnet50, retinaface_mobile0.25, YOLOv5l, YOLOv5n]
    - Python dtype: str

# Output types
- IMAGE
- The output includes cropped and aligned face images ready for further processing. These outputs represent the node’s face detection and image processing capabilities.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/mav-rik/facerestore_cf)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
