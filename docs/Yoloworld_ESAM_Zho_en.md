# Documentation
- Class name: Yoloworld_ESAM_Zho
- Category: YOLOWORLD_ESAM
- Output node: False
- Repo Ref: https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM.git

The Yoloworld_ESAM_Zho class encapsulates the functionality of integrating YOLO object detection with ESAM segmentation. Its purpose is to perform comprehensive analysis of images by identifying and classifying objects within them, as well as performing segmentation based on the detected categories. This node contributes to the overall workflow by enhancing the understanding of visual content, which is critical for applications requiring detailed image analysis.

# Input types
## Required
- yolo_world_model
    - The YOLO World model is essential for the object detection process. It is responsible for identifying and classifying objects in the input image. The accuracy and efficiency of the model directly affect the node's ability to process images and produce accurate results.
    - Comfy dtype: YOLOWORLDMODEL
    - Python dtype: YOLOWorldModel
- esam_model
    - The ESAM model is critical for the segmentation process. It takes the detected objects and further refines the understanding of their spatial distribution in the image. The performance of the model is crucial for achieving detailed and precise segmentation masks.
    - Comfy dtype: ESAMMODEL
    - Python dtype: ESAMModel
- image
    - Images are the primary input to the node. They are the subjects of the detection and segmentation process. The quality and resolution of the images directly impact the accuracy and reliability of the results.
    - Comfy dtype: IMAGE
    - Python dtype: List[cv2.ndarray]
- categories
    - Categories define the classes that the model will identify in the images. They are essential for guiding the detection and segmentation process, ensuring the node focuses on relevant objects.
    - Comfy dtype: STRING
    - Python dtype: List[str]
## Optional
- confidence_threshold
    - The confidence threshold filters out detection results that do not meet a certain confidence level. It plays an important role in managing the trade-off between detection sensitivity and specificity, thereby affecting the overall quality of the results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iou_threshold
    - The Intersection over Union (IoU) threshold is used in the Non-Maximum Suppression (NMS) process to eliminate redundant detections. It affects the node's ability to produce a clean and accurate set of detections by reducing overlapping regions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- box_thickness
    - The bounding box thickness determines the visual prominence of the bounding boxes drawn around detected objects. It affects the aesthetics and clarity of the annotated images, which is important for visual analysis and interpretation.
    - Comfy dtype: INT
    - Python dtype: int
- text_thickness
    - The text thickness affects the visibility of the category labels drawn on the annotated images. It is important for ensuring that labels are easy to read and contribute to a comprehensive understanding of the image content.
    - Comfy dtype: INT
    - Python dtype: int
- text_scale
    - The text scale adjusts the size of the category labels, affecting the readability and visual balance of the annotated images. It is a key factor in creating annotations that are both informative and visually appealing.
    - Comfy dtype: FLOAT
    - Python dtype: float
- with_confidence
    - When this parameter is enabled, confidence scores are added alongside the category labels, providing an additional layer of information about the reliability of the detection results. This is critical for decision-making processes that depend on the certainty of the detection results.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- with_class_agnostic_nms
    - When this parameter is activated, class-agnostic Non-Maximum Suppression (NMS) is applied to the detection results, helping to reduce overlapping boxes across different categories. It improves the overall presentation of the detection results by ensuring a cleaner and more organized set of bounding boxes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- with_segmentation
    - When this parameter is enabled, the node will segment the detected objects, providing a detailed visual representation of their shapes and boundaries. This enhances the understanding of the image content and is particularly useful for applications requiring precise object delineation.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_combined
    - This parameter controls whether the segmentation masks are merged into a single mask representing all detected objects. This is helpful for visualizing the collective spatial distribution of objects in the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_extracted
    - When this parameter is enabled, it allows the extraction of individual segmentation masks for each detected object, providing fine-grained control for manipulating or analyzing individual objects, which is particularly useful for applications requiring separate processing or analysis of individual objects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- mask_extracted_index
    - This parameter specifies the index of the segmentation mask to extract when individual masks are needed. It is essential for locating specific objects within the set of detected objects for further processing or analysis.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- processed_images
    - The processed images are the output of the node after applying object detection and segmentation. They include annotations such as bounding boxes and labels, providing a visual representation of the detected and segmented objects. These images are critical for visual analysis and validating the node's performance.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- processed_masks
    - The processed masks are the segmentation output, which outline the precise boundaries of the detected objects. They are important for applications requiring detailed spatial information of objects in the image, such as in medical imaging or autonomous vehicle navigation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ZHO-ZHO-ZHO/ComfyUI-YoloWorld-EfficientSAM)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
