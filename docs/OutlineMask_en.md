# Documentation
- Class name: OutlineMask
- Category: ♾️Mixlab/Mask
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The OutlineMask node is designed to manipulate image masks by applying dilation or erosion processes to create outline effects. It enhances the visual distinction of mask edges, which is critical for applications requiring clear and well-defined mask boundaries.

# Input types
## Required
- mask
    - The 'mask' parameter is a fundamental input to the OutlineMask node, representing the original image mask to be processed. It plays a key role in determining the final outline effect, as it defines the shape and content of the initial mask.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- outline_width
    - The 'outline_width' parameter specifies the degree of outline expansion or contraction to be applied to the mask. It is a critical factor in controlling the thickness of the generated outline, thereby affecting the visual impact of the mask edges.
    - Comfy dtype: INT
    - Python dtype: int
- tapered_corners
    - When set to true, the 'tapered_corners' parameter applies a tapering effect to the corners of the mask, creating a more refined and visually appealing outline. This feature enhances the aesthetic quality of the final output.
    - Comfy dtype: BOOLEAN
    - Python dtype: bool

# Output types
- mask
    - The 'mask' output of the OutlineMask node is the processed image mask with the outline effect applied. It is important because it represents the final product of the node's operation, ready for further use or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
