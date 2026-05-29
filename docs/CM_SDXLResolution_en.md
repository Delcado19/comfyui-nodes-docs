# Documentation
- Class name: SDXLResolution
- Category: math/graphics
- Output node: False
- Repo Ref: https://github.com/evanspearman/ComfyMath

This node parses a resolution string and converts it to integer width and height values. It ensures graphic output follows specified dimensions, enabling seamless integration of visual elements in the system.

# Input types
## Required
- resolution
    - The resolution parameter is critical because it defines the size of the graphic output. It is expected to be a string in the format 'widthxheight', which the node will then split into separate width and height values.
    - Comfy dtype: str
    - Python dtype: str

# Output types
- width
    - The width output parameter represents the horizontal dimension of the graphic resolution. It matters because it directly affects scaling and layout of visual content in the application or display.
    - Comfy dtype: INT
    - Python dtype: int
- height
    - The height output parameter denotes the vertical dimension of the graphic resolution. It is essential for determining the vertical range of visual content and ensuring proper display formatting.
    - Comfy dtype: INT
    - Python dtype: int

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/evanspearman/ComfyMath)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
