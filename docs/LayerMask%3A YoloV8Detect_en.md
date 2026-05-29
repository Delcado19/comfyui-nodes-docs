# Documentation
- Class name: YoloV8Detect
- Category: 😺dzNodes/LayerMask
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Use the YoloV8 model to detect face and hand box areas, or person segmentation. Supports outputting a selected number of channels. Please download the model file from [GoogleDrive](https://drive.google.com/drive/folders/1I5TISO2G1ArSkKJu1O9b4Uvj3DVgn5d2) or [Baidu Netdisk](https://pan.baidu.com/s/1ImoJrzL1zDgaCqaSzrNEtw?pwd=5xgk) and place it in the ComfyUI/models/yolo folder.


# Input types

## Required

- image
    - Input image.
    - Comfy dtype: IMAGE
    - Python dtype: list

- yolo_model
    - yolo model selection. Models with 'seg' in their name can output segmentation masks, otherwise only box region masks.
    - Comfy dtype: STRING
    - Python dtype: str

- mask_merge
    - Select merged masks. 'all' merges all mask outputs. Selecting a number outputs that many masks, merged in order of recognition confidence.
    - Comfy dtype: STRING
    - Python dtype: str


# Output types

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- yolo_plot_image
    - YOLO recognition result preview image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- yolo_masks
    - All masks recognized by YOLO, each individual mask is output as a mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
