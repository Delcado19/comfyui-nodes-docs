
# Documentation
- Class name: PoseNode
- Category: AlekPet Nodes/image
- Output node: False

PoseNode is designed to process images to generate their pose representations. It utilizes image processing techniques to convert images into a format suitable for pose analysis, abstracting away the complexity of image manipulation and transformation in pose detection tasks.

# Input types
## Required
- image
    - The 'image' parameter specifies the image file to perform pose detection on. It plays a crucial role in node operation, serving as the primary input source for exporting pose information.
    - Comfy dtype: COMBO[STRING]
    - Python dtype: str

# Output types
- image
    - The output is a tensor representation of the processed image, suitable for further analysis or visualization in pose detection tasks.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor


## Usage tips
- Infra type: `GPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
