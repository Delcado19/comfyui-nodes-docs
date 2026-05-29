
# Documentation
- Class name: ImageFilterDetail
- Category: image/filter
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The ImageFilterDetail node applies detail enhancement filters to a set of images to improve visual clarity and definition. This processing effectively enhances image details, making images appear sharper and more refined.

# Input types
## Required
- images
    - This is the collection of images to be processed. This input is essential for applying the detail enhancement filter to each image in the collection. Through this input, users can batch process multiple images, improving work efficiency.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The output is the detail-enhanced images. These images have higher clarity and richer details, with significantly improved visual effects.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
