# Documentation
- Class name: SimpleDetectorForAnimateDiff
- Category: ImpactPack/Detector
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SimpleDetectorForAnimateDiff node is designed to detect and process animation differences across a sequence of images. It utilizes bounding box detection and an optional semantic segmentation model to identify and segment regions of interest. The node can handle multiple operation modes, including using a single frame as reference, combining neighboring frames, or independently segmenting each frame. It emphasizes detecting significant changes and creating masks to isolate these changes for further analysis.

# Input types
## Required
- bbox_detector
    - The `bbox_detector` parameter is crucial for the initial detection of bounding boxes in image frames. It lays the foundation for subsequent analysis and segmentation processes. The effectiveness of `bbox_detector` directly impacts the accuracy of later steps, making it a critical component in the node's operation.
    - Comfy dtype: BBOX_DETECTOR
    - Python dtype: torch.nn.Module
- image_frames
    - The `image_frames` parameter is essential as it represents the input data for the node. It contains the sequence of images that the node will analyze to detect animation differences. The quality and resolution of `image_frames` directly affect the node's ability to detect and accurately segment changes.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_threshold
    - The `bbox_threshold` parameter defines the confidence level for bounding box detection. It is a critical factor in determining which bounding boxes are considered for further processing. Adjusting this threshold can significantly impact the node's detection capability and subsequent segmentation results.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_dilation
    - The `bbox_dilation` parameter is used to expand the size of detected bounding boxes. This expansion is important to ensure the segmentation process captures the entire region of interest, especially when bounding boxes are close to object edges or near each other.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
    - The `crop_factor` parameter is important as it determines the extent to which the image is cropped around the detected region. This helps focus the analysis on the most relevant parts of the image and reduces noise from surrounding areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- drop_size
    - The `drop_size` parameter determines the size of regions discarded during the segmentation process. It plays a crucial role in fine-tuning the segmentation mask to ensure it accurately represents the region of interest without unnecessary details.
    - Comfy dtype: INT
    - Python dtype: int
- sub_threshold
    - The `sub_threshold` parameter is important for fine-tuning the segmentation process. It helps determine the level of detail captured in the segmentation mask, balancing precision and inclusion of relevant information.
    - Comfy dtype: FLOAT
    - Python dtype: float
- sub_dilation
    - The `sub_dilation` parameter is used to control the expansion of the segmentation mask. It is a key factor in ensuring the mask fully encapsulates the region of interest, accounting for any potential inaccuracies in the initial detection.
    - Comfy dtype: INT
    - Python dtype: int
- sub_bbox_expansion
    - The `sub_bbox_expansion` parameter allows expansion of bounding boxes used in the segmentation process. This is particularly useful for capturing regions that may be slightly larger than initially detected, ensuring more comprehensive segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- sam_mask_hint_threshold
    - The `sam_mask_hint_threshold` parameter is used with SAM (Semantic Annotation Model) to refine the segmentation mask. It helps control the level of detail in the mask, ensuring the mask closely matches the desired region of interest.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- SEGS
    - The output SEGS (Semantic Annotation Segments) parameter represents the result of the node's analysis. It contains the segmented regions of interest identified in the input image frames. These segments are critical for further processing and analysis, such as tracking changes or identifying specific features in animations.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
