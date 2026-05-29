# Documentation
- Class name: CR_ImagePipeEdit
- Category: Comfyroll/Pipe/Image
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePipeEdit node is designed to facilitate editing and enhancing image data within a pipeline structure. It allows users to modify image attributes such as width, height, and upscale factor, ensuring the output image meets desired specifications. This node plays a key role in image processing workflows, enabling fine-tuning of visual content without compromising the integrity of the overall pipeline.

# Input types
## Required
- pipe
    - The 'pipe' parameter is required because it represents the image pipeline to be edited by the node. This is a critical input that determines the starting point for all subsequent image modifications and processing.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]
## Optional
- image
    - The optional 'image' parameter allows users to replace the current image in the pipeline. It is particularly useful when specific image content is needed for further processing or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: str
- width
    - The 'width' parameter is used to specify the new width of the image. It is an optional input that can be adjusted based on the requirements of different display or output mediums.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter determines the new height of the image. Similar to width, it is optional and can be set to achieve the desired aspect ratio or accommodate specific display requirements.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The 'upscale_factor' parameter is optional and defines the scaling factor for image upscaling. It is particularly important for enhancing image quality without compromising the original resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
    - The 'pipe' output represents the modified image pipeline, including the updated image and its attributes such as width, height, and upscale factor.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]
- show_help
    - The 'show_help' output provides a URL linking to the documentation page for further assistance or information regarding node usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
