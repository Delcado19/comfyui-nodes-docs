# Documentation
- Class name: Pixelize
- Category: postprocessing/Effects
- Output node: False
- Repo Ref: https://github.com/EllangoK/ComfyUI-post-processing-nodes

The Pixelize node applies a pixelation effect to the input image, converting it into a stylized, blocky representation. It achieves this by averaging color values within a grid defined by the specified pixel size, reducing the image resolution to a more abstract form. This node is particularly useful for creating retro or artistic looks, as well as for privacy-protecting image processing.

# Input types
## Required
- image
    - The image parameter is the input that the Pixelize node will process. It is critical because it determines the visual content to be pixelated. The node's operation is directly influenced by the image dimensions and pixel data, which are essential for the pixelation effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- pixel_size
    - The pixel_size parameter determines the granularity of the pixelation effect. It specifies the size of each pixel block in the output image. Larger pixel_size values result in more pronounced pixelation, while smaller values retain more detail. This parameter plays a key role in controlling the stylized outcome of the node's processing.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- pixelized_image
    - The pixelized_image output represents the final result of the pixelation process. It is an image where each pixel block has been averaged to create a stylized, pixelated appearance. This output is important because it embodies the node's primary function and the creative intent behind the pixelation effect.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/EllangoK/ComfyUI-post-processing-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
