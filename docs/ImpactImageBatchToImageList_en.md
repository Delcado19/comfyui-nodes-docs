# Documentation
- Class name: ImageBatchToImageList
- Category: ImpactPack/Util
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImageBatchToImageList node converts a batch of images into a list of individual images. As a utility in the ImpactPack category, it facilitates the transition from batch processing to per-image processing, which is essential for downstream tasks that require image-by-image operations.

# Input types
## Required
- image
    - The 'image' parameter is the input image batch to process. It is critical because it determines what will be converted into a list of individual images. The node's functionality directly depends on the quality and format of the input images.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- images
    - The 'images' output is a list of individual images derived from the input batch. Each image in the list corresponds to one element from the original batch, suitable for applications requiring separate image operations or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
