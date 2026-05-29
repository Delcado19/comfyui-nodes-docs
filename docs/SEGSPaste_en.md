# Documentation
- Class name: SEGSPaste
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSPaste node is designed to integrate segments from a segmentation map into a given image, enhancing the visual details of the image. It aligns and blends the segments with specified feather and alpha values, ensuring a seamless and detailed result.

# Input types
## Required
- image
    - Input image, onto which the segments will be pasted. It serves as the base for the entire operation, and the segments will be aligned and blended with this image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Contains segmentation data of the segments to be pasted onto the image. Each segment is crucial for the detail enhancement process and contributes to the final visual output.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- feather
    - The feather parameter controls the softness of the edges when pasting segments. It is an important factor for achieving a natural blend between the segments and the image.
    - Comfy dtype: INT
    - Python dtype: int
- alpha
    - The alpha parameter adjusts the opacity of the pasted segments, allowing control over the visibility and blend intensity with the underlying image.
    - Comfy dtype: INT
    - Python dtype: int
- ref_image_opt
    - An optional reference image that provides additional context for the pasted segments. It can be used to match the lighting or color of the segments with the reference image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- result
    - Output is the enhanced image, in which the segments from the segmentation map are seamlessly integrated. It represents the final visual result of the detail enhancement process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
