
# Documentation
- Class name: AlphaMatte
- Category: image/filters
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

The AlphaMatte node is an advanced tool specifically for image processing, primarily used to extract and optimize the alpha matte (transparency channel) of an image. It utilizes deep learning technology, and by analyzing the image and its alpha trimap (trimap), it can accurately separate foreground from background, performing well even in complex scenes. This node has the ability to perform pre-blurring, adjust black and white points, and conduct iterative optimization to achieve high-quality matte extraction.

# Input types
## Required
- images
    - The input image from which to extract the alpha matte. This parameter is crucial as it directly affects the quality and accuracy of the matte extraction process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- alpha_trimap
    - A trimap that provides an initial guess for foreground, background, and unknown regions, guiding the matte extraction process.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- preblur
    - Specifies the amount of pre-blur to apply to the trimap, used to smooth hard edges and improve matte extraction.
    - Comfy dtype: INT
    - Python dtype: int
- blackpoint
    - The black point value for adjusting the contrast of the trimap, helps to separate foreground and background more clearly.
    - Comfy dtype: FLOAT
    - Python dtype: float
- whitepoint
    - The white point value for adjusting the brightness of the trimap, enhances the distinction between foreground and background areas.
    - Comfy dtype: FLOAT
    - Python dtype: float
- max_iterations
    - The maximum number of iterations allowed for optimizing the alpha matte, ensuring a balance between quality and computational efficiency.
    - Comfy dtype: INT
    - Python dtype: int
- estimate_fg
    - A flag indicating whether to also estimate the foreground in addition to the alpha matte, providing more complete separation of image elements.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- alpha
    - The extracted alpha matte, representing the transparency levels of the foreground elements in the image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- fg
    - The estimated image foreground obtained when the estimate_fg flag is true.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- bg
    - The estimated image background, suitable for compositing or further processing.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/comfyanonymous/ComfyUI)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
