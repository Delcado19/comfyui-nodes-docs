# Documentation
- Class name: ImageConcatMulti
- Category: KJNodes/image
- Output node: False
- Repo Ref: https://github.com/kijai/ComfyUI-KJNodes

Creates an image from multiple images or masks.
Set the input count and click 'Update inputs' to add more slots.
The output type follows image_1; other inputs are converted to match.

# Input types
## Required
- inputcount
    - The inputcount input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- image_1
    - The image_1 input is used by this node during execution.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object
- direction
    - The direction input is used by this node during execution.
    - Comfy dtype: COMBO
    - Python dtype: object
- match_image_size
    - The match_image_size input is used by this node during execution.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- image_2
    - The image_2 input is used by this node during execution.
    - Comfy dtype: IMAGE,MASK
    - Python dtype: object

# Output types
- output
    - The output output is produced by this node.
    - Comfy dtype: COMFY_MATCHTYPE_V3
    - Python dtype: object

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/kijai/ComfyUI-KJNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
