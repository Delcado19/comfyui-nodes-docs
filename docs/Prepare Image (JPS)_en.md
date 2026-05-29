
# Documentation
- Class name: Prepare Image (JPS)
- Category: JPS Nodes/Image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Prepare Image node is designed to process and adjust images according to specified parameters, including resizing, cropping, padding, and applying various transformations such as interpolation and sharpening. The purpose of this node is to prepare images for further processing or analysis, ensuring they meet the required dimensions and quality standards.

# Input types
## Required
- image
    - The input image to be processed. This parameter is crucial as it serves as the basis for all subsequent adjustments and transformations.
    - Comfy dtype: IMAGE
    - Python dtype: Image
- target_w
    - The target width of the processed image. It determines the final width to which the image will be adjusted or modified.
    - Comfy dtype: INT
    - Python dtype: int
- target_h
    - The target height of the processed image. It determines the final height to which the image will be adjusted or modified.
    - Comfy dtype: INT
    - Python dtype: int
- crop_w_percent
    - The percentage of image width to retain after cropping. This parameter allows precise control over the width of the cropped area.
    - Comfy dtype: INT
    - Python dtype: int
- crop_h_percent
    - The percentage of image height to retain after cropping. This parameter allows precise control over the height of the cropped area.
    - Comfy dtype: INT
    - Python dtype: int
- offset_w
    - The horizontal offset applied to the image. This parameter can be used to shift the image horizontally before applying other transformations.
    - Comfy dtype: INT
    - Python dtype: int
- offset_h
    - The vertical offset applied to the image. This parameter can be used to shift the image vertically before applying other transformations.
    - Comfy dtype: INT
    - Python dtype: int
- interpolation
    - The interpolation method used when resizing the image. This parameter affects the quality of the resized image.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sharpening
    - The sharpening level applied to the image. This parameter enhances the details and clarity of the image.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- IMAGE
    - The resulting image after applying the specified adjustments and transformations.
    - Comfy dtype: IMAGE
    - Python dtype: Image


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
