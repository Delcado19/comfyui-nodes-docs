# Documentation
- Class name: Image Saver (From Pipe)
- Category: ImageSaver/Pipe
- Output node: True
- Repo Ref: https://github.com/Comfy-Org/ComfyUI

Save images using settings and metadata unpacked from an Image Saver Pipe.

# Input types
## Required
- pipe
    - The pipe input is used by this node during execution.
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object
- images
    - image(s) to save
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- show_preview
    - if True, displays saved images in the UI preview
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Hidden
- prompt
    - The prompt input is used by this node during execution.
    - Comfy dtype: PROMPT
    - Python dtype: object
- extra_pnginfo
    - The extra_pnginfo input is used by this node during execution.
    - Comfy dtype: EXTRA_PNGINFO
    - Python dtype: object

# Output types
- pipe
    - The pass-through Image Saver Pipe
    - Comfy dtype: IMAGESAVER_PIPE
    - Python dtype: object
- hashes
    - Comma-separated list of the hashes to chain with other Image Saver additional_hashes
    - Comfy dtype: STRING
    - Python dtype: str
- a1111_params
    - Written parameters to the image metadata
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: unknown

# Source code
[View source repository](https://github.com/Comfy-Org/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
