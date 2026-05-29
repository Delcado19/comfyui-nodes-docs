
# Documentation
- Class name: ImageRGBA2RGB
- Category: 🌌 ReActor
- Output node: False

The ImageRGBA2RGB node is designed to convert images in RGBA (Red, Green, Blue, Alpha) format to RGB format. This conversion process involves removing the alpha channel of the image, effectively converting an image with transparency information into a standard RGB image without transparency.

# Input types
## Required
- image
    - The 'image' parameter represents the input RGBA image that needs to be converted to RGB. This parameter is crucial for the operation of the node, as it directly affects the conversion process and the final RGB image result.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor

# Output types
- image
    - The 'image' output parameter represents the converted RGB image, which is the result after removing the alpha channel of the original RGBA image.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
