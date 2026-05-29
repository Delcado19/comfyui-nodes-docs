
# Documentation
- Class name: Inference_Core_PixelPerfectResolution
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_PixelPerfectResolution node aims to calculate the optimal resolution for image generation tasks. It adjusts the image size based on the target dimensions and specified adjustment mode, ensuring pixel-perfect accuracy. This node focuses on achieving the highest fidelity visual output, customized according to the target resolution requirements.

# Input types
## Required
- original_image
    - The original image (as a numpy array) that serves as the basis for calculating the optimal resolution. This input is the starting point of the entire processing, determining the basic characteristics of the final output.
    - Comfy dtype: IMAGE
    - Python dtype: np.ndarray
- image_gen_width
    - The target width of the image, guiding the calculation process to achieve this dimension. It directly affects the horizontal size of the final output image and is one of the key parameters determining the visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- image_gen_height
    - The target height of the image, guiding the calculation process to achieve this dimension. It directly affects the vertical size of the final output image, and together with the width, determines the overall aspect ratio and resolution.
    - Comfy dtype: INT
    - Python dtype: int
- resize_mode
    - The mode for resizing (such as internal fit, external fit, etc.), used to determine how to scale the image to meet the target dimensions. This parameter determines how the image maintains its original characteristics during the adjustment process, having a significant impact on the final visual effect.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: ResizeMode

# Output types
- RESOLUTION (INT)
    - The calculated optimal dimensions of the image (as integers), ensuring pixel-perfect resolution. This output represents the optimized image size that can meet the target resolution requirements to the greatest extent while preserving the original image characteristics.
    - Comfy dtype: INT
    - Python dtype: int


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
