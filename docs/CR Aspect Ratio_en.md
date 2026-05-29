# Documentation
- Class name: CR_AspectRatio
- Category: Comfyroll/Aspect Ratio
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

The CR_AspectRatio node is designed to manipulate and define the aspect ratio of images. It offers various preset aspect ratios and allows custom dimensions. The node's functionality enables users to select an aspect ratio, choose whether to swap dimensions, and apply a scaling factor to achieve the desired output size. It also supports batch processing for efficiency.

# Input types
## Required
- width
    - The "width" parameter specifies the desired width of the image. It plays a key role in determining the aspect ratio and final size of the image.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The "height" parameter defines the desired height of the image. It works together with the "width" parameter to establish the image's aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- aspect_ratio
    - The "aspect_ratio" parameter allows the user to select from a predefined list of aspect ratios or input a custom aspect ratio. It is central to the node's operation as it determines the proportions of the output image.
    - Comfy dtype: STRING
    - Python dtype: str
- swap_dimensions
    - The "swap_dimensions" parameter provides an option to swap the width and height values. This is useful in certain image manipulations where the orientation of the image matters.
    - Comfy dtype: STRING
    - Python dtype: str
- upscale_factor
    - The "upscale_factor" parameter is used to increase the size of the image. It multiplies the current dimensions by the specified factor, increasing resolution.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The "prescale_factor" parameter is applied to adjust the initial size before any other transformations. It can be used to optimize processing or achieve specific design requirements.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The "batch_size" parameter determines the number of images processed in a single operation. It is crucial for managing computational resources and improving workflow efficiency.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- width
    - The "width" output provides the final width of the image after all transformations are applied.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The "height" output gives the final height of the processed image.
    - Comfy dtype: INT
    - Python dtype: int
- upscale_factor
    - The "upscale_factor" output reflects the scaling factor used to enlarge the image.
    - Comfy dtype: FLOAT
    - Python dtype: float
- prescale_factor
    - The "prescale_factor" output indicates the initial scaling factor applied to the image dimensions.
    - Comfy dtype: FLOAT
    - Python dtype: float
- batch_size
    - The "batch_size" output represents the number of images processed in the operation.
    - Comfy dtype: INT
    - Python dtype: int
- empty_latent
    - The "empty_latent" output is a placeholder for a latent representation that may be used in subsequent image processing tasks.
    - Comfy dtype: LATENT
    - Python dtype: Dict[str, torch.Tensor]
- show_help
    - The "show_help" output provides a URL link to documentation for further guidance and help.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
