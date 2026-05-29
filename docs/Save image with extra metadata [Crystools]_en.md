
# Documentation
- Class name: Save image with extra metadata [Crystools]
- Category: crystools 🪛/Image
- Output node: True
- Repo Ref: https://github.com/crystian/ComfyUI-Crystools

This node is designed to save images while attaching additional metadata, which can include workflow details and user-provided custom metadata. It extends the functionality of the standard image saving process by allowing extra information to be included directly in the image file, thereby enhancing the traceability and context of each saved image.

# Input types
## Required
- image
    - The image to be saved. This parameter is crucial because it determines the content that will be stored and subsequently used for further processing or reference.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- filename_prefix
    - The filename prefix used when saving the image. This helps to organize and easily identify images, especially when dealing with multiple images or batches.
    - Comfy dtype: STRING
    - Python dtype: str
- with_workflow
    - A flag indicating whether workflow details should be included in the image's metadata. This is useful for tracking the processing history or the steps involved in generating the image.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
## Optional
- metadata_extra
    - Additional metadata provided in JSON format, which will be included with the image. This provides flexibility in embedding various types of information in the image metadata.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- Metadata RAW
    - The result of the image saving process, including the path of the saved image and any related metadata.
    - Comfy dtype: METADATA_RAW
    - Python dtype: dict


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/crystian/ComfyUI-Crystools)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
