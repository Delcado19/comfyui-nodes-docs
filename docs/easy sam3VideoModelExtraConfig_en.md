# Documentation
- Class name: easy sam3VideoModelExtraConfig
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Configure advanced parameters for SAM3 video segmentation model

# Input types
## Required
- assoc_iou_thresh
    - IoU threshold for detection-to-track matching
    - Comfy dtype: FLOAT
    - Python dtype: float
- det_nms_thresh
    - IoU threshold for detection NMS (Non-Maximum Suppression)
    - Comfy dtype: FLOAT
    - Python dtype: float
- new_det_thresh
    - Threshold for a detection to be added as a new object
    - Comfy dtype: FLOAT
    - Python dtype: float
- hotstart_delay
    - Hold off outputs for N frames to remove unmatched/duplicate tracklets
    - Comfy dtype: INT
    - Python dtype: int
- hotstart_unmatch_thresh
    - Remove tracklets unmatched for this many frames during hotstart
    - Comfy dtype: INT
    - Python dtype: int
- hotstart_dup_thresh
    - Remove overlapping tracklets during hotstart
    - Comfy dtype: INT
    - Python dtype: int
- suppress_unmatched_within_hotstart
    - If True, only suppress unmatched masks within hotstart period
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- min_trk_keep_alive
    - Minimum keep-alive value (negative means immediate removal)
    - Comfy dtype: INT
    - Python dtype: int
- max_trk_keep_alive
    - Maximum frames to keep a track alive without detections
    - Comfy dtype: INT
    - Python dtype: int
- init_trk_keep_alive
    - Initial keep-alive value when a new track is created
    - Comfy dtype: INT
    - Python dtype: int
- suppress_overlap_occlusion_thresh
    - Threshold for suppressing overlapping objects based on recent occlusion (0.0 to disable)
    - Comfy dtype: FLOAT
    - Python dtype: float
- suppress_det_at_boundary
    - Suppress detections close to image boundaries
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- fill_hole_area
    - Fill holes in masks smaller than this area (in pixels)
    - Comfy dtype: INT
    - Python dtype: int
- recondition_every_nth_frame
    - Recondition tracking every N frames (-1 to disable)
    - Comfy dtype: INT
    - Python dtype: int
- enable_masklet_confirmation
    - Enable masklet confirmation to suppress unconfirmed tracklets
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- decrease_alive_for_empty_masks
    - Decrease keep-alive counter for empty masklets (no valid masks)
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- image_size
    - Input image size for the model
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- extra_config
    - SAM3 model configuration dictionary
    - Comfy dtype: EASY_SAM3_EXTRA_CONFIG
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
