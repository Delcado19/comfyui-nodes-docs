# Documentation
- Class name: OnnxDetectionModelLoader
- Category: WanAnimatePreprocess
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-WanAnimatePreprocess

Loads ONNX models for pose and face detection. ViTPose for pose estimation and YOLO for object detection.

# Input types
## Required
- vitpose_model
    - These models are loaded from the 'ComfyUI/models/detection' -folder
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- yolo_model
    - These models are loaded from the 'ComfyUI/models/detection' -folder
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- onnx_device
    - Device to run the ONNX models on
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- model
    - The model output is produced by this node.
    - Comfy dtype: POSEMODEL
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-WanAnimatePreprocess)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
