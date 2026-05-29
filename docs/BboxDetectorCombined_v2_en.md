# Documentation
- Class name: BboxDetectorCombined
- Category: Detection
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The BboxDetectorCombined node is designed to detect and segment objects in images using a pre-trained bounding box detector. It processes the input image to identify regions of interest and generates a mask that delineates these regions. This node is essential for applications requiring precise object localization and segmentation, such as in surveillance, robotics, and autonomous systems.

# Input types
## Required
- bbox_detector
    - The bbox_detector parameter is critical to the node's operation, as it provides the pre-trained model used for detecting objects in the image. It is a key component that enables the node to accurately identify and locate objects.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- image
    - The image parameter is the input that the node processes to detect and segment objects. It is the foundation of the node's functionality, and the node's performance is highly dependent on the quality and resolution of the input image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- threshold
    - The threshold parameter is used to set the confidence level for object detection. It plays an important role in filtering out false positives and ensuring that only objects with confidence above a certain level are detected.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
    - The dilation parameter is applied to the detected object masks to expand their boundaries. This is useful for refining segmentation, ensuring that the mask encompasses the entire object even if the object's edges were not perfectly detected.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The mask output is a binary image representing the segmentation of detected objects in the input image. It is a key result of the node's operation, providing a clear delineation of objects for further analysis or processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
