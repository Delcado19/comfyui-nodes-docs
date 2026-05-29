# Documentation
- Class name: ImageMaskSwitch
- Category: ImpactPack/Util
- Output node: True
- Repo Ref: https://github.com/ltdrdata/ComfyUI-Impact-Pack.git

The ImageMaskSwitch node is designed to selectively route image and mask inputs based on a selection parameter. It facilitates choosing from multiple image-mask pairs for further processing or analysis, ensuring only the desired pair is passed to the workflow.

# Input types
## Required
- select
    - The 'select' parameter determines which image-mask pair to use. It is critical as it directly influences the node's output by selecting the appropriate pair based on its integer value.
    - Comfy dtype: INT
    - Python dtype: int
- images1
    - The 'images1' parameter represents the first set of images considered for the switch operation. When 'select' is set to 1, it plays a key role in the node's functionality, as it becomes the output image set.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
## Optional
- mask1_opt
    - The 'mask1_opt' parameter is an optional mask corresponding to 'images1'. It becomes relevant when 'select' is 1 and a mask for the images is desired in the output.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or torch.Tensor
- images2_opt
    - The 'images2_opt' parameter represents the second optional set of images for the switch operation. Used when 'select' is set to 2 and an alternative image set is needed as output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- mask2_opt
    - The 'mask2_opt' parameter is an optional mask corresponding to 'images2_opt'. Considered when 'select' is 2 and a mask alongside the images is required in the output.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or torch.Tensor
- images3_opt
    - The 'images3_opt' parameter represents the third optional set of images for the switch operation. Used when 'select' is set to 3 and a third image set is needed as output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- mask3_opt
    - The 'mask3_opt' parameter is an optional mask corresponding to 'images3_opt'. Used when 'select' is 3 and a mask alongside the images is required in the output.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or torch.Tensor
- images4_opt
    - The 'images4_opt' parameter represents the fourth optional set of images for the switch operation. Used when 'select' is set to 4 and a fourth image set is needed as output.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- mask4_opt
    - The 'mask4_opt' parameter is an optional mask corresponding to 'images4_opt'. Considered when 'select' is 4 and a mask for the images is desired in the output.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or torch.Tensor

# Output types
- IMAGE
    - The 'IMAGE' output represents the image set selected based on the 'select' input parameter. It is a key element of the node's functionality, as it determines the flow of visual data within the system.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image or torch.Tensor
- MASK
    - The 'MASK' output corresponds to the mask of the selected image set. It is important when analysis or processing alongside the images is required.
    - Comfy dtype: MASK
    - Python dtype: PIL.Image or torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/ltdrdata/ComfyUI-Impact-Pack)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
