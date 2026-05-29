# Documentation
- Class name: Manga2Anime_LineArt_Preprocessor_Provider_for_SEGS
- Category: InspirePack/SEGS/ControlNet
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Inspire-Pack.git

This node serves as a Manga2Anime line art preprocessor provider, specifically designed for segmenting and enhancing line art from manga-style images. It encapsulates the functionality to convert images for further processing and stylization, focusing on maintaining the integrity and visual appeal of the original artwork.

# Input types
## Required
- image
    - The input image to undergo line art preprocessing. This parameter is critical as it is the primary data source for the node's operation. The node processes the image to enhance and clarify line art features.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray
- mask
    - An optional mask image that can guide the preprocessing of the line art. The mask can influence the node's execution by focusing processing on specific regions of the image.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Output types
- SEGS_PREPROCESSOR
    - The output is the preprocessed line art image, enhanced for segmentation purposes. This output is important as it lays the foundation for subsequent segmentation tasks in the workflow.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or numpy.ndarray

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Inspire-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
