# Documentation
- Class name: AILab_ICLoRAConcat
- Category: 🧪AILab/🖼️IMAGE
- Output node: False
- Repo Ref: https://github.com/1038lab/ComfyUI-RMBG

A sophisticated ComfyUI custom node engineered for advanced image background removal and precise segmentation of objects, faces, clothing, and fashion elements. This tool leverages a diverse array of models, including RMBG-2.0, INSPYRENET, BEN, BEN2, BiRefNet, SDMatte models, SAM, SAM2, SAM3 and GroundingDINO, while also incorporating a new feature for real-time background replacement and enhanced edge detection for improved accuracy.

# Input types
## Required
- object_image
    - The main image to be used as the foreground (object) in the concatenation.
If the image has 4 channels (RGBA), the alpha channel will be automatically extracted and used as the object mask if no mask is provided.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- layout
    - The direction in which to concatenate the images: top-bottom or left-right.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- custom_size
    - If 0, the output image size is unchanged. Otherwise, sets the base image height (for left-right) or base image width (for top-bottom) in pixels for the concatenation. The object image will be scaled proportionally to match the base image in the concatenation direction.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- object_mask
    - Mask for the object_image. Defines the region of the object_image to be blended into the base_image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- base_image
    - The background image to be concatenated with the object_image.
If the image has 4 channels (RGBA), the alpha channel will be automatically extracted and used as the base mask if no mask is provided.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- base_mask
    - Mask for the base_image. Defines the region of the base_image to be blended with the object_image.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types
- IMAGE
    - The IMAGE output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- OBJECT_MASK
    - The OBJECT_MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- BASE_MASK
    - The BASE_MASK output is produced by this node.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- WIDTH
    - The WIDTH output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- HEIGHT
    - The HEIGHT output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- X
    - The X output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int
- Y
    - The Y output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/1038lab/ComfyUI-RMBG)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
