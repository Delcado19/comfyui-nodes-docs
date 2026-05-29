# Documentation
- Class name: SvgImage
- Category: ♾️Mixlab/Image
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

This node processes SVG images, converting them into tensor format suitable for further manipulation and analysis within neural network frameworks. It emphasizes SVG data conversion and adaptation for integration with deep learning models.

# Input types
## Required
- upload
    - The ‘upload’ parameter is critical to the node's operation; it contains SVG image data and related metadata. It directly affects the node's ability to process and convert SVG to tensors.
    - Comfy dtype: Dict[str, Any]
    - Python dtype: Dict[str, Any]

# Output types
- IMAGE
    - The ‘IMAGE’ output provides a tensor representation of the input SVG image, usable for further processing in deep learning environments.
    - Comfy dtype: Tensor
    - Python dtype: torch.Tensor
- layers
    - The ‘layers’ output contains individual components or layers extracted from the SVG data, useful for detailed analysis or manipulation of the image structure.
    - Comfy dtype: List[Any]
    - Python dtype: List[Any]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
