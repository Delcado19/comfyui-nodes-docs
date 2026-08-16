# Documentation
- Class name: AILab_YoloV8Adv
- Category: 🧪AILab/🧽RMBG
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- images
    - The images input is used by this node during execution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- yolo_model
    - YOLOv8 weights stored under G:\ComfyUI-Easy-Install\ComfyUI\models\ultralytics (subfolders allowed).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- mask_count
    - Merge this many detections. 'all' merges everything (or just the selected index when specified).
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- select_mask_index
    - 1-based index of the first mask to keep. Use 'none' to start from the first detection.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- conf
    - Confidence threshold forwarded to Ultralytics.
    - Comfy dtype: FLOAT
    - Python dtype: float
- iou
    - IOU used during NMS.
    - Comfy dtype: FLOAT
    - Python dtype: float
- classes
    - Comma list or ranges of class IDs; empty keeps every class.
    - Comfy dtype: STRING
    - Python dtype: str
- device
    - Force a device or auto-detect CUDA → MPS → CPU.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- max_det
    - Maximum detections per image.
    - Comfy dtype: INT
    - Python dtype: int
- retina_masks
    - Use high-resolution masks (Ultralytics retina_masks flag).
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- agnostic_nms
    - Enable class-agnostic NMS.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- ANNOTATED_IMAGE
    - The ANNOTATED_IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK
    - The MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- MASK_LIST
    - The MASK_LIST output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
