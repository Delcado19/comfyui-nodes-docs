# Documentation
- Class name: ImageRewardFilter
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Score batch images and output the top-ranked ones. This node uses [ImageReward](https://github.com/THUDM/ImageReward) for image scoring, thanks to the original author.

# Input types

## Required

- images
    - Image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- prompt
    - Optional input. Enter the prompt here to use as a basis for determining its alignment with the image.
    - Comfy dtype: STRING
    - Python dtype: str

- output_num
    - Number of output images. This value should be less than the image batch size.
    - Comfy dtype: INT
    - Python dtype: int

# Output types

- images
    - Batch images output in descending order of score.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- obsolete_images
    - Eliminated images. Also output in descending order of score.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
