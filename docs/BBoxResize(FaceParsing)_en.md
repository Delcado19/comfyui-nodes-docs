# Documentation
- Class name: BBoxResize
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

The BBoxResize node is designed to resize bounding boxes (BBOX) to fit new image dimensions. It performs a scaling operation, ensuring that bounding box coordinates are proportionally resized while maintaining their relative positions within the image. This node is critical for preserving the integrity of object detection across different image resolutions.

# Input types
## Required
- bbox
    - The 'bbox' parameter represents the bounding box coordinates to be resized. It is essential to the node's operation, as it determines the initial position and size of objects within the image.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor
- width_old
    - The 'width_old' parameter specifies the original image width relative to the bounding box coordinates. It is necessary for calculating the correct scaling factor for the new dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- height_old
    - The 'height_old' parameter defines the original height of the image. It plays a key role in the resizing process, ensuring the vertical proportions of the bounding box are maintained.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The 'width' parameter represents the new width of the resized image. It is a critical input for the node to calculate the adjusted bounding box coordinates.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter represents the new height of the resized image. It is essential for maintaining the aspect ratio of the bounding box during the resizing process.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- BBOX
    - The output 'BBOX' is the resized bounding box coordinates, adjusted to fit the new image dimensions. It is important because it provides the updated position and size of objects in the resized image.
    - Comfy dtype: BBOX
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
