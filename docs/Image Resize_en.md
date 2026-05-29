# Documentation
- Class name: WAS_Image_Rescale
- Category: WAS Suite/Image/Transform
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Rescale node is designed to transform images by scaling them according to a specified factor or resizing them to a set width and height. It offers flexibility in selecting the scaling mode, whether simple rescaling or resizing with supersampling for improved quality. The node supports various resampling filters to meet different image quality requirements.

# Input types
## Required
- image
    - The input image is the core element of the transformation process. It determines the target of the scaling or resizing operation. The quality and dimensions of the input image directly affect the results produced by the node.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- mode
    - The mode parameter determines whether the image will be scaled by a factor or resized to specific dimensions. It is critical for setting the type of transformation the node will perform.
    - Comfy dtype: STRING
    - Python dtype: str
- supersample
    - When the supersample parameter is set to 'true', it enables a higher-quality resizing process by first scaling the image to a larger size before resizing it to the target dimensions.
    - Comfy dtype: STRING
    - Python dtype: str
- resampling
    - The resampling parameter selects the filter used for resizing the image. Different filters can produce varying results in terms of image quality and sharpness.
    - Comfy dtype: STRING
    - Python dtype: str
- rescale_factor
    - The rescale_factor defines the scaling factor for the image. It is a multiplier that determines the degree to which the image dimensions are adjusted.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resize_width
    - The resize_width sets the target width of the resized image. This is an important parameter when the mode is set to 'resize', determining the new width of the image.
    - Comfy dtype: INT
    - Python dtype: int
- resize_height
    - The resize_height sets the target height of the resized image. It works together with resize_width to determine the final dimensions of the image in 'resize' mode.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- scaled_image
    - The scaled_image is the output of the node, representing the transformed image after applying the scaling or resizing operation. It is important as it reflects the outcome of the node's intended functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
