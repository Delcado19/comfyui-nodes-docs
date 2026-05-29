
# Documentation
- Class name: ToImageList
- Category: Bmad/Lists/Make or Intercalate
- Output node: False
- Repo Ref: https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes

The ToImageList node converts a set of images into a standardized list format. This functionality is essential for processing multiple images uniformly, making it easier to operate on, analyze, and apply image processing across the entire image collection.

# Input types
## Required
- inputs_len
    - The 'inputs_len' parameter represents the set of images to be converted into a list. This input is critical to the node's operation, as it determines the image collection that will undergo conversion processing.
    - Comfy dtype: INT
    - Python dtype: List[torch.Tensor]

# Output types
- image
    - The 'image' output is an image list converted from the input collection. This standardized format facilitates further processing and manipulation of the images.
    - Comfy dtype: IMAGE
    - Python dtype: List[torch.Tensor]


## Usage tips
- Infra type: `CPU`
- Common nodes: unknown

## Source code
[View source repository on GitHub](https://github.com/bmad4ever/ComfyUI-Bmad-Custom-Nodes)

*Source code is not embedded in this doc — browse the pack's repository at the link above.*
