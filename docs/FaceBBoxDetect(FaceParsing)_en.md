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
```
class FaceBBoxDetect:

    def __init__(self):
        pass

    @classmethod
    def INPUT_TYPES(cls):
        return {'required': {'bbox_detector': ('BBOX_DETECTOR', {}), 'image': ('IMAGE', {}), 'threshold': ('FLOAT', {'default': 0.3, 'min': 0, 'max': 1, 'step': 0.01}), 'dilation': ('INT', {'default': 8, 'min': -512, 'max': 512, 'step': 1})}}
    RETURN_TYPES = ('BBOX_LIST',)
    FUNCTION = 'main'
    CATEGORY = 'face_parsing'

    def main(self, bbox_detector: YOLO, image: Tensor, threshold: float, dilation: int):
        results = []
        transform = T.ToPILImage()
        for item in image:
            image_pil = transform(item.permute(2, 0, 1))
            pred = bbox_detector(image_pil, conf=threshold)
            bboxes = pred[0].boxes.xyxy.cpu()
            for bbox in bboxes:
                bbox[0] = bbox[0] - dilation
                bbox[1] = bbox[1] - dilation
                bbox[2] = bbox[2] + dilation
                bbox[3] = bbox[3] + dilation
                bbox[0] = bbox[0] if bbox[0] > 0 else 0
                bbox[1] = bbox[1] if bbox[1] > 0 else 0
                bbox[2] = bbox[2] if bbox[2] < item.shape[1] else item.shape[1]
                bbox[3] = bbox[3] if bbox[3] < item.shape[0] else item.shape[0]
                results.append(bbox)
        return (results,)
```