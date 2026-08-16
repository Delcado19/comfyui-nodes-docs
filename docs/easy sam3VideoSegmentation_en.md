# Documentation
- Class name: easy sam3VideoSegmentation
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Track and segment objects across video frames using SAM3

# Input types
## Required
- sam3_model
    - SAM3 model loaded from LoadSam3Model node (must be video mode)
    - Comfy dtype: EASY_SAM3_MODEL
    - Python dtype: object
- video_frames
    - Video frames as image sequence
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- prompt
    - Text description of objects to track (e.g., 'person', 'car')
    - Comfy dtype: STRING
    - Python dtype: str
- frame_index
    - Frame where initial prompt is applied
    - Comfy dtype: INT
    - Python dtype: int
- object_id
    - Unique ID for multi-object tracking
    - Comfy dtype: INT
    - Python dtype: int
- score_threshold_detection
    - Confidence threshold for detections, default is 0.5
    - Comfy dtype: FLOAT
    - Python dtype: float
- new_det_thresh
    - Threshold for a detection to be added as a new object, default is 0.7
    - Comfy dtype: FLOAT
    - Python dtype: float
- propagation_direction
    - The propagation_direction input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- start_frame_index
    - The start_frame_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- max_frames_to_track
    - Advanced: Max frames to process (-1 for all)
    - Comfy dtype: INT
    - Python dtype: int
- close_after_propagation
    - Close the session after propagation
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- keep_model_loaded
    - The keep_model_loaded input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- session_id
    - The session_id input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- extra_config
    - Extra configuration for the SAM3 model
    - Comfy dtype: EASY_SAM3_EXTRA_CONFIG
    - Python dtype: object
- positive_coords
    - Positive click coordinates as JSON: '[{"x": 50, "y": 120}]'
    - Comfy dtype: STRING
    - Python dtype: str
- negative_coords
    - Negative click coordinates as JSON: '[{"x": 150, "y": 300}]'
    - Comfy dtype: STRING
    - Python dtype: str
- bbox
    - Bounding box as (x_min, y_min, x_max, y_max) or (x, y, width, height) tuple. Compatible with KJNodes Points Editor bbox output.
    - Comfy dtype: BBOX
    - Python dtype: object

# Output types
- masks
    - Tracked segmentation masks for all frames
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- session_id
    - The session_id output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- objects
    - The objects output is produced by this node.
    - Comfy dtype: EASY_SAM3_OBJECTS_OUTPUT
    - Python dtype: object
- obj_masks
    - The obj_masks output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
