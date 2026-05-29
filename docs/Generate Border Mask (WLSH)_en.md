# Documentation
- Class name: WLSH_Generate_Edge_Mask
- Category: WLSH Nodes/inpainting
- Output node: False
- Repo Ref: https://github.com/wallish77/wlsh_nodes

The WLSH_Generate_Edge_Mask node generates an edge mask based on a given direction and image. It creates a mask usable for inpainting tasks, ensuring the masked area aligns with the specified direction, such as 'up', 'down', 'left', or 'right'. This node's functionality is essential for image processing applications requiring selective masking.

# Input types
## Required
- image
    - The image parameter is critical for the node, as it serves as the basis for generating the edge mask. The node processes this image to create a mask corresponding to the specified direction, playing a key role in the node's overall functionality.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- direction
    - The direction parameter determines the direction of the mask to be generated. It is a critical input as it dictates how the mask will be applied to the image, affecting the final result of the inpainting process.
    - Comfy dtype: STRING
    - Python dtype: str
- pixels
    - The pixel parameter specifies the size of the mask edge in pixels, which is an important factor in controlling the extent of the masked area. This parameter directly affects the node's execution and the precision of the generated mask.
    - Comfy dtype: INT
    - Python dtype: int
- overlap
    - The overlap parameter defines the thickness of the mask edge, which is important for ensuring a smooth transition between masked and unmasked areas. It helps improve the quality of inpainting results by preventing abrupt edge transitions.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- mask
    - The output mask is a key result of the node's operation. It represents the area to be processed for inpainting, and its quality and alignment directly impact the final image output.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/wallish77/wlsh_nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
