
# Documentation
- Class name: Inference_Core_LineartStandardPreprocessor
- Category: ControlNet Preprocessors/Line Extractors
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The Inference_Core_LineartStandardPreprocessor node is an image preprocessing tool specifically designed for line extraction. It enhances line art features by applying Gaussian blur and intensity thresholding, preparing the image for subsequent processing. This node plays a key role in extracting and highlighting line features in images, laying the foundation for further image analysis or processing.

# Input types
## Required
- image
    - This is the input image that requires line extraction processing, serving as the primary data source for node operations. The quality and characteristics of the image will directly affect the line extraction results.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
## Optional
- guassian_sigma
    - This parameter may be used to control the degree of Gaussian blur, affecting line smoothness and detail preservation. The specific function and value range need further confirmation.
    - Comfy dtype: FLOAT
    - Python dtype: unknown
- intensity_threshold
    - This parameter determines the intensity threshold for distinguishing intensity levels. It helps separate line art from the background by setting an intensity threshold. Proper threshold settings can effectively extract clear lines.
    - Comfy dtype: INT
    - Python dtype: int
- resolution
    - Specifies the resolution at which image processing should be performed. This parameter directly affects the detail level of the output line art. Higher resolution can retain more details but may also increase processing time.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- image
    - The output is an enhanced line art feature image, ready for further processing or analysis. This image highlights the line elements from the original image, facilitating subsequent image processing tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
