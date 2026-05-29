# Documentation
- Class name: UltraalyticsDetectorProvider
- Category: ImpactPack
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The UltraalyticsDetectorProvider node facilitates loading and using object detection models provided by Ultraalytics. It abstracts model initialization complexity, allowing users to easily perform bounding box and segmentation detection. The node emphasizes seamless integration of detection capabilities into broader systems, offering a high-level interface for detection tasks without requiring deep knowledge of underlying model architecture or inference processes.

# Input types
## Required
- model_name
- The model_name parameter is critical for specifying which pretrained YOLO model to load for object detection tasks. Its value determines the model configuration and the type of detection the node will perform (bounding box or segmentation). This parameter directly impacts the node's execution and the quality of detection results.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- BBOX_DETECTOR
- The BBOX_DETECTOR output provides a detector object specialized for identifying and locating objects in images via bounding boxes. It encapsulates detection functionality, serving as a key component in the object detection pipeline and offering a structured way to obtain and use detection results.
    - Comfy dtype: UltraBBoxDetector
    - Python dtype: UltraBBoxDetector
- SEGM_DETECTOR
- The SEGM_DETECTOR output provides a detector object that not only locates objects in images but also supplies segmentation masks. This output is essential for applications requiring detailed understanding of object shapes and boundaries, delivering a comprehensive detection solution that includes segmentation capabilities.
    - Comfy dtype: UltraSegmDetector
    - Python dtype: UltraSegmDetector

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
