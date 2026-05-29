# Documentation
- Class name: SineWave
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The SineWave class introduces a method to apply a sine wave distortion effect to images, enhancing their visual appearance by simulating wave-like patterns. This method aims to manipulate image data creatively, introducing artistic changes without compromising the integrity of the original content.

# Input types
## Required
- image
- Image parameters are crucial because they serve as the primary input for node operations. They act as the medium for applying the sine wave effect, and their attributes directly influence the distortion outcome.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- amplitude
- Amplitude determines the intensity of the sine wave effect, controlling the degree of distortion applied to the image. It is a key factor shaping the visual result of the node.
    - Comfy dtype: FLOAT
    - Python dtype: float
- frequency
- Frequency determines the number of sine wave cycles per unit image space, affecting the granularity of the distortion. It plays an important role in defining the appearance of the pattern.
    - Comfy dtype: FLOAT
    - Python dtype: float
- direction
- Direction specifies the orientation of the sine wave effect, horizontal or vertical, which determines how the distortion is applied to the image.
    - Comfy dtype: COMBO['horizontal', 'vertical']
    - Python dtype: str

# Output types
- output_image
- The output image represents the result of applying the sine wave effect to the input image. It embodies the transformation, serving as the node's main output and containing the creative distortion.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: GPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
