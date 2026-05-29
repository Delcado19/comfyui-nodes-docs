
# Documentation
- Class name: Inference_Core_HintImageEnchance
- Category: ControlNet Preprocessors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_HintImageEnchance node is designed to preprocess hint images for image generation tasks, enhancing and scaling them according to specified dimensions and mode. It supports various operations such as scaling the image to a specified size range, outer and inner fitting, and applying enhancements like binarization thresholding, edge detection, and inpainting based on the image's alpha channel.

# Input types
## Required
- hint_image
    - The hint image to be processed, which can be enhanced and scaled to better suit the image generation task.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]
- image_gen_width
    - The target width of the generated image, used to guide the scaling process.
    - Comfy dtype: INT
    - Python dtype: int
- image_gen_height
    - The target height of the generated image, used to guide the scaling process.
    - Comfy dtype: INT
    - Python dtype: int
- resize_mode
    - The scaling mode to apply, which determines how to adjust the hint image to fit the target size.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: ResizeMode

# Output types
- image
    - The processed hint image, enhanced and scaled according to the specified parameters, ready for image generation.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
