
# Documentation
- Class name: ReActorImageDublicator
- Category: 🌌 ReActor
- Output node: False

The ReActorImageDublicator node is part of the ReActor suite, designed to create copies of an image, possibly in a list format. This functionality is essential for operations that require multiple instances of the same image for processing or analysis, thereby enhancing the workflow in image manipulation and augmentation tasks.

# Input types
## Required
- image
    - Specify the original image to duplicate.
    - Comfy dtype: IMAGE
    - Python dtype: torch.Tensor
- count
    - Determine the number of copies to create from the original image.
    - Comfy dtype: INT
    - Python dtype: int

# Output types
- IMAGES
    - Return a list of duplicated images based on the specified number.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown


## Source code
```python
# Built-in or C extension class, unable to automatically detect source code
```
