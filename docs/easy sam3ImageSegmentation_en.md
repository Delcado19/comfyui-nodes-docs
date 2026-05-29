# Documentation
- Class name: easy sam3ImageSegmentation
- Display name: Sam3 Image Segmentation
- Category: EasyUse/Sam3
- Output node: False
- Repo Ref: https://github.com/yolain/ComfyUI-Easy-Sam3

Segment images using SAM3 with text prompts and optional box/point prompts

# Input types
## Required
- sam3_model
    - SAM3 model loaded from LoadSam3Model node
    - Comfy dtype: EASY_SAM3_MODEL
- images
    - Input image or images to segment
    - Comfy dtype: IMAGE
- prompt
    - Text description of objects to segment (e.g., 'a cat', 'person')
    - Comfy dtype: STRING
    - Default: `""`
- threshold
    - Confidence threshold for detections
    - Comfy dtype: FLOAT
    - Default: `0.4`
- keep_model_loaded
    - Comfy dtype: BOOLEAN
    - Default: `false`
- add_background
    - Add background color to segmented images
    - Comfy dtype: COMBO
    - Default: `"none"`
- detection_limit
    - Advanced: Limit number of detections (-1 for no limit)
    - Comfy dtype: INT
    - Default: `-1`
## Optional
- coordinates_positive
    - Comfy dtype: STRING
- coordinates_negative
    - Comfy dtype: STRING
- bboxes
    - Comfy dtype: BBOX
- mask
    - Comfy dtype: MASK

# Output types
- masks
    - Segmentation masks (combined per image)
    - Comfy dtype: MASK
- images
    - Segmentation images
    - Comfy dtype: IMAGE
- obj_masks
    - Individual object masks before combining (for visualization)
    - Comfy dtype: MASK
- boxes
    - Bounding boxes for each detected object
    - Comfy dtype: BBOX
- scores
    - Confidence scores for each detected object
    - Comfy dtype: FLOAT

# Source code
[View source repository on GitHub](https://github.com/yolain/ComfyUI-Easy-Sam3)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
