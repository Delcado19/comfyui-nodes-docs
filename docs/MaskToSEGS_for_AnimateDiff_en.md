# Documentation
- Class name: MaskToSEGS_for_AnimateDiff
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MaskToSEGS_for_AnimateDiff node is designed to convert a binary mask into a set of segmented objects, called SEGS. It performs this conversion by leveraging the system's core functionality to identify and separate distinct regions within the mask. This node is particularly useful for applications that need to convert mask data into a format that can be further processed or analyzed for detailed operations.

# Input types
## Required
- mask
    - The mask parameter is the critical input of the node, as it defines the binary mask from which segmentation is performed. The quality and accuracy of the mask directly affect the resulting segmentation, making it an important component of node execution.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
## Optional
- combined
    - The combined parameter determines whether the node should treat the mask as a single entity or as separate segments. This decision influences how segmentation is processed and can lead to different results depending on the specific requirements of the task.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop_factor
    - The crop_factor parameter is used to define the size of the crop region within the mask. It plays an important role in the segmentation process by controlling the scale of details extracted from the mask.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_fill
    - The bbox_fill parameter is an optional setting that, when enabled, fills the bounding box area within the mask. In some applications, the presence of a filled bounding box is necessary for further analysis or processing, which can be important.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- drop_size
    - The drop_size parameter specifies the minimum size of regions to be considered for segmentation. It ensures that only areas larger than a certain size threshold are included in the final segmentation, which helps filter out noise or irrelevant details.
    - Comfy dtype: INT
    - Python dtype: int
- contour_fill
    - The contour_fill parameter indicates whether the node should fill the contours within the mask. This is useful for applications that require solid fills of segmented regions in subsequent operations.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS
    - The SEGS output represents the result of the segmentation process, providing a detailed breakdown of distinct regions within the original mask. This output is essential for further analysis or manipulation of the segmented data.
    - Comfy dtype: SEGS
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
