
# Documentation
- Class name: ttN imageREMBG
- Category: ttN/image
- Output node: True
- Repo Ref: https://github.com/ttN-dev/ComfyUI_tinyterraNodes

The ttN_imageREMBG node aims to remove the background from images, leveraging the capabilities of the REMBG library. It abstracts the complexity of background removal into a simple interface, making it easy to integrate into image processing workflows.

# Input types
## Required
- image
    - The input image from which the background needs to be removed. This is the primary input for the background removal process.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- image_output
    - Specifies the output mode for the processed image, including options such as "Hide", "Preview", "Save", and "Hide/Save", allowing flexible handling of the output image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: Enum['Hide', 'Preview', 'Save', 'Hide/Save']
- save_prefix
    - The filename prefix used when saving the processed image, providing a simple way to organize and identify output files.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The processed image with the background removed.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- mask
    - A mask indicating the regions where the background was removed from the image.
    - Comfy dtype: MASK
    - Python dtype: Tensor


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/ttN-dev/ComfyUI_tinyterraNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
