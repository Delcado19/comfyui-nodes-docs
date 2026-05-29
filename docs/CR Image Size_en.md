# Documentation
- Class name: CR_ImageSize
- Category: Comfyroll/Essential/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_ImageSize node is designed to adjust the dimensions of an image. It provides the ability to specify the width and height of an image and allows for upscaling through an adjustable factor. This node is essential in image processing workflows where resizing is required, ensuring that images meet the necessary dimensions for further processing or display.

# Input types
## Required
- width
    - The 'width' parameter is crucial for defining the desired width of the image. It plays a key role in determining the final dimensions of the image after processing. The 'width' setting directly affects the aspect ratio and overall appearance of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter is used to set the vertical dimension of the image. It is a critical factor in controlling the output size of the image, ensuring it meets specific requirements or constraints. The 'height' value is important for maintaining the integrity of the image content.
    - Comfy dtype: INT
    - Python dtype: int
## Optional
- upscale_factor
    - The 'upscale_factor' parameter is optional and is used to increase the size of the image. It is a multiplier that can proportionally enlarge the original dimensions, allowing for higher resolution output. This factor is particularly useful when enhancing image detail or preparing images for larger displays.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- Width
    - The 'Width' output reflects the processed width of the image after applying the node's resizing functionality. It is important for downstream processes that rely on the exact dimensions of the image.
    - Comfy dtype: INT
    - Python dtype: int
- Height
    - The 'Height' output provides the processed height of the image, which is crucial for maintaining the intended aspect ratio and ensuring the image fits within the specified display area.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The 'upscale_factor' output is the scaling factor applied to the image. It indicates how much the original dimensions were increased, which may be important for quality assessment or further image manipulation.
    - Comfy dtype: FLOAT
    - Python dtype: float
- show_help
    - The 'show_help' output is a URL link to the node's usage documentation page. It is particularly useful for users seeking more information on how to effectively use the node.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
