
# Documentation
- Class name: AV_ControlNetPreprocessor
- Category: Art Venture/Loaders
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AV_ControlNetPreprocessor node is designed to prepare images for further processing or analysis within the ControlNet framework. It allows various preprocessing techniques to be applied to images, including resolution adjustment and selection of specific preprocessors to optimize them to meet ControlNet requirements.

# Input types
## Required
- image
    - The input image that needs preprocessing. This is the main data for preprocessing operations.
    - Comfy dtype: IMAGE
    - Python dtype: ImageType
- preprocessor
    - Specifies the preprocessing technique to apply to the input image. It can be one of several predefined preprocessors or a custom preprocessor, affecting the preprocessing result.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
- sd_version
    - Indicates the specific version of Stable Diffusion to use, affecting how preprocessing aligns with the model's requirements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str
## Optional
- resolution
    - The desired resolution of the output image, which can be adjusted according to specific quality or performance standards.
    - Comfy dtype: INT
    - Python dtype: int
- preprocessor_override
    - Allows overriding the initially selected preprocessor with an alternative preprocessor, providing flexibility in preprocessing selection.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- IMAGE
    - The preprocessed image, ready for further processing or analysis within the ControlNet framework.
    - Comfy dtype: IMAGE
    - Python dtype: ImageType
- CNET_NAME
    - The name of the ControlNet used or identified during preprocessing, providing context for subsequent processing steps.
    - Comfy dtype: STRING
    - Python dtype: str


## Usage tips
- Infra type: `CPU`
- Common nodes:
    - [CR Multi-ControlNet Stack](../../ComfyUI_Comfyroll_CustomNodes/Nodes/CR Multi-ControlNet Stack.md)

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
