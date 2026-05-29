# Documentation
- Class name: ultralyticsDetectorForDetailerFix
- Category: EasyUse/Fix
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Use.git

This node integrates with the Ultralytics detector, processing bounding box and segmentation data to improve the accuracy and detail of object detection in images. It is designed to enhance the overall quality of image analysis by adjusting detection parameters and applying specific processing steps.

# Input types
## Required
- model_name
    - The model_name parameter specifies the source of the detection model, which is critical for the operation of the node, as it determines the data used for object detection and segmentation.
    - Comfy dtype: COMBO[bboxs, segms]
    - Python dtype: Union[str, List[str]]
- bbox_threshold
    - The bbox_threshold parameter fine-tunes the sensitivity of bounding box detection, affecting the node's ability to identify and isolate objects in images.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - The bbox_dilation parameter adjusts the size of bounding boxes, which is essential for accurately framing and focusing on detected objects.
    - Comfy dtype: INT
    - Python dtype: int
- bbox_crop_factor
    - The bbox_crop_factor parameter affects the image cropping around detected objects, ensuring that details are effectively captured for further analysis.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- bbox_segm_pipe
    - The output of this node is a pipeline combining refined bounding box and segmentation results, providing a comprehensive set of data for detailed image analysis.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, float, int, float, Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Use)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
