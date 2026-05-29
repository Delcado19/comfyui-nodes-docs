
# Documentation
- Class name: PainterNode
- Category: AlekPet Nodes/image
- Output node: False
- Repo Ref: https://github.com/comfyanonymous/ComfyUI

PainterNode is designed for processing images, primarily by applying transformations and generating corresponding masks where applicable. It focuses on preparing images for further processing or visualization, including adjusting image format, orientation, and scale.

# Input types
## Required
- image
    - The image parameter specifies the image file to be processed. It is critical for determining the input image that will undergo transformations and potential mask generation, directly affecting the node's output.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output image represents a transformed and appropriately formatted version of the input image, ready for further processing or visualization.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- mask
    - The output mask provides a mask associated with the input image, useful for various image processing tasks requiring differentiation between foreground and background regions.
    - Comfy dtype: MASK
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes:
    - [Image Batch](../../was-node-suite-comfyui/Nodes/Image Batch.md)
    - [ImageScale](../../Comfy/Nodes/ImageScale.md)



## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
