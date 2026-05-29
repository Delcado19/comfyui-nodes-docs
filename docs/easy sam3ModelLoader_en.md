# Documentation
- Class name: easy sam3ModelLoader
- Display name: Load SAM3 Model
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Load SAM3 model for segmentation tasks

# Input types
## Required
- model
    - Select SAM3 model file to load
    - Comfy dtype: COMBO
    - Default: `"sam3.pt"`
- segmentor
    - Choose between image or video segmentation mode
    - Comfy dtype: COMBO
    - Default: `"image"`
- device
    - Device to load the model on
    - Comfy dtype: COMBO
    - Default: `"cuda"`
- precision
    - Model precision for inference
    - Comfy dtype: COMBO
    - Default: `"fp32"`

# Output types
- sam3_model
    - Comfy dtype: EASY_SAM3_MODEL

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
