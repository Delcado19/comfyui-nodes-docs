# Documentation
- Class name: MaskToBBox
- Category: face_parsing
- Output node: False
- Repo Ref: https://github.com/Ryuukeisyou/comfyui_face_parsing

This node class encapsulates the functionality of converting facial mask data into bounding box coordinates, facilitating the localization of facial features in images for further analysis.

# Input types
## Required
- mask
    - The mask parameter is a tensor representing the facial mask, crucial for identifying regions of interest in the image. It directly affects the accuracy and quality of the generated bounding boxes.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
## Optional
- pad
    - The pad parameter allows adjustment of bounding box coordinates by padding edges. This is important for refining bounding boxes to better fit facial features across the entire image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- BBOX
    - The output provides a list of tuples, each representing the coordinates of a bounding box. These coordinates are important for locating facial features and can be used in subsequent processing steps.
    - Comfy dtype: List[Tuple[INT, INT, INT, INT]]
    - Python dtype: List[Tuple[int, int, int, int]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Ryuukeisyou/comfyui_face_parsing)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
