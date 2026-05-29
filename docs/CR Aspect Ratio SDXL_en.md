# Documentation
- Class name: CR_AspectRatio_SDXL
- Category: Comfyroll/Essential/Legacy
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_AspectRatio_SDXL node manages and adjusts image dimensions based on a specified aspect ratio. It allows selection of predefined aspect ratios or custom input, with options to swap dimensions and upscale images. The node ensures images are correctly formatted for various display purposes, enhancing workflow in media processing tasks.

# Input types
## Required
- width
    - The width parameter defines the horizontal dimension of the image. It is essential for setting the initial size and calculating the correct aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height parameter sets the vertical dimension of the image, working together with width to determine the overall image size.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The aspect_ratio parameter determines the relationship between image dimensions. It allows selection of common ratios or custom input to meet specific requirements.
    - Comfy dtype: COMBO['custom', '1:1 square 1024x1024', '3:4 portrait 896x1152', '5:8 portrait 832x1216', '9:16 portrait 768x1344', '9:21 portrait 640x1536', '4:3 landscape 1152x896', '3:2 landscape 1216x832', '16:9 landscape 1344x768', '21:9 landscape 1536x640']
    - Python dtype: str
## Optional
- swap_dimensions
    - The swap_dimensions parameter provides the option to swap width and height values, useful for scenarios requiring inverted image orientation.
    - Comfy dtype: COMBO['Off', 'On']
    - Python dtype: str
- upscale_factor1
    - The upscale_factor1 parameter controls the first level of image upscaling, allowing resizing without altering the aspect ratio.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_factor2
    - The upscale_factor2 parameter manages the second level of image upscaling, providing further control over the final image dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size parameter specifies how many images are processed simultaneously, which can optimize performance for batch image processing tasks.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The width output reflects the adjusted horizontal dimension of the image after applying the selected aspect ratio and any upscale factors.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output corresponds to the adjusted vertical dimension of the image, accounting for aspect ratio and upscaling settings.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor1
    - The upscale_factor1 output provides the upscale factor applied to the image width, affecting the final resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- upscale_factor2
    - The upscale_factor2 output indicates the secondary upscale factor applied to the image height, further refining the resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The batch_size output represents the number of images processed per cycle, impacting efficiency in large-scale image processing.
    - Comfy dtype: INT
    - Python dtype: int
- show_help
    - The show_help output provides a URL link to documentation for further assistance and information about the node's functionality.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
