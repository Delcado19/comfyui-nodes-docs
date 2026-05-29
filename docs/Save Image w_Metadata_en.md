
# Documentation
- Class name: Save Image w_Metadata
- Category: ImageSaverTools
- Output node: True
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Save Image w/Metadata node is dedicated to saving images with additional metadata, enhancing traceability and contextual information of generated images. It supports multiple image formats and can embed custom metadata (such as generation parameters and prompts) directly into the image file.

# Input types
## Required
- images
- The image to be saved, possibly containing additional contextual metadata.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- filename
- The base filename for the saved image, which may include dynamic naming based on other parameters.
    - Comfy dtype: STRING
    - Python dtype: str
- path
- The directory path where the image will be saved.
    - Comfy dtype: STRING
    - Python dtype: str
- extension
- The file format extension for the saved image, supporting PNG, JPEG, WEBP, and other formats.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- steps
- The number of steps involved in the image generation process, which may be included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- cfg
- The CFG (classifier-free guidance) scale used during image generation, optionally included in the metadata.
    - Comfy dtype: FLOAT
    - Python dtype: float
- modelname
- The model name used to generate the image, which can be included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sampler_name
- The sampler name used during generation, optionally included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- scheduler
- The scheduler used during image generation, which can be included in the metadata.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

## Optional
- positive
- Positive prompts or keywords that influence image generation, optionally included in the metadata.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
- Negative prompts or keywords to avoid during generation, optionally included in the metadata.
    - Comfy dtype: STRING
    - Python dtype: str
- seed_value
- The seed value used for random number generation during image creation, optionally included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- width
    - The width of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height of the generated image.
    - Comfy dtype: INT
    - Python dtype: int
- lossless_webp
- When using WEBP format, a flag indicating whether to save the image in lossless mode.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool
- quality_jpeg_or_webp
- Quality setting for JPEG or WEBP images, affecting file size and image clarity.
    - Comfy dtype: INT
    - Python dtype: int
- counter
- A counter usable for image naming or sorting, which may be included in the metadata.
    - Comfy dtype: INT
    - Python dtype: int
- time_format
- A timestamp format that can be included in the filename or metadata, providing temporal context for image generation.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
This node has no output types.


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
