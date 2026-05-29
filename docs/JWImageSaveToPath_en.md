
# Documentation
- Class name: JWImageSaveToPath
- Category: jamesWalker55
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The JWImageSaveToPath node is designed to save a single image to a specified path, with the option to embed additional metadata such as prompts or other PNG-specific information within the image file.

# Input types
## Required
- path
    - Specifies the file system path where the image will be saved. This path determines the location and filename of the output image.
    - Comfy dtype: STRING
    - Python dtype: str
- image
    - The image data to be saved. This tensor represents the image in a format that can be processed and saved to the specified path.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- overwrite
    - A flag indicating whether existing files at the specified path should be overwritten. If set to "true", the existing file will be replaced by the new image.
    - Comfy dtype: ['false', 'true']
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
