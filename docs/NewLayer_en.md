# Documentation
- Class name: NewLayer
- Category: ♾️Mixlab/Layer
- Output node: False
- Repo Ref: https://github.com/shadowcz007/comfyui-mixlab-nodes.git

The NewLayer node is designed to manipulate and combine image layers based on specific position and scale attributes. It allows the creation of a layered structure where each layer can be positioned and scaled independently according to the provided parameters. The node’s functionality focuses on enhancing visual presentation by precisely controlling the appearance and arrangement of layers, enabling the overlay of multiple images.

# Input types
## Required
- x
- The parameter `x` specifies the horizontal position of the layer within the canvas. It is crucial because it determines the exact placement of the layer from the left side of the canvas, affecting the overall composition.
    - Comfy dtype: INT
    - Python dtype: int
- y
- The parameter `y` defines the vertical position of the layer within the canvas. It is a key factor in determining how the layer aligns from the top of the canvas, affecting the final visual effect.
    - Comfy dtype: INT
    - Python dtype: int
- width
- The parameter `width` sets the width of the layer. It plays an important role in the layer’s scaling, allowing control over the horizontal dimension of the visual content.
    - Comfy dtype: INT
    - Python dtype: int
- height
- The parameter `height` determines the vertical dimension of the layer. It is essential for controlling the layer’s scaling along the vertical axis, influencing the layer’s visual prominence.
    - Comfy dtype: INT
    - Python dtype: int
- z_index
- The parameter `z_index` establishes the stacking order of the layer relative to other layers. A higher value places the layer in front of others, which is vital for managing visibility and depth.
    - Comfy dtype: INT
    - Python dtype: int
- scale_option
- The parameter `scale_option` decides how the layer is scaled. It is important for maintaining aspect ratio or uniformly adjusting the layer’s size, which can significantly alter the visual output.
    - Comfy dtype: COMBO['width', 'height', 'overall']
    - Python dtype: str
- image
- The parameter `image` is the source of the layer’s visual content. It is fundamental because it provides the actual pixels that will be manipulated and displayed within the canvas.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image
- mask
- The optional parameter `mask` can be used to define specific areas of the image that should be visible or modified. It adds complexity to the image manipulation process, allowing creative control over the final output.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor
- layers
- The optional parameter `layers` allows additional existing layers to be included in the composition. This is useful for building or integrating multiple visual elements onto an existing visual structure.
    - Comfy dtype: LAYER
    - Python dtype: List[Dict[str, Union[int, str, torch.Tensor, PIL.Image.Image]]]
- canvas
- The optional parameter `canvas` provides a base image onto which the layers will be placed. It is important for setting the initial visual environment into which new layers will be integrated.
    - Comfy dtype: IMAGE
    - Python dtype: PIL.Image.Image

# Output types
- layers
- The output `layers` is a collection of layer objects representing the final composition of visual elements. It encapsulates the result of the node’s operations, detailing the structure and appearance of the layered image.
    - Comfy dtype: LAYER
    - Python dtype: Tuple[List[Dict[str, Union[int, str, torch.Tensor, PIL.Image.Image]]], ...]

# Usage tips
- Infra type: CPU

# Source code
[View source repository on GitHub](https://github.com/shadowcz007/comfyui-mixlab-nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
