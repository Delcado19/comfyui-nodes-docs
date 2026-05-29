# Documentation
- Class name: CR_ImagePipeIn
- Category: Comfyroll/Pipe/Image
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePipeIn node facilitates the process of feeding images into a data pipeline. It plays a key role in preparing image data for subsequent processing stages, ensuring images are correctly formatted and scaled according to specified parameters.

# Input types
## Optional
- image
- Image parameters are critical to the node because they define the input images to be processed. They serve as the primary data source for node operation and affect how later steps are executed.
    - Comfy dtype: IMAGE
    - Python dtype: Union[str, bytes, Image.Image]
- width
- The width parameter specifies the desired width of the processed image. It is important for controlling output image size and maintaining aspect ratio when height is also specified.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The height parameter sets the desired height of the processed image. It works with the width parameter to determine the final image dimensions.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
- The upscale_factor parameter is used to increase image resolution. During upscaling, it is crucial for enhancing image quality without losing important details.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- pipe
- The pipe output is a structured data type that encapsulates the processed image and its related parameters. It serves as the channel for passing image data to the next stage of the pipeline.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[Any, int, int, float]
- show_help
- The show_help output provides a URL link to documentation for further assistance. It is especially useful for users seeking more information about the node's functionality and usage.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
