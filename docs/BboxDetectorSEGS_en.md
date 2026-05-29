# Documentation
- Class name: BboxDetectorForEach
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The BboxDetectorForEach node aims to detect bounding boxes for each segment in an image using a specified detector. It processes the image with a given threshold and applies dilation to refine the detection. The node also allows customization through parameters such as crop factor and drop size, enabling users to adjust detection to their specific needs. It contributes to the overall segmentation process by identifying and isolating regions of interest in the image.

# Input types
## Required
- bbox_detector
The bbox_detector parameter is essential for the BboxDetectorForEach node because it defines the detector used to identify bounding boxes within the image. It plays a critical role in the node's execution and the accuracy of detection results.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- image
The image parameter is a fundamental input for the BboxDetectorForEach node, representing the visual data to be processed for bounding box detection. It is the primary source of information for the node's operation and directly influences detection outcomes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- threshold
The threshold parameter is crucial for controlling the sensitivity of bounding box detection. It determines the level at which the detector identifies potential segments, affecting the node's ability to distinguish relevant from irrelevant areas in the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- dilation
The dilation parameter is important for refining detected bounding boxes by expanding their borders. It allows adjustment of the size and shape of detected segments, especially useful when handling images of different resolutions or requiring a higher level of detail.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
The crop factor parameter influences the portion of the image used for detection. It can focus on specific regions of interest or exclude irrelevant areas, thereby improving the efficiency and accuracy of the detection process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
The drop_size parameter determines the size of segments discarded during detection. It is a key factor in controlling detection granularity, allowing a balance between the number of detected segments and the required computational resources.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- labels
The labels parameter lets users specify the types of segments they are interested in. It enables selective detection by filtering out unwanted segments, simplifying subsequent processing steps and focusing on the most important parts of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- detailer_hook
The detailer_hook parameter provides a mechanism to customize the detection process with additional details or post-processing steps. It is particularly useful for integrating the node with other systems or applying domain-specific logic to the detection results.
    - Comfy dtype: DETAILER_HOOK
    - Python dtype: Callable

# Output types
- segs
The segs output represents the set of detected segments in the image. It is the main result of the BboxDetectorForEach node's operation, containing the bounding box and related metadata for each segment.
    - Comfy dtype: SEGS
    - Python dtype: List[impact.core.SEG]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
