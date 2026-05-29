# Documentation
- Class name: MaskToSEGS
- Category: ImpactPack/Operation
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The MaskToSEGS node is designed to convert a binary mask into a series of segmented objects represented by SEG objects. It processes the input mask to identifies distinct regions and outputs them as a collection of segmented objects, which can be further used for various image processing tasks.

# Input types
## Required
- mask
    - The mask parameter is a binary mask that defines the region of interest within the image. It is critical to the node's operation as it directly affects the segmentation process and the resulting SEG objects.
    - Comfy dtype: MASK
    - Python dtype: np.ndarray
## Optional
- combined
    - The combined parameter determines whether the node should merge overlapping regions in the mask into a single SEG object. This can be important for simplifying the representation of complex scenes.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- crop_factor
    - The crop_factor parameter controls the size of the cropped area around the bounding box of each mask segment. It affects the level of detail of the SEG objects by determining how much context is included around each segment.
    - Comfy dtype: FLOAT
    - Python dtype: float
- bbox_fill
    - The bbox_fill parameter specifies whether the bounding box should be filled with a solid value within the cropped area. This can be used to highlight or isolate specific regions within the SEG objects.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- drop_size
    - The drop_size parameter sets the minimum size of mask segments to be included in the output. Smaller segments that do not meet this size threshold will be discarded, potentially reducing noise in the segmentation.
    - Comfy dtype: INT
    - Python dtype: int
- contour_fill
    - The contour_fill parameter indicates whether the node should fill the area within the mask contours. This can be used to create solid SEG objects from contour-based masks.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- SEGS
    - The SEGS output contains a series of SEG objects, each representing a segmented region derived from the input mask. These objects are structured for further analysis or manipulation in image processing workflows.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[int, List[core.SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
