# Documentation
- Class name: WAS_Image_Paste_Crop_Location
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Paste_Crop_Location node is designed to manipulate and composite images by pasting one image onto another at a specified location, then cropping the result. It allows fine-tuning the blend factor and sharpness of the pasted image for seamless integration into the target image.

# Input types
## Required
- image
    - The main image onto which crop_image will be pasted. It serves as the canvas for the operation.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- crop_image
    - The image to be pasted onto the main image. It is the primary object of the paste and crop process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- top
    - The vertical position at which the pasted image is placed on the main image. It is critical for determining the exact placement of the pasted image.
    - Comfy dtype: INT
    - Python dtype: int
- left
    - The horizontal position at which the pasted image is placed on the main image. It works together with the top parameter to set the paste location.
    - Comfy dtype: INT
    - Python dtype: int
- right
    - The right boundary of the crop operation. It defines the width of the crop area together with the left parameter.
    - Comfy dtype: INT
    - Python dtype: int
- bottom
    - The bottom boundary of the crop operation. It defines the height of the crop area together with the top parameter.
    - Comfy dtype: INT
    - Python dtype: int
- crop_blending
    - The blend factor of the pasted image. It controls how much the pasted image blends with the main image, affecting the final visual appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_sharpening
    - The sharpness level of the pasted image. Increasing this value will enhance the sharpness of the pasted image, making it more prominent.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The final image after the paste and crop process, including the main image with the pasted and cropped image integrated.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- result_mask
    - The mask image produced by the blending process, which can be used for further image operations or as a transparency mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
