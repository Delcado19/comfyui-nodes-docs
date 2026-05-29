# Documentation
- Class name: ImageHub
- Category: 😺dzNodes/LayerUtility
- Output node: False
- Repo Ref: https://github.com/chflame163/ComfyUI_LayerStyle

Switch between multiple input images and masks to output one group, supporting 9 groups of inputs. All input items are optional. If a group has only image or only mask, the missing item will output as None.

# Input types

## Required

- output
    - Output.
    - Comfy dtype: INT
    - Python dtype: int

- random_output
    - Random output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

## Optional

- input1_image
    - Input 1 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input1_mask
    - Input 1 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input2_image
    - Input 2 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input2_mask
    - Input 2 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input3_image
    - Input 3 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input3_mask
    - Input 3 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input4_image
    - Input 4 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input4_mask
    - Input 4 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input5_image
    - Input 5 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input5_mask
    - Input 5 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input6_image
    - Input 6 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input6_mask
    - Input 6 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input7_image
    - Input 7 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input7_mask
    - Input 7 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input8_image
    - Input 8 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input8_mask
    - Input 8 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

- input9_image
    - Input 9 image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- input9_mask
    - Input 9 mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Output types

- image
    - Output image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

- mask
    - Output mask.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/chflame163/ComfyUI_LayerStyle)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
