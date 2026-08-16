# Documentation
- Class name: iToolsLoadImages
- Category: iTools
- Output node: False
- Repo Ref: https://github.com/MohammadAboulEla/ComfyUI-iTools

Will return list of images from a given directory with a given limit, for example if the limit is 4 it will return first 4 images in that directory. it will also return the list of these images names.

# Input types
## Required
- images_directory
    - The images_directory input is used by this node during execution.
    - Comfy dtype: STRING
    - Python dtype: str
- start_index
    - The start_index input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- load_limit
    - The load_limit input is used by this node during execution.
    - Comfy dtype: INT
    - Python dtype: int
- output_mode
    - The output_mode input is used by this node during execution.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- images
    - The images output is produced by this node.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- images names
    - The images names output is produced by this node.
    - Comfy dtype: STRING
    - Python dtype: str
- count
    - The count output is produced by this node.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/MohammadAboulEla/ComfyUI-iTools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
