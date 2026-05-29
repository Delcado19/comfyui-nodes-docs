# Documentation
- Class name: MiDaS_Background_Foreground_Removal
- Category: WAS Suite/Image/AI
- Output node: False
- Repo Ref: https://github.com/WASasquatch/was-node-suite-comfyui

This node uses the MiDaS model to estimate depth from images and removes background or foreground based on user input, enhancing visual clarity and focus of the image.

# Input types
## Required
- image
    - Source image, from which depth is estimated and background or foreground is removed.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- midas_model
    - Specifies the size of the MiDaS model for depth estimation; larger models typically provide more accurate results but require more computational resources.
    - Comfy dtype: COMBO[ ['DPT_Large', 'DPT_Hybrid', 'DPT_Small' ]]
    - Python dtype: str
- remove
    - Indicates whether to remove background or foreground from the image, affecting the composition of the output.
    - Comfy dtype: COMBO[ ['background', 'foreground' ]]
    - Python dtype: str
## Optional
- use_cpu
    - Determines whether to use CPU for processing. Offloading to GPU is usually faster but requires compatible hardware.
    - Comfy dtype: COMBO[ ['false', 'true' ]]
    - Python dtype: str
- threshold
    - Applies thresholding to the depth map, which can refine the separation of the removed element from the rest of the image.
    - Comfy dtype: COMBO[ ['false', 'true' ]]
    - Python dtype: str
- threshold_low
    - Sets the lower limit of the depth value threshold range, affecting segmentation precision.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_mid
    - Defines the midpoint of the threshold range, further adjusting the transition between retained and removed image parts.
    - Comfy dtype: FLOAT
    - Python dtype: float
- threshold_high
    - Establishes the upper limit of the threshold range, which can affect the processing of the deepest parts of the image during removal.
    - Comfy dtype: FLOAT
    - Python dtype: float
- smoothing
    - Controls the amount of smoothing applied to the depth map, which helps reduce noise and artifacts in the final output.
    - Comfy dtype: FLOAT
    - Python dtype: float
- background_red
    - Sets the red component of the background color used to fill removed areas, affecting the visual appearance of the resulting image.
    - Comfy dtype: INT
    - Python dtype: int
- background_green
    - Determines the green component of the background color, contributing to the overall color scheme of the removed element area.
    - Comfy dtype: INT
    - Python dtype: int
- background_blue
    - Specifies the blue component of the background color, used to achieve the desired color balance in the edited image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- result_image
    - The processed image with the specified background or foreground elements removed, ready for further use or analysis.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image
- depth_map
    - The depth map derived from the input image, visually representing estimated distances in the scene and used internally for the removal process.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/WASasquatch/was-node-suite-comfyui)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
