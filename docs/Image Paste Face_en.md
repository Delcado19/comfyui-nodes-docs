# Documentation
- Class name: WAS_Image_Paste_Face_Crop
- Category: WAS Suite/Image/Process
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

The WAS_Image_Paste_Face_Crop node is designed to integrate cropped face images into a larger image, enhancing the visual appeal and consistency of the final output. It employs advanced blending techniques to ensure seamless integration between images, with adjustable blending and sharpening parameters for optimal results.

# Input types
## Required
- image
    - The main image into which the face image will be pasted. This parameter is critical as it defines the canvas for the operation and affects the final composition.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- crop_image
    - The face image to be pasted onto the main image. The quality and resolution of this image directly impact the final result.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
## Optional
- crop_data
    - Data defining the crop region of the face image, including size and position. This parameter is essential for determining the placement of the face image within the main image.
    - Comfy dtype: CROP_DATA
    - Python dtype: Tuple[int, Tuple[int, int, int, int]]
- crop_blending
    - The blending factor when pasting the face image onto the main image. It controls the transition between images for a more natural appearance.
    - Comfy dtype: FLOAT
    - Python dtype: float
- crop_sharpening
    - The level of image sharpening to apply to the face image before pasting. Higher values result in a sharper, more defined face image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGE
    - The final image with the face image pasted onto the main image, showcasing the result of the blending and sharpening process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- MASK_IMAGE
    - A mask image representing transparency and areas affected by the blending process, suitable for further image manipulation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
