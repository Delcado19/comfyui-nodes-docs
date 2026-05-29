# Documentation
- Class name: SEGSDetailer
- Category: ImpactPack/Detailer
- Output node: False
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The SEGSDetailer node is designed to enhance image details based on segmentation information. It improves visual quality by scaling and processing image segments, especially suitable for application scenarios requiring fine details. This node utilizes advanced deep learning models to achieve this enhancement, resulting in more refined and detailed output images.

# Input types
## Required
- image
    - Input image, which will be processed by the SEGSDetailer node. It serves as the main data source for the detail enhancement process and is crucial for achieving the desired results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- segs
    - Segmentation data that provides image structure information. This input is crucial for the node to understand which parts of the image need to be focused on for detail enhancement.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
## Optional
- guide_size
    - Guide size parameter determines the scaling factor for the detail enhancement process. It affects how much image segments are enlarged before enhancement, thereby influencing the detail level of the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- steps
    - Number of steps to be performed in the detail enhancement process. More steps usually result in more refined output, but may also increase computation time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- segs
    - Output segmentation data after enhancing details based on the input image and segmentation information.
    - Comfy dtype: SEGS
    - Python dtype: List[SEG]
- cnet_images
    - A list of control network images generated during the detail enhancement process, which can be used for further analysis or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
