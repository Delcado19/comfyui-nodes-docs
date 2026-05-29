# Documentation
- Class name: MakeTileSEGS
- Category: ImpactPack/__for_testing
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

MakeTileSEGS node is designed to process and split images into tiles according to specified parameters. It intelligently handles overlapping regions and applies filters to include or exclude certain segments, ensuring a seamless segmentation process that meets the needs of advanced image analysis.

# Input types
## Required
- images
    - The input image parameter is essential for the node's operation, as it serves as the raw data for segmentation. It directly affects the node's execution and the quality of the resulting segments.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bbox_size
    - The bbox_size parameter defines the bounding box size for image segmentation, which is crucial for determining the dimensions of each tile. It plays an important role in the segmentation process and final output.
    - Comfy dtype: INT
    - Python dtype: int
- crop_factor
    - The crop_factor parameter is used to adjust the size of the crop region relative to the bounding box, affecting the detail captured in each segment. It is an important parameter for fine-tuning the segmentation output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- min_overlap
    - The min_overlap parameter specifies the minimum overlap between adjacent tiles, ensuring smooth transitions between segments. This is critical for maintaining continuity of the segmented area.
    - Comfy dtype: INT
    - Python dtype: int
- filter_segs_dilation
    - The filter_segs_dilation parameter controls the dilation of segmentation masks, allowing adjustment of the size and shape of segmented regions. It is key for refining segmentation details.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- mask_irregularity
    - The mask_irregularity parameter introduces irregularity into segmentation masks, which is useful for certain applications requiring non-uniform segmentation. It adds variability to the segmentation process.
    - Comfy dtype: FLOAT
    - Python dtype: float
- irregular_mask_mode
    - The irregular_mask_mode parameter determines the method used to generate irregularity in masks, providing different quality and speed levels for the mask generation process.
    - Comfy dtype: COMBO['Reuse fast', 'Reuse quality', 'All random fast', 'All random quality']
    - Python dtype: str
- filter_in_segs_opt
    - The filter_in_segs_opt parameter allows including specific segments in the segmentation process, providing a way to focus on regions of interest in the image.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- filter_out_segs_opt
    - The filter_out_segs_opt parameter makes it possible to exclude certain segments from the segmentation process, allowing removal of unwanted regions from the final segmentation.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]

# Output types
- result
    - The result parameter encapsulates the output of the segmentation process, providing a detailed and structured representation of the segmented image tiles.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[int, List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
