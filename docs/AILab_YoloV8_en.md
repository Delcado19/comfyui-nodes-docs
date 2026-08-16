# Documentation
- Class name: AILab_YoloV8
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
    - YOLOv8 weights stored under G:\ComfyUI-Easy-Install\ComfyUI\models\ultralytics. Advanced controls available on YOLOv8 Adv.
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
