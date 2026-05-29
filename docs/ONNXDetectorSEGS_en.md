# Documentation
- Class name: BboxDetectorForEach
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The BboxDetectorForEach node is designed to detect the bounding box of each segment in an image. It utilizes the bbox_detector to identify and locate segments based on provided thresholds and other parameters, ensuring that only the most relevant segments are detected. This node plays a key role in the segment detection workflow, simplifying the process by automatically identifying and isolating specific areas of interest in the image.

# Input types
## Required
- bbox_detector
    - bbox_detector is a key component of the node, responsible for the actual detection of bounding boxes in the image. It is crucial for the execution of the node because it directly affects the accuracy and efficiency of the detection process.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- image
    - image parameter is the input data for the node, which bbox_detector uses to perform its detection task. It is the basis of node operation, as the quality and resolution of the image can significantly affect the detection results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
    - threshold parameter determines the sensitivity of bbox_detector when identifying bounding boxes. It is an important adjustment factor that can affect the number of segments detected and the accuracy of detection.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
    - dilation parameter controls the expansion of detected bounding boxes. It plays an important role in post-detection processing and may enhance the coverage of detected segments.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
    - crop_factor parameter is used to adjust the size of the cropped segment after detection. It is essential for fine-tuning the segmentation process to meet specific application requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
    - drop_size parameter specifies the minimum size of a segment to be considered during detection. It is crucial for filtering out noise and irrelevant data, thus improving detection quality.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- labels
    - labels parameter allows specifying the types of segments to detect. It is an optional but useful feature to focus detection on specific segments of interest.
    - Comfy dtype: STRING
    - Python dtype: str
- detailer_hook
    - detailer_hook parameter provides a mechanism for custom post-processing of detected bounding boxes. It is an advanced feature that can be used to integrate additional processing steps into the detection workflow.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Callable

# Output types
- segs
    - segs output contains the detected segments in the image, each with its bounding box information. This is the main result of the node operation and is critical for further analysis or processing.
    - Comfy dtype: SEGS
    - Python dtype: List[impact.core.SEG]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
