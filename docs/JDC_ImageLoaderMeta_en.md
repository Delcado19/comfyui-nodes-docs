# Documentation
- Class name: LoadImagePathWithMetadata
- Category: image
- Output node: False
- Repo Ref: https://github.com/Jordach/comfy-plasma.git

The LoadImagePathWithMetadata node is designed to load image files and their associated metadata. It handles both local and remote image paths, extracts prompts and negative prompts from various image formats, and returns the image data array, mask, prompt, negative prompt, width, and height.

# Input types
## Required
- image
    - The 'image' parameter is the path to the image file to be processed. This is a critical input, as the node's functionality revolves around loading and manipulating image data from this path. The image can be a local file path or a URL for a remote image.
    - Comfy dtype: STRING
    - Python dtype: str

# Output types
- image
    - The 'image' output is a processed version of the input image, converted into a format suitable for further analysis or manipulation. It is a key component of the node's output, providing the necessary visual data for downstream tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The 'mask' output, if available, is the alpha channel extracted from the image, which can be used for segmentation purposes. It represents the transparency information of the image, particularly useful for applications requiring background isolation.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- prompt
    - The 'prompt' output contains any positive or creative instructions embedded in the image metadata. This information can be used to guide subsequent image processing or generation tasks, providing context for the intended use of the image.
    - Comfy dtype: STRING
    - Python dtype: str
- negative
    - The 'negative' output includes any instructions designed to steer away from certain image features or attributes. This is particularly useful for refining the output of image generation algorithms by specifying what should be avoided.
    - Comfy dtype: STRING
    - Python dtype: str
- width
    - The 'width' output provides the width of the loaded image in pixels, which is fundamental information for understanding the image's dimensions and aspect ratio.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' output gives the height of the loaded image in pixels, complementing the width to provide a complete understanding of the image's dimensions.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/Jordach/comfy-plasma)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
