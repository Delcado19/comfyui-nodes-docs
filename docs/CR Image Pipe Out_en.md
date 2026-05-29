# Documentation
- Class name: CR_ImagePipeOut
- Category: Comfyroll/Pipe/Image
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImagePipeOut node facilitates the output of image data in a pipeline architecture. It plays a key role in the final stage of an image processing workflow, ensuring that image data exits the system correctly. The node excels at transitioning image data from the processing pipeline to the output interface, providing a seamless integration point for image data propagation.

# Input types
## Required
- pipe
    - The `pipe` parameter is critical for the CR_ImagePipeOut node because it represents the pipeline carrying the image data to be output. Through this parameter, the node receives image information and then processes it for output.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]

# Output types
- pipe
    - The `pipe` output parameter indicates the continuation of the pipeline after image data has been processed and is ready for output. It maintains data flow integrity and ensures downstream processes can proceed smoothly.
    - Comfy dtype: PIPE_LINE
    - Python dtype: Tuple[str, int, int, float]
- image
    - The `image` output parameter is the processed image emitted by the CR_ImagePipeOut node. It represents the result of the image processing pipeline and is the final product presented to the end user or subsequent systems.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- width
    - The `width` output parameter provides the width of the output image in pixels. This information is essential for understanding the image size and for any further image manipulation or display purposes.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The `height` output parameter indicates the height of the output image in pixels. Together with the width, it defines the overall image dimensions, which is crucial for correct image presentation.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The `upscale_factor` output parameter represents the scaling factor applied to the image during processing. It is an important metric for assessing image quality and can influence subsequent image processing decisions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The `show_help` output parameter provides a URL link to documentation or a help page associated with the CR_ImagePipeOut node. It serves as a quick reference for users seeking more information or assistance with using the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
