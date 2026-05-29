# Documentation
- Class name: DefaultImageForSEGS
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The 'doit' method of the DefaultImageForSEGS node aims to process segmentation (SEGS) by scaling them to match the dimensions of a given image. It also provides an option to override existing cropped images with new cropped images based on the segmentation's cropped regions. This method is essential for preparing segmentation data for further analysis or visualization.

# Input types
## Required
- segs
    - 'segs' parameter is the collection of segmentation objects that the node will process. It is crucial for the node's operation because it determines the data that will be scaled and potentially have its cropped images overwritten.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- image
    - 'image' parameter represents the reference image to which the segmentation will be scaled. It is a key input because it determines the dimensions that the segmentation data must match for downstream processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- override
    - 'override' parameter is a boolean flag that, when set to True, instructs the node to generate new cropped images for the segmentation, ignoring any existing cropped images. This is useful for refreshing cropped images based on updated segmentation data.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- segs
    - The output 'segs' contains the processed segmentation objects. Each object has been scaled to match the dimensions of the input image, and possibly had its cropped image overwritten if the 'override' parameter is set to True.
    - Comfy dtype: SEGS
    - Python dtype: Tuple[List[SEG], List[SEG]]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
