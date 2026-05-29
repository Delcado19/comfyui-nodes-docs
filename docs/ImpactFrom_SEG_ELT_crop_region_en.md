# Documentation
- Class name: From_SEG_ELT_crop_region
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of node 'From_SEG_ELT_crop_region' is intended to handle a specific region of interest in a segmentation map. It focuses on extracting the coordinates that define the region's boundaries, which is crucial for further analysis or operations within the ImpactPack toolkit.

# Input types
## Required
- crop_region
    - The parameter 'crop_region' is essential because it specifies the area in the segmentation map to be cropped. It directly influences the node's operation by determining the exact portion of the map that will be processed and returned.
    - Comfy dtype: SEG_ELT_crop_region
    - Python dtype: ImpactPack SEG_ELT_crop_region object

# Output types
- left
    - The parameter 'left' indicates the left boundary coordinate of the cropping region. It is important because it provides one of the four fundamental coordinates needed to define the position and extent of the cropped segment in the segmentation map.
    - Comfy dtype: INT
    - Python dtype: int
- top
    - The parameter 'top' indicates the top boundary coordinate of the cropping region. Together with the other three parameters, it is critical for determining the exact location and size of the segment extracted from the segmentation map.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The parameter 'right' indicates the right boundary coordinate of the cropping region. It is a key component for determining the spatial bounds of the segment in the segmentation map, ensuring the correct portion is isolated for subsequent operations.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The parameter 'bottom' indicates the bottom boundary coordinate of the cropping region. Combined with 'left', 'top', and 'right', it forms the set of coordinates required to delineate the cropping segment in the segmentation map.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
