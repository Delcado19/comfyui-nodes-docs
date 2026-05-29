# Documentation
- Class name: CR_UpscaleImage
- Category: Comfyroll/Upscale
- Output node: False
- Repo Ref: https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes

CR_UpscaleImage is a node designed to increase the resolution of an input image using a selected upscaling model. It provides a range of parameters to control the scaling process, ensuring that the high-quality output image meets the user's requirements for image resolution and detail.

# Input types
## Required
- image
    - Input image is the primary data required by the CR_UpscaleImage node. It is the source material that will be processed and upscaled to a higher resolution.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- upscale_model
    - Upscale model parameter determines which pre-trained model will be used to upscale the image. This choice significantly affects the quality and style of the upscaled output.
    - Comfy dtype: COMBO[folder_paths.get_filename_list('upscale_models')]
    - Python dtype: str
- mode
    - Mode parameter determines whether the image will be rescaled or resized. This decision affects the scaling technique and the final dimensions of the image.
    - Comfy dtype: COMBO[['rescale', 'resize']]
    - Python dtype: str
## Optional
- rescale_factor
    - Rescale factor is a multiplier applied to the original dimensions of the image to determine the new size. This is a key parameter for controlling the degree of upscaling.
    - Comfy dtype: FLOAT
    - Python dtype: float
- resize_width
    - Resize width parameter specifies the new width of the image after resizing. This is particularly important when the mode is set to 'resize'.
    - Comfy dtype: INT
    - Python dtype: int
- resampling_method
    - Resampling method is used during image processing to determine the algorithm for image interpolation. It affects the smoothness and sharpness of the upscaled image.
    - Comfy dtype: COMBO[['lanczos', 'nearest', 'bilinear', 'bicubic']]
    - Python dtype: str
- supersample
    - Supersample parameter indicates whether the image should first be oversampled before resizing. This can improve the quality of the final image.
    - Comfy dtype: COMBO[['true', 'false']]
    - Python dtype: str
- rounding_modulus
    - Rounding modulus is used during upscaling to adjust the dimensions of the image so that they are divisible by a specific number, often enhancing compatibility of the final result with certain display standards.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - Upscaled image is the main output of the CR_UpscaleImage node. It represents the input image processed and upscaled according to the specified parameters.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- show_help
    - show_help output provides a URL link to documentation for further help or information about the node's operation.
    - Comfy dtype: STRING
    - Python dtype: str

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/RockOfFire/ComfyUI_Comfyroll_CustomNodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
