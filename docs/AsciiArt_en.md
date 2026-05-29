# Documentation
- Class name: AsciiArt
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The AsciiArt node applies an ASCII art effect to the input image, converting it into a stylized representation using a predefined character set. It leverages pixel intensity to select appropriate characters, creating a textual representation of the image content.

# Input types
## Required
- image
    - The input image to apply the ASCII art effect to. It should be a tensor representing image data.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor
- char_size
    - The character size used in the ASCII art representation. This parameter determines the granularity of the ASCII art effect.
    - Comfy dtype: int
    - Python dtype: int
- font_size
    - The font size for the ASCII art characters. This affects the appearance of the final ASCII art image.
    - Comfy dtype: int
    - Python dtype: int

# Output types
- result
    - The resulting image after applying the ASCII art effect. It is a tensor representing the stylized ASCII art version of the input image.
    - Comfy dtype: torch.Tensor
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
