# Documentation
- Class name: NearestSDXLResolution
- Category: math/graphics
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

NearestSDXLResolution node aims to select the supported resolution closest to the input image resolution. It does this by calculating the aspect ratio of the input image, comparing it with a list of supported resolutions, and selecting the resolution with the smallest difference. The function of this node is crucial for ensuring compatibility and optimal display quality in graphics processing applications.

# Input types
## Required
- image
    - The 'image' parameter is crucial as it serves as the input to the node. This is the image whose resolution is to be matched with the supported resolutions. The node's operation entirely depends on this input, as it determines the selection of the nearest supported resolution.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- width
    - The 'width' parameter represents the width of the selected resolution. It is a key output, as it defines the horizontal dimension of the image after the resolution matching process. This output is very important for any subsequent graphics operations that depend on the image size.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The 'height' parameter represents the height of the selected resolution. Similar to the 'width' parameter, it is an important output that determines the vertical dimension of the image for further processing. It ensures that the aspect ratio of the image is maintained after the resolution selection.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
