# Documentation
- Class name: FaceBBoxDetect
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The FaceBBoxDetect node is designed to identify and locate faces in images using a pre-trained bounding box detector. It processes the input image to detect faces and adjusts the bounding boxes to ensure they are within the image boundaries, thus providing a refined list of face bounding boxes.

# Input types
## Required
- bbox_detector
    - The bbox_detector parameter is a pre-trained model used to detect face bounding boxes in the input image. It is crucial to the node's functionality because it directly affects the accuracy and reliability of the face detection process.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: YOLO
- image
    - The image parameter represents the input image data on which face detection will be performed. It is critical because it is the main source of information for the node to identify faces.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - The threshold parameter is used to set the confidence level for face detection. It influences the node's decision to include detected faces in the final result, thereby affecting the detection precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
    - The dilation parameter is used to adjust the size of the detected bounding boxes. It is important because it can help fine-tune the accuracy of the bounding box coordinates to better fit the actual size of the faces.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- bbox_list
    - The bbox_list output contains a refined list of bounding boxes around the detected faces. It is important because it represents the direct result of the face detection process, providing valuable data for further analysis or processing.
    - Comfy dtype: BBOX_LIST
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
