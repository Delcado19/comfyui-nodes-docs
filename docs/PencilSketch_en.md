# Documentation
- Class name: PencilSketch
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

PencilSketch node aims to convert an image into a pencil sketch style. It applies a series of image processing techniques to achieve a stylized representation that mimics the appearance of a hand-drawn sketch.

# Input types
## Required
- image
    - The image parameter is crucial for the PencilSketch node because it is the input that will be converted into a pencil sketch. It affects the node's execution by determining the content and quality of the output sketch.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- blur_radius
    - The blur radius parameter controls the amount of blur applied to the image before the sketch effect is applied. It plays an important role in determining the smoothness of the final sketch.
    - Comfy dtype: INT
    - Python dtype: int
- sharpen_alpha
    - The sharpen_alpha parameter adjusts the intensity of the sharpening effect applied to the final image. It is important for fine-tuning the contrast and clarity of the pencil sketch.
    - Comfy dtype: FLOAT
    - Python dtype: float

# Output types
- output_image
    - output_image is the result of applying the pencil sketch effect to the input image. It represents the final stylized image in pencil sketch form.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
